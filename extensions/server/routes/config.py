"""Admin API routes for distributed config management"""
from fastapi import Depends, Query
from typing import Any, Dict
from pathlib import Path
from pydantic import BaseModel
from optorch.logging import get_logger
from optorch.errors import HTTPError
from extensions.server.dependencies import get_orchestrator
from extensions.server.routing import APIRouter, capability

logger = get_logger(__name__)

router = APIRouter(prefix="/admin/config")


def _require_model(config_manager, namespace: str) -> type[BaseModel]:
    """Get model for namespace or raise 400"""
    if namespace not in config_manager._models:
        raise HTTPError(
            f"No validation model registered for namespace '{namespace}'. "
            f"Cannot save unvalidated config. Available namespaces: {', '.join(config_manager._models.keys())}",
            status_code=400
        )
    return config_manager._models[namespace]


def _validate_config(model_class: type[BaseModel], config_data: dict, namespace: str) -> None:
    """Validate config against model or raise 400 - does NOT transform data"""
    if len(config_data) == 1:
        only_key = list(config_data.keys())[0]
        only_value = config_data[only_key]
        
        if isinstance(only_value, dict) and hasattr(model_class, 'model_fields'):
            expected_fields = set(model_class.model_fields.keys())
            nested_fields = set(only_value.keys())
            
            if nested_fields & expected_fields and not (set(config_data.keys()) & expected_fields):
                raise HTTPError(
                    f"Config appears to be wrapped in '{only_key}' key. "
                    f"Send config fields directly at root level, not nested under '{only_key}'.",
                    status_code=400
                )
    
    try:
        model_class(**config_data)
    except Exception as e:
        raise HTTPError(
            f"Config validation failed for namespace '{namespace}': {str(e)}",
            status_code=400
        )


@capability("admin_ui")
@router.put("/transport/active")
async def update_transport_selection(
    selection: str = Query(..., description="Transport provider"),
    orchestrator = Depends(get_orchestrator)
):
    """Change active transport provider
    
    Broadcasts change using CURRENT transport, then switches to new one.
    """
    transport_registry = orchestrator.container.transport_registry
    available_providers = transport_registry.list_available()
    enabled = [p["name"] for p in available_providers if p["enabled"]]
    
    if not enabled:
        raise HTTPError("No transport providers enabled in config", status_code=500)
    
    if selection not in enabled:
        raise HTTPError(f"Invalid or disabled transport: {selection}. Available: {', '.join(enabled)}", status_code=400)
    
    ack = await orchestrator.container.config_manager.publish("optorch.transport.active_provider", selection)
    
    if ack.status != "ok":
        raise HTTPError(f"Transport publish failed: {ack.error}", status_code=500)
    
    return {
        "status": ack.status,
        "active_provider": selection,
        "transport": ack.model_dump(exclude_none=True)
    }


@capability("admin_ui")
@router.put("/{namespace}")
async def update_config_namespace(
    namespace: str,
    config_data: Dict[str, Any],
    orchestrator = Depends(get_orchestrator)
):
    """Update entire config namespace and broadcast to all servers"""
    config_manager = orchestrator.container.config_manager
    model_class = _require_model(config_manager, namespace)
    _validate_config(model_class, config_data, namespace)
    
    try:
        ack = await config_manager.publish(namespace, config_data)
        
        if ack.status != "ok":
            raise HTTPError(f"Transport publish failed: {ack.error}", status_code=500)
        
        return {
            "status": ack.status,
            "namespace": namespace,
            "model": model_class.__name__,
            "transport": ack.model_dump(exclude_none=True)
        }
    except HTTPError:
        raise
    except Exception as e:
        logger.error(f"Failed to publish config save: {e}", exc_info=True)
        raise HTTPError(str(e), status_code=500)


@capability("admin_ui")
@router.put("/{namespace}/{key_path:path}")
async def update_config_key(
    namespace: str,
    key_path: str,
    value: Any = Query(..., description="Config value to set"),
    orchestrator = Depends(get_orchestrator)
):
    """Update specific config key and broadcast to all servers
    
    Example: PUT /admin/config/optorch/llms.default.temperature?value=0.7
    
    For deep nested keys (3+ levels), skips model validation to allow
    setting optional nested config without requiring full model.
    """
    config_manager = orchestrator.container.config_manager
    key_depth = len(key_path.split('.'))
    require_validation = key_depth < 3
    
    model_class = None
    if require_validation:
        model_class = _require_model(config_manager, namespace)
    
    try:
        current_config = config_manager.get(namespace) or {}
        
        from optorch.config.merger import deep_set, deep_get
        deep_set(current_config, key_path, value)
        
        if require_validation and model_class:
            _validate_config(model_class, current_config, namespace)
        
        ack = await config_manager.publish(namespace, current_config)
        
        if ack.status != "ok":
            raise HTTPError(f"Transport publish failed: {ack.error}", status_code=500)
        
        return {
            "status": ack.status,
            "key_path": f"{namespace}.{key_path}",
            "validated_value": deep_get(current_config, key_path),
            "model": model_class.__name__ if model_class else "unvalidated",
            "transport": ack.model_dump(exclude_none=True)
        }
    except HTTPError:
        raise
    except Exception as e:
        logger.error(f"Failed to update config key: {e}", exc_info=True)
        raise HTTPError(str(e), status_code=500)


