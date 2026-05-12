"""prompt management REST endpoints"""
from typing import Optional
from datetime import datetime
from fastapi import Query, Depends, Body, Request
from extensions.server.routing import APIRouter, capability
from extensions.server.models.prompt import (
    PromptRegisterRequest,
    PromptVersionListResponse,
    PromptDetailResponse
)
from optorch.storage.manager import StorageManager
from optorch.errors import HTTPError


router = APIRouter(prefix="/prompts", tags=["Prompts"])


def get_storage(request: Request) -> StorageManager:
    """get shared storage from app state"""
    if not hasattr(request.app.state, "storage"):
        raise HTTPError("Storage not configured", status_code=500)
    return request.app.state.storage


@capability("read_db")
@router.get("/", response_model=PromptVersionListResponse)
async def get_prompt_versions(
    name: Optional[str] = Query(None, description="Filter by prompt name"),
    limit: int = Query(100, ge=1, le=1000, description="Max results"),
    offset: int = Query(0, ge=0, description="Pagination offset"),
    storage: StorageManager = Depends(get_storage)
) -> PromptVersionListResponse:
    """
    Get list of prompt versions
    
    Returns all prompt versions with metadata, optionally filtered by name.
    Use for prompt discovery, version browsing, and A/B test setup.
    
    **Query Parameters:**
    - name: Filter to specific prompt (optional)
    - limit: Maximum results to return (default: 100, max: 1000)
    - offset: Pagination offset (default: 0)
    
    **Returns:**
    List of prompt versions with id, name, version, content, metadata, timestamps
    """
    result = await storage.query("prompt.versions", name=name, limit=limit, offset=offset)
    return PromptVersionListResponse(**result)


@capability("read_db")
@router.get("", response_model=PromptVersionListResponse, include_in_schema=False)
async def get_prompt_versions_no_slash(
    name: Optional[str] = Query(None),
    limit: int = Query(100, ge=1, le=1000),
    offset: int = Query(0, ge=0),
    storage: StorageManager = Depends(get_storage)
) -> PromptVersionListResponse:
    return await get_prompt_versions(name, limit, offset, storage)


@capability("write_db")
@router.post("/")
async def register_prompt(
    prompt: PromptRegisterRequest = Body(...),
    storage: StorageManager = Depends(get_storage)
) -> dict:
    """
    Register new prompt version
    
    Creates a new prompt version for A/B testing, prompt iteration, or deployment.
    Duplicate name+version combinations are ignored (idempotent).
    
    **Request Body:**
    - name: Unique prompt identifier (e.g., "tariff_greeting")
    - version: Version string (e.g., "v1", "2024-01-22")
    - template: Prompt template content
    - variables: Optional list of template variable names
    - description: Optional human-readable description
    - tags: Optional categorization tags
    
    **Returns:**
    - id + status "created" if new version registered
    - status "already_exists" if name+version duplicate
    
    **Example:**
    ```json
    {
        "name": "product_discovery",
        "version": "v2",
        "template": "Find products matching: {query}",
        "variables": ["query"],
        "description": "Enhanced semantic search prompt",
        "tags": ["discovery", "v2-test"]
    }
    ```
    """
    import json
    
    query = """
        INSERT INTO prompts (name, version, content, metadata, created_at)
        VALUES (:name, :version, :content, :metadata, :created_at)
        ON CONFLICT (name, version) DO NOTHING
        RETURNING id
    """
    
    metadata = {
        "variables": prompt.variables or [],
        "description": prompt.description,
        "tags": prompt.tags or []
    }
    
    try:
        result = await storage.fetch_one(
            query=query,
            values={
                "name": prompt.name,
                "version": prompt.version,
                "content": prompt.template,
                "metadata": json.dumps(metadata),
                "created_at": datetime.utcnow()
            }
        )
        
        if result:
            return {"id": result["id"], "status": "created"}
        else:
            return {"status": "already_exists"}
    except Exception as e:
        raise HTTPError(str(e), status_code=500, details={"prompt": prompt.name})


@capability("write_db")
@router.post("", include_in_schema=False)
async def register_prompt_no_slash(
    prompt: PromptRegisterRequest = Body(...),
    storage: StorageManager = Depends(get_storage)
) -> dict:
    return await register_prompt(prompt, storage)


@capability("read_db")
@router.get("/{name}", response_model=PromptDetailResponse)
async def get_prompt_detail(
    name: str,
    version: Optional[str] = Query(None, description="Specific version (defaults to latest)"),
    storage: StorageManager = Depends(get_storage)
) -> PromptDetailResponse:
    """
    Get specific prompt details
    
    Retrieves full details for a named prompt, optionally filtered to specific version.
    Returns latest version if version parameter omitted.
    
    **Path Parameters:**
    - name: Prompt name identifier
    
    **Query Parameters:**
    - version: Specific version string (optional, defaults to latest)
    
    **Returns:**
    Full prompt details including id, name, version, content, metadata, created_at
    
    **Example:**
    - GET `/prompts/tariff_greeting` - returns latest version
    - GET `/prompts/tariff_greeting?version=v2` - returns v2 specifically
    """
    result = await storage.query("prompt.versions", name=name, limit=1000, offset=0)
    prompts = result.get("prompts", [])
    
    if not prompts:
        raise HTTPError("Prompt not found", status_code=404, details={"prompt_name": name})
    
    if version:
        prompt = next((p for p in prompts if p["version"] == version), None)
        if not prompt:
            raise HTTPError("Version not found", status_code=404, details={"prompt_name": name, "version": version})
        return PromptDetailResponse(**prompt)
    
    return PromptDetailResponse(**prompts[0])
