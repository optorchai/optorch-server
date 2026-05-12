"""Admin routes (authenticated in production)"""
from fastapi import Query, Depends
from fastapi.responses import StreamingResponse
from typing import Optional, AsyncGenerator
import asyncio
import json
from extensions.server.routing import APIRouter, capability
from extensions.server.models.logs_response import LogsResponse
from extensions.server.dependencies import get_health_controller, get_orchestrator
from extensions.server.controllers.health_controller import HealthController
from optorch.estrator import Orchestrator
from optorch.logging import get_logger

logger = get_logger(__name__)
router = APIRouter()


@capability("admin_ui")
@router.get(
    "/admin/logs",
    response_model=LogsResponse,
    summary="Get orchestrator logs",
    description="""Retrieve application logs for debugging and monitoring.
    
    Returns recent log entries with optional filtering by session ID. Useful for:
    - Debugging specific conversation sessions
    - Monitoring system health and performance
    - Troubleshooting errors and unexpected behavior
    - Auditing LLM interactions and tool calls
    
    Note: this endpoint should be authenticated and restricted to administrators.
    """
)
async def get_logs(
    session_id: Optional[str] = Query(None, description="Filter logs to only show entries for a specific conversation session"),
    lines: Optional[int] = Query(500, description="Maximum number of recent log lines to return (default: 500, useful for limiting response size)"),
    health: HealthController = Depends(get_health_controller)
):
    """Get orchestrator logs"""
    return await health.get_logs(session_id=session_id, lines=lines)


@capability("admin_ui")
@router.get(
    "/admin/logs/stream",
    response_class=StreamingResponse,
    summary="Stream logs in real-time",
    description="""Subscribe to live log stream via Server-Sent Events (SSE).
    
    Provides real-time log updates as they occur, ideal for:
    - Live monitoring dashboards
    - Real-time debugging during development
    - Watching specific session execution in progress
    - Building admin consoles with live system visibility
    
    Connection stays open and pushes new log entries as they're generated.
    Optionally filter to a specific session and configure how many historical lines to receive initially.
    """
)
async def stream_logs(
    session_id: Optional[str] = Query(None, description="Optional: only stream logs related to this conversation session ID"),
    initial_lines: int = Query(100, description="Number of historical log lines to send immediately before streaming live updates (default: 100)"),
    health: HealthController = Depends(get_health_controller)
):
    """Stream orchestrator logs in real-time"""
    return StreamingResponse(
        health.stream_logs(session_id=session_id, initial_lines=initial_lines),
        media_type="text/event-stream"
    )


@capability("admin_ui")
@router.get(
    "/admin/events/config",
    response_class=StreamingResponse,
    summary="Stream config reload events",
    description="SSE stream for config.reload events"
)
async def stream_config_events(orchestrator: Orchestrator = Depends(get_orchestrator)):
    """Stream config reload events via SSE"""
    async def event_generator() -> AsyncGenerator[str, None]:
        queue: asyncio.Queue = asyncio.Queue()
        
        class ConfigEventListener:
            def on_event(self, event: dict) -> None:
                if event.get("type") == "config.reload":
                    try:
                        queue.put_nowait(event)
                    except asyncio.QueueFull:
                        pass
        
        listener = ConfigEventListener()
        if orchestrator.container.event_emitter:
            orchestrator.container.event_emitter.register_listener(listener)
        
        try:
            while True:
                try:
                    event = await asyncio.wait_for(queue.get(), timeout=30.0)
                    yield f"event: config.reload\ndata: {json.dumps(event)}\n\n"
                except asyncio.TimeoutError:
                    yield ": keepalive\n\n"
        finally:
            if orchestrator.container.event_emitter:
                orchestrator.container.event_emitter.remove_listener(listener)
    
    return StreamingResponse(event_generator(), media_type="text/event-stream")
