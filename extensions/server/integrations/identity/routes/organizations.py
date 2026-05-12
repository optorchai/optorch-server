from fastapi import APIRouter, Depends, Query
from pydantic import BaseModel
from typing import Optional, List
from optorch.errors import AuthorizationError
from extensions.server.integrations.identity.dependencies import (
    get_identity,
    get_current_user,
    require_permission
)

router = APIRouter()


class CreateOrganizationRequest(BaseModel):
    """Create organization request"""
    name: str
    href: Optional[str] = None
    organization_type: Optional[str] = "Company"
    status: Optional[str] = "active"
    parent_id: Optional[int] = None
    contact: Optional[List[dict]] = None
    characteristic: Optional[List[dict]] = None
    metadata: Optional[dict] = None


class UpdateOrganizationRequest(BaseModel):
    """Update organization request"""
    name: Optional[str] = None
    href: Optional[str] = None
    organization_type: Optional[str] = None
    status: Optional[str] = None
    parent_id: Optional[int] = None
    contact: Optional[List[dict]] = None
    characteristic: Optional[List[dict]] = None
    metadata: Optional[dict] = None


class AddMemberRequest(BaseModel):
    """Add member to organization"""
    individual_id: str
    roles: List[str] = ["member"]


class SwitchOrganizationRequest(BaseModel):
    """Switch active organization"""
    org_id: int


@router.post("")
async def create_organization(
    request_data: CreateOrganizationRequest,
    identity = Depends(get_identity)
):
    """POST /identity/organizations - Create organization
    
    Requires: permission("organization", "create")
    
    Returns:
        Created organization
    """
    from optorch.identity.organization.models import Organization, ContactMedium, OrganizationCharacteristic
    
    org = Organization(
        name=request_data.name,
        href=request_data.href,
        organization_type=request_data.organization_type or "Company",
        status=request_data.status or "active",
        parent_organization_id=request_data.parent_id,
        contact=[ContactMedium(**c) for c in request_data.contact] if request_data.contact else [],
        characteristic=[OrganizationCharacteristic(**c) for c in request_data.characteristic] if request_data.characteristic else [],
        metadata=request_data.metadata or {}
    )
    
    created_org = await identity.org.create(org)
    return created_org.model_dump()


@router.get("/{org_id}")
async def get_organization(
    org_id: int,
    identity = Depends(get_identity),
    user = Depends(get_current_user)
):
    """GET /identity/organizations/{org_id} - Get organization
    
    Returns organization if user is member.
    
    Raises:
        NotFoundError: Organization not found
        AuthorizationError: User not member
    """
    membership = await identity.org.get_membership(user.id, org_id)
    if not membership:
        raise AuthorizationError("Not a member of organization", details={"user_id": user.id, "org_id": org_id})
    
    org = await identity.org.get(org_id)
    if not org:
        raise AuthorizationError("Organization not found", details={"org_id": org_id})
    return org.model_dump()


@router.get("")
async def list_organizations(
    limit: int = Query(100, le=1000),
    offset: int = Query(0, ge=0),
    identity = Depends(get_identity),
    user = Depends(get_current_user)
):
    """GET /identity/organizations - List user's organizations
    
    Returns all organizations user is member of.
    """
    memberships = await identity.org.list_memberships(individual_id=user.id)
    
    orgs = []
    for membership in memberships:
        org = await identity.org.get(membership.organization_id)
        if org is None:
            continue

        orgs.append({
            **org.model_dump(),
            "membership": {
                "roles": membership.roles,
                "status": membership.status,
                "joined_at": membership.joined_at.isoformat()
            }
        })
    
    return {
        "total": len(orgs),
        "items": orgs[offset:offset+limit]
    }


