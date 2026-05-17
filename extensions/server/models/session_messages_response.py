from typing import List
from pydantic import BaseModel
from extensions.server.models.message_item import MessageItem

class SessionMessagesResponse(BaseModel):
    session_id: str
    layer: str
    messages: List[MessageItem]
