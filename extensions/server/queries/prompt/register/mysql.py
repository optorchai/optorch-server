"""register prompt version - mysql"""
import json
from datetime import datetime, UTC
from typing import Any, Optional, List, Dict
from optorch.storage.queries.base import BaseQuery


class RegisterPromptMysql(BaseQuery):
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
        # mysql has no RETURNING - check existing first to know if created
        existing = await self.store.fetch_one(
            query="SELECT id FROM prompts WHERE name = :name AND version = :version",
            values={"name": name, "version": version}
        )
        if existing:
            return {"id": existing["id"], "created": False}

        metadata = json.dumps({
            "variables": variables or [],
            "description": description,
            "tags": tags or []
        })
        await self.store.execute(
            query="""
                INSERT IGNORE INTO prompts (name, version, content, metadata, created_at)
                VALUES (:name, :version, :content, :metadata, :created_at)
            """,
            values={
                "name": name,
                "version": version,
                "content": template,
                "metadata": metadata,
                "created_at": datetime.now(UTC)
            }
        )
        row = await self.store.fetch_one(
            query="SELECT id FROM prompts WHERE name = :name AND version = :version",
            values={"name": name, "version": version}
        )
        return {"id": row["id"] if row else None, "created": True}
