"""DashboardManager - manages dashboard discovery and registration"""
from typing import Dict, TYPE_CHECKING
from extensions.server.ui.dashboards.registry import DashboardRegistry
from optorch.logging import get_logger

if TYPE_CHECKING:
    from extensions.server.ui.extension_config import UIExtensionConfig

logger = get_logger(__name__)


class DashboardManager:
    """manages dashboard lifecycle"""
    
    def __init__(self, api_prefix: str) -> None:
        self.registry = DashboardRegistry(api_prefix)
        logger.info("DashboardManager initialized")
    
    def discover(self, ui_config: "UIExtensionConfig") -> None:
        """scan extension dashboard directory and register .json files"""
        if not ui_config.dashboards_path.exists() or not ui_config.dashboards_path.is_dir():
            logger.debug(f"Dashboard directory not found: {ui_config.dashboards_path}")
            return
        
        count = 0
        for dashboard_file in ui_config.dashboards_path.iterdir():
            if not dashboard_file.is_file() or dashboard_file.suffix != ".json":
                continue
            
            dashboard_id = dashboard_file.stem
            url_path = f"{ui_config.dashboards_route}/{dashboard_file.name}"
            self.registry.register(dashboard_id, url_path)
            count += 1
        
        if count > 0:
            logger.info(f"Discovered {count} dashboards in {ui_config.extension_name}")
    
    def get_manifests(self) -> Dict[str, str]:
        """get dashboard manifest URLs as dict"""
        return self.registry.get_manifests()
