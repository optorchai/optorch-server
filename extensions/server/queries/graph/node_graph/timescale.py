"""node graph query - timescale backend - fetches node registry for react-flow visualization"""
from typing import Dict,  Any, Optional
from datetime import datetime
import json

from extensions.server.queries.graph.base import NodeGraphBase


class NodeGraphNodeGraph(NodeGraphBase):
    """timescale node graph query - fetches all registered nodes with routing info for graph visualization"""

    @property
    def query_name(self) -> str:
        return "graph.node_graph"
    
    async def execute(
        self,
        start_date: Optional[datetime] = None,
        end_date: Optional[datetime] = None,
        **kwargs: Any
    ) -> Dict[str, Any]:
        """
        get all nodes from registry formatted for react-flow visualization
        
        returns:
            {
                "nodes": [node data with labels/positions],
                "edges": [routing edges between nodes],
                "phases": [unique phase list]
            }
        """
        query = """
            SELECT 
                node_name,
                phase,
                domain,
                entity_type,
                class_name,
                default_route,
                route_conditions,
                tools,
                llm_model,
                streaming,
                prompts,
                intents,
                metadata,
                parent_nodes,
                execution_order,
                registered_at,
                updated_at
            FROM node_registry
            ORDER BY phase NULLS LAST, node_name
        """
        
        rows = await self.store.fetch_all(query=query)
        
        nodes = []
        edges = []
        
        for row in rows:
            node_name = row["node_name"]
            
            # extract routing calls from route_conditions
            route_conditions = row["route_conditions"]
            routing_calls = []
            if route_conditions:
                try:
                    if isinstance(route_conditions, str):
                        rc_data = json.loads(route_conditions)
                    elif isinstance(route_conditions, dict):
                        rc_data = route_conditions
                    else:
                        rc_data = {}
                    routing_calls = rc_data.get("calls", [])
                except Exception:
                    pass
            
            node_data = {
                "id": node_name,
                "label": node_name,
                "phase": row["phase"],
                "domain": row["domain"],
                "entity_type": row["entity_type"],
                "class_name": row["class_name"],
                "tools": row["tools"],
                "llm_model": row["llm_model"],
                "streaming": row["streaming"],
                "prompts": row["prompts"],
                "intents": row["intents"],
                "metadata": row["metadata"],
                "parent_nodes": row["parent_nodes"] or [],
                "execution_order": row["execution_order"],
                "routing_calls": routing_calls
            }
            nodes.append(node_data)
            
            # build edges from default_route
            default_route = row["default_route"]
            if default_route:
                edges.append({
                    "source": node_name,
                    "target": default_route,
                    "type": "default"
                })
            
            # build edges from route_conditions
            if route_conditions:
                if isinstance(route_conditions, str):
                    route_conditions = json.loads(route_conditions)
                
                # direct calls
                calls = route_conditions.get("calls", []) if isinstance(route_conditions, dict) else []
                for target in calls:
                    edges.append({
                        "source": node_name,
                        "target": target,
                        "type": "call"
                    })
                
                # conditional routes
                conditions = route_conditions.get("conditions", []) if isinstance(route_conditions, dict) else []
                for cond in conditions:
                    if not isinstance(cond, dict):
                        continue
                    target = cond.get("then")
                    if target and not target.startswith("result.get"):
                        edges.append({
                            "source": node_name,
                            "target": target,
                            "type": "conditional"
                        })
        
        return {
            "nodes": nodes,
            "edges": edges,
            "phases": list(set(row["phase"] for row in rows if row["phase"]))
        }
