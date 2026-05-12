"""Node graph visualization REST endpoints - capability-based access"""
from typing import Optional
from datetime import datetime
from fastapi import Query, Depends
from extensions.server.routing import APIRouter
from extensions.server.decorators import capability
from extensions.server.dependencies import get_storage
from optorch.storage.manager import StorageManager
from extensions.analytics.models import (
    GraphNodesResponse,
    ExecutionFlowResponse
)

router = APIRouter(prefix="/graph")


@capability("read_db")
@router.get("/nodes", response_model=GraphNodesResponse)
async def get_node_graph(
    start_date: Optional[datetime] = Query(None),
    end_date: Optional[datetime] = Query(None),
    storage: StorageManager = Depends(get_storage)
) -> GraphNodesResponse:
    """Get node graph visualization data
    
    Returns node registry with routing information formatted for react-flow.
    
    Returns:
        {
            "nodes": [...],
            "edges": [...],
            "phases": [...]
        }
    """
    result = await storage.query("graph.node_graph", start_date=start_date, end_date=end_date)
    return GraphNodesResponse(**result)


@capability("read_db")
@router.get("/execution-flow", response_model=ExecutionFlowResponse)
async def get_execution_flow(
    session_id: str = Query(..., description="Session ID"),
    storage: StorageManager = Depends(get_storage)
) -> ExecutionFlowResponse:
    """Get execution flow graph for a specific session
    
    Shows the actual node traversal path during session execution.
    
    Returns:
        {
            "session_id": str,
            "nodes": list,
            "edges": list,
            "timeline": list
        }
    """
    result = await storage.query("graph.execution_flow", session_id=session_id)
    return ExecutionFlowResponse(**result)
