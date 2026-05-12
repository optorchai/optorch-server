"""Session cleanup - logout endpoint"""

from fastapi import APIRouter, Depends, Header
from pydantic import BaseModel
from optorch.identity.manager import IdentityManager
from optorch.identity.authentication.models import Individual
from optorch.logging import get_logger
from extensions.server.integrations.identity.dependencies import get_identity, get_current_user

logger = get_logger(__name__)

router = APIRouter()


class LogoutResponse(BaseModel):
    """logout success response"""
    success: bool
    message: str = "Logged out successfully"


@router.post("/logout", response_model=LogoutResponse)
async def logout(
    authorization: str = Header(...),
    identity: IdentityManager = Depends(get_identity),
    user: Individual = Depends(get_current_user),
):
    """POST /identity/auth/logout - Revoke token and cleanup session
    
    Performs:
    - Token revocation (blacklist)
    - Session deletion from storage
    - Cache invalidation
    
    Returns:
        Success confirmation
    """
    try:
        token = authorization.replace("Bearer ", "") if authorization.startswith("Bearer ") else authorization
        
        if identity.cache_manager:
            import jwt as pyjwt
            decoded = pyjwt.decode(token, options={"verify_signature": False})
            jti = decoded.get("jti")
            exp = decoded.get("exp")
            
            if jti and exp:
                from datetime import datetime
                ttl = int(exp - datetime.now().timestamp())
                if ttl > 0:
                    await identity.cache_manager.set(f"blacklist:{jti}", "1", ttl=ttl)
        
        session_id = getattr(user, "session_id", None)
        if session_id:
            if identity.cache_manager:
                await identity.cache_manager.delete(f"session:{session_id}")
            if identity.storage:
                await identity.storage.query("identity.delete_session", session_id=session_id)
        
        return LogoutResponse(success=True)
        
    except Exception as e:
        logger.error(f"Logout failed: {e}")
        return LogoutResponse(success=False, message=f"Logout failed: {str(e)}")
