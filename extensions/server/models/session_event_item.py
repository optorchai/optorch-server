from typing import Any, Dict, Optional, Union
from pydantic import BaseModel

class SessionEventItem(BaseModel):
    id: Union[int, str]
    type: str
    timestamp_ms: Optional[int] = None
    session_id: Optional[str] = None
    provider: Optional[str] = None
    model: Optional[str] = None
    input_tokens: Optional[int] = None
    output_tokens: Optional[int] = None
    duration_ms: Optional[int] = None
    cost: Optional[float] = None
    currency: str = "USD"
    node_name: Optional[str] = None
    phase: Optional[str] = None
    tool_name: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None
    created_at: str
