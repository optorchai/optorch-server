"""Authentication routes - /identity/auth/*"""

from fastapi import APIRouter, Depends, Request
from pydantic import BaseModel
from typing import Optional
from optorch.errors import AuthenticationError, ValidationError
from optorch.logging import get_logger
from optorch.identity.authentication.models import Individual
from extensions.server.integrations.identity.dependencies import get_identity, get_current_user

router = APIRouter()
logger = get_logger(__name__)


class LoginRequest(BaseModel):
    """Login credentials"""
    username: str
    password: str
    org_id: Optional[int] = None


class TokenResponse(BaseModel):
    """JWT token response"""
    access_token: str
    token_type: str = "bearer"
    expires_in: int = 3600
    refresh_token: Optional[str] = None


class RefreshRequest(BaseModel):
    """Refresh token request"""
    refresh_token: str


class RegisterRequest(BaseModel):
    """User registration request"""
    email: str
    password: str
    name: str
    organization_id: Optional[int] = None


class RegisterResponse(BaseModel):
    """User registration response"""
    user_id: str
    email: str
    name: str
    message: str = "Registration successful"


class AcceptInviteRequest(BaseModel):
    """Accept invitation request"""
    token: str
    password: str
    name: Optional[str] = None


class OIDCCallbackRequest(BaseModel):
    """OIDC callback parameters"""
    code: str
    state: Optional[str] = None


class SAMLResponseRequest(BaseModel):
    """SAML ACS response"""
    SAMLResponse: str
    RelayState: Optional[str] = None


class ForgotPasswordRequest(BaseModel):
    """Forgot password request"""
    email: str


class ResetPasswordRequest(BaseModel):
    """Reset password with token"""
    token: str
    new_password: str


class ChangePasswordRequest(BaseModel):
    """Change password for authenticated user"""
    current_password: str
    new_password: str


@router.post("/register", response_model=RegisterResponse)
async def register(
    request_data: RegisterRequest,
    identity = Depends(get_identity)
):
    """POST /identity/auth/register - Self-service user registration
    
    Creates new user account with email/password.
    Requires builtin provider to be enabled.
    
    Returns:
        Created user details
    
    Raises:
        AuthenticationError: Registration not enabled or validation failed
    """
    if not identity.authn.has_provider("builtin"):
        raise AuthenticationError("User registration not enabled", details={"reason": "builtin provider not configured"})
    
    provider = identity.authn.get_provider("builtin")
    
    if not hasattr(provider, 'user_manager'):
        raise AuthenticationError("User registration not available", details={"reason": "user manager not configured"})
    
    user_manager = provider.user_manager
    
    try:
        user_manager.password_manager.validate(request_data.password)
    except Exception as e:
        logger.warning(f"Password validation failed: {e}")
        raise ValidationError(str(e), details={"field": "password"})
    
    try:
        individual = await user_manager.create_individual(
            email=request_data.email,
            password=request_data.password,
            name=request_data.name,
            organization_id=request_data.organization_id or 1,
            send_invite=False
        )
        
        if identity.authn.event_emitter:
            identity.authn.event_emitter.emit("authentication.registered", {
                "user_id": individual.id,
                "email": individual.email,
                "org_id": request_data.organization_id
            })
        
        return RegisterResponse(
            user_id=individual.id,
            email=individual.email,
            name=individual.name,
            message="Registration successful. Please log in."
        )
        
    except ValidationError:
        raise
    except Exception as e:
        logger.error(f"Registration failed: {e}")
        raise AuthenticationError("Registration failed", details={"error": str(e)})


@router.post("/login", response_model=TokenResponse)
async def login(
    request_data: LoginRequest,
    identity = Depends(get_identity)
):
    """POST /identity/auth/login - Authenticate with username/password
    
    Uses builtin authentication provider if enabled.
    
    Returns:
        JWT access token + optional refresh token
    
    Raises:
        AuthenticationError: Invalid credentials
    """
    if not identity.authn.has_provider("builtin"):
        raise AuthenticationError(
            "Builtin authentication not enabled",
            details={"available_providers": identity.authn.provider_names()}
        )
    
    provider = identity.authn.get_provider("builtin")
    
    class CredRequest:
        def __init__(self, data: dict[str, str]):
            self._data = data
        
        async def json(self) -> dict[str, str]:
            return self._data
    
    result = await provider.authenticate(CredRequest({
        "username": request_data.username,
        "password": request_data.password
    }))
    
    if not result.success or not result.individual:
        raise AuthenticationError("Invalid username or password", details={"username": request_data.username})
    
    individual = result.individual
    
    if request_data.org_id:
        membership = await identity.org.get_membership(individual.id, request_data.org_id)
        if not membership:
            raise AuthenticationError(
                "User not member of organization",
                details={
                    "user_id": individual.id,
                    "org_id": request_data.org_id
                }
            )
        
        individual.current_org_id = request_data.org_id
        individual.roles = membership.roles
    elif not individual.current_org_id:
        memberships = await identity.org.list_memberships(individual.id)
        if memberships:
            individual.current_org_id = str(memberships[0].organization_id)
            individual.roles = memberships[0].roles
    
    token_pair = await identity.authn.issue_token(individual, include_refresh_token=True)
    
    return TokenResponse(
        access_token=token_pair.access_token,
        token_type="bearer",
        expires_in=token_pair.expires_in,
        refresh_token=token_pair.refresh_token
    )


