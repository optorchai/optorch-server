"""protection routes - protection manager API endpoints"""

from fastapi import APIRouter, Depends
from typing import Optional
from pydantic import BaseModel
from extensions.server.integrations.identity.dependencies import (
    get_identity,
    get_current_user,
)
from optorch.identity.manager import IdentityManager
from optorch.identity.authentication.models import Individual
from optorch.errors import AuthorizationError, HTTPError
from optorch.logging import get_logger

logger = get_logger(__name__)

router = APIRouter(prefix="/protections")


class ProtectionCheckRequest(BaseModel):
    """protection check request"""
    resource_type: str
    resource_id: str
    action: str


class ProtectionCheckResponse(BaseModel):
    """protection check response"""
    allowed: bool
    action: Optional[str] = None
    route_to: Optional[str] = None
    form: Optional[dict] = None
    warning: Optional[str] = None


@router.post("/check", response_model=ProtectionCheckResponse)
async def check_protection(
    request: ProtectionCheckRequest,
    identity: IdentityManager = Depends(get_identity),
    user: Individual = Depends(get_current_user),
):
    """check if user can perform action on resource
    
    Returns enforcement result with allowed status and optional actions
    """
    try:
        user_dict = {
            "id": user.id,
            "email": user.email if hasattr(user, "email") else user.id,
            "name": f"{user.given_name} {user.family_name}",
            "current_org_id": getattr(user, "current_org_id", None),
            "roles": getattr(user, "roles", []),
        }

        result = await identity.protection.check(
            resource_type=request.resource_type,
            resource_id=request.resource_id,
            action=request.action,
            user=user_dict,
        )

        return ProtectionCheckResponse(
            allowed=result.allowed,
            action=result.action,
            route_to=result.route_to,
            form=result.form,
            warning=result.warning,
        )

    except AuthorizationError as e:
        logger.warning(f"protection check failed: {e}")
        raise HTTPError(
            str(e),
            status_code=403,
            details=e.details if hasattr(e, 'details') else {}
        )

    except Exception as e:
        logger.error(f"protection check error: {e}")
        raise HTTPError(
            "Internal error during protection check",
            status_code=500,
            details={"error": str(e), "resource_type": request.resource_type}
        )


@router.get("/accessible/{resource_type}")
async def get_accessible_resources(
    resource_type: str,
    action: str,
    identity: IdentityManager = Depends(get_identity),
    user: Individual = Depends(get_current_user),
):
    """get all resources of type that user can access
    
    Args:
        resource_type: type of resource (config, tool, route, workflow)
        action: action to check (read, update, execute, access)
    
    Returns:
        List of accessible resource IDs
    """
    try:
        user_dict = {
            "id": user.id,
            "email": user.email if hasattr(user, "email") else user.id,
            "name": f"{user.given_name} {user.family_name}",
            "current_org_id": getattr(user, "current_org_id", None),
            "roles": getattr(user, "roles", []),
        }

        accessible = await identity.protection.get_accessible_resources(
            resource_type=resource_type, action=action, user=user_dict
        )

        return {"resource_type": resource_type, "action": action, "accessible": accessible}

    except Exception as e:
        logger.error(f"get accessible resources error: {e}")
        raise HTTPError(
            "Internal error fetching accessible resources",
            status_code=500,
            details={"error": str(e), "resource_type": resource_type}
        )
