"""Pydantic config models for server extension"""

from typing import Literal
from pydantic import BaseModel, Field


class CORSConfig(BaseModel):
    """CORS middleware configuration"""
    enabled: bool = True
    origins: list[str] = Field(default_factory=lambda: ["*"])
    credentials: bool = True
    methods: list[str] = Field(default_factory=lambda: ["*"])
    headers: list[str] = Field(default_factory=lambda: ["*"])


class ProfileCapabilitiesConfig(BaseModel):
    """Configurable capability mappings per profile"""
    
    runtime: set[str] = Field(
        default={"orchestrator", "llm", "write_db", "sessions", "config_read"},
        description="Runtime server capabilities (production workloads)"
    )
    backoffice: set[str] = Field(
        default={"read_db", "admin_ui", "config_read", "config_write"},
        description="Backoffice server capabilities (management UI)"
    )
    all: set[str] = Field(
        default={"*"},
        description="All-in-one server (wildcard capabilities)"
    )
    custom: set[str] = Field(
        default_factory=set,
        description="Custom profile capabilities (override via config)"
    )
    
    def get_capabilities(self, profile: str) -> set[str]:
        """Get capabilities for profile"""
        return getattr(self, profile, set())


class ServerConfig(BaseModel):
    """Server extension configuration with defaults"""
    enabled: bool = True
    host: str = "0.0.0.0"
    port: int = 8000
    reload: bool = False
    api_version_prefix: str = "v1"
    extensions_dir: str = Field(
        default="extensions",
        description="Directory to discover extensions from (relative to project root or absolute path)"
    )
    app_dir: str = Field(
        default="app",
        description="Application directory name (relative to project root or absolute path)"
    )
    cors: CORSConfig = Field(default_factory=CORSConfig)
    profile: Literal["runtime", "backoffice", "analytics", "all", "custom"] = Field(
        default="all",
        description="Server profile for capability-based route filtering"
    )
    capabilities: list[str] | None = Field(
        default=None,
        description="Custom capabilities for 'custom' profile type"
    )
    service_map: dict[str, str] = Field(
        default_factory=dict,
        description="Microservice routing map: {'/analytics': 'https://analytics.optorch.io'}"
    )
    admin_ui_path: str = Field(
        default="/admin",
        description="URL path for admin UI (requires admin_ui capability)"
    )
    
    @property
    def api_prefix(self) -> str:
        """API version prefix for all routes"""
        return f"/api/{self.api_version_prefix}"
