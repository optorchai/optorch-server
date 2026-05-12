"""registry inspection routes"""
from fastapi import Depends
from typing import Dict, List, Any
from extensions.server.routing import APIRouter, capability
from extensions.server.dependencies import get_orchestrator
from optorch.estrator import Orchestrator
from optorch.logging import get_logger

logger = get_logger(__name__)
router = APIRouter()


@capability("admin_ui")
@router.get(
    "/admin/registries/transformers",
    summary="List registered transformers",
    description="Get all transformers registered in the transformer registry"
)
async def list_transformers(orchestrator: Orchestrator = Depends(get_orchestrator)) -> Dict[str, List[Dict[str, Any]]]:
    """list all registered transformers"""
    if not orchestrator.container or not orchestrator.container.node_controller:
        return {"transformers": []}
    
    controller = orchestrator.container.node_controller
    registry = controller._transformer_registry._registry
    
    transformers = []
    for name in registry._items.keys():
        transformer_class = registry._items[name]
        transformers.append({
            "name": name,
            "class": transformer_class.__name__,
            "module": transformer_class.__module__,
            "has_streaming_patterns": hasattr(transformer_class, "STREAMING_PATTERNS"),
        })
    
    return {"transformers": transformers}


@capability("admin_ui")
@router.get(
    "/admin/registries/intents",
    summary="List registered intents",
    description="Get all intent handlers registered in the intent registry"
)
async def list_intents(orchestrator: Orchestrator = Depends(get_orchestrator)) -> Dict[str, List[Dict[str, Any]]]:
    """list all registered intent handlers"""
    if not orchestrator.container or not orchestrator.container.node_controller:
        return {"intents": []}
    
    controller = orchestrator.container.node_controller
    registry = controller._intent_registry
    
    intents = []
    for name in registry._items.keys():
        handler = registry._items[name]
        intents.append({
            "name": name,
            "class": handler.__class__.__name__,
            "module": handler.__class__.__module__,
        })
    
    return {"intents": intents}
