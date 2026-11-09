"""Session management routes"""
from typing import Optional
from fastapi import Path, Query, Depends, HTTPException
from extensions.server.routing import APIRouter, capability
from extensions.server.models.session_delete_response import SessionDeleteResponse
from extensions.server.models.conversation_list_response import ConversationListResponse
from extensions.server.models.conversation_item import ConversationItem
from extensions.server.models.session_messages_response import SessionMessagesResponse
from extensions.server.models.session_resume_response import SessionResumeResponse
from extensions.server.models.session_event_item import SessionEventItem
from extensions.server.models.session_events_response import SessionEventsResponse
from extensions.server.models.message_item import MessageItem
from extensions.server.dependencies import get_orchestrator, get_conversation_history
from extensions.server.integrations.identity.dependencies import require_permission, get_identity
from optorch.identity.manager import IdentityManager
from optorch.estrator import Orchestrator
from optorch.history.conversation_history import ConversationHistory
from optorch.identity.authentication.models import Individual

router = APIRouter()


def _check_org_access(user: Individual, organization_id: Optional[str]) -> None:
    """raise 403 if user's org doesn't match resource org"""
    if organization_id and user.current_org_id != organization_id:
        raise HTTPException(status_code=403, detail="Access denied")


@router.get(
    "/sessions",
    response_model=ConversationListResponse,
    summary="List conversation sessions",
    description="""Returns a paginated list of conversation sessions stored in the database.

Returns all sessions for the user's active organization.
Provide `user_id` to filter by a specific user (admin only). Results are ordered by creation
time descending (newest first).
"""
)
@capability("read_db")
async def list_sessions(
    organization_id: Optional[str] = Query(None),
    user_id: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
    history: ConversationHistory = Depends(get_conversation_history),
    user: Individual = Depends(require_permission("session", "read")),
    identity: IdentityManager = Depends(get_identity),
) -> ConversationListResponse:
    if organization_id is not None:
        _check_org_access(user, organization_id)
    else:
        organization_id = user.current_org_id

    if user_id is not None and user_id != user.id:
        permitted = await identity.check_permission(resource="session", action="read_any", user=user.model_dump())
        if not permitted:
            raise HTTPException(status_code=403, detail="Access denied")

    rows = await history.list(
        organization_id=organization_id,
        user_id=user_id,
        limit=limit,
        offset=offset
    )

    items = [ConversationItem(**row) for row in rows]
    
    return ConversationListResponse(items=items, total=len(items), limit=limit, offset=offset)


@router.get(
    "/sessions/{session_id}/messages",
    response_model=SessionMessagesResponse,
    summary="Get messages for a session",
    description="""Returns messages for the given session, filtered by message layer.

**Layers:**
- `thread` — user/assistant turn messages (default)
- `llm_context` — full LLM context windows sent to the model each turn
- `trace` — internal execution trace messages

Messages are ordered by `turn_number` then `sequence_order` ascending.
"""
)
@capability("read_db")
async def get_session_messages(
    session_id: str = Path(...),
    layer: str = Query("thread"),
    limit: int = Query(200, ge=1, le=1000),
    history: ConversationHistory = Depends(get_conversation_history),
    user: Individual = Depends(require_permission("session", "read")),
) -> SessionMessagesResponse:
    """Get messages for a session by layer"""
    conv = await history.get(session_id=session_id)
    
    if conv is None:
        raise HTTPException(status_code=404, detail=f"Session {session_id} not found")
    
    _check_org_access(user, conv.get("organization_id"))
    
    rows = await history.get_messages(session_id=session_id, layer=layer, limit=limit)
    messages = [MessageItem(**row) for row in rows]
    
    return SessionMessagesResponse(session_id=session_id, layer=layer, messages=messages)


@router.get(
    "/sessions/{session_id}",
    response_model=ConversationItem,
    summary="Get conversation metadata",
    description="""Returns metadata for a single conversation session.

Includes turn count, total cost, identifiers, and timestamps.
Returns 404 if no session with that ID has been persisted.
"""
)
@capability("read_db")
async def get_session(
    session_id: str = Path(...),
    history: ConversationHistory = Depends(get_conversation_history),
    user: Individual = Depends(require_permission("session", "read")),
) -> ConversationItem:
    """Get metadata for a single session"""
    row = await history.get(session_id=session_id)

    if row is None:
        raise HTTPException(status_code=404, detail=f"Session {session_id} not found")
    
    _check_org_access(user, row.get("organization_id"))
    
    return ConversationItem(**row)


@router.get(
    "/sessions/{session_id}/resume",
    response_model=SessionResumeResponse,
    summary="Resume a session",
    description="""Returns everything needed to restore a session in the UI in a single call.

Includes the conversation metadata (turn count, cost, identifiers) and the full thread
message history ordered chronologically. Pass the `session_id` back to `/chat` to continue
the conversation.
"""
)
@capability("read_db")
async def resume_session(
    session_id: str = Path(...),
    history: ConversationHistory = Depends(get_conversation_history),
    user: Individual = Depends(require_permission("session", "read")),
) -> SessionResumeResponse:
    """Return metadata + thread messages in one call"""
    conversation, messages = await history.resume(session_id=session_id)

    if conversation is None:
        return SessionResumeResponse(conversation=None, messages=[])

    _check_org_access(user, conversation.get("organization_id"))

    return SessionResumeResponse(
        conversation=ConversationItem(**conversation),
        messages=[MessageItem(**m) for m in messages],
    )


@router.get(
    "/sessions/{session_id}/events",
    response_model=SessionEventsResponse,
    summary="Get persisted events for a session",
    description="""Returns the recorded analytics events for a session, ordered chronologically.

Used to restore companion widget state (costs, tool calls, logs, errors, stream events)
when resuming a previous session. Excludes auth/authorization events.
"""
)
@capability("read_db")
async def get_session_events(
    session_id: str = Path(...),
    limit: int = Query(500, ge=1, le=2000),
    history: ConversationHistory = Depends(get_conversation_history),
    user: Individual = Depends(require_permission("session", "read")),
) -> SessionEventsResponse:
    conv = await history.get(session_id=session_id)

    if conv is not None:
        _check_org_access(user, conv.get("organization_id"))

    rows = await history.get_events(session_id=session_id, limit=limit) if conv is not None else []

    return SessionEventsResponse(
        session_id=session_id,
        events=[SessionEventItem(**row) for row in rows],
    )


@router.delete(
    "/sessions/{session_id}",
    response_model=SessionDeleteResponse,
    summary="Delete conversation session",
    description="""Delete a conversation session and clean up all associated resources.

Removes:
- All messages and LLM context refs from the archive
- Session state and in-memory context
- Temporary files and downloads created during the session

Use this to:
- Clean up after completed conversations
- Free up resources for long-running sessions
- Implement GDPR/data deletion requirements
- Reset a conversation to start fresh
"""
)
@capability("read_db")
async def delete_session(
    session_id: str = Path(..., description="Unique identifier of the conversation session to delete"),
    orchestrator: Orchestrator = Depends(get_orchestrator),
    history: ConversationHistory = Depends(get_conversation_history),
    user: Individual = Depends(require_permission("session", "delete")),
) -> SessionDeleteResponse:
    row = await history.get(session_id=session_id)
    
    if row is not None:
        _check_org_access(user, row.get("organization_id"))

    if orchestrator.container.session_manager:
        await orchestrator.container.session_manager.delete(session_id)

    await history.delete(session_id=session_id)

    return SessionDeleteResponse(success=True, message=f"Session {session_id} deleted")
