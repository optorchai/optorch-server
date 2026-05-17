from typing import List
from pydantic import BaseModel
from extensions.server.models.conversation_item import ConversationItem

class ConversationListResponse(BaseModel):
    items: List[ConversationItem]
    total: int
    limit: int
    offset: int
