"""Server extension - optional FastAPI REST API for orchestrator"""

from pathlib import Path
from optorch.storage.queries.registry import QueryRegistry
from extensions.server.manager import ServerManager


def register_server_queries(query_registry: QueryRegistry) -> None:
    """Register server queries (graph visualization) with QueryRegistry
    
    Auto-discovers query implementations from extensions/server/queries/.
    
    Args:
        query_registry: Optorch QueryRegistry instance
    """
    queries_path = Path(__file__).parent / "queries"
    query_registry.discover_from_path(queries_path, "extensions.server.queries")


__all__ = ["ServerManager", "register_server_queries"]
