"""Logs response model"""
from pydantic import BaseModel
from typing import Optional


class LogsResponse(BaseModel):
    """Logs response"""
    logs: Optional[str] = None
    error: Optional[str] = None
