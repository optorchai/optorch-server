"""API response models"""
from pydantic import BaseModel, Field
from typing import Optional, Dict, Any


class HealthResponse(BaseModel):
    """Health check response"""
    status: str = Field(default=..., examples=["ok"])
    service: str = Field(default=..., examples=["optorch-orchestrator"])
    version: Optional[str] = Field(default=None, examples=["1.0.0"])


class ErrorResponse(BaseModel):
    """Standard error response"""
    error: str = Field(..., description="Error type")
    message: str = Field(..., description="Error message")
    details: Optional[Dict[str, Any]] = Field(None, description="Additional error details")


class SessionDeleteResponse(BaseModel):
    """Session deletion response"""
    success: bool
    message: str


class ApiInfoResponse(BaseModel):
    """Root API info response"""
    service: str
    version: str
    endpoints: Dict[str, str]
    docs_url: str = Field(default="/docs", description="OpenAPI documentation URL")


class LogsResponse(BaseModel):
    """Logs response"""
    logs: Optional[str] = None
    error: Optional[str] = None


class MetricsResponse(BaseModel):
    """System metrics response"""
    uptime_seconds: float
    total_requests: int
    total_cost_usd: float
    active_threads: int
    llm_calls: int
    node_executions: int
    tool_calls: int
