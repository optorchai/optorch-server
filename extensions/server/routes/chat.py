"""Chat routes"""
from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from extensions.server.models.requests import ChatRequest
from extensions.server.dependencies import get_chat_controller
from extensions.server.controllers.chat_controller import ChatController

router = APIRouter()


@router.post(
    "/chat",
    response_class=StreamingResponse,
    summary="Chat with AI orchestrator",
    description="""Send a message and receive streaming AI responses via Server-Sent Events (SSE).
    
    This is the main conversational endpoint. Submit user messages and receive real-time updates as the
    orchestrator processes the request through multiple AI specialists.
    
    **How it works:**
    1. Send a ChatRequest with your message and session_id
    2. Receive a stream of events showing progress (node transitions, LLM calls, tool executions)
    3. Get the final response message when processing completes
    
    **Stream Event Types:**
    - `node.start` - Specialist node begins processing
    - `llm.complete` - LLM API call finished (includes tokens and cost)
    - `tool.complete` - Tool execution finished (e.g., database query, calculation)
    - `cost.update` - Running cost total updated
    - `message` - Final assistant response text
    - `error` - Error occurred during processing
    
    Perfect for building chat UIs with real-time progress indicators and token/cost tracking.
    """
)
async def chat(request: ChatRequest, controller: ChatController = Depends(get_chat_controller)):
    """
    Chat with Optorch orchestrator
    
    Streams events:
    - node.start: Node execution start
    - llm.complete: LLM invocation complete
    - cost.update: Cost tracking update
    - message: Final assistant response
    - error: Error occurred
    """
    return StreamingResponse(
        controller.stream_chat(request),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no"
        }
    )
