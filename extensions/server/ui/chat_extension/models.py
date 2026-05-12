"""Chat extension models"""
from pydantic import BaseModel


class ChatExtensionManifest(BaseModel):
    """Chat extension manifest schema"""
    id: str
    name: str
    description: str
    version: str
    url: str
    entry_point: str | None = None
    author: str | None = None
    icon: str | None = None
    tags: list[str] | None = None
    source_path: str | None = None  # internal - path to JS file for download endpoint
