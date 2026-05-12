"""DashboardRegistry - stores registered dashboard config paths"""
from typing import Dict


class DashboardRegistry:
    """stores dashboard config URL paths"""
    
    def __init__(self, api_prefix: str) -> None:
        self._paths: Dict[str, str] = {}
        self._api_prefix = api_prefix
    
    def register(self, dashboard_id: str, url_path: str) -> None:
        """register dashboard config URL path"""
        self._paths[dashboard_id] = url_path
    
    def get_manifests(self) -> Dict[str, str]:
        """return dict of dashboard_id -> URL"""
        return self._paths.copy()