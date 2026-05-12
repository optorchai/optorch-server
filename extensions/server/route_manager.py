"""Route registration with capability filtering"""

from typing import Sequence, Callable, TYPE_CHECKING, Any
from fastapi import FastAPI, APIRouter
from fastapi.routing import APIRoute
from optorch.logging import get_logger
from optorch.errors.exceptions import HTTPError

if TYPE_CHECKING:
    from extensions.server.profile_manager import ProfileManager

logger = get_logger(__name__)


class RouteManager:
    """Route registration with capability filtering"""
    
    def __init__(self, api_prefix: str = "", profile_manager: "ProfileManager | None" = None):
        self._routers: list[tuple[str, APIRouter, Sequence[str]]] = []
        self._registered_paths: dict[tuple[str, tuple[str, ...]], str] = {}
        self._api_prefix = api_prefix
        self._static_mounts: list[Callable[[FastAPI], None]] = []
        self.profile_manager = profile_manager
    
    def register_router(
        self,
        prefix: str,
        router: Any,
        tags: Sequence[str] | None = None
    ) -> None:
        """Register APIRouter with capability filtering
        
        Routes with @capability decorator are filtered based on current server profile.
        Only routes matching profile capabilities are registered.
        
        Args:
            prefix: URL prefix for router (will be prepended with api_prefix)
            router: APIRouter instance (custom or vanilla FastAPI)
            tags: OpenAPI tags
        """
        tag_list: Sequence[str] = tags or []        
        full_prefix = f"{self._api_prefix}{prefix}" if prefix else self._api_prefix
        ext_name = tag_list[0] if tag_list else "unknown"
        
        if hasattr(router, 'finalize'):
            real_router = router.finalize(self.profile_manager)
            
            if len(real_router.routes) == 0:
                logger.info(f"Skipping router {full_prefix}: all routes filtered by capabilities")
                return
            
            self._routers.append((prefix, real_router, list(tag_list)))
            logger.info(f"Registered router: {full_prefix} ({ext_name}, {len(real_router.routes)} routes)")
            return
        
        self._routers.append((prefix, router, list(tag_list)))
        logger.debug(f"Registered vanilla router: {full_prefix} ({ext_name}, {len(router.routes)} routes)")
    
    def apply_to_app(self, app: FastAPI) -> None:
        """Apply all routers to FastAPI app"""
        for prefix, router, tags in self._routers:
            full_prefix = f"{self._api_prefix}{prefix}" if prefix else self._api_prefix
            route_info = [f"{r.path} {r.methods}" for r in router.routes[:3] if isinstance(r, APIRoute)]
            logger.info(f"Applying router {full_prefix}: {len(router.routes)} routes")
            app.include_router(router, prefix=full_prefix, tags=list(tags))
            logger.debug(f"Applied router: {full_prefix}")
    
    def register_static(
        self,
        url_path: str,
        directory: str,
        name: str = "static",
        capabilities: set[str] | None = None
    ) -> None:
        """Register static file directory
        
        Args:
            url_path: URL path to mount (e.g., "/static")
            directory: Filesystem directory to serve
            name: Mount name for FastAPI
            capabilities: Required capabilities (None = always mount)
        """
        from pathlib import Path
        
        def mount_static(app: FastAPI):
            from fastapi.staticfiles import StaticFiles
            
            dir_path = Path(directory)
            if not dir_path.is_absolute():
                dir_path = Path(__file__).parent.parent.parent / directory
            
            if not dir_path.exists():
                logger.warning(f"Static directory does not exist: {dir_path}")
                return
            
            app.mount(url_path, StaticFiles(directory=str(dir_path)), name=name)
            logger.info(f"Mounted static files: {url_path} → {dir_path}")
        
        mount_static._capabilities = capabilities
        self._static_mounts.append(mount_static)
