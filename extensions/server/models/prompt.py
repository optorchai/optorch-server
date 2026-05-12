"""prompt management models"""
from datetime import datetime
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field, field_validator
import json


class PromptRegisterRequest(BaseModel):
    """request body for registering a prompt"""
    name: str = Field(..., min_length=1, max_length=255)
    version: str = Field(..., min_length=1, max_length=50)
    template: str = Field(..., min_length=1)
    variables: Optional[List[str]] = Field(None, description="Template variable names")
    description: Optional[str] = None
    tags: Optional[List[str]] = None


class PromptVersion(BaseModel):
    """single prompt version metadata"""
    id: int
    name: str
    version: str
    content: str
    metadata: Dict[str, Any]
    created_at: datetime

    @field_validator("metadata", mode="before")
    @classmethod
    def parse_metadata(cls, v):
        if isinstance(v, str):
            try:
                return json.loads(v)
            except json.JSONDecodeError:
                return {}
        return v if v is not None else {}


class PromptVersionListResponse(BaseModel):
    """list of prompt versions"""
    versions: List[PromptVersion] = Field(..., validation_alias="prompts", serialization_alias="versions")
    total: int
    limit: int
    offset: int
    
    model_config = {"populate_by_name": True}


class PromptDetailResponse(BaseModel):
    """detailed prompt information"""
    id: int
    name: str
    version: str
    content: str
    metadata: Dict[str, Any]
    created_at: datetime

    @field_validator("metadata", mode="before")
    @classmethod
    def parse_metadata(cls, v):
        if isinstance(v, str):
            try:
                return json.loads(v)
            except json.JSONDecodeError:
                return {}
        return v if v is not None else {}
