"""WidgetManager - manages widget discovery and registration"""
from typing import List, TYPE_CHECKING
from pathlib import Path
from extensions.server.ui.widgets.registry import WidgetRegistry
from optorch.logging import get_logger

if TYPE_CHECKING:
    from extensions.server.ui.extension_config import UIExtensionConfig

logger = get_logger(__name__)


class WidgetManager:
    """manages widget lifecycle"""
    
    def __init__(self, api_prefix: str) -> None:
        self.registry = WidgetRegistry(api_prefix)
        logger.info("WidgetManager initialized")
    
    def discover(self, ui_config: "UIExtensionConfig") -> None:
        """scan extension widget directory and register manifest paths"""
        if not ui_config.widgets_path.exists() or not ui_config.widgets_path.is_dir():
            logger.debug(f"Widget directory not found: {ui_config.widgets_path}")
            return
        
        count = 0
        for widget_bundle in ui_config.widgets_path.iterdir():
            if not widget_bundle.is_dir():
                continue
            
            manifest_file = widget_bundle / ui_config.manifest_filename
            if not manifest_file.exists():
                continue
            
            widget_id = f"{ui_config.extension_name}-{widget_bundle.name}"
            url_path = f"{ui_config.widgets_route}/{widget_bundle.name}"
            self.registry.register(widget_id, url_path)
            count += 1
        
        if count > 0:
            logger.info(f"Discovered {count} widgets in {ui_config.extension_name}")
    
    def get_manifest_urls(self) -> List[str]:
        """get all widget manifest URLs"""
        return self.registry.get_manifest_urls()
