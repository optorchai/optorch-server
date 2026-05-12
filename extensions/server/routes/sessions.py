"""Session management routes"""
from fastapi import APIRouter, Path, Depends
from extensions.server.models.session_delete_response import SessionDeleteResponse
from extensions.server.dependencies import get_orchestrator
from optorch.estrator import Orchestrator

router = APIRouter()


@router.delete(
    "/sessions/{session_id}",
    response_model=SessionDeleteResponse,
    summary="Delete conversation session",
    description="""Delete a conversation session and clean up all associated resources.
    
    Removes:
    - Conversation history and messages
    - Session state and context
    - Temporary files and downloads created during the session
    - Cached data specific to this session
    
    Use this to:
    - Clean up after completed conversations
    - Free up resources for long-running sessions
    - Implement GDPR/data deletion requirements
    - Reset a conversation to start fresh
    
    Returns confirmation with details about what was deleted.
    """
)
async def delete_session(
    session_id: str = Path(..., description="Unique identifier of the conversation session to delete"),
    orchestrator: Orchestrator = Depends(get_orchestrator)
):
    """Delete session and cleanup via registered hooks"""
    if orchestrator.container.session_manager:
        await orchestrator.container.session_manager.delete(session_id)
    
    return SessionDeleteResponse(success=True, message=f"Session {session_id} deleted")
