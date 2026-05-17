from typing import Optional
from pydantic import BaseModel

class ConversationItem(BaseModel):
    id: str
    session_id: str
    turn_count: int
    total_cost: float
    currency: str
    organization_id: Optional[str] = None
    user_id: Optional[str] = None
    application_id: Optional[str] = None
    created_at: str
    updated_at: Optional[str] = None
