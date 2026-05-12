"""UI management - extensions, downloads, settings"""
from extensions.server.ui.manager import UIManager
from extensions.server.ui.extension_config import UIExtensionConfig
from extensions.server.ui.chat_extension import ChatExtensionManager, ChatExtensionRegistry
from extensions.server.ui.pages import UIPageManifest, UINavigationManifest, UIRouteManifest, UIComponentManifest
from extensions.server.ui.widgets import UIWidgetManifest, WidgetConfigField

__all__ = [
    "UIManager",
    "UIExtensionConfig",
    "ChatExtensionManager",
    "ChatExtensionRegistry",
    "UIPageManifest",
    "UINavigationManifest",
    "UIRouteManifest",
    "UIComponentManifest",
    "UIWidgetManifest",
    "WidgetConfigField",
]
