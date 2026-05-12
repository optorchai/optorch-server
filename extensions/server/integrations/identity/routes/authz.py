"""Authorization routes - /identity/authz/*"""

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from extensions.server.integrations.identity.dependencies import (
    get_identity,
    get_current_user,
    require_permission
)

router = APIRouter()


class CheckPermissionRequest(BaseModel):
    """Permission check request"""
    resource: str
    action: str


class CheckPermissionResponse(BaseModel):
    """Permission check response"""
    permitted: bool
    reason: str = ""


class PolicyRequest(BaseModel):
    """Create/update policy request"""
    subject: str  # Role or user ID
    resource: str  # Resource pattern (e.g., "workflow:*")
    action: str  # Action (e.g., "execute")
    effect: str = "allow"  # allow | deny


@router.post("/check", response_model=CheckPermissionResponse)
async def check_permission(
    request_data: CheckPermissionRequest,
    identity = Depends(get_identity),
    user = Depends(get_current_user)
):
    """POST /identity/authz/check - Check permission
    
    Returns whether current user has permission without throwing error.
    Use for conditional UI logic.
    """
    permitted = await identity.check_permission(
        resource=request_data.resource,
        action=request_data.action,
        user=user
    )
    
    return CheckPermissionResponse(permitted=permitted, reason="Authorized" if permitted else "Permission denied")


@router.get("/policies")
async def list_policies(
    identity = Depends(get_identity)
):
    """GET /identity/authz/policies - List authorization policies
    
    Requires: permission("policy", "read")
    
    Returns all policies from authorization provider.
    """
    policies = await identity.authz.list_policies()
    
    return {
        "total": len(policies),
        "items": policies
    }


@router.post("/policies")
async def create_policy(
    request_data: PolicyRequest,
    identity = Depends(get_identity)
):
    """POST /identity/authz/policies - Create authorization policy
    
    Requires: permission("policy", "create")
    
    Creates policy in authorization provider (Casbin, OPA, etc.).
    """
    policy = await identity.authz.create_policy(
        subject=request_data.subject,
        resource=request_data.resource,
        action=request_data.action,
        effect=request_data.effect
    )
    
    return policy


@router.delete("/policies/{policy_id}")
async def delete_policy(
    policy_id: str,
    identity = Depends(get_identity)
):
    """DELETE /identity/authz/policies/{policy_id} - Delete policy
    
    Requires: permission("policy", "delete")
    """
    await identity.authz.delete_policy(policy_id)
    return {"status": "deleted", "policy_id": policy_id}


@router.get("/roles")
async def list_roles(
    identity = Depends(get_identity)
):
    """GET /identity/authz/roles - List all roles
    
    Requires: permission("role", "read")
    """
    roles = await identity.authz.list_roles()
    
    return {
        "total": len(roles),
        "items": roles
    }


@router.get("/permissions")
async def list_user_permissions(
    identity = Depends(get_identity),
    user = Depends(get_current_user)
):
    """GET /identity/authz/permissions - List current user's permissions
    
    Returns all permissions granted to user based on roles.
    """
    permissions = await identity.authz.get_user_permissions(user)
    
    return {
        "user_id": user.id,
        "roles": user.roles,
        "permissions": permissions,
        "entitlements": user.entitlements
    }