@router.post("/logout")
async def logout(
    request: Request,
    user = Depends(get_current_user),
    identity = Depends(get_identity)
):
    """POST /identity/auth/logout - Invalidate current token and session
    
    Logs out user by:
    1. Invalidating any active sessions
    2. Revoking refresh tokens (if tracked)
    3. Emitting logout event
    
    Returns:
        Success message
    """
    # delete session if exists
    session_id = request.headers.get("X-Session-ID")
    if session_id and identity.storage:
        try:
            await identity.storage.query("identity.delete_session", session_id=session_id)
        except Exception as e:
            logger.warning(f"Failed to delete session: {e}")
    
    if identity.authn.event_emitter:
        identity.authn.event_emitter.emit("authentication.logout", {
            "user_id": user.id,
            "org_id": user.current_org_id,
            "session_id": session_id
        })
    
    return {"status": "logged_out", "user_id": user.id}


@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(
    request_data: RefreshRequest,
    identity = Depends(get_identity)
):
    """POST /identity/auth/refresh - Refresh access token
    
    Uses refresh token to issue new access token.
    
    Returns:
        New JWT access token
    
    Raises:
        AuthenticationError: Invalid refresh token
    """
    try:
        individual = await identity.authn.validate_refresh_token(request_data.refresh_token)
    except Exception as e:
        raise AuthenticationError(
            "Invalid refresh token",
            details={"error": str(e)}
        )
    
    token_pair = await identity.authn.issue_token(individual, include_refresh_token=True)
    
    return TokenResponse(
        access_token=token_pair.access_token,
        token_type="bearer",
        expires_in=token_pair.expires_in,
        refresh_token=token_pair.refresh_token
    )


@router.get("/me")
async def get_current_user_info(
    user = Depends(get_current_user),
    identity = Depends(get_identity)
):
    """GET /identity/auth/me - Get current user info
    
    Returns authenticated user's profile.
    """
    org = None
    if user.current_org_id:
        org = await identity.org.get(user.current_org_id)
    
    return {
        "id": user.id,
        "email": user.email,
        "name": user.name,
        "current_org_id": user.current_org_id,
        "roles": user.roles,
        "entitlements": user.entitlements,
        "organization": org.model_dump() if org else None
    }


@router.post("/accept-invite", response_model=TokenResponse)
async def accept_invite(
    request_data: AcceptInviteRequest,
    identity = Depends(get_identity)
):
    """POST /identity/auth/accept-invite - Accept organization invitation
    
    User accepts invite by:
    1. Validating invite token
    2. Setting password
    3. Activating account
    
    Returns:
        JWT access token to log user in automatically
    
    Raises:
        AuthenticationError: Invalid/expired token
    """
    if not identity.storage:
        raise AuthenticationError("Invite system not configured")
    
    token_data = await identity.storage.query("identity.get_invite_token", token=request_data.token)
    
    if not token_data or not token_data.get("valid"):
        raise AuthenticationError("Invalid or expired invite token", details={"token": request_data.token[:10]})
    
    email = token_data["email"]
    org_id = token_data["organization_id"]
    roles = token_data.get("roles", [])
    
    try:
        individual_data = await identity.storage.query("identity.get_individual_by_email", email=email)
        
        if individual_data:
            individual_id = individual_data["id"]
        else:
            if not identity.authn.has_provider("builtin"):
                raise AuthenticationError("User creation not enabled")
            
            provider = identity.authn.get_provider("builtin")
            if not hasattr(provider, 'user_manager'):
                raise AuthenticationError("User manager not configured")
            
            user_manager = provider.user_manager
            user_manager.password_manager.validate(request_data.password)
            
            individual = await user_manager.create_individual(
                email=email,
                password=request_data.password,
                name=request_data.name or email.split("@")[0],
                organization_id=org_id,
                send_invite=False
            )
            individual_id = individual.id
        
        await identity.storage.query("identity.invalidate_invite_token", token=request_data.token)
        
        membership = await identity.org.get_membership(individual_id, org_id)
        if not membership:
            await identity.storage.query(
                "identity.create_membership",
                individual_id=individual_id,
                organization_id=org_id,
                roles=roles or ["member"]
            )
        
        individual = Individual(
            id=individual_id,
            email=email,
            name=request_data.name or email.split("@")[0],
            current_org_id=org_id,
            roles=roles or ["member"]
        )
        
        token_pair = await identity.authn.issue_token(individual, include_refresh_token=True)
        
        if identity.authn.event_emitter:
            identity.authn.event_emitter.emit("authentication.invite_accepted", {
                "user_id": individual_id,
                "email": email,
                "org_id": org_id
            })
        
        return TokenResponse(
            access_token=token_pair.access_token,
            token_type="bearer",
            expires_in=token_pair.expires_in,
            refresh_token=token_pair.refresh_token
        )
        
    except Exception as e:
        logger.error(f"Accept invite failed: {e}")
        raise AuthenticationError("Failed to accept invitation", details={"error": str(e)})


