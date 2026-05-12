"""API documentation routes - Swagger UI with custom theme"""
from fastapi import Request, APIRouter
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from pathlib import Path

router = APIRouter(tags=["Documentation"])

DOCS_DIR = Path(__file__).parent.parent / "ui" / "docs"


@router.get(
    "/docs",
    response_class=HTMLResponse,
    summary="API Documentation",
    description="Swagger UI documentation with custom theme and authentication support"
)
async def get_docs():
    """Serve the main documentation HTML page"""
    docs_file = DOCS_DIR / "documentation.html"
    if not docs_file.exists():
        return HTMLResponse(content="<h1>Documentation not found</h1>", status_code=404)
    
    return FileResponse(docs_file)


@router.get(
    "/docs/versions.json",
    response_class=JSONResponse,
    summary="Get API versions",
    description="Returns list of available API versions"
)
async def get_versions():
    """Serve versions.json"""
    versions_file = DOCS_DIR / "versions.json"
    if not versions_file.exists():
        return JSONResponse({"versions": ["v1"]})
    
    import json
    with open(versions_file) as f:
        return json.load(f)


@router.get(
    "/docs/assets/{filename}",
    summary="Get documentation assets",
    description="Serve CSS, SVG, and other static assets for documentation UI"
)
async def get_asset(filename: str):
    """Serve documentation assets (CSS, SVG, etc.)"""
    asset_file = DOCS_DIR / "assets" / filename
    if not asset_file.exists():
        return HTMLResponse(content="Asset not found", status_code=404)
    
    return FileResponse(asset_file)


@router.get(
    "/docs/{version}/openapi.json",
    response_class=JSONResponse,
    summary="Get OpenAPI spec",
    description="Returns OpenAPI specification for the specified API version"
)
async def get_openapi_spec(version: str, request: Request):
    """Serve OpenAPI spec for a specific version"""
    from fastapi.openapi.utils import get_openapi
    
    app = request.app
    
    # Always regenerate to avoid caching issues
    openapi_schema = get_openapi(
        title="Optorch Orchestration API",
        version=version,
        description="Zero-LangChain AI orchestration framework with event-driven workflows",
        routes=app.routes,
        openapi_version="3.0.3"
    )
    
    # Add security scheme for bearer token
    if "components" not in openapi_schema:
        openapi_schema["components"] = {}
    if "securitySchemes" not in openapi_schema["components"]:
        openapi_schema["components"]["securitySchemes"] = {}
    
    openapi_schema["components"]["securitySchemes"]["bearerAuth"] = {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT",
        "description": "JWT bearer token from /auth/login"
    }
    
    # Apply security to all operations by default
    if "security" not in openapi_schema:
        openapi_schema["security"] = [{"bearerAuth": []}]
    
    return openapi_schema
