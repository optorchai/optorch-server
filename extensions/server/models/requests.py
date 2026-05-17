"""API request models"""
from pydantic import BaseModel, Field, ConfigDict
from typing import Optional


class ChatRequest(BaseModel):
    """Chat message request"""
    
    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "session_id": "demo-session-1",
                "message": "Explain quantum computing",
                "tone": "concise"
            }
        }
    )
    
    session_id: str = Field(
        ...,
        description="Unique session/session identifier",
        examples=["user-123-session-1"]
    )
    message: str = Field(
        ...,
        description="User message to process",
        min_length=1,
        max_length=10000,
        examples=["What is the pricing for enterprise customers?"]
    )
    tone: Optional[str] = Field(
        None,
        description="Optional tone modifier (concise, detailed, formal, casual)",
        examples=["concise"]
    )
    suggestions: Optional[bool] = Field(
        True,
        description="Whether to generate suggested follow-up replies"
    )
    source: Optional[str] = Field(
        None,
        description="Distribution channel identifier (e.g. 'web-widget', 'public-chatbot', 'slack'). Anonymous/public callers should set this.",
        examples=["web-widget"]
    )
