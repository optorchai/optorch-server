"""Middleware registration with priority ordering"""

from typing import Any, cast
from fastapi import FastAPI
from starlette.middleware.base import BaseHTTPMiddleware
from optorch.logging import get_logger

logger = get_logger(__name__)


class MiddlewareManager:
    """Priority-based middleware registration for extensions"""
    
    def __init__(self):
        self._middleware: list[tuple[int, str, type[Any], dict[str, Any]]] = []
    
    def register(
        self,
        name: str,
        middleware_class: type[Any],
        priority: int = 100,
        **kwargs: Any
    ) -> None:
        """Register middleware with priority
        
        Args:
            name: Unique middleware identifier
            middleware_class: Middleware class to apply
            priority: Higher = outer (applied first), lower = inner
            **kwargs: Middleware constructor arguments
        """
        if any(m[1] == name for m in self._middleware):
            logger.warning(f"Middleware {name} already registered, skipping")
            return
        
        self._middleware.append((priority, name, middleware_class, kwargs))
        logger.debug(f"Registered middleware: {name} (priority {priority})")
    
    def apply_to_app(self, app: FastAPI) -> None:
        """Apply middleware to FastAPI app in priority order"""
        sorted_middleware = sorted(self._middleware, key=lambda x: x[0], reverse=True)
        
        for priority, name, middleware_class, kwargs in sorted_middleware:
            app.add_middleware(cast(type[BaseHTTPMiddleware], middleware_class), **kwargs)
            logger.debug(f"Applied middleware: {name}")
