"""secrets management API - set/list secret keys"""
from fastapi import APIRouter, Depends, Body
from typing import List, Dict, Any, Optional
from pydantic import BaseModel
from optorch.logging import get_logger
from extensions.server.dependencies import get_orchestrator
from extensions.server.decorators import capability
from optorch.errors import HTTPError

logger = get_logger(__name__)
router = APIRouter(prefix="/admin/secrets")


class SecretValue(BaseModel):
    """secret value payload"""
    value: str


@capability("admin_ui")
@router.get("")
async def list_secrets(
    prefix: Optional[str] = None,
    orchestrator = Depends(get_orchestrator)
):
    """List available secret keys (if backend supports listing)
    
    Query params:
    - prefix: Filter keys by prefix (e.g., ?prefix=OPENAI_)
    """
    try:
        secret_provider = orchestrator.container.config_manager.secret_provider
        
        if not hasattr(secret_provider, 'list_keys'):
            return {
                "supported": False,
                "message": "Current secret provider doesn't support listing",
                "keys": []
            }
        
        keys = secret_provider.list_keys(prefix)
        return {
            "supported": True,
            "keys": keys,
            "count": len(keys)
        }
    except Exception as e:
        logger.error(f"Failed to list secrets: {e}", exc_info=True)
        raise HTTPError(str(e), status_code=500)


@capability("admin_ui")
@router.post("/{key}")
async def set_secret(
    key: str,
    payload: SecretValue,
    orchestrator = Depends(get_orchestrator)
):
    """Set secret value in secret provider
    
    Does NOT broadcast via transport - secrets stay local
    """
    try:
        orchestrator.container.config_manager.set_secret(key, payload.value)
        logger.info(f"Secret '{key}' updated via UI")
        
        return {
            "status": "ok",
            "key": key,
            "message": "Secret stored in local provider"
        }
    except Exception as e:
        logger.error(f"Failed to set secret '{key}': {e}", exc_info=True)
        raise HTTPError(str(e), status_code=500)


@capability("admin_ui")
@router.delete("/{key}")
async def delete_secret(
    key: str,
    orchestrator = Depends(get_orchestrator)
):
    """Delete secret from provider (if supported)"""
    try:
        secret_provider = orchestrator.container.config_manager.secret_provider
        
        if not hasattr(secret_provider, 'delete'):
            raise HTTPError("Current secret provider doesn't support deletion", status_code=400)
        
        secret_provider.delete(key)
        logger.info(f"Secret '{key}' deleted via UI")
        
        return {
            "status": "ok",
            "key": key,
            "message": "Secret deleted from provider"
        }
    except HTTPError:
        raise
    except Exception as e:
        logger.error(f"Failed to delete secret '{key}': {e}", exc_info=True)
        raise HTTPError(str(e), status_code=500)
