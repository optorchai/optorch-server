"""Health and monitoring routes"""
from fastapi import Depends
from pydantic import BaseModel
from typing import Optional
from extensions.server.routing import APIRouter
from extensions.server.models.health_response import HealthResponse
from extensions.server.models.api_info_response import ApiInfoResponse
from extensions.server.dependencies import get_health_controller, get_orchestrator
from extensions.server.controllers.health_controller import HealthController
from extensions.server.decorators import capability
from optorch.transport import UITransportRegistry

router = APIRouter()


class BackendHealthRequest(BaseModel):
    type: str
    host: Optional[str] = None
    port: Optional[int] = None
    db: Optional[int] = None
    bootstrap_servers: Optional[str] = None
    dir: Optional[str] = None
    probe_id: Optional[str] = None


@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Health check endpoint",
    description="""Check if the API service is running and healthy.
    
    Returns basic status information. Use this for:
    - Kubernetes/Docker health probes
    - Load balancer health checks
    - Uptime monitoring
    - Verifying service availability before sending requests
    
    Returns HTTP 200 with status details if healthy.
    """
)
async def health(controller: HealthController = Depends(get_health_controller)):
    """Basic health check endpoint"""
    return await controller.health_check()


@router.post(
    "/health/backend",
    summary="Backend transport health check",
    description="Health check endpoint for backend connectivity testing"
)
async def backend_health(
    request: BackendHealthRequest,
    orchestrator = Depends(get_orchestrator)
):
    """Backend-specific health check for UI transport"""
    registry = orchestrator.container.transport_registry
    kwargs = {k: v for k, v in request.model_dump().items() if v is not None and k != "type"}
    return await registry.check_health(request.type, **kwargs)


@router.get(
    "/health/backend/providers",
    summary="List available transport providers",
    description="Get list of all transport providers with enabled status"
)
@capability("admin_ui")
async def list_backend_providers(
    orchestrator = Depends(get_orchestrator)
):
    """List all transport providers and their enabled status"""
    registry = orchestrator.container.transport_registry
    return {"providers": registry.list_available()}


@router.get(
    "/",
    response_model=ApiInfoResponse,
    summary="API information and welcome",
    description="""Get service metadata and discover available endpoints.
    
    Returns:
    - API version and build information
    - Service name and description
    - Links to documentation (/docs, /redoc)
    - Available endpoint overview
    
    This is the root landing page - a good starting point for API exploration.
    """
)
async def root(controller: HealthController = Depends(get_health_controller)):
    """Root endpoint with API info"""
    return await controller.api_info()
