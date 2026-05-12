"""Capability-aware routing with true deferred registration"""

from typing import Any, Callable
from fastapi import APIRouter as FastAPIRouter
from extensions.server.decorators import capability


class APIRouter(FastAPIRouter):
    """APIRouter that defers route registration for capability filtering
    
    Routes are collected when decorators run but not registered to FastAPI
    until RouteManager processes them with capability filtering.
    """
    
    def __init__(self, *args: Any, **kwargs: Any):
        super().__init__(*args, **kwargs)
        self._deferred_routes: list[tuple[str, str, Callable, dict]] = []
    
    def include_router(self, router: Any, **kwargs: Any) -> None:
        """Override to collect deferred routes from sub-routers"""
        if hasattr(router, '_deferred_routes'):
            include_prefix = kwargs.get('prefix', '')
            sub_router_prefix = getattr(router, 'prefix', '')
            combined_prefix = f"{include_prefix}{sub_router_prefix}".replace('//', '/')
            
            for path, method, func, route_kwargs in router._deferred_routes:
                if not path or path == '':
                    full_path = combined_prefix
                elif path.startswith('/'):
                    full_path = f"{combined_prefix}{path}".replace('//', '/')
                else:
                    full_path = f"{combined_prefix}/{path}".replace('//', '/')
                self._deferred_routes.append((full_path, method, func, route_kwargs))
        else:
            super().include_router(router, **kwargs)
    
    def api_route(self, path: str, **kwargs: Any) -> Callable:
        """Override to defer route registration"""
        methods = kwargs.get("methods", ["GET"])
        
        def decorator(func: Callable) -> Callable:
            self._deferred_routes.append((path, methods[0] if isinstance(methods, list) else methods, func, kwargs))
            return func
        
        return decorator
    
    def get(self, path: str, **kwargs: Any) -> Callable:
        """Defer GET route registration"""
        kwargs["methods"] = ["GET"]
        return self.api_route(path, **kwargs)
    
    def post(self, path: str, **kwargs: Any) -> Callable:
        """Defer POST route registration"""
        kwargs["methods"] = ["POST"]
        return self.api_route(path, **kwargs)
    
    def put(self, path: str, **kwargs: Any) -> Callable:
        """Defer PUT route registration"""
        kwargs["methods"] = ["PUT"]
        return self.api_route(path, **kwargs)
    
    def delete(self, path: str, **kwargs: Any) -> Callable:
        """Defer DELETE route registration"""
        kwargs["methods"] = ["DELETE"]
        return self.api_route(path, **kwargs)
    
    def patch(self, path: str, **kwargs: Any) -> Callable:
        """Defer PATCH route registration"""
        kwargs["methods"] = ["PATCH"]
        return self.api_route(path, **kwargs)
    
    def finalize(self, profile_manager: Any = None) -> FastAPIRouter:
        """Create actual FastAPI router with filtered routes
        
        Called by RouteManager after capability filtering.
        Returns a real FastAPI router with routes properly registered.
        """
        real_router = FastAPIRouter(
            prefix=self.prefix if hasattr(self, 'prefix') else "",
            tags=self.tags if hasattr(self, 'tags') else None,
            dependencies=self.dependencies if hasattr(self, 'dependencies') else None,
            responses=self.responses if hasattr(self, 'responses') else None,
        )
        
        for path, method, func, kwargs in self._deferred_routes:
            required_caps = getattr(func, '_required_capabilities', None)
            
            if not required_caps or not profile_manager:
                real_router.add_api_route(path, func, **kwargs)
            elif profile_manager.has_capability(required_caps):
                real_router.add_api_route(path, func, **kwargs)
        
        return real_router


__all__ = ["APIRouter", "capability"]
