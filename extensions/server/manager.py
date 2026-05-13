"""ServerManager - extension discovery and FastAPI app creation"""

from pathlib import Path
from typing import Callable, Awaitable
import importlib
import inspect
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from optorch.config import ConfigManager
from optorch.estrator import Orchestrator
from optorch.errors.exceptions import ConfigurationError, HTTPError
from optorch.logging import get_logger
from extensions.server.middleware_manager import MiddlewareManager
from extensions.server.route_manager import RouteManager
from extensions.server.lifespan_manager import LifespanManager
from extensions.server.ui import UIManager

logger = get_logger(__name__)


class ServerManager:
    """Discovers extensions and builds FastAPI app"""
    
    def __init__(
        self,
        orchestrator_factory: Callable[[], Awaitable[Orchestrator]],
        config_manager: ConfigManager
    ):
        from extensions.server.config import ServerConfig, ProfileCapabilitiesConfig
        from extensions.server.profile_manager import ProfileManager
        
        self.orchestrator_factory = orchestrator_factory
        self.config_manager = config_manager        
        self._server_config = ServerConfig(**config_manager.get("optorch.server", {}))
        profiles_config = config_manager.get("optorch.server.profiles", {})
        
        if self._server_config.capabilities:
            profiles_config["custom"] = set(self._server_config.capabilities)
        
        capabilities_config = ProfileCapabilitiesConfig(**profiles_config)
        
        self.profile_manager = ProfileManager(
            current_profile=self._server_config.profile,
            capabilities_config=capabilities_config
        )
        
        self.middleware_manager = MiddlewareManager()
        self.route_manager = RouteManager(
            api_prefix=self._server_config.api_prefix,
            profile_manager=self.profile_manager
        )
        self.lifespan_manager = LifespanManager()
        self.ui_manager = UIManager(api_prefix=self._server_config.api_prefix)
    
    def discover_extensions(self) -> list[str]:
        """Auto-discover extensions and app with server_initializer.py
        
        Resolves extensions across PEP 420 namespace packages installed
        from sibling repos (editable or regular) so multi-repo setups work.
        """
        base_dir = Path(__file__).parent.parent.parent
        discovered: list[str] = []
        seen: set[str] = set()
        candidate_dirs: list[tuple[str, Path]] = []
        
        # 1. local extensions dir
        extensions_path = Path(self._server_config.extensions_dir)
        if not extensions_path.is_absolute():
            extensions_path = base_dir / extensions_path
        if extensions_path.exists():
            extensions_module = extensions_path.name
            for ext_dir in extensions_path.iterdir():
                if ext_dir.is_dir():
                    candidate_dirs.append((extensions_module, ext_dir))
        
        # 2. live `extensions` namespace package paths (covers regular installs)
        try:
            import extensions as extensions_pkg
            for ns_path in extensions_pkg.__path__:
                ns_dir = Path(ns_path)
                if not ns_dir.exists():
                    continue
                for ext_dir in ns_dir.iterdir():
                    if ext_dir.is_dir():
                        candidate_dirs.append(("extensions", ext_dir))
        except ImportError:
            pass
        
        # 3. setuptools editable installs - pull from finder MAPPING dicts
        import sys
        for mod_name, mod in list(sys.modules.items()):
            if not mod_name.startswith("__editable__"):
                continue
            mapping = getattr(mod, "MAPPING", None)
            if not isinstance(mapping, dict):
                continue
            for fullname, src_path in mapping.items():
                if not fullname.startswith("extensions."):
                    continue
                p = Path(src_path)
                if p.is_dir():
                    candidate_dirs.append(("extensions", p))
        
        for module_prefix, ext_dir in candidate_dirs:
            if ext_dir.name in seen:
                continue
            if (ext_dir / "server_initializer.py").exists():
                discovered.append(f"{module_prefix}.{ext_dir.name}")
                seen.add(ext_dir.name)
        
        app_module = self._server_config.app_dir
        if app_module:
            try:
                importlib.import_module(f"{app_module}.server_initializer")
                discovered.append(app_module)
            except ImportError:
                app_path = Path(app_module)
                if not app_path.is_absolute():
                    app_path = base_dir / app_path
                if (app_path / "server_initializer.py").exists():
                    discovered.append(app_path.name)
        
        return discovered
    
    def _validate_initializer(self, cls: type, ext_path: str) -> bool:
        """Validate initializer method signatures
        
        Checks that methods have exactly ['manager', 'config'] parameters.
        Returns False if invalid, logs warning.
        """
        expected_params = ['manager', 'config']
        
        for method_name in ['register_capabilities', 'register_routes', 'register_middleware', 'register_lifespan', 'register_backoffice']:
            if not hasattr(cls, method_name):
                continue
            
            method = getattr(cls, method_name)
            sig = inspect.signature(method)
            actual_params = list(sig.parameters.keys())
            
            if actual_params != expected_params:
                logger.warning(
                    f"{cls.__name__}.{method_name} has signature {actual_params}, "
                    f"expected {expected_params}. Skipping this method."
                )
                return False
        
        return True
    
    def _register_extension(self, ext_path: str) -> None:
        """Load and register extension initializer
        
        Args:
            ext_path: Import path like 'extensions.prometheus' or 'app'
        
        Raises:
            ConfigurationError: If import fails
        """
        try:
            module = importlib.import_module(f"{ext_path}.server_initializer")
            
            initializer_class = None
            for name in dir(module):
                obj = getattr(module, name)
                if (isinstance(obj, type) and 
                    name.endswith("ServerInitializer") and 
                    obj.__module__ == module.__name__):
                    initializer_class = obj
                    break
            
            if not initializer_class:
                logger.warning(f"No class ending with 'ServerInitializer' found in {ext_path}.server_initializer")
                return
            
            if not self._validate_initializer(initializer_class, ext_path):
                logger.warning(f"Skipping {ext_path} due to invalid signatures")
                return
            
            ext_name = ext_path.split(".")[-1]

            logger.info(f"Registering extension: {ext_name}")
            
            if hasattr(initializer_class, 'register_capabilities'):
                try:
                    initializer_class.register_capabilities(self.profile_manager, self.config_manager)
                except Exception as e:
                    logger.error(f"Capability registration failed for {ext_name}: {e}")
                    raise
            
            if hasattr(initializer_class, 'register_middleware'):
                try:
                    initializer_class.register_middleware(self.middleware_manager, self.config_manager)
                except Exception as e:
                    logger.error(f"Middleware registration failed for {ext_name}: {e}")
                    raise
            
            if hasattr(initializer_class, 'register_routes'):
                try:
                    initializer_class.register_routes(self.route_manager, self.config_manager)
                except Exception as e:
                    logger.error(f"Route registration failed for {ext_name}: {e}")
                    raise
            
            if hasattr(initializer_class, 'register_lifespan'):
                try:
                    initializer_class.register_lifespan(self.lifespan_manager, self.config_manager)
                except Exception as e:
                    logger.error(f"Lifespan registration failed for {ext_name}: {e}")
                    raise
            
            if hasattr(initializer_class, 'register_backoffice'):
                try:
                    initializer_class.register_backoffice(self.ui_manager, self.config_manager)
                except Exception as e:
                    logger.error(f"Backoffice registration failed for {ext_name}: {e}")
                    raise
                    
        except ImportError as e:
            raise ConfigurationError(f"Failed to import {ext_path}.server_initializer: {e}")
    
    def _register_optorch_integrations(self) -> None:
        """Register optorch-level server integrations (identity, prometheus, etc.)"""
        
        try:
            from extensions.server.integrations.identity import IdentityIntegration
            
            logger.info("Identity package detected - registering server integration")
            IdentityIntegration.register_middleware(self, self.config_manager)
            IdentityIntegration.register_routes(self, self.config_manager)
            logger.info("✅ Identity integration registered")
        except ImportError:
            logger.debug("Identity package not installed")
        
        from optorch.prometheus import register_with_server
        
        config = {namespace: self.config_manager.get(namespace) for namespace in self.config_manager._configs.keys()}
        register_with_server(self.middleware_manager, self.route_manager, config)
    
    def _register_docs_ui(self, app: FastAPI) -> None:
        """Register API documentation routes at root level"""
        from extensions.server.routes import docs
        
        app.include_router(docs.router, include_in_schema=False)
        
        scheme = "https" if self._server_config.port == 443 else "http"
        host = self._server_config.host if self._server_config.host != "0.0.0.0" else "localhost"
        default_port = 443 if scheme == "https" else 80
        port_str = "" if self._server_config.port == default_port else f":{self._server_config.port}"
        docs_url = f"{scheme}://{host}{port_str}/docs"
        logger.info(f"API documentation accessible at {docs_url}")
    
    def _register_admin_ui(self, app: FastAPI) -> None:
        """Register admin UI routes with capability filtering"""
        from extensions.server.routes.backoffice import create_backoffice_router
        
        admin_path = self._server_config.admin_ui_path
        
        backoffice_router = create_backoffice_router(self.config_manager)
        
        if hasattr(backoffice_router, 'finalize'):
            admin_router = backoffice_router.finalize(self.profile_manager)
            if len(admin_router.routes) > 0:
                app.include_router(admin_router, prefix=admin_path, include_in_schema=False)
                scheme = "https" if self._server_config.port == 443 else "http"
                host = self._server_config.host if self._server_config.host != "0.0.0.0" else "localhost"
                default_port = 443 if scheme == "https" else 80
                port_str = "" if self._server_config.port == default_port else f":{self._server_config.port}"
                admin_url = f"{scheme}://{host}{port_str}{admin_path}"
                logger.info(f"Admin UI accessible at {admin_url}")
        else:
            app.include_router(backoffice_router, prefix=admin_path, include_in_schema=False)
    
    def create_app(self) -> FastAPI:
        """Create FastAPI app with auto-discovered extensions"""
        self._register_optorch_integrations()        
        extensions = self.discover_extensions()
        logger.info(f"Discovered {len(extensions)} extensions: {', '.join(extensions)}")
        
        for ext in extensions:
            self._register_extension(ext)
        
        self.lifespan_manager.register_startup("orchestrator_init", self._initialize_orchestrator, priority=1000)
        self.lifespan_manager.register_startup("profile_manager_init", self._initialize_profile_manager, priority=900)
        self.lifespan_manager.register_startup("storage_init", self._initialize_storage, priority=850)
        self.lifespan_manager.register_shutdown("orchestrator_cleanup", self._shutdown_orchestrator)
        self.lifespan_manager.register_shutdown("storage_cleanup", self._shutdown_storage)
        
        # Disable default docs - we provide sexy custom /docs route with authentication support
        app = FastAPI(
            title="Optorch API",
            lifespan=self.lifespan_manager.create_lifespan(),
            docs_url=None,
            redoc_url=None
        )
        
        @app.exception_handler(HTTPError)
        async def http_error_handler(request: Request, exc: HTTPError):
            return JSONResponse(status_code=exc.status_code, content={"detail": exc.message})
        
        from optorch.errors import AuthenticationError, AuthorizationError, ValidationError as OptorchValidationError
        
        @app.exception_handler(AuthenticationError)
        async def authentication_error_handler(request: Request, exc: AuthenticationError):
            return JSONResponse(status_code=401, content={"detail": exc.message, "error": exc.details})
        
        @app.exception_handler(AuthorizationError)
        async def authorization_error_handler(request: Request, exc: AuthorizationError):
            return JSONResponse(status_code=403, content={"detail": exc.message, "error": exc.details})
        
        @app.exception_handler(OptorchValidationError)
        async def validation_error_handler(request: Request, exc: OptorchValidationError):
            return JSONResponse(status_code=422, content={"detail": exc.message, "error": exc.details})
        
        import time
        app.state.start_time = time.time()
        try:
            from importlib.metadata import version
            app.state.version = version('optorch-orchestrator')
        except Exception:
            app.state.version = "unknown"
        
        self.middleware_manager.apply_to_app(app)
        
        from extensions.server.routes import servicemap, prompts, secrets
        self.route_manager.register_router("", prompts.router, ["Prompts"])
        self.route_manager.register_router("", secrets.router, ["Secrets"])

        # MUST COME AT THE END to avoid route conflicts
        self.route_manager.register_router("", servicemap.router, ["Micro-Service Distribution"])
        self.route_manager.apply_to_app(app)
        
        self._register_docs_ui(app)
        self._register_admin_ui(app)
        
        if hasattr(self.route_manager, '_static_mounts'):
            mounted = 0
            for mount_fn in self.route_manager._static_mounts:
                required_caps = getattr(mount_fn, '_capabilities', None)
                if required_caps is None or self.profile_manager.has_capability(required_caps):
                    mount_fn(app)
                    mounted += 1
            if mounted > 0:
                logger.debug(f"Registered {mounted} static mounts")
        
        app.state.orchestrator_factory = self.orchestrator_factory
        app.state.config_manager = self.config_manager
        app.state.ui_manager = self.ui_manager
        app.state.profile_manager = self.profile_manager
        
        return app
    
    async def _initialize_profile_manager(self, app: FastAPI) -> None:
        """Profile manager already initialized in __init__, just log it"""
        logger.info(
            f"ProfileManager active: profile={self.profile_manager.current_profile}, "
            f"capabilities={sorted(self.profile_manager.capabilities)}"
        )
    
    async def _initialize_storage(self, app: FastAPI) -> None:
        """Hook server queries onto orchestrator's storage_manager
        
        The orchestrator already builds a StorageManager into its container. Lets piggyback off that
        """
        if not self.profile_manager.has_capability({"read_db", "write_db"}):
            logger.debug("No database capabilities - skipping storage init")
            app.state.storage = None
            return
        
        orchestrator = getattr(app.state, "orchestrator", None)
        storage = getattr(orchestrator.container, "storage_manager", None) if orchestrator else None
        
        if storage is None:
            logger.warning("orchestrator has no storage_manager - server queries unavailable")
            app.state.storage = None
            return
        
        from optorch.storage.types import StorageRole
        storage.config.role = StorageRole.READ_WRITE if self.profile_manager.has_capability("write_db") else StorageRole.READ
        
        await storage._ensure_initialized()
        
        from extensions.server import register_server_queries
        register_server_queries(storage.query_registry)
        
        app.state.storage = storage
        
        logger.info(
            f"Storage hooked: role={storage.config.role.name}, "
            f"store={storage.config.store}, pool_size={storage.config.pool_size}"
        )
    
    async def _shutdown_storage(self, app: FastAPI) -> None:
        """Storage is owned by orchestrator container - clear our reference only"""
        app.state.storage = None
    
    async def _initialize_orchestrator(self, app: FastAPI) -> None:
        """Initialize orchestrator instance and store in app state"""
        logger.info("Initializing orchestrator...")
        orchestrator = await self.orchestrator_factory()
        app.state.orchestrator = orchestrator
        app.state.container = orchestrator.container
        logger.info("Orchestrator initialized")
    
    async def _shutdown_orchestrator(self, app: FastAPI) -> None:
        """Cleanup orchestrator on shutdown"""
        if hasattr(app.state, 'orchestrator') and app.state.orchestrator:
            try:
                await app.state.orchestrator.container.extension_registry.cleanup_all()
                logger.info("Orchestrator cleanup complete")
            except Exception as e:
                logger.error(f"Orchestrator cleanup error: {e}")
            app.state.orchestrator = None
