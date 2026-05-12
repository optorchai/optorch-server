"""UIManager - top-level manager for all UI-related services"""
from extensions.server.ui.chat_extension import ChatExtensionManager
from extensions.server.ui.pages import PageManager
from extensions.server.ui.widgets import WidgetManager
from extensions.server.ui.dashboards import DashboardManager
from optorch.logging import get_logger

logger = get_logger(__name__)


class UIManager:
    """coordinate UI services - extensions, downloads, settings, pages, widgets"""
    
    def __init__(self, api_prefix: str = ""):
        self.api_prefix = api_prefix
        self.chat_extensions = ChatExtensionManager(api_prefix=api_prefix)
        self.pages = PageManager(api_prefix=api_prefix)
        self.widgets = WidgetManager(api_prefix=api_prefix)
        self.dashboards = DashboardManager(api_prefix=api_prefix)
        logger.info(f"UIManager initialized with api_prefix={api_prefix}")