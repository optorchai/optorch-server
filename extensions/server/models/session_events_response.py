from typing import List
from pydantic import BaseModel
from extensions.server.models.session_event_item import SessionEventItem

class SessionEventsResponse(BaseModel):
    session_id: str
    events: List[SessionEventItem]
