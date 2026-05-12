"""Server-Sent Event models"""
from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, Dict, Any, Literal


class NodeStartEvent(BaseModel):
    """Node execution start"""
    model_config = ConfigDict(extra='forbid')
    type: Literal["node.start"] = "node.start"
    node: str
    timestamp: float


class NodeCompleteEvent(BaseModel):
    """Node execution complete"""
    model_config = ConfigDict(extra='forbid')
    type: Literal["node.complete"] = "node.complete"
    node: str
    duration_ms: int
    timestamp: float


class LLMStartEvent(BaseModel):
    """LLM invocation start"""
    model_config = ConfigDict(extra='forbid')
    type: Literal["llm.start"] = "llm.start"
    model: Optional[str] = None


class LLMCompleteEvent(BaseModel):
    """LLM invocation complete"""
    model_config = ConfigDict(extra='forbid')
    type: Literal["llm.complete"] = "llm.complete"
    duration_ms: int
    result: Dict[str, Any]


class CostUpdateEvent(BaseModel):
    """Cost tracking update"""
    model_config = ConfigDict(extra='forbid')
    type: Literal["cost.update"] = "cost.update"
    exchange_cost: float = Field(..., description="Cost for this exchange")
    total_cost: float = Field(..., description="Total cost for session")
    currency: str = Field(default="USD", description="Currency code (USD, EUR, GBP, etc.)")


class MessageEvent(BaseModel):
    """Final assistant message"""
    model_config = ConfigDict(extra='forbid')
    type: Literal["message"] = "message"
    role: Literal["assistant"] = "assistant"
    content: str


class ErrorEvent(BaseModel):
    """Error event"""
    model_config = ConfigDict(extra='forbid')
    type: Literal["error"] = "error"
    message: str
    details: Optional[Dict[str, Any]] = None
