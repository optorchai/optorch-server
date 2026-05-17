from typing import List
from pydantic import BaseModel
from extensions.server.models.conversation_item import ConversationItem
from extensions.server.models.message_item import MessageItem

class SessionResumeResponse(BaseModel):
    conversation: ConversationItem
    messages: List[MessageItem]
