"""PageRegistry - stores registered UI pages"""
from typing import Dict, List
from extensions.server.ui.pages.models import (
    UIPageManifest,
    UINavigationManifest,
    UIComponentManifest,
    UIRouteManifest
)
from optorch.logging import get_logger

logger = get_logger(__name__)


class PageRegistry:
    """stores registered UI pages"""
    
    def __init__(self, api_prefix: str) -> None:
        self.api_prefix = api_prefix
        self._pages: Dict[str, UIPageManifest] = {}
        self._page_prefixes: Dict[str, str] = {}
    
    def register(self, manifest: UIPageManifest, api_prefix: str | None = None) -> None:
        """register page configuration"""
        page_id = manifest.navigation.id
        if page_id in self._pages:
            logger.warning(f"Overwriting existing page: {page_id}")
        
        self._pages[page_id] = manifest
        self._page_prefixes[page_id] = api_prefix or self.api_prefix
        
        if manifest.route:
            logger.info(f"Registered page: {page_id} -> {manifest.route.path}")
        else:
            logger.info(f"Registered nav group: {page_id}")
    
    def get_navigation(self) -> List[UINavigationManifest]:
        """get all nav items sorted by order"""
        items = [p.navigation for p in self._pages.values()]
        return sorted(items, key=lambda x: x.order)
    
    def get_components(self) -> List[UIComponentManifest]:
        """get all component definitions with api_prefix applied"""
        components = []
        for page_id, page in self._pages.items():
            if page.component:
                component = page.component.model_copy()
                prefix = self._page_prefixes.get(page_id, self.api_prefix)
                component.url = f"{prefix}{component.url}"
                components.append(component)
        return components
    
    def get_routes(self) -> List[UIRouteManifest]:
        """get all route mappings"""
        return [p.route for p in self._pages.values() if p.route is not None]
