"""WidgetRegistry - stores registered widget manifest paths"""
from typing import Dict, List


class WidgetRegistry:
    """stores widget manifest URL paths"""
    
    def __init__(self, api_prefix: str) -> None:
        self._paths: Dict[str, str] = {}
        self._api_prefix = api_prefix
    
    def register(self, widget_id: str, url_path: str) -> None:
        """register widget manifest URL path"""
        self._paths[widget_id] = url_path
    
    def get_manifest_urls(self) -> List[str]:
        """return full manifest URLs"""
        return [f"{path}/manifest.json" for path in self._paths.values()]