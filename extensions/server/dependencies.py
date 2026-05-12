"""Dependency injection for routes - access to orchestrator and services"""

from typing import TYPE_CHECKING, Optional
from fastapi import Request
from optorch.estrator import Orchestrator
from optorch.identity.context import IdentityContext
from extensions.server.ui import UIManager

if TYPE_CHECKING:
    from optorch.storage.manager import StorageManager


def get_orchestrator(request: Request) -> Orchestrator:
    """Get orchestrator instance from app state"""
    return request.app.state.orchestrator


def get_ui_manager(request: Request) -> UIManager:
    """Get UI manager from app state"""
    return request.app.state.ui_manager


def get_storage(request: Request) -> "StorageManager":
    """Get storage manager from app state
    
    Shared storage initialized by server based on read_db/write_db capabilities.
    Also used by analytics extension (integrated or standalone mode).
    """
    return request.app.state.storage


def get_identity_context(request: Request) -> Optional[IdentityContext]:
    """extract identity context from authenticated request
    
    reads from request.state set by AuthenticationMiddleware
    creates request-scoped IdentityContext that populates ambient contextvars
    
    DEPLOYMENT ARCHITECTURES:
    
    monolithic (everything in one process):
        - middleware sets request.state.user once
        - contextvars flow through entire call stack automatically
        - storage.query() reads ambient context - zero manual passing
    
    distributed (analytics/notifications/backoffice on separate servers):
        - TenantContextMiddleware reads X-Organization-ID header (IMPLEMENTED)
        - each service sets its own ambient context from header
        - storage.query() auto-filters to header org_id
        
        calling service:
            headers = {"X-Organization-ID": org_id}
            await httpx.get("http://analytics/cost", headers=headers)
        
        receiving service:
            - TenantContextMiddleware (priority 850) reads header
            - sets IdentityContext.set_current_org(org_id)
            - storage.query() auto-filters
    
    distributed workflow nodes:
        - node execution carries org_id in metadata + headers
        - worker server TenantContextMiddleware sets ambient context
        - node executes with automatic tenant filtering
    
    see: examples/distributed_tenant_context.py for usage patterns
    
    usage:
        from extensions.server.dependencies import get_identity_context
        
        @router.get("/endpoint")
        async def endpoint(storage: StorageManager = Depends(get_storage)):
            # contextvars automatically populated by middleware
            # storage.query() reads from ambient context
            result = await storage.query("query.name")
            return result
    
    returns:
        IdentityContext if user authenticated, None otherwise
    """
    if not hasattr(request.state, "user"):
        return None
    
    ctx = IdentityContext()
    user_dict = request.state.user.__dict__ if hasattr(request.state.user, "__dict__") else request.state.user
    ctx.set_current_user(user_dict)
    
    return ctx


def get_chat_controller(request: Request):
    """Get chat controller with dependencies"""
    from extensions.server.controllers.chat_controller import ChatController
    from extensions.server.services import SessionService, EventService
    
    orchestrator = get_orchestrator(request)
    session_service = SessionService(orchestrator)
    event_service = EventService()
    return ChatController(orchestrator, session_service, event_service)


def get_health_controller(request: Request):
    """Get health controller with dependencies"""
    from extensions.server.controllers.health_controller import HealthController
    from optorch.logging import LoggingManager
    import time
    
    orchestrator = get_orchestrator(request)
    logging_manager = LoggingManager()
    start_time = getattr(request.app.state, 'start_time', time.time())
    version = getattr(request.app.state, 'version', None)
    
    if version is None:
        try:
            from importlib.metadata import version as get_version
            version = get_version('optorch-orchestrator')
        except Exception:
            version = "unknown"
    
    return HealthController(orchestrator, logging_manager, start_time, version)
