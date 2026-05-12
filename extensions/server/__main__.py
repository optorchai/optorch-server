"""Optorch Server Extension CLI - run with: python -m extensions.server"""
import argparse
import uvicorn
import os
from pathlib import Path
from dotenv import load_dotenv


def create_app_instance():
    """Factory for uvicorn - creates app with orchestrator configured for this application"""
    load_dotenv()
    
    from optorch.estrator import Orchestrator
    from optorch.config import ConfigManager
    from extensions.server.manager import ServerManager
    from app.hooks import register_app_hooks
    from functools import partial
    
    config_dir = Path(__file__).parent.parent.parent / "config"
    config_file = os.getenv("OPTORCH_CONFIG_FILE")
    config_manager = ConfigManager(config_dir=str(config_dir) if config_dir.exists() else None, config_file=config_file)
    
    profile = os.getenv("OPTORCH_PROFILE")
    if profile:
        config_manager.set("optorch.server.profile", profile)
    
    if hasattr(create_app_instance, '_runtime_overrides'):
        for key, value in create_app_instance._runtime_overrides.items():
            config_manager.set(key, value)
    
    orchestrator_factory = partial(
        Orchestrator.create_async,
        config_path=str(config_dir) if config_dir.exists() else None,
        entry_node="product_discovery",
        app_hooks=register_app_hooks,
        config_manager=config_manager
    )
    
    server_manager = ServerManager(orchestrator_factory, config_manager)
    return server_manager.create_app()


def main():
    from extensions.server.config import ServerConfig
    
    parser = argparse.ArgumentParser(description="Optorch Orchestrator API Server")
    
    parser.add_argument("--profile", type=str,
        choices=["runtime", "backoffice", "analytics", "all", "custom"],
        help="Server profile for capability-based route filtering"
    )
    
    for field_name, field_info in ServerConfig.model_fields.items():
        if field_name in ("enabled", "cors", "profile", "capabilities", "service_map"):
            continue
        
        arg_name = f"--{field_name.replace('_', '-')}"
        help_text = field_info.description or f"ServerConfig.{field_name}"
        
        field_type = field_info.annotation
        if field_type is bool:
            parser.add_argument(arg_name, action="store_true", help=help_text)
        elif field_type is int:
            parser.add_argument(arg_name, type=int, help=help_text)
        else:  # str by default
            parser.add_argument(arg_name, type=str, help=help_text)
    
    parser.add_argument("--no-browser", action="store_true", help="Don't open browser on startup")
    
    args = parser.parse_args()
    
    runtime_overrides = {}
    
    if args.profile:
        runtime_overrides["optorch.server.profile"] = args.profile
    
    for field_name in ServerConfig.model_fields.keys():
        if field_name in ("enabled", "cors", "profile", "capabilities", "service_map"):
            continue
        
        arg_value = getattr(args, field_name, None)
        if arg_value is not None:
            runtime_overrides[f"optorch.server.{field_name}"] = arg_value
    
    create_app_instance._runtime_overrides = runtime_overrides
    
    from extensions.server.config import ServerConfig as _ServerConfig
    _defaults = _ServerConfig()
    port = getattr(args, "port", None) or int(os.getenv("OPTORCH_PORT", str(_defaults.port)))
    host = getattr(args, "host", None) or os.getenv("OPTORCH_HOST", _defaults.host)
    reload = getattr(args, "reload", _defaults.reload)
    
    if not args.no_browser:
        import webbrowser
        import threading
        
        def open_browser():
            import time
            time.sleep(1.5)
            
            profile = args.profile or os.getenv("OPTORCH_PROFILE", "all")
            admin_ui_profiles = {"backoffice", "all"}
            
            scheme = "https" if port == 443 else "http"
            display_host = "localhost" if host == "0.0.0.0" else host
            default_port = 443 if scheme == "https" else 80
            port_str = "" if port == default_port else f":{port}"
            
            if profile in admin_ui_profiles:
                admin_path = runtime_overrides.get("optorch.server.admin_ui_path", "/admin")
                url = f"{scheme}://{display_host}{port_str}{admin_path}"
            else:
                url = f"{scheme}://{display_host}{port_str}/docs"
            
            webbrowser.open(url)
        
        threading.Thread(target=open_browser, daemon=True).start()
    
    if args.profile:
        os.environ["OPTORCH_PROFILE"] = args.profile
    
    uvicorn.run(
        "extensions.server.__main__:create_app_instance",
        factory=True,
        host=host,
        port=port,
        log_level="info",
        reload=reload,
        reload_dirs=["extensions", "app", "optorch"] if reload else None,
    )


if __name__ == "__main__":
    main()