@router.get("/oidc/callback", response_model=TokenResponse)
@router.post("/oidc/callback", response_model=TokenResponse)
async def oidc_callback(
    request: Request,
    identity = Depends(get_identity)
):
    """GET/POST /identity/auth/oidc/callback - OIDC provider callback
    
    Handles OAuth 2.0 authorization code flow callback.
    Exchanges code for tokens and creates/updates user.
    
    Returns:
        JWT access token
    
    Raises:
        AuthenticationError: Invalid code or OIDC not enabled
    """
    if not identity.authn.has_provider("oidc"):
        raise AuthenticationError("OIDC authentication not enabled")
    
    provider = identity.authn.get_provider("oidc")
    
    result = await provider.authenticate(request)
    
    if not result.success or not result.individual:
        raise AuthenticationError(result.error or "OIDC authentication failed", details={"provider": "oidc"})
    
    individual = result.individual
    token_pair = await identity.authn.issue_token(individual, include_refresh_token=True)
    
    return TokenResponse(
        access_token=token_pair.access_token,
        token_type="bearer",
        expires_in=token_pair.expires_in,
        refresh_token=token_pair.refresh_token
    )


@router.post("/saml/acs")
async def saml_acs(
    request: Request,
    identity = Depends(get_identity)
):
    """POST /identity/auth/saml/acs - SAML Assertion Consumer Service
    
    Handles SAML 2.0 POST binding response from IdP.
    Validates SAML response and creates/updates user.
    
    Returns:
        JWT access token
    
    Raises:
        AuthenticationError: Invalid SAML response or SAML not enabled
    """
    if not identity.authn.has_provider("saml"):
        raise AuthenticationError("SAML authentication not enabled")
    
    provider = identity.authn.get_provider("saml")
    result = await provider.authenticate(request)
    
    if not result.success or not result.individual:
        raise AuthenticationError(result.error or "SAML authentication failed", details={"provider": "saml"})
    
    individual = result.individual
    token_pair = await identity.authn.issue_token(individual, include_refresh_token=True)
    
    return TokenResponse(
        access_token=token_pair.access_token,
        token_type="bearer",
        expires_in=token_pair.expires_in,
        refresh_token=token_pair.refresh_token
    )


@router.get("/saml/slo")
async def saml_slo(
    request: Request,
    user = Depends(get_current_user),
    identity = Depends(get_identity)
):
    """GET /identity/auth/saml/slo - SAML Single Logout Service
    
    Handles SAML 2.0 logout requests and responses from IdP.
    Processes LogoutRequest from IDP or LogoutResponse from IDP.
    
    Returns:
        Redirect to IDP logout URL or success message
    
    Raises:
        AuthenticationError: Invalid logout request or SAML not enabled
    """
    if not identity.authn.has_provider("saml"):
        raise AuthenticationError("SAML authentication not enabled")
    
    provider = identity.authn.get_provider("saml")
    result = await provider.process_logout(request)
    
    if not result.success:
        raise AuthenticationError(result.error or "SAML logout failed", details={"provider": "saml"})
    
    session_id = request.headers.get("X-Session-ID")
    if session_id and identity.storage:
        try:
            await identity.storage.query("identity.delete_session", session_id=session_id)
        except Exception as e:
            logger.warning(f"Failed to delete session: {e}")
    
    if identity.authn.event_emitter:
        identity.authn.event_emitter.emit("authentication.logout", {
            "user_id": user.id,
            "org_id": user.current_org_id,
            "session_id": session_id,
            "provider": "saml"
        })
    
    metadata = result.metadata or {}
    logout_type = metadata.get("type")
    
    if logout_type == "logout_response":
        from fastapi.responses import RedirectResponse
        logout_url = metadata.get("logout_url")
        if logout_url:
            return RedirectResponse(url=logout_url)
    
    return {"status": "logged_out", "user_id": user.id, "provider": "saml"}


