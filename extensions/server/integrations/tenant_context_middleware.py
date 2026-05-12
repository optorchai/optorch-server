"""tenant context propagation middleware for distributed deployments

reads X-Organization-ID header for service-to-service calls
sets ambient context so storage.query() auto-filters
works alongside AuthenticationMiddleware (user auth) or independently (service auth)
"""

from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from optorch.logging import get_logger
from optorch.identity.context import IdentityContext

logger = get_logger(__name__)


class TenantContextMiddleware(BaseHTTPMiddleware):
    """propagate organization context from service-to-service headers
    
    priority:
        1. request.state.org_id (set by AuthenticationMiddleware from user JWT)
        2. X-Organization-ID header (service-to-service calls)
        3. None (no tenant context)
    
    use cases:
        - analytics service called by main server
        - notifications service processing events
        - distributed workflow nodes executing remotely
    
    calling service example:
        headers = {"X-Organization-ID": org_id}
        response = await httpx.get("http://analytics/cost", headers=headers)
    
    receiving service:
        - this middleware reads header
        - sets IdentityContext.set_current_org(org_id)
        - storage.query() auto-filters to that org
    """
    
    async def dispatch(self, request: Request, call_next):
        """set tenant context from header if not already set by auth"""
        
        org_id = None
        
        # priority 1: already set by AuthenticationMiddleware
        if hasattr(request.state, "org_id") and request.state.org_id:
            org_id = request.state.org_id
            logger.debug(f"tenant context from auth: {org_id}")
        
        # priority 2: service-to-service header
        elif "x-organization-id" in request.headers:
            org_id = request.headers.get("x-organization-id")
            logger.debug(f"tenant context from header: {org_id}")
        
        # set ambient context if we have org_id
        if org_id:
            ctx = IdentityContext()
            ctx.set_current_org(org_id)
            logger.debug(f"ambient tenant context set: {org_id}")
        
        response = await call_next(request)
        return response
