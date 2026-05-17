from typing import Any, Dict, Optional
from pydantic import BaseModel

class MessageItem(BaseModel):
    id: str
    role: str
    content: str
    layer: str
    turn_number: int
    sequence_order: int
    model: Optional[str] = None
    input_tokens: Optional[int] = None
    output_tokens: Optional[int] = None
    cost: Optional[float] = None
    node_name: Optional[str] = None
    capabilities: Optional[Dict[str, Any]] = None
    metadata: Optional[Dict[str, Any]] = None
    created_at: str
