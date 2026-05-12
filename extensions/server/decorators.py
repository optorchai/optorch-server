"""Capability-based route decorators"""

from typing import Callable


def capability(*required_capabilities: str):
    """Mark route with required capabilities for profile-based filtering
    
    This is a metadata marker, not a runtime validator.
    RouteManager checks capabilities at registration time and skips routes
    that don't match the current server profile.
    
    Usage:
        @router.post("/evaluate")
        @capability("orchestrator", "llm")
        async def execute_evaluation():
            ...
    
    Args:
        *required_capabilities: One or more required capabilities
    """
    def decorator(func: Callable):
        func._required_capabilities = set(required_capabilities)
        return func
    return decorator
