"""UI extension configuration for path and route management"""
from pathlib import Path
from pydantic import BaseModel, Field, computed_field


class UIExtensionConfig(BaseModel):
    """config for extension UI assets - paths and routes"""
    
    extension_root: Path = Field(..., description="root directory of extension (Path(__file__).parent)")
    extension_name: str = Field(..., description="extension name for URL namespacing")
    
    ui_subdir: str = Field(default="ui", description="subdirectory containing UI assets")
    public_subdir: str = Field(default="public", description="subdirectory for public static files")
    widgets_subdir: str = Field(default="widgets", description="subdirectory for widget bundles")
    dashboards_subdir: str = Field(default="dashboards", description="subdirectory for dashboard bundles")
    pages_subdir: str = Field(default="pages", description="subdirectory for page bundles")
    manifest_filename: str = Field(default="manifest.json", description="manifest filename for bundles")
    
    @computed_field  # type: ignore[misc]
    @property
    def ui_path(self) -> Path:
        """filesystem path to ui directory"""
        return self.extension_root / self.ui_subdir / self.public_subdir
    
    @computed_field  # type: ignore[misc]
    @property
    def widgets_path(self) -> Path:
        """filesystem path to widgets directory"""
        return self.ui_path / self.widgets_subdir
    
    @property
    def dashboards_path(self) -> Path:
        """filesystem path to dashboards directory"""
        return self.ui_path / self.dashboards_subdir
    
    @computed_field  # type: ignore[misc]
    @property
    def pages_path(self) -> Path:
        """filesystem path to pages directory"""
        return self.ui_path / self.pages_subdir
    
    @computed_field  # type: ignore[misc]
    @property
    def ui_route(self) -> str:
        """HTTP route for ui assets"""
        return f"/ui/{self.extension_name}"
    
    @computed_field  # type: ignore[misc]
    @property
    def widgets_route(self) -> str:
        """HTTP route for widget bundles"""
        return f"{self.ui_route}/{self.widgets_subdir}"
    
    @computed_field  # type: ignore[misc]
    @property
    def pages_route(self) -> str:
        """HTTP route for page bundles"""
        return f"{self.ui_route}/{self.pages_subdir}"
    
    @computed_field  # type: ignore[misc]
    @property
    def dashboards_route(self) -> str:
        """HTTP route for dashboard bundles"""
        return f"{self.ui_route}/{self.dashboards_subdir}"
