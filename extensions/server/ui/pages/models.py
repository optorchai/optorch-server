"""Page manifest models for backoffice UI registration"""
from pydantic import BaseModel, Field
from typing import Optional, List


class UINavigationManifest(BaseModel):
    """nav item in sidebar"""
    id: str = Field(..., description="unique nav id")
    label: str = Field(..., description="display text")
    path: str = Field(..., description="route path")
    icon: str = Field(..., description="heroicon name")
    order: int = Field(default=100, description="sort order - lower is higher")
    submenu: Optional[List['UINavigationManifest']] = Field(None, description="nested navigation items")


UINavigationManifest.model_rebuild()


class UIComponentManifest(BaseModel):
    """component definition for lazy loading"""
    id: str = Field(..., description="component identifier")
    url: str = Field(..., description="URL to component bundle")
    module: str = Field(..., description="module export name")


class UIRouteManifest(BaseModel):
    """route mapping"""
    path: str = Field(..., description="URL path")
    component: str = Field(..., description="component identifier from registry")


class UIPageManifest(BaseModel):
    """complete page registration - nav + route + optional component"""
    navigation: UINavigationManifest
    route: Optional[UIRouteManifest] = None
    component: Optional[UIComponentManifest] = None
