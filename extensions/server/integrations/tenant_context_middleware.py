"""tenant context propagation middleware for distributed deployments

reads X-Organization-ID header for service-to-service calls
sets ambient context so storage.query() auto-filters
works alongside AuthenticationMiddleware (user auth) or independently (service auth)
"""

from typing import Any
from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from optorch.logging import get_logger
from optorch.identity.context import IdentityContext
from optorch.tenant_context import TenantContext

logger = get_logger(__name__)


class TenantContextMiddleware(BaseHTTPMiddleware):
    """propagate organization context from service-to-service headers
    
    priority:
        1. request.state.org_id (set by AuthenticationMiddleware from user JWT)
        2. X-Organization-ID header (service-to-service calls)
        3. None (no tenant context)
    
    application_id priority:
        1. X-Application-ID header (set by calling client)
        2. default_application_id config (server.application_id in optorch.yaml)
    
    use cases:
        - analytics service called by main server
        - notifications service processing events
        - distributed workflow nodes executing remotely
    
    calling service example:
        headers = {"X-Organization-ID": org_id, "X-Application-ID": "server-ui"}
        response = await httpx.get("http://analytics/cost", headers=headers)
    """

    def __init__(self, app: Any, default_application_id: str = "orchestrator", **kwargs: Any):
        super().__init__(app, **kwargs)
        self.default_application_id = default_application_id

    async def dispatch(self, request: Request, call_next):
        """set tenant context from header if not already set by auth"""
        
        org_id = None
        
        if hasattr(request.state, "org_id") and request.state.org_id:
            org_id = request.state.org_id
            logger.debug(f"tenant context from auth: {org_id}")
        
        elif "x-organization-id" in request.headers:
            org_id = request.headers.get("x-organization-id")
            logger.debug(f"tenant context from header: {org_id}")
        
        application_id = request.headers.get("x-application-id", self.default_application_id)

        if org_id:
            ctx = IdentityContext()
            ctx.set_current_org(org_id)
            user = getattr(request.state, "user", None)
            user_id = user.id if user is not None else None
            TenantContext.set(application_id=application_id, user_id=user_id, client_id=org_id)
            logger.debug(f"tenant context set: org={org_id} app={application_id} user={user_id}")

        response = await call_next(request)
        return response
