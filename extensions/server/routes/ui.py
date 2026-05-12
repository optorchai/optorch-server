"""UI routes - manifests, extensions, settings, etc"""
from typing import List
from fastapi import Depends
from extensions.server.routing import APIRouter, capability
from extensions.server.dependencies import get_ui_manager

router = APIRouter(prefix="/ui")


@capability("admin_ui")
@router.get(
    "/manifest",
    summary="Get UI manifest",
    description="""Returns aggregated UI manifest from all registered extensions.
    
    Combines navigation items, component definitions, and routes from all extensions
    that have registered pages via the PageManager.
    
    Frontend merges this with the static /config/manifest.json to build complete UI.
    """
)
async def get_ui_manifest(
    ui_manager = Depends(get_ui_manager)
):
    """aggregated manifest from all registered pages and dashboards"""
    return {
        **ui_manager.pages.get_manifests(),
        "default_dashboards": ui_manager.dashboards.get_manifests()
    }


@capability("admin_ui")
@router.get(
    "/widgets",
    summary="Get widget manifest URLs",
    description="""Returns list of widget manifest URLs for auto-discovery.
    
    Extensions register their widget directories via `manager.widgets.discover(path, extension_name)`.
    Each widget bundle contains a manifest.json file describing the widget.
    
    Frontend fetches each manifest URL to discover available widgets.
    """
)
async def get_widgets(
    ui_manager = Depends(get_ui_manager)
) -> List[str]:
    """widget manifest URLs"""
    return ui_manager.widgets.get_manifest_urls()


@capability("admin_ui")
@router.get(
    "/extensions/chat",
    summary="Discover chat extensions",
    description="""Returns list of available chat extensions for the UI.
    
    Extensions are React plugins that customize chat widget behavior for specific event types.
    Frontend automatically discovers and installs these extensions.
    
    **How it works:**
    1. Frontend calls this endpoint on startup
    2. Receives list of available extension manifests
    3. Downloads and registers extensions
    4. Extensions handle backend events (message.download, action_required, etc)
    
    **Manifest Fields:**
    - `id` - Unique extension identifier
    - `name` - Display name
    - `description` - What the extension does
    - `version` - Semantic version (e.g., "1.0.0")
    - `url` - URL to extension package:
        - Simple: "https://cdn.example.com/extension.js" (single file)
        - Packaged: "https://cdn.example.com/extension.zip" (multiple files)
        - Server-relative: "/static/extensions/download.js" or "/static/extensions/download.zip"
    - `entry_point` - For .zip packages, which .js file to load (e.g., "index.js", "dist/main.js")
                      Ignored for .js URLs. Defaults to "index.js" if omitted
    - `author` - Optional author name
    - `icon` - Optional icon URL
    - `tags` - Optional categorization tags
    """
)
async def get_chat_extensions(
    ui_manager = Depends(get_ui_manager)
):
    """get available chat extensions from registry"""
    return {"extensions": ui_manager.chat_extensions.get_manifests()}


@capability("admin_ui")
@router.get(
    "/extensions/chat/{extension_id}/download",
    summary="Download chat extension",
    description="""Download JavaScript file for a registered chat extension.
    
    Used for internal extensions that don't have external hosting.
    Returns 404 if extension not found or has no source_path.
    """
)
async def download_chat_extension(
    extension_id: str,
    ui_manager = Depends(get_ui_manager)
):
    """serve internal extension JS file with JSX transpilation"""
    from fastapi.responses import Response
    from pathlib import Path
    from optorch.errors.exceptions import HTTPError
    import os
    
    if not ui_manager.chat_extensions.has(extension_id):
        raise HTTPError(f"Extension {extension_id} not found", status_code=404)
    
    manifest = ui_manager.chat_extensions.registry.get(extension_id)
    
    if not manifest.source_path:
        raise HTTPError(f"Extension {extension_id} is externally hosted", status_code=404)
    
    source_path = Path(manifest.source_path)
    if not source_path.is_absolute():
        source_path = Path(os.getcwd()) / source_path
    
    if not source_path.exists():
        raise HTTPError(f"Extension source file not found: {source_path}", status_code=404)
    
    code = source_path.read_text()
    
    return Response(content=code, media_type="text/babel")
