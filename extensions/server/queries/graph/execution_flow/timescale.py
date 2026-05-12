"""execution flow query - timescale backend - traces node execution path for a session"""
from typing import Dict,  Any, Optional
from datetime import datetime

from extensions.server.queries.graph.base import NodeGraphBase


class NodeGraphExecutionFlow(NodeGraphBase):
    """timescale execution flow query - shows session execution path through nodes"""

    @property
    def query_name(self) -> str:
        return "graph.execution_flow"
    
    async def execute(
        self,
        session_id: str,
        start_date: Optional[datetime] = None,
        end_date: Optional[datetime] = None,
        **kwargs: Any
    ) -> Dict[str, Any]:
        """
        trace execution flow for a session - shows which nodes executed in order
        
        returns:
            {
                "session_id": str,
                "nodes": [list of nodes executed in order],
                "execution_timeline": [timestamped node executions],
                "total_nodes": int,
                "start_time": str,
                "end_time": str
            }
        """
        query = """
            SELECT 
                node_name,
                timestamp_ms,
                type,
                payload
            FROM events
            WHERE session_id = :session_id
              AND type IN ('node.enter', 'node.exit', 'node.error')
            ORDER BY timestamp_ms ASC
        """
        
        rows = await self.store.fetch_all(
            query=query,
            values={"session_id": session_id}
        )
        
        if not rows:
            return {
                "session_id": session_id,
                "nodes": [],
                "execution_timeline": [],
                "total_nodes": 0,
                "start_time": None,
                "end_time": None
            }
        
        nodes_visited = []
        timeline = []
        
        for row in rows:
            node_name = row["node_name"]
            if node_name and node_name not in nodes_visited:
                nodes_visited.append(node_name)
            
            timeline.append({
                "node_name": node_name,
                "type": row["type"],
                "timestamp": datetime.fromtimestamp(row["timestamp_ms"] / 1000).isoformat()
            })
        
        start_time = datetime.fromtimestamp(rows[0]["timestamp_ms"] / 1000).isoformat()
        end_time = datetime.fromtimestamp(rows[-1]["timestamp_ms"] / 1000).isoformat()
        
        return {
            "session_id": session_id,
            "nodes": nodes_visited,
            "execution_timeline": timeline,
            "total_nodes": len(nodes_visited),
            "start_time": start_time,
            "end_time": end_time
        }
