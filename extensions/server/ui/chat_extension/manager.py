"""Manages chat extension registration and manifest generation"""
from extensions.server.ui.chat_extension.models import ChatExtensionManifest
from extensions.server.ui.chat_extension.registry import ChatExtensionRegistry
from extensions.server.ui.chat_extension.config import ChatExtensionConfig
from optorch.logging import get_logger

logger = get_logger(__name__)


class ChatExtensionManager:
    """orchestrate chat extension lifecycle"""
    
    def __init__(self, config: ChatExtensionConfig | None = None, api_prefix: str = ""):
        self.registry = ChatExtensionRegistry()
        base_config = config or ChatExtensionConfig()
        
        self.config = ChatExtensionConfig(
            download_url_template=base_config.download_url_template.format(api_prefix=api_prefix),
            discovery_url=base_config.discovery_url.format(api_prefix=api_prefix)
        )
    
    def register(self, manifest: ChatExtensionManifest | dict) -> None:
        """register a chat extension manifest"""
        if isinstance(manifest, dict):
            if "source_path" in manifest and not manifest.get("url"):
                manifest["url"] = self.config.download_url_template.format(extension_id=manifest['id'])
            manifest = ChatExtensionManifest(**manifest)
        elif manifest.source_path and not manifest.url:
            manifest.url = self.config.download_url_template.format(extension_id=manifest.id)
        
        self.registry.register(manifest.id, manifest)
        logger.info(f"Registered chat extension: {manifest.id} ({manifest.url})")
    
    def get_manifests(self) -> list[ChatExtensionManifest]:
        """get all registered extension manifests"""
        return [
            self.registry.get(key)
            for key in self.registry.list_keys()
        ]
    
    def has(self, id: str) -> bool:
        """check if extension registered"""
        return self.registry.has(id)
    
    def unregister(self, id: str) -> None:
        """remove extension"""
        self.registry.unregister(id)
        logger.info(f"Unregistered chat extension: {id}")
