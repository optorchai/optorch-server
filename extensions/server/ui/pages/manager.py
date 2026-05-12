"""PageManager - manages backoffice page registrations"""
from typing import List, TYPE_CHECKING
from pathlib import Path
from extensions.server.ui.pages.registry import PageRegistry
from extensions.server.ui.pages.models import UIPageManifest, UINavigationManifest, UIRouteManifest, UIComponentManifest
from optorch.logging import get_logger
import json

if TYPE_CHECKING:
    from extensions.server.ui.extension_config import UIExtensionConfig

logger = get_logger(__name__)


class PageManager:
    """manages backoffice page registrations"""
    
    def __init__(self, api_prefix: str) -> None:
        self.registry = PageRegistry(api_prefix)
        logger.info("PageManager initialized")
    
    def register(self, manifest: UIPageManifest, api_prefix: str | None = None) -> None:
        """register page manifest"""
        self.registry.register(manifest, api_prefix)
    
    def discover(self, ui_config: "UIExtensionConfig") -> None:
        """scan extension pages directory and register page manifests"""
        if not ui_config.pages_path.exists() or not ui_config.pages_path.is_dir():
            logger.debug(f"Pages directory not found: {ui_config.pages_path}")
            return
        
        count = 0
        for page_bundle in ui_config.pages_path.iterdir():
            if not page_bundle.is_dir():
                continue
            
            manifest_file = page_bundle / ui_config.manifest_filename
            if not manifest_file.exists():
                continue
            
            try:
                with open(manifest_file, 'r') as f:
                    manifest_data = json.load(f)
                
                page_manifest = UIPageManifest(
                    navigation=UINavigationManifest(
                        id=manifest_data['id'],
                        label=manifest_data.get('label') or manifest_data.get('name'),
                        path=manifest_data['path'],
                        icon=manifest_data.get('icon'),
                        order=manifest_data.get('order', 999)
                    ),
                    route=UIRouteManifest(
                        path=manifest_data['path'],
                        component=manifest_data['component']
                    ),
                    component=UIComponentManifest(
                        id=manifest_data['component'],
                        url=manifest_data['url'],
                        module=manifest_data['component']
                    )
                )
                
                self.registry.register(page_manifest, ui_config.ui_route)
                
                count += 1
            except Exception as e:
                logger.warning(f"Failed to load page manifest {manifest_file}: {e}")
        
        if count > 0:
            logger.info(f"Discovered {count} pages in {ui_config.extension_name}")
    
    def get_manifests(self) -> dict:
        """get all manifests as aggregated dict"""
        return {
            "navigation": self.get_navigation_manifests(),
            "components": self.get_component_manifests(),
            "routes": self.get_routes_manifests()
        }
    
    def get_navigation_manifests(self) -> List[dict]:
        """navigation items as dicts"""
        return [n.model_dump() for n in self.registry.get_navigation()]
    
    def get_component_manifests(self) -> List[dict]:
        """component definitions as dicts"""
        return [c.model_dump() for c in self.registry.get_components()]
    
    def get_routes_manifests(self) -> List[dict]:
        """route mappings as dicts"""
        return [r.model_dump() for r in self.registry.get_routes()]
