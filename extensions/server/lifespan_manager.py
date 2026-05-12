"""Lifespan event management with priority ordering"""

from typing import Callable, Awaitable
from contextlib import asynccontextmanager
from fastapi import FastAPI
from optorch.logging import get_logger

logger = get_logger(__name__)

LifespanCallback = Callable[[FastAPI], Awaitable[None]]


class LifespanManager:
    """Startup/shutdown hook registration with priority ordering"""
    
    def __init__(self):
        self._startup: list[tuple[int, str, LifespanCallback]] = []
        self._shutdown: list[tuple[int, str, LifespanCallback]] = []
    
    def register_startup(
        self,
        name: str,
        callback: LifespanCallback,
        priority: int = 100
    ) -> None:
        """Register startup hook
        
        Args:
            name: Hook identifier
            callback: Async function(app) to call on startup
            priority: Higher = earlier execution
        """
        self._startup.append((priority, name, callback))
        logger.debug(f"Registered startup hook: {name} (priority {priority})")
    
    def register_shutdown(
        self,
        name: str,
        callback: LifespanCallback
    ) -> None:
        """Register shutdown hook
        
        Args:
            name: Hook identifier
            callback: Async function(app) to call on shutdown
        """
        self._shutdown.append((0, name, callback))
        logger.debug(f"Registered shutdown hook: {name}")
    
    def create_lifespan(self):
        """Create FastAPI lifespan context manager"""
        
        @asynccontextmanager
        async def lifespan(app: FastAPI):
            sorted_startup = sorted(self._startup, key=lambda x: x[0], reverse=True)
            for priority, name, callback in sorted_startup:
                try:
                    await callback(app)
                    logger.info(f"Startup: {name}")
                except Exception as e:
                    logger.error(f"Startup failed: {name} - {e}", exc_info=True)
                    raise
            
            yield
            
            for priority, name, callback in reversed(self._shutdown):
                try:
                    await callback(app)
                    logger.info(f"Shutdown: {name}")
                except Exception as e:
                    logger.error(f"Shutdown failed: {name} - {e}", exc_info=True)
        
        return lifespan
