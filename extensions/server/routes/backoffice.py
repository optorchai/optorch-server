"""admin UI SPA serving - only when admin_ui capability present"""
from pathlib import Path
from typing import TYPE_CHECKING
from fastapi import Request
from fastapi.responses import FileResponse, HTMLResponse
from extensions.server.routing import APIRouter, capability
from extensions.server.config import ServerConfig
from optorch.logging import get_logger

if TYPE_CHECKING:
    from optorch.config import ConfigManager

logger = get_logger(__name__)


def create_backoffice_router(config_manager: "ConfigManager") -> APIRouter:
    """Factory creates router with config captured in closure"""
    server_config = ServerConfig(**config_manager.get("optorch.server", {}))
    admin_path = Path(__file__).parent.parent / "ui" / "admin"
    router = APIRouter()
    
    not_built_response = HTMLResponse(
        content="<h1>Admin UI not built</h1><p>Run: <code>cd backoffice/server-ui && npm run build</code></p>",
        status_code=503
    )
    
    def inject_config(html: str, request: Request) -> str:
        """inject runtime config and base tag into HTML"""
        api_domain = str(request.base_url).rstrip("/")
        base_path = request.scope.get("root_path", "") or "/"
        if base_path == "/":
            path_parts = str(request.url.path).split("/")
            base_path = f"/{path_parts[1]}" if len(path_parts) > 1 and path_parts[1] else "/"
        
        config_script = f'<script>window.__ADMIN_CONFIG__={{basePath:"{base_path}",apiDomain:"{api_domain}",apiPrefix:"{server_config.api_prefix}"}}</script>'
        base_tag = f'<base href="{base_path}/">'
        return html.replace("<head>", f"<head>{config_script}{base_tag}")
    
    @capability("admin_ui")
    @router.get("/", response_class=HTMLResponse)
    async def serve_admin_root(request: Request):
        """serve admin UI"""
        index_path = admin_path / "index.html"
        if not index_path.exists():
            return not_built_response
        
        html = inject_config(index_path.read_text(), request)
        return HTMLResponse(content=html)
    
    @capability("admin_ui")
    @router.get("/{full_path:path}")
    async def serve_admin_spa(full_path: str, request: Request):
        """serve admin UI SPA with fallback to index.html for client-side routing"""
        requested_file = admin_path / full_path
        if requested_file.exists() and requested_file.is_file():
            return FileResponse(requested_file)
        
        if "." in full_path.split("/")[-1]:
            return HTMLResponse(content="Not Found", status_code=404)
        
        index_path = admin_path / "index.html"
        if not index_path.exists():
            return not_built_response
        
        html = inject_config(index_path.read_text(), request)
        return HTMLResponse(content=html)
    
    return router
