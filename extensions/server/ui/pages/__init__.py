"""Page registration for backoffice UI"""
from extensions.server.ui.pages.manager import PageManager
from extensions.server.ui.pages.models import (
    UIPageManifest,
    UINavigationManifest,
    UIComponentManifest,
    UIRouteManifest
)

__all__ = [
    'PageManager',
    'UIPageManifest',
    'UINavigationManifest',
    'UIComponentManifest',
    'UIRouteManifest',
]
