"""register prompt version - sqlite"""
import json
from datetime import datetime, UTC
from typing import Any, Optional, List, Dict
from optorch.storage.queries.base import BaseQuery


class RegisterPromptSqlite(BaseQuery):
    """idempotent insert into prompts; returns id and whether row was created"""

    @property
    def query_name(self) -> str:
        return "prompt.register"

    async def execute(
        self,
        name: str,
        version: str,
        template: str,
        variables: Optional[List[str]] = None,
        description: Optional[str] = None,
        tags: Optional[List[str]] = None,
        **kwargs: Any
    ) -> Dict[str, Any]:
        metadata = json.dumps({
            "variables": variables or [],
            "description": description,
            "tags": tags or []
        })
        values = {
            "name": name,
            "version": version,
            "content": template,
            "metadata": metadata,
            "created_at": datetime.now(UTC).isoformat()
        }
        # sqlite 3.35+ supports RETURNING
        row = await self.store.fetch_one(
            query="""
                INSERT INTO prompts (name, version, content, metadata, created_at)
                VALUES (:name, :version, :content, :metadata, :created_at)
                ON CONFLICT (name, version) DO NOTHING
                RETURNING id
            """,
            values=values
        )
        if row:
            return {"id": row["id"], "created": True}

        existing = await self.store.fetch_one(
            query="SELECT id FROM prompts WHERE name = :name AND version = :version",
            values={"name": name, "version": version}
        )
        return {"id": existing["id"] if existing else None, "created": False}