@capability("admin_ui")
@router.post("/{namespace}/validate")
async def validate_config(
    namespace: str,
    config_data: Dict[str, Any],
    orchestrator = Depends(get_orchestrator)
):
    """Validate config against schema without saving  
    Returns validation errors if any.
    """
    config_manager = orchestrator.container.config_manager
    model_class = _require_model(config_manager, namespace)
    
    try:
        validated = model_class(**config_data)
        return {
            "valid": True,
            "namespace": namespace,
            "model": model_class.__name__,
            "validated_data": validated.model_dump(exclude_none=True, exclude_unset=True)
        }
    except HTTPError as e:
        return {
            "valid": False,
            "namespace": namespace,
            "model": model_class.__name__,
            "errors": [{
                "type": "validation_error",
                "message": e.message
            }]
        }


@capability("admin_ui")
@router.get("/schema")
async def get_config_schema(namespace: str | None = None):
    """Get auto-generated JSON schema for all optorch and extension configs
    
    Args:
        namespace: Optional namespace to filter schema (e.g., 'optorch', 'llms')
                  Will try exact match first, then optorch.{namespace}
    """
    schema_file = Path(__file__).parent.parent.parent.parent / "docs" / "config-schema.json"
    if not schema_file.exists():
        from optorch.config.schema_generator import generate_schemas
        generate_schemas()
    
    if not schema_file.exists():
        raise HTTPError("Config schema file not found and generation failed", status_code=500)
    
    with open(schema_file) as f:
        import json
        full_schema = json.load(f)
    
    if namespace:
        result = None
        parent_schema = None
        
        if namespace in full_schema:
            result = full_schema[namespace]
        elif f"optorch.{namespace}" in full_schema:
            result = full_schema[f"optorch.{namespace}"]
        elif "optorch" in full_schema:
            optorch_schema = full_schema["optorch"]
            if "properties" in optorch_schema and namespace in optorch_schema["properties"]:
                result = optorch_schema["properties"][namespace]
                parent_schema = optorch_schema
        
        if result is None:
            raise HTTPError(f"Schema not found for namespace: {namespace}", status_code=404)
        
        defs = parent_schema.get("$defs", {}) if parent_schema else {}
        
        def resolve_ref(ref_str: str) -> dict | None:
            if ref_str.startswith("#/$defs/"):
                return defs.get(ref_str.split("/")[-1])
            return None
        
        for option in result.get("anyOf", []):
            if resolved := resolve_ref(option.get("$ref", "")):
                if "properties" in resolved:
                    for prop_schema in resolved["properties"].values():
                        if item_schema := resolve_ref(prop_schema.get("$ref", "")):
                            return {namespace: item_schema, "$defs": defs}
                        for prop_option in prop_schema.get("anyOf", []):
                            if item_schema := resolve_ref(prop_option.get("$ref", "")):
                                return {namespace: item_schema, "$defs": defs}
                
                return {namespace: resolved, "$defs": defs}
        
        return {namespace: result, "$defs": defs} if defs else {namespace: result}
    
    return full_schema


@capability("admin_ui")
@router.post("/schema/regenerate")
async def regenerate_config_schema():
    """Force regeneration of config schema documentation"""
    from optorch.config.schema_generator import generate_schemas
    try:
        schema_count = generate_schemas()
        return {"status": "success", "schemas_generated": schema_count}
    except Exception as e:
        logger.error(f"Schema generation failed: {e}", exc_info=True)
        return {"status": "error", "message": str(e)}


@capability("admin_ui")
@router.get("/{namespace}")
async def get_config_namespace(
    namespace: str,
    orchestrator = Depends(get_orchestrator)
):
    """Get current config for namespace or nested key path"""
    try:
        config = orchestrator.container.config_manager.get(namespace)
        return {
            "namespace": namespace,
            "config": config
        }
    except Exception:
        if '.' not in namespace:
            try:
                config = orchestrator.container.config_manager.get(f"optorch.{namespace}")
                return {
                    "namespace": namespace,
                    "config": config
                }
            except Exception:
                pass
        
        raise HTTPError(f"Namespace not found: {namespace}", status_code=404)