"""Widget manifest system"""
from extensions.server.ui.widgets.models import UIWidgetManifest, WidgetConfigField
from extensions.server.ui.widgets.registry import WidgetRegistry
from extensions.server.ui.widgets.manager import WidgetManager

__all__ = [
    'UIWidgetManifest',
    'WidgetConfigField',
    'WidgetRegistry',
    'WidgetManager',
]
