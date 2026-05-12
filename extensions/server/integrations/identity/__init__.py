"""Identity system integration for server extension
 
Registers routes, middleware when identity package available.
"""

from typing import TYPE_CHECKING
from optorch.logging import get_logger

from extensions.server.integrations.identity.dependencies import (
    get_identity,
    get_current_user,
    get_optional_user,
    require_permission,
)

if TYPE_CHECKING:
    from extensions.server.manager import ServerManager
    from optorch.config import ConfigManager

logger = get_logger(__name__)


__all__ = [
    "IdentityIntegration",
    "get_identity",
    "get_current_user",
    "get_optional_user",
    "require_permission",
]


class IdentityIntegration:
    """Server integration for optorch.identity package"""
    
    @staticmethod
    def register_routes(manager: "ServerManager", config: "ConfigManager") -> None:
        """Register all identity routes under /identity prefix"""
        from extensions.server.integrations.identity.routes import (
            auth,
            organizations,
            authz,
            licensing,
            scim,
            protections,
        )
        
        manager.route_manager.register_router("/identity/auth", auth.router, ["Authentication"])
        manager.route_manager.register_router("/identity/organizations", organizations.router, ["Organization"])
        manager.route_manager.register_router("/identity/authz", authz.router, ["Authorization"])
        manager.route_manager.register_router("/identity/licenses", licensing.router, ["Licensing"])
        manager.route_manager.register_router("/identity/scim/v2", scim.router, ["Provisioning"])
        manager.route_manager.register_router("/identity/protections", protections.router, ["Identity"])
    
    @staticmethod
    def register_middleware(manager: "ServerManager", config: "ConfigManager") -> None:
        """Register authentication and authorization middleware"""
        from extensions.server.integrations.identity.middleware import (
            AuthenticationMiddleware,
            AuthorizationMiddleware
        )
        from extensions.server.config import ServerConfig
        
        server_config = ServerConfig(**config.get("optorch.server", {}))
        api_prefix = server_config.api_prefix
        
        extra_public_paths = config.get("optorch.server.identity.public_paths", [])

        manager.middleware_manager.register(
            "identity_authentication", 
            AuthenticationMiddleware, 
            priority=900, 
            api_prefix=api_prefix,
            extra_public_paths=extra_public_paths
        )
        manager.middleware_manager.register("identity_authorization", AuthorizationMiddleware, priority=800)
