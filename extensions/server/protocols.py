"""Protocol for extension server initializers"""

from typing import Protocol, Any, TYPE_CHECKING

from optorch.config.manager import ConfigManager

if TYPE_CHECKING:
    from extensions.server.route_manager import RouteManager
    from extensions.server.middleware_manager import MiddlewareManager
    from extensions.server.lifespan_manager import LifespanManager


class ServerInitializer(Protocol):
    """Extension server component registration contract
    
    All methods optional - extensions implement only what they need.
    Validated at runtime via inspect.signature for parameter correctness.
    """
    
    @staticmethod
    def register_routes(manager: "RouteManager", config: ConfigManager) -> None:
        """Register extension HTTP routes"""
        ...
    
    @staticmethod
    def register_middleware(manager: "MiddlewareManager", config: ConfigManager) -> None:
        """Register extension middleware"""
        ...
    
    @staticmethod
    def register_lifespan(manager: "LifespanManager", config: ConfigManager) -> None:
        """Register startup/shutdown hooks"""
        ...
