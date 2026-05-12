"""Registry for chat extensions - hosted or server-side"""
from optorch.registry import Registry
from extensions.server.ui.chat_extension.models import ChatExtensionManifest


class ChatExtensionRegistry(Registry[ChatExtensionManifest]):
    """type-safe registry for chat extensions"""
    pass
