"""Chat controller - handles chat requests"""
import asyncio
import json
from optorch.logging import get_logger
from typing import Any, AsyncGenerator
from optorch.estrator import Orchestrator
from optorch.state.streaming_state import StreamingState
from extensions.server.services import SessionService, EventService
from extensions.server.models.requests import ChatRequest
from extensions.server.models.events import ErrorEvent
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
        """Stream chat response via SSE"""
        try:
            self.events.clear()
            collector = self.events.create_collector()

            if not self.orchestrator:
                raise ConfigurationError("Orchestrator not initialized")
            
            if not self.orchestrator.container.session_manager:
                raise ConfigurationError("SessionManager not initialized")
            
            if not self.orchestrator.container.event_emitter:
                raise ConfigurationError("EventEmitter not initialized")

            self.events.enable_streaming(collector, self.orchestrator.container.event_emitter)

            lifecycle_complete: asyncio.Future[bool] = asyncio.Future()
            callback_tag = f"chat_controller_{request.session_id}"

            async def on_lifecycle_complete() -> None:
                if not lifecycle_complete.done():
                    lifecycle_complete.set_result(True)

            LLMContextFactory.register.user_callback(LLMLifecycleHook.FINALIZE, on_lifecycle_complete, callback_tag)

            orchestration_task = asyncio.create_task(
                self.orchestrator.run(  # type: ignore[arg-type]
                    {
                        "session_id": request.session_id, 
                        "user_message": request.message,
                        "suggestions": request.suggestions or False
                    },
                    tone=request.tone
                )
            )

            full_response: list[str] = []
            result = None

            while not orchestration_task.done() or result is None:
                if self.events.event_queue and not self.events.event_queue.empty():
                    try:
                        event = self.events.event_queue.get_nowait()
                        yield f"data: {json.dumps(event, cls=DecimalEncoder)}\n\n"
                    except asyncio.QueueEmpty:
                        pass

                if orchestration_task.done() and result is None:
                    result = orchestration_task.result()

                await asyncio.sleep(0)

            if isinstance(result, StreamingState) and result.stream:
                async for sse in self._stream_response(result, full_response):
                    yield sse

                await lifecycle_complete

                async for sse in self._drain_events(timeout=0.05):
                    yield sse

                yield f"data: {json.dumps({'type': 'message.complete'})}\n\n"

            async for sse in self._drain_events(timeout=0.01):
                yield sse

            self.events.disable_streaming()
            LLMContextFactory.clear.user_callback(callback_tag)

        except Exception as e:
            logger.error(f"Chat stream error: {e}", exc_info=True)
            try:
                if self.orchestrator and self.orchestrator.container.event_emitter:
                    self.orchestrator.container.event_emitter.emit(
                        "chat.error",
                        {"session_id": request.session_id, "error": str(e), "error_type": type(e).__name__},
                    )
            except Exception:
                pass

            yield f"data: {ErrorEvent(message=str(e)).model_dump_json()}\n\n"

            if "callback_tag" in locals():
                LLMContextFactory.clear.user_callback(callback_tag)

    async def _stream_response(self, result: StreamingState, full_response: list[str]) -> AsyncGenerator[str, None]:
        assert result.stream is not None
        stream = result.stream
        cap_events = getattr(result, "capability_events", None)
        output_queue: asyncio.Queue[tuple[str, Any]] = asyncio.Queue()

        async def _feed_content() -> None:
            try:
                async for chunk in stream:
                    full_response.append(chunk)
                    await output_queue.put(("content", chunk))
            finally:
                await output_queue.put(("done", None))

        async def _feed_caps() -> None:
            if cap_events is None:
                return
            
            async for cap_ev in cap_events:
                await output_queue.put(("cap", cap_ev))

        content_task = asyncio.create_task(_feed_content())
        cap_task = asyncio.create_task(_feed_caps())
        content_done = False

        while not content_done:
            kind, data = await output_queue.get()
            if kind == "done":
                content_done = True
            elif kind == "cap":
                yield f"data: {json.dumps(data, cls=DecimalEncoder)}\n\n"
            elif kind == "content":
                yield f"data: {json.dumps({'type': 'message', 'role': 'assistant', 'content': data})}\n\n"

                async for sse in self._drain_events(timeout=0.001):
                    yield sse

        await asyncio.gather(content_task, cap_task, return_exceptions=True)

        while not output_queue.empty():
            kind, data = output_queue.get_nowait()

            if kind == "cap":
                yield f"data: {json.dumps(data, cls=DecimalEncoder)}\n\n"

    async def _drain_events(self, timeout: float) -> AsyncGenerator[str, None]:
        while True:
            event = await self.events.get_event(timeout=timeout)
            if not event:
                break

            yield f"data: {json.dumps(event, cls=DecimalEncoder)}\n\n"

    def _extract_response(self, result: Any) -> str:
        if not result:
            return "No response generated"
        
        if hasattr(result, "response"):
            return result.response or "No response generated"
        
        if hasattr(result, "get"):
            return result.get("response") or "No response generated"
        
        logger.warning(f"No response field in result: {result}")

        return "No response generated"