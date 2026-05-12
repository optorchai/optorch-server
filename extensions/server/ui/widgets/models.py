"""Widget manifest models for backoffice integration"""
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any


class WidgetConfigField(BaseModel):
    """widget config field definition"""
    name: str
    label: str
    type: str = Field(
        description="Field type: text, number, select, checkbox, textarea, multiselect"
    )
    required: bool = False
    placeholder: Optional[str] = None
    options: Optional[List[Dict[str, Any]]] = None
    optionsFrom: Optional[str] = Field(
        None,
        description="Dynamic options source: chat-widgets, installed-chat-extensions"
    )
    defaultValue: Optional[Any] = None
    validation: Optional[List[Dict[str, Any]]] = None


class UIWidgetManifest(BaseModel):
    """widget manifest for registration"""
    id: str
    name: str
    description: Optional[str] = None
    type: str = Field(description="Widget type: react or webcomponent")
    source: str = Field(description="Component name or URL to widget bundle")
    category: Optional[str] = None
    icon: Optional[str] = None
    configSchema: Optional[List[WidgetConfigField]] = None
    customConfigModal: Optional[str] = None
    supportsAccordionMode: bool = False
    version: Optional[str] = None
    author: Optional[str] = None
    tags: Optional[List[str]] = None
