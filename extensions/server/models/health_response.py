"""Health check response model"""
from pydantic import BaseModel, Field
from typing import Optional


class HealthResponse(BaseModel):
    """Health check response"""
    status: str = Field(default=..., examples=["ok"])
    service: str = Field(default=..., examples=["optorch-orchestrator"])
    version: Optional[str] = Field(default=None, examples=["1.0.0"])
