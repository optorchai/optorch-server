"""Chat controller - handles chat requests"""
import asyncio
import json
from optorch.logging import get_logger
from typing import AsyncGenerator
from optorch.estrator import Orchestrator
from extensions.server.services import SessionService, EventService
from extensions.server.models.requests import ChatRequest
from extensions.server.models.events import MessageEvent, ErrorEvent
from optorch.llm.lifecycle.context_factory import LLMContextFactory
from optorch.llm.lifecycle.hooks import LLMLifecycleHook
from optorch.utils.json_encoder import DecimalEncoder
from optorch.errors import error_context, ConfigurationError

logger = get_logger(__name__)


class ChatController:
    """Chat operations controller"""
    
    def __init__(
        self,
        orchestrator: Orchestrator,
        session_service: SessionService,
        event_service: EventService
    ):
        self.orchestrator = orchestrator
        self.session = session_service
        self.events = event_service
    
    @error_context(component="api", phase="stream_chat")
    async def stream_chat(self, request: ChatRequest) -> AsyncGenerator[str, None]:
        """Stream chat response via SSE - streams actual LLM content chunks"""
        try:
            self.events.clear()
            collector = self.events.create_collector()
            
            if not self.orchestrator:
                raise ConfigurationError("Orchestrator not initialized")
            
            session_manager = self.orchestrator.container.session_manager
            if not session_manager:
                raise ConfigurationError("SessionManager not initialized")
            
            event_emitter = self.orchestrator.container.event_emitter
            if not event_emitter:
                raise ConfigurationError("EventEmitter not initialized")
            
            self.events.enable_streaming(collector, event_emitter)
            lifecycle_complete = asyncio.Future()
            
            async def on_lifecycle_complete():
                """callback fired when lifecycle finalize completes"""
                if not lifecycle_complete.done():
                    lifecycle_complete.set_result(True)
            
            callback_tag = f"chat_controller_{request.session_id}"
            LLMContextFactory.register.user_callback(LLMLifecycleHook.FINALIZE, on_lifecycle_complete, callback_tag)
            
            state_data = {
                "session_id": request.session_id,
                "user_message": request.message,
                "suggestions": request.suggestions or False
            }
            
            orchestration_task = asyncio.create_task(
                self.orchestrator.run(state_data, tone=request.tone)  # type: ignore[arg-type]
            )
            
            from optorch.state.streaming_state import StreamingState
            full_response = []
            result = None
            
            while not orchestration_task.done() or result is None:
                event = None
                if self.events.event_queue and not self.events.event_queue.empty():
                    try:
                        event = self.events.event_queue.get_nowait()
                    except asyncio.QueueEmpty:
                        pass
                
                if event:
                    payload = json.dumps(event, cls=DecimalEncoder)
                    yield f"data: {payload}\n\n"
                
                if orchestration_task.done() and result is None:
                    result = orchestration_task.result()
                    
                    if isinstance(result, StreamingState) and hasattr(result, 'stream') and result.stream:
                        if result.stream:
                            async for chunk in result.stream:
                                full_response.append(chunk)
                                chunk_event = {"type": "message", "role": "assistant", "content": chunk}
                                yield f"data: {json.dumps(chunk_event)}\n\n"
                                
                                while True:
                                    event = await self.events.get_event(timeout=0.001)
                                    if not event:
                                        break
                                    payload = json.dumps(event, cls=DecimalEncoder)
                                    yield f"data: {payload}\n\n"
                        
                        await lifecycle_complete
                        
                        finalize_events = []
                        while True:
                            event = await self.events.get_event(timeout=0.05)
                            if not event:
                                break
                            finalize_events.append(event)
                            payload = json.dumps(event, cls=DecimalEncoder)
                            yield f"data: {payload}\n\n"
                        
                        complete_event = {"type": "message.complete"}
                        yield f"data: {json.dumps(complete_event)}\n\n"
                
                await asyncio.sleep(0)
            
            while True:
                event = await self.events.get_event(timeout=0.01)
                if not event:
                    break
                payload = json.dumps(event, cls=DecimalEncoder)
                yield f"data: {payload}\n\n"
            
            self.events.disable_streaming()
            
            LLMContextFactory.clear.user_callback(callback_tag)
            
        except Exception as e:
            logger.error(f"Chat stream error: {e}", exc_info=True)
            error_event = ErrorEvent(message=str(e))
            yield f"data: {error_event.model_dump_json()}\n\n"

            if 'callback_tag' in locals():
                LLMContextFactory.clear.user_callback(callback_tag)
    
    def _extract_response(self, result) -> str:
        """Extract response text from result"""
        if not result:
            return "No response generated"
        
        if hasattr(result, 'response'):
            return result.response or "No response generated"
        elif hasattr(result, 'get'):
            return result.get("response") or "No response generated"
        
        logger.warning(f"No response field in result: {result}")
        return "No response generated"