@router.post("/forgot-password")
async def forgot_password(request_data: ForgotPasswordRequest, identity = Depends(get_identity)):
    """POST /identity/auth/forgot-password - Request password reset
    
    Sends password reset email with token.
    Always returns success to prevent email enumeration.
    
    Returns:
        Success message
    """
    if not identity.authn.has_provider("builtin"):
        return {"status": "ok", "message": "If the email exists, a password reset link will be sent"}
    
    provider = identity.authn.get_provider("builtin")
    
    if not hasattr(provider, 'user_manager'):
        return {"status": "ok", "message": "If the email exists, a password reset link will be sent"}
    
    user_manager = provider.user_manager
    
    try:
        user_data = await identity.storage.query("identity.get_individual_by_email", email=request_data.email)
        
        if user_data:
            await user_manager.reset_password_request(email=request_data.email)
            logger.info(f"Password reset requested for {request_data.email}")
        else:
            logger.info(f"Password reset requested for non-existent email: {request_data.email}")
    
    except Exception as e:
        logger.error(f"Password reset failed: {e}")
    
    # Always return success to prevent email enumeration
    return {"status": "ok", "message": "If the email exists, a password reset link will be sent"}


@router.post("/reset-password")
async def reset_password(request_data: ResetPasswordRequest, identity = Depends(get_identity)):
    """POST /identity/auth/reset-password - Reset password with token
    
    Uses token from email to set new password.
    
    Returns:
        Success message
        
    Raises:
        ValidationError: Invalid/expired token or weak password
    """
    if not identity.authn.has_provider("builtin"):
        raise AuthenticationError("Password reset not available")
    
    provider = identity.authn.get_provider("builtin")
    
    if not hasattr(provider, 'user_manager'):
        raise AuthenticationError("User manager not configured")
    
    user_manager = provider.user_manager
    
    try:
        user_manager.password_manager.validate(request_data.new_password)
    except Exception as e:
        logger.warning(f"Password validation failed: {e}")
        raise ValidationError(str(e), details={"field": "new_password"})
    
    try:
        individual = await user_manager.reset_password_confirm(
            token=request_data.token,
            new_password=request_data.new_password
        )
        
        if identity.authn.event_emitter:
            identity.authn.event_emitter.emit("authentication.password_reset", {
                "user_id": individual.id,
                "email": individual.email
            })
        
        return {"status": "ok", "message": "Password reset successfully"}
        
    except ValidationError:
        raise
    except Exception as e:
        logger.error(f"Password reset failed: {e}")
        raise ValidationError("Invalid or expired reset token")


@router.post("/change-password")
async def change_password(
    request_data: ChangePasswordRequest,
    user = Depends(get_current_user),
    identity = Depends(get_identity)
):
    """POST /identity/auth/change-password - Change password (authenticated)
    
    Requires current password for verification.
    
    Returns:
        Success message
        
    Raises:
        AuthenticationError: Invalid current password
        ValidationError: Weak new password
    """
    if not identity.authn.has_provider("builtin"):
        raise AuthenticationError("Password change not available")
    
    provider = identity.authn.get_provider("builtin")
    
    if not hasattr(provider, 'user_manager'):
        raise AuthenticationError("User manager not configured")
    
    user_manager = provider.user_manager
    
    # Verify current password
    user_data = await identity.storage.query("identity.get_individual_by_email", email=user.email)
    
    if not user_data or not user_data.get("password_hash"):
        raise AuthenticationError("Cannot change password for this user")
    
    if not user_manager.password_manager.verify(request_data.current_password, user_data["password_hash"]):
        raise AuthenticationError("Current password is incorrect")
    
    # Validate new password
    try:
        user_manager.password_manager.validate(request_data.new_password)
    except Exception as e:
        logger.warning(f"Password validation failed: {e}")
        raise ValidationError(str(e), details={"field": "new_password"})
    
    # Update password
    new_hash = user_manager.password_manager.hash(request_data.new_password)
    await identity.storage.query("identity.update_individual_password", individual_id=user.id, password_hash=new_hash)
    
    if identity.authn.event_emitter:
        identity.authn.event_emitter.emit("authentication.password_changed", {
            "user_id": user.id,
            "email": user.email
        })
    
    logger.info(f"Password changed for user: {user.email}")
    
    return {"status": "ok", "message": "Password changed successfully"}
