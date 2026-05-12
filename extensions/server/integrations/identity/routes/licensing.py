"""Licensing routes - /identity/licenses/*"""

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Dict, Any, Optional
from extensions.server.integrations.identity.dependencies import (
    get_identity,
    get_current_user,
    require_permission
)

router = APIRouter()


class ValidateLicenseRequest(BaseModel):
    """License validation request"""
    feature: str
    action: str = "use"


class ValidateLicenseResponse(BaseModel):
    """License validation response"""
    permitted: bool
    reason: str
    constraints_met: bool = True
    quota_remaining: Optional[int] = None


@router.post("/validate", response_model=ValidateLicenseResponse)
async def validate_license(
    request_data: ValidateLicenseRequest,
    identity = Depends(get_identity),
    user = Depends(get_current_user)
):
    """POST /identity/licenses/validate - Validate license entitlement
    
    Checks if user's organization license permits feature usage.
    
    Returns:
        Validation result with quota information
    """
    if not user.current_org_id:
        return ValidateLicenseResponse(permitted=False, reason="No active organization", constraints_met=False)
    
    org = await identity.org.get(user.current_org_id)
    
    if not org.license:
        return ValidateLicenseResponse(permitted=False, reason="Organization has no license", constraints_met=False)
    
    result = await identity.license.validate(
        org.license,
        action=request_data.action,
        context={
            "feature": request_data.feature,
            "user": user,
            "org": org
        }
    )
    
    return ValidateLicenseResponse(
        permitted=result.permit,
        reason=result.reason if hasattr(result, "reason") else ("Permitted" if result.permit else "Denied"),
        constraints_met=result.constraints_met if hasattr(result, "constraints_met") else True,
        quota_remaining=result.quota_remaining if hasattr(result, "quota_remaining") else None
    )


@router.get("/current")
async def get_current_license(
    identity = Depends(get_identity),
    user = Depends(get_current_user)
):
    """GET /identity/licenses/current - Get current org's license
    
    Returns organization's license details.
    """
    if not user.current_org_id:
        return {"license": None, "reason": "No active organization"}
    
    org = await identity.org.get(user.current_org_id)
    
    if not org.license:
        return {"license": None, "reason": "Organization has no license"}
    
    return {
        "license": org.license.model_dump(),
        "organization_id": org.id,
        "organization_name": org.name
    }


@router.get("/usage/{feature}")
async def get_feature_usage(
    feature: str,
    identity = Depends(get_identity),
    user = Depends(get_current_user)
):
    """GET /identity/licenses/usage/{feature} - Get feature usage stats
    
    Returns usage statistics for licensed feature.
    """
    if not user.current_org_id:
        return {"error": "No active organization"}
    
    usage = await identity.license.get_usage(org_id=user.current_org_id, feature=feature)
    return usage


@router.post("/register")
async def register_license(
    license_data: Dict[str, Any],
    identity = Depends(get_identity),
    user = Depends(require_permission("license", "update"))
):
    """POST /identity/licenses/register - Register/update organization license
    
    Requires: permission("license", "update")
    
    Updates organization's license.
    """
    if not user.current_org_id:
        return {"error": "No active organization"}
    
    from optorch.identity.licensing.models import License
    license_obj = License(**license_data)
    
    org = await identity.org.get(user.current_org_id)
    org.license = license_obj
    
    await identity.org.update(user.current_org_id, {"license": license_obj.model_dump()})
    
    return {
        "status": "registered",
        "license_uid": license_obj.uid,
        "organization_id": user.current_org_id
    }
