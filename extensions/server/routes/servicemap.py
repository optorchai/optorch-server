"""Service map and proxy routes for microservice architecture"""

from fastapi import APIRouter, Request
from fastapi.responses import Response
import httpx
from optorch.logging import get_logger
from optorch.errors.exceptions import HTTPError

router = APIRouter()
logger = get_logger(__name__)


@router.get("/service-map")
async def get_service_map(request: Request) -> dict[str, str]:
    """Get microservice routing map for distributed deployments
    
    Returns:
        Dict mapping route prefixes to service URLs
        Example: {"/analytics": "https://analytics.optorch.io:8001"}
    """
    from extensions.server.config import ServerConfig
    
    config_manager = request.app.state.config_manager
    server_config = ServerConfig(**config_manager.get("optorch.server", {}))
    
    return server_config.service_map


@router.api_route("/{service_prefix:path}/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def proxy_to_service(service_prefix: str, path: str, request: Request) -> Response:
    """Proxy requests to remote microservices based on service_map configuration
    
    Only proxies if service_map has matching prefix and route not handled locally.
    Falls through to local routes if service_map not configured.
    
    Args:
        service_prefix: First segment like 'analytics', 'budget'
        path: Remaining path segments
        request: FastAPI request
    
    Returns:
        Proxied response from remote service
    
    Raises:
        HTTPError: 502 if proxy fails, 404 if no service_map entry
    """
    from extensions.server.config import ServerConfig
    
    config_manager = request.app.state.config_manager
    server_config = ServerConfig(**config_manager.get("optorch.server", {}))
    route_prefix = f"/{service_prefix}"
    remote_url = server_config.service_map.get(route_prefix)
    
    if not remote_url:
        raise HTTPError(f"Route not found and no proxy configured for {route_prefix}", status_code=404)
    
    target_url = f"{remote_url}{route_prefix}/{path}"
    if request.url.query:
        target_url = f"{target_url}?{request.url.query}"
    
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            headers = dict(request.headers)
            headers.pop("host", None)
            body = await request.body()
            
            response = await client.request(
                method=request.method,
                url=target_url,
                headers=headers,
                content=body
            )
            
            logger.debug(f"Proxied {request.method} {route_prefix}/{path} -> {target_url} [{response.status_code}]")
            
            return Response(
                content=response.content,
                status_code=response.status_code,
                headers=dict(response.headers)
            )
    
    except Exception as e:
        logger.error(f"Proxy failed for {target_url}: {e}")
        raise HTTPError(f"Failed to proxy request to {route_prefix}: {str(e)}", status_code=502)
