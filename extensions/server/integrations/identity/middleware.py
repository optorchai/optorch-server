"""Authentication and authorization middleware for identity system"""

from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse
from optorch.errors import AuthenticationError, AuthorizationError
from optorch.logging import get_logger

logger = get_logger(__name__)


class AuthenticationMiddleware(BaseHTTPMiddleware):
    """Extract and validate user from request (JWT bearer token)
    
    Sets request.state.user and identity.context for downstream use.
    Public paths bypass authentication.
    """
    
    def __init__(self, app, api_prefix: str = "/api/v1", extra_public_paths: list[str] | None = None):
        super().__init__(app)
        self.api_prefix = api_prefix
        
        # paths without api prefix
        self.base_public_paths = [
            "/health",
            "/docs",
            "/openapi.json",
            "/redoc",
            "/admin",  # admin UI (SPA handles auth internally)
            "/ui/",  # UI static files (web components)
            "/.well-known/",  # well-known URIs (chrome devtools, etc)
        ]
        
        # paths relative to api prefix
        self.api_public_paths = [
            "/identity/auth/login",
            "/identity/auth/register",
            "/identity/auth/refresh",
            "/identity/auth/forgot-password",
            "/identity/auth/reset-password",
            "/identity/auth/oidc/",      # OIDC callbacks
            "/identity/auth/saml/",      # SAML endpoints
            "/service-map",               # service map discovery
        ]
        
        # add extra public paths from config (app-specific)
        if extra_public_paths:
            self.api_public_paths.extend(extra_public_paths)
    
    def _is_public_path(self, path: str) -> bool:
        """Check if path is public (doesn't require auth)"""
        # check base paths
        if any(path.startswith(p) for p in self.base_public_paths):
            return True
        
        # check api-prefixed paths
        for api_path in self.api_public_paths:
            full_path = f"{self.api_prefix}{api_path}"
            if path.startswith(full_path):
                return True
        
        return False
    
    async def dispatch(self, request: Request, call_next):
        """Authenticate user from request"""
        
        if self._is_public_path(request.url.path):
            return await call_next(request)
        
        if not hasattr(request.app.state, "container"):
            logger.error("Container not available in request - denying access")
            return JSONResponse(
                status_code=503,
                content={
                    "error": "Service Unavailable",
                    "detail": "System not initialized",
                    "type": "ConfigurationError"
                }
            )
        
        container = request.app.state.container
        if not hasattr(container, "identity") or not container.identity:
            logger.error("Identity system not initialized - denying access")
            return JSONResponse(
                status_code=503,
                content={
                    "error": "Service Unavailable",
                    "detail": "Authentication system not available",
                    "type": "ConfigurationError"
                }
            )
        
        identity = container.identity
        
        try:
            auth_result = await identity.authn.authenticate(request)
            
            if not auth_result.success or not auth_result.individual:
                raise AuthenticationError(auth_result.error or "Authentication failed")
            
            user = auth_result.individual
            
            identity.context.set_current_user(user)
            if user.current_org_id:
                identity.context.set_current_org(user.current_org_id)
            
            request.state.user = user
            request.state.org_id = user.current_org_id
            
            logger.debug(f"Authenticated user: {user.id}, org: {user.current_org_id}")
        
        except AuthenticationError as e:
            logger.warning(f"Authentication failed: {e}")
            return JSONResponse(
                status_code=401,
                content={
                    "error": "Unauthorized",
                    "detail": str(e),
                    "type": "AuthenticationError"
                }
            )
        
        except Exception as e:
            logger.error(f"Unexpected authentication error: {e}")
            return JSONResponse(
                status_code=401,
                content={
                    "error": "Unauthorized",
                    "detail": "Authentication failed",
                    "type": "AuthenticationError"
                }
            )
        
        response = await call_next(request)
        return response


class AuthorizationMiddleware(BaseHTTPMiddleware):
    """Check permissions for protected routes
    
    Routes decorated with @require_permission set request.state.required_resource/action.
    This middleware enforces those requirements.
    """
    
    async def dispatch(self, request: Request, call_next):
        """Check authorization if required_resource/action set"""
        
        if not hasattr(request.state, "user"):
            return await call_next(request)
        
        if not hasattr(request.app.state, "container"):
            return await call_next(request)
        
        container = request.app.state.container
        if not hasattr(container, "identity") or not container.identity:
            return await call_next(request)
        
        identity = container.identity
        user = request.state.user
        required_resource = getattr(request.state, "required_resource", None)
        required_action = getattr(request.state, "required_action", None)
        
        if required_resource and required_action:
            try:
                permitted = await identity.check_permission(resource=required_resource, action=required_action, user=user)
                
                if not permitted:
                    logger.warning(
                        f"Permission denied: {user.id} -> {required_action} on {required_resource}"
                    )
                    return JSONResponse(
                        status_code=403,
                        content={
                            "error": "Forbidden",
                            "detail": f"Permission denied: {required_action} on {required_resource}",
                            "type": "AuthorizationError"
                        }
                    )
            
            except AuthorizationError as e:
                logger.warning(f"Authorization error: {e}")
                return JSONResponse(
                    status_code=403,
                    content={
                        "error": "Forbidden",
                        "detail": str(e),
                        "type": "AuthorizationError"
                    }
                )
            
            except Exception as e:
                logger.error(f"Unexpected authorization error: {e}")
                return JSONResponse(
                    status_code=403,
                    content={
                        "error": "Forbidden",
                        "detail": "Authorization check failed",
                        "type": "AuthorizationError"
                    }
                )
        
        response = await call_next(request)
        return response
