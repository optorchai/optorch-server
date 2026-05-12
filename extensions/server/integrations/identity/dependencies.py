"""FastAPI dependencies for identity system"""

from typing import Callable, Optional, TYPE_CHECKING
from fastapi import Depends, Request
from optorch.errors import AuthenticationError, AuthorizationError, HTTPError

if TYPE_CHECKING:
    from optorch.identity.manager import IdentityManager
    from optorch.identity.authentication.models import Individual


async def get_identity(request: Request) -> "IdentityManager":
    """Get IdentityManager from container
    
    Raises 503 instead of 401 for system errors (not auth failures).
    Routes should handle this gracefully or middleware should catch it.
    """
    if not hasattr(request.app.state, "container"):
        raise HTTPError(message="Container not initialized", status_code=503)
    
    container = request.app.state.container
    if not hasattr(container, "identity") or not container.identity:
        raise HTTPError(message="Identity system not initialized", status_code=503)
    
    return container.identity


async def get_current_user(
    request: Request,
    identity: "IdentityManager" = Depends(get_identity)
) -> "Individual":
    """Extract authenticated user from request
    
    Tries all authentication providers in priority order.
    Returns Individual model with current org context.
    
    Raises:
        AuthenticationError: Invalid or missing credentials
    """
    try:
        result = await identity.authn.authenticate(request)
        
        if not result or not result.success or not result.individual:
            raise AuthenticationError("Authentication failed - no user returned", details={"path": str(request.url.path)})
        
        user = result.individual
        identity.context.set_current_user(user.model_dump())
        request.state.user = user
        request.state.org_id = user.current_org_id
        
        return user
    
    except Exception as e:
        raise AuthenticationError("Authentication failed", details={"error": str(e), "path": str(request.url.path)})


def require_permission(resource: str, action: str) -> Callable:
    """Dependency factory - require user has permission
    
    Args:
        resource: Resource type ("workflow", "config", "user", etc.)
        action: Action ("execute", "read", "update", "delete", etc.)
    
    Returns:
        FastAPI dependency function
    
    Usage:
        @router.post("/workflows/{workflow_id}/execute")
        async def execute_workflow(
            workflow_id: str,
            user: Individual = Depends(require_permission("workflow", "execute"))
        ):
            ...
    
    Raises:
        AuthorizationError: User lacks permission
    """
    async def _check_permission(
        request: Request,
        user: "Individual" = Depends(get_current_user),
        identity: "IdentityManager" = Depends(get_identity)
    ) -> "Individual":
        """Check permission - raises if denied"""
        
        user_dict = user.model_dump()
        
        permitted = await identity.check_permission(resource=resource, action=action, user=user_dict)
        
        if not permitted:
            raise AuthorizationError(
                f"Permission denied: {action} on {resource}",
                details={
                    "user_id": user.id,
                    "resource": resource,
                    "action": action,
                    "org_id": user.current_org_id
                }
            )
        
        request.state.required_resource = resource
        request.state.required_action = action
        
        return user
    
    return _check_permission


async def get_optional_user(
    request: Request,
    identity: "IdentityManager" = Depends(get_identity)
) -> Optional["Individual"]:
    """Get user if authenticated, None otherwise
    
    For routes that work with or without authentication.
    """
    try:
        return await get_current_user(request, identity)
    except AuthenticationError:
        return None
