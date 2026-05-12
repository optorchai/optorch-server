"""Session deletion response model"""
from pydantic import BaseModel


class SessionDeleteResponse(BaseModel):
    """Session deletion response"""
    success: bool
    message: str
