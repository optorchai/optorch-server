"""Event streaming service"""
import asyncio
from optorch.logging import get_logger
from typing import Callable, List, Dict, Any, Optional, TYPE_CHECKING
from optorch.utils.generate_id import generate_short_id

if TYPE_CHECKING:
    from optorch.events.event_emitter import EventEmitter

logger = get_logger(__name__)


class EventService:
    """Event stream management"""
    
    def __init__(self):
        self.events: List[Dict[str, Any]] = []
        self.event_queue: Optional[asyncio.Queue] = None
        self._event_emitter: Optional["EventEmitter"] = None
        self._backend_name: Optional[str] = None
    
    def create_collector(self) -> Callable:
        """Create event collector function that streams to queue"""
        def collector(event: Dict[str, Any]):
            self.events.append(event)
            if self.event_queue:
                try:
                    self.event_queue.put_nowait(event)
                except Exception as e:
                    logger.warning(f"Failed to queue event: {e}")
        
        return collector
    
    def enable_streaming(self, collector: Callable, event_emitter: "EventEmitter"):
        """Enable event streaming with queue
        
        Args:
            collector: Event collector callback function
            event_emitter: EventEmitter instance to stream events from
        """
        from optorch.events.backends.sse_backend import SSEBackend
        
        self.event_queue = asyncio.Queue()
        self._event_emitter = event_emitter
        self._backend_name = f"sse_{generate_short_id()}"
        
        sse_backend = SSEBackend(collector)
        event_emitter.backends.add(self._backend_name, sse_backend)
    
    def disable_streaming(self):
        """Disable event streaming"""
        if self._event_emitter and self._backend_name:
            self._event_emitter.backends.remove(self._backend_name)
        self._event_emitter = None
        self._backend_name = None
        self.event_queue = None
    
    async def get_event(self, timeout: float = 0.1) -> Optional[Dict[str, Any]]:
        """Get next event from queue with timeout"""
        if not self.event_queue:
            return None
        try:
            return await asyncio.wait_for(self.event_queue.get(), timeout=timeout)
        except asyncio.TimeoutError:
            return None
    
    def all(self) -> List[Dict[str, Any]]:
        """Get collected events"""
        return self.events
    
    def clear(self):
        """Clear event buffer"""
        self.events = []
