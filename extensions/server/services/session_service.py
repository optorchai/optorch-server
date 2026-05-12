"""Session management service"""
from optorch.logging import get_logger
from typing import Optional, Dict, Any, List
from optorch.errors import ConfigurationError
from optorch.estrator import Orchestrator

logger = get_logger(__name__)


class SessionService:
    """Session management"""
    
    def __init__(self, orchestrator: Optional[Orchestrator] = None):
        """Initialize with optional orchestrator"""
        self._orchestrator = orchestrator
    
    async def get_session_data(self, session_id: str) -> Optional[Dict[str, Any]]:
        """Get session data"""
        if not self._orchestrator:
            return None
        
        try:
            if not self._orchestrator.container.session_manager:
                return None
            
            if not await self._orchestrator.container.session_manager.exists(session_id):
                return None
            
            session_data = await self._orchestrator.container.session_manager.get_data(session_id)
            
            if session_data and not isinstance(session_data, dict):
                logger.warning(f"Session data not dict: {type(session_data)}")
                return None
            
            return session_data
        except Exception as e:
            logger.error(f"Failed to get session: {e}", exc_info=True)
            return None
    
    async def save_session_data(
        self,
        session_id: str,
        messages: List[Dict[str, str]],
        total_cost: float
    ):
        """Save session data"""
        from optorch.llm.pricing import Pricing
        
        if not self._orchestrator:
            raise ConfigurationError("Orchestrator not available")
        
        try:
            if not self._orchestrator.container.session_manager:
                raise ConfigurationError("SessionManager not available")
                
            await self._orchestrator.container.session_manager.set_data({
                "messages": messages,
                "total_cost": total_cost,
                "currency": Pricing.get_currency()
            }, session_id)
        except Exception as e:
            logger.error(f"Failed to save session: {e}", exc_info=True)
            raise
    
    def get_conversation_history(self, session_data: Optional[Dict]) -> List[Dict]:
        """Extract history from session"""
        if not session_data:
            return []
        return session_data.get("messages", [])
    
    def get_previous_cost(self, session_data: Optional[Dict]) -> float:
        """Extract previous cost"""
        if not session_data:
            return 0.0
        return session_data.get("total_cost", 0.0)