@router.put("/{org_id}")
async def update_organization(
    org_id: int,
    request_data: UpdateOrganizationRequest,
    identity = Depends(get_identity),
    user = Depends(require_permission("organization", "update"))
):
    """PUT /identity/organizations/{org_id} - Update organization
    
    Requires: permission("organization", "update")
    """
    membership = await identity.org.get_membership(user.id, org_id)
    if not membership:
        raise AuthorizationError("Not a member of organization", details={"user_id": user.id, "org_id": org_id})
    
    from optorch.identity.organization.models import ContactMedium, OrganizationCharacteristic, UpdateOrganizationData
    
    updates_dict = request_data.model_dump(exclude_unset=True)
    
    updates = UpdateOrganizationData(
        name=updates_dict.get("name"),
        href=updates_dict.get("href"),
        organization_type=updates_dict.get("organization_type"),
        status=updates_dict.get("status"),
        parent_id=updates_dict.get("parent_id"),
        contact=[ContactMedium(**c) for c in updates_dict["contact"]] if "contact" in updates_dict else None,
        characteristic=[OrganizationCharacteristic(**c) for c in updates_dict["characteristic"]] if "characteristic" in updates_dict else None,
        metadata=updates_dict.get("metadata")
    )
    
    org = await identity.org.update(organization_id=org_id, updates=updates)

    if not org:
        raise AuthorizationError("Organization not found", details={"org_id": org_id})
    
    return org.model_dump()


@router.delete("/{org_id}")
async def delete_organization(
    org_id: int,
    identity = Depends(get_identity)
):
    """DELETE /identity/organizations/{org_id} - Delete organization
    
    Requires: permission("organization", "delete")
    """
    await identity.org.delete(org_id)
    
    return {"status": "deleted", "org_id": org_id}


@router.get("/{org_id}/members")
async def list_members(
    org_id: int,
    limit: int = Query(100, le=1000),
    offset: int = Query(0, ge=0),
    identity = Depends(get_identity),
    user = Depends(get_current_user)
):
    """GET /identity/organizations/{org_id}/members - List members
    
    Returns members if user is member of org.
    """
    membership = await identity.org.get_membership(user.id, org_id)
    if not membership:
        raise AuthorizationError("Not a member of organization", details={"user_id": user.id, "org_id": org_id})
    
    members = await identity.org.get_org_members(org_id)
    
    return {
        "total": len(members),
        "items": [m.model_dump() for m in members[offset:offset+limit]]
    }


@router.post("/{org_id}/members")
async def add_member(
    org_id: int,
    request_data: AddMemberRequest,
    identity = Depends(get_identity)
):
    """POST /identity/organizations/{org_id}/members - Add member
    
    Requires: permission("organization", "manage_members")
    """
    import uuid
    from optorch.identity.organization.models import OrganizationMembership
    
    membership = OrganizationMembership(
        id=str(uuid.uuid4()),
        user_id=request_data.individual_id,
        organization_id=org_id,
        roles=request_data.roles
    )
    
    await identity.org.add_membership(membership)
    
    return membership.model_dump()


@router.delete("/{org_id}/members/{individual_id}")
async def remove_member(
    org_id: int,
    individual_id: str,
    identity = Depends(get_identity)
):
    """DELETE /identity/organizations/{org_id}/members/{individual_id} - Remove member
    
    Requires: permission("organization", "manage_members")
    """
    await identity.org.remove_member(org_id, individual_id)
    return {"status": "removed", "individual_id": individual_id}


@router.post("/switch")
async def switch_organization(
    request_data: SwitchOrganizationRequest,
    identity = Depends(get_identity),
    user = Depends(get_current_user)
):
    """POST /identity/organizations/switch - Switch active organization
    
    Flow:
    1. Verify user is member of target org
    2. Update user.current_org_id
    3. Reload roles from membership
    4. Reload entitlements from org license
    5. Issue new JWT
    
    Returns:
        New JWT with updated org context
    """
    updated_user = await identity.switch_organization(org_id=request_data.org_id, user=user)
    new_token = await identity.authn.issue_token(updated_user)
    
    return {
        "access_token": new_token,
        "token_type": "bearer",
        "current_org_id": updated_user.current_org_id,
        "roles": updated_user.roles,
        "entitlements": updated_user.entitlements
    }
