"""Chat extension configuration"""
from pydantic import BaseModel


class ChatExtensionConfig(BaseModel):
    """config for chat extension system - URLs should be constructed with api_prefix"""
    download_url_template: str = "{api_prefix}/ui/extensions/chat/{{extension_id}}/download"
    discovery_url: str = "{api_prefix}/ui/extensions/chat"
