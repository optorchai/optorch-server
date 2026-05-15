"""Server extension self-registration for core HTTP functionality"""

from pathlib import Path
from fastapi.middleware.cors import CORSMiddleware
from extensions.server.middleware_manager import MiddlewareManager
from extensions.server.route_manager import RouteManager
from extensions.server.ui.manager import UIManager
from extensions.server.config import ServerConfig
from optorch.logging import get_logger
from extensions.server.routes import health, chat, admin, sessions, ui, graph, mcp, registries
from extensions.server.routes import config as config_routes
from extensions.server.integrations.tenant_context_middleware import TenantContextMiddleware
from optorch.config import ConfigManager

logger = get_logger(__name__)


class ServerServerInitializer:
    """Server extension registers core middleware and routes"""
    
    @staticmethod
    def register_middleware(manager: MiddlewareManager, config: ConfigManager) -> None:
        """Register CORS and tenant context middleware"""
        server_config = ServerConfig(**config.get("optorch.server", {}))
        
        if server_config.cors.enabled:
            manager.register(
                "cors",
                CORSMiddleware,
                allow_origins=server_config.cors.origins,
                allow_credentials=server_config.cors.credentials,
                allow_methods=server_config.cors.methods,
                allow_headers=server_config.cors.headers,
                priority=1000
            )
            logger.info("CORS middleware enabled")
        
        manager.register("tenant_context", TenantContextMiddleware, priority=850)
        logger.info("Tenant context middleware registered")
    
    @staticmethod
    def register_routes(manager: RouteManager, config: ConfigManager) -> None:
        """Register core server routes"""
        from extensions.server.ui import UIExtensionConfig
        
        manager.register_router("", health.router, ["Health"])
        manager.register_router("", chat.router, ["Chat"])
        manager.register_router("", admin.router, ["Admin"])
        manager.register_router("", config_routes.router, ["Config"])
        manager.register_router("", sessions.router, ["Sessions"])
        manager.register_router("", ui.router, ["UI"])
        manager.register_router("", graph.router, ["Graph"])
        manager.register_router("", mcp.router, ["MCP"])
        manager.register_router("", registries.router, ["Registries"])
        
        logger.info("Core server routes registered")
        
        ui_config = UIExtensionConfig(extension_root=Path(__file__).parent, extension_name="server")
        if ui_config.ui_path.exists():
            manager.register_static(
                url_path=ui_config.ui_route,
                directory=str(ui_config.ui_path),
                name="server-ui-assets",
                capabilities={"admin_ui"}
            )
            logger.info(f"Registered server UI static mount: {ui_config.ui_route} -> {ui_config.ui_path}")
    
    @staticmethod
    def register_backoffice(manager: UIManager, config: ConfigManager) -> None:
        """Register server pages/widgets in backoffice UI"""
        from extensions.server.ui import UIExtensionConfig

        ui_config = UIExtensionConfig(extension_root=Path(__file__).parent, extension_name="server")
        manager.pages.discover(ui_config)
        manager.widgets.discover(ui_config)

        chat_ext_dir = Path(__file__).parent / "ui" / "chat_extensions"
        manager.chat_extensions.register({
            "id": "download-link",
            "name": "Download Link Extension",
            "description": "Renders download buttons for file downloads",
            "version": "1.0.0",
            "source_path": str(chat_ext_dir / "download.js"),
            "author": "OptOrch Team",
            "tags": ["downloads", "files"],
        })
        
        manager.chat_extensions.register({
            "id": "json-table",
            "name": "JSON Table Renderer",
            "description": "Renders flat JSON code blocks as readable tables with a raw JSON toggle",
            "version": "1.0.0",
            "source_path": str(chat_ext_dir / "json-table.js"),
            "author": "OptOrch Team",
            "tags": ["json", "tables", "formatting"],
        })

        logger.info("Server backoffice pages/widgets registered")
