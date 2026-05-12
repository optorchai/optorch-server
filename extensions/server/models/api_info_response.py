"""API info response model"""
from pydantic import BaseModel, Field
from typing import Dict


class ApiInfoResponse(BaseModel):
    """Root API info response"""
    service: str
    version: str
    endpoints: Dict[str, str]
    docs_url: str = Field(default="/docs", description="OpenAPI documentation URL")
