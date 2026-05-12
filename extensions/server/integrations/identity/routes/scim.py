"""SCIM 2.0 REST API endpoints"""

from fastapi import APIRouter, Depends, Header, Query
from typing import Optional
from optorch.errors import ValidationError
from optorch.identity.provisioning.models import SCIMUser, SCIMPatchRequest
from optorch.identity.provisioning.models.group import SCIMGroup, SCIMGroupMember, SCIMGroupMeta, SCIMGroupListResponse
from optorch.identity.provisioning.manager import SCIMManager
from optorch.identity.provisioning.filter_parser import SCIMFilterParser, SCIMPagination
from datetime import datetime, UTC

router = APIRouter(prefix="/scim/v2")


def get_scim_manager() -> SCIMManager:
    """Dependency to get SCIMManager from container"""
    raise NotImplementedError("SCIMManager dependency not configured")


@router.get("/Users")
async def list_users(
    authorization: str = Header(...),
    filter: Optional[str] = Query(None, description="SCIM filter expression"),
    startIndex: int = Query(1, ge=1, description="1-based start index"),
    count: int = Query(50, ge=1, le=1000, description="Page size"),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """List users with filtering and pagination (SCIM 2.0)"""
    org_id = await scim_manager.validate_token(authorization)
    
    where_clause, params = "", {}
    if filter:
        parser = SCIMFilterParser()
        where_clause, params = parser.parse(filter)
    
    start_idx, cnt, offset = SCIMPagination.parse_params(startIndex, count)
    
    individuals, total = await scim_manager.storage.query(
        "identity.list_individuals_filtered",
        organization_id=org_id,
        where_clause=where_clause,
        params=params,
        limit=cnt,
        offset=offset
    )
    
    resources = []
    for individual in individuals:
        membership = await scim_manager.org_manager.get_membership(individual.id, org_id)
        resources.append({
            "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
            "id": individual.id,
            "userName": individual.id,
            "name": {
                "givenName": individual.given_name,
                "familyName": individual.family_name,
            },
            "emails": [{"value": individual.contact_medium[0].characteristic.email_address, "primary": True}] if individual.contact_medium else [],
            "active": membership.status == "active" if membership else False,
            "meta": {
                "resourceType": "User",
                "created": individual.created_at.isoformat() if individual.created_at else None,
                "location": f"/scim/v2/Users/{individual.id}",
            },
        })
    
    if scim_manager.event_emitter:
        scim_manager.event_emitter.emit("provisioning.users_listed", {
            "organization_id": org_id,
            "filter": filter,
            "total_results": total,
            "returned": len(resources),
            "source": "scim"
        })
    
    return {
        "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
        "totalResults": total,
        "startIndex": startIndex,
        "itemsPerPage": len(resources),
        "Resources": resources
    }


@router.post("/Users")
async def create_user(
    scim_user: SCIMUser,
    authorization: str = Header(...),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """Create user (SCIM 2.0)"""
    org_id = await scim_manager.validate_token(authorization)
    individual, membership = scim_manager.mapper.scim_user_to_individual(scim_user.model_dump(by_alias=True), org_id)

    await scim_manager.org_manager.create_individual(individual)
    await scim_manager.org_manager.add_membership(membership)
    
    if scim_manager.event_emitter:
        scim_manager.event_emitter.emit("provisioning.user_synced", {
            "user_id": individual.id,
            "organization_id": org_id,
            "operation": "create",
            "source": "scim"
        })

    return {
        "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
        "id": individual.id,
        "userName": individual.id,
        "name": {
            "givenName": individual.given_name,
            "familyName": individual.family_name,
        },
        "active": True,
        "meta": {
            "resourceType": "User",
            "created": individual.created_at.isoformat(),
            "location": f"/scim/v2/Users/{individual.id}",
        },
    }


@router.get("/Users/{user_id}")
async def get_user(
    user_id: str,
    authorization: str = Header(...),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """Get user (SCIM 2.0)"""
    org_id = await scim_manager.validate_token(authorization)

    individual = await scim_manager.org_manager.get_individual(user_id)
    if not individual:
        raise ValidationError("User not found", details={"user_id": user_id})

    membership = await scim_manager.org_manager.get_membership(user_id, org_id)
    if not membership:
        raise ValidationError("User not member of organization", details={"user_id": user_id, "org_id": org_id})

    return {
        "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
        "id": individual.id,
        "userName": individual.id,
        "name": {
            "givenName": individual.given_name,
            "familyName": individual.family_name,
        },
        "active": membership.status == "active",
        "groups": [
            {"value": role, "display": role.title()} for role in membership.roles
        ],
    }


@router.patch("/Users/{user_id}")
async def update_user(
    user_id: str,
    patch: SCIMPatchRequest,
    authorization: str = Header(...),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """Partial update user (SCIM 2.0)"""
    org_id = await scim_manager.validate_token(authorization)

    try:
        for operation in patch.operations:
            op = operation.op
            path = operation.path
            value = operation.value

            if op == "replace" and path == "active":
                await scim_manager.org_manager.update_membership_status(
                    user_id, org_id, "active" if value else "inactive"
                )

        if scim_manager.event_emitter:
            scim_manager.event_emitter.emit(
                "provisioning.user_synced",
                {
                    "user_id": user_id,
                    "organization_id": org_id,
                    "operation": "update",
                    "source": "scim",
                },
            )
    except Exception as e:
        if scim_manager.event_emitter:
            scim_manager.event_emitter.emit(
                "provisioning.sync_failed",
                {
                    "user_id": user_id,
                    "organization_id": org_id,
                    "operation": "update",
                    "error": str(e),
                    "source": "scim",
                },
            )
        raise

    return await get_user(user_id, authorization, scim_manager)


@router.delete("/Users/{user_id}")
async def delete_user(
    user_id: str,
    authorization: str = Header(...),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """Deactivate user (SCIM 2.0)"""
    org_id = await scim_manager.validate_token(authorization)
    await scim_manager.org_manager.update_membership_status(user_id, org_id, "inactive")
    return {"status": "deleted"}


@router.get("/ServiceProviderConfig")
async def get_service_provider_config():
    """SCIM service provider configuration"""
    return {
        "schemas": ["urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"],
        "documentationUri": "https://docs.optorch.ai/scim",
        "patch": {"supported": True},
        "bulk": {"supported": False},
        "filter": {"supported": True, "maxResults": 200},
        "changePassword": {"supported": False},
        "sort": {"supported": True},
        "etag": {"supported": False},
        "authenticationSchemes": [
            {
                "type": "oauthbearertoken",
                "name": "OAuth Bearer Token",
                "description": "SCIM bearer token per organization",
            }
        ],
    }

@router.post("/Groups", response_model=SCIMGroup)
async def create_group(
    scim_group: SCIMGroup,
    authorization: str = Header(...),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """Create group (SCIM 2.0)
    
    Maps SCIM groups to organizational teams/roles.
    """
    org_id = await scim_manager.validate_token(authorization)
    team_id = f"team-{scim_group.externalId or scim_group.displayName.lower().replace(' ', '-')}"
    
    team = await scim_manager.storage.query(
        "create_team",
        team_id=team_id,
        organization_id=org_id,
        name=scim_group.displayName,
        external_id=scim_group.externalId,
        created_at=datetime.now(UTC)
    )
    
    if scim_group.members:
        for member in scim_group.members:
            try:
                await scim_manager.storage.query(
                    "add_team_member",
                    team_id=team_id,
                    user_id=member.value
                )
            except Exception as e:
                pass
    
    if scim_manager.event_emitter:
        scim_manager.event_emitter.emit("provisioning.group_synced", {
            "group_id": team_id,
            "organization_id": org_id,
            "operation": "create",
            "source": "scim"
        })
    
    return SCIMGroup(
        id=team_id,
        externalId=scim_group.externalId,
        displayName=scim_group.displayName,
        members=scim_group.members,
        meta=SCIMGroupMeta(
            resourceType="Group",
            created=datetime.now(UTC).isoformat(),
            location=f"/scim/v2/Groups/{team_id}"
        )
    )


@router.get("/Groups/{group_id}", response_model=SCIMGroup)
async def get_group(
    group_id: str,
    authorization: str = Header(...),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """Get group (SCIM 2.0)"""
    org_id = await scim_manager.validate_token(authorization)
    
    team = await scim_manager.storage.query("get_team", team_id=group_id)
    if not team or team.get("organization_id") != org_id:
        raise ValidationError("Group not found", details={"group_id": group_id, "org_id": org_id})
    
    members_data = await scim_manager.storage.query("get_team_members", team_id=group_id)
    members = [
        SCIMGroupMember(
            value=member["user_id"],
            **{"$ref": f"/scim/v2/Users/{member['user_id']}"},
            display=member.get("name")
        )
        for member in members_data
    ]
    
    return SCIMGroup(
        id=team["id"],
        externalId=team.get("external_id"),
        displayName=team["name"],
        members=members,
        meta=SCIMGroupMeta(
            resourceType="Group",
            created=team.get("created_at"),
            lastModified=team.get("updated_at"),
            location=f"/scim/v2/Groups/{group_id}"
        )
    )


@router.get("/Groups", response_model=SCIMGroupListResponse)
async def list_groups(
    authorization: str = Header(...),
    startIndex: int = Query(1, ge=1),
    count: int = Query(100, ge=1, le=200),
    filter: Optional[str] = Query(None),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """List groups (SCIM 2.0)"""
    org_id = await scim_manager.validate_token(authorization)
    
    teams = await scim_manager.storage.query(
        "list_teams",
        organization_id=org_id,
        limit=count,
        offset=startIndex - 1
    )
    
    total = await scim_manager.storage.query("count_teams", organization_id=org_id)
    
    groups = []
    for team in teams:
        members_data = await scim_manager.storage.query("get_team_members", team_id=team["id"])
        members = [
            SCIMGroupMember(
                value=member["user_id"],
                **{"$ref": f"/scim/v2/Users/{member['user_id']}"}
            )
            for member in members_data
        ]
        
        groups.append(SCIMGroup(
            id=team["id"],
            externalId=team.get("external_id"),
            displayName=team["name"],
            members=members,
            meta=SCIMGroupMeta(
                resourceType="Group",
                created=team.get("created_at"),
                location=f"/scim/v2/Groups/{team['id']}"
            )
        ))
    
    return SCIMGroupListResponse(
        totalResults=total,
        startIndex=startIndex,
        itemsPerPage=len(groups),
        Resources=groups
    )


@router.patch("/Groups/{group_id}", response_model=SCIMGroup)
async def update_group(
    group_id: str,
    patch: SCIMPatchRequest,
    authorization: str = Header(...),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """Patch group (SCIM 2.0)
    
    Supports member add/remove operations.
    """
    org_id = await scim_manager.validate_token(authorization)
    
    team = await scim_manager.storage.query("get_team", team_id=group_id)
    if not team or team.get("organization_id") != org_id:
        raise ValidationError("Group not found", details={"group_id": group_id, "org_id": org_id})
    
    for operation in patch.operations:
        op = operation.op.lower()
        path = operation.path
        value = operation.value
        
        if path == "members":
            if op == "add":
                members = value if isinstance(value, list) else [value]
                for member in members:
                    member_id = member.get("value") if isinstance(member, dict) else member
                    await scim_manager.storage.query(
                        "add_team_member",
                        team_id=group_id,
                        user_id=member_id
                    )
            
            elif op == "remove":
                members = value if isinstance(value, list) else [value]
                for member in members:
                    member_id = member.get("value") if isinstance(member, dict) else member
                    await scim_manager.storage.query(
                        "remove_team_member",
                        team_id=group_id,
                        user_id=member_id
                    )
        
        elif path == "displayName" and op == "replace":
            await scim_manager.storage.query(
                "update_team",
                team_id=group_id,
                name=value
            )
    
    if scim_manager.event_emitter:
        scim_manager.event_emitter.emit("provisioning.group_synced", {
            "group_id": group_id,
            "organization_id": org_id,
            "operation": "update",
            "source": "scim"
        })
    
    return await get_group(group_id, authorization, scim_manager)


@router.delete("/Groups/{group_id}")
async def delete_group(
    group_id: str,
    authorization: str = Header(...),
    scim_manager: SCIMManager = Depends(get_scim_manager),
):
    """Delete group (SCIM 2.0)"""
    org_id = await scim_manager.validate_token(authorization)
    
    team = await scim_manager.storage.query("get_team", team_id=group_id)
    if not team or team.get("organization_id") != org_id:
        raise ValidationError("Group not found", details={"group_id": group_id, "org_id": org_id})
    
    await scim_manager.storage.query("delete_team", team_id=group_id)
    
    if scim_manager.event_emitter:
        scim_manager.event_emitter.emit("provisioning.group_synced", {
            "group_id": group_id,
            "organization_id": org_id,
            "operation": "delete",
            "source": "scim"
        })
    
    return {"status": "deleted"}


@router.get("/Schemas")
async def get_schemas():
    """GET /scim/v2/Schemas - SCIM schema discovery"""
    return {
        "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
        "totalResults": 2,
        "Resources": [
            {
                "id": "urn:ietf:params:scim:schemas:core:2.0:User",
                "name": "User",
                "description": "SCIM 2.0 User Resource",
                "attributes": [
                    {
                        "name": "userName",
                        "type": "string",
                        "multiValued": False,
                        "required": True,
                        "caseExact": False,
                        "mutability": "readWrite",
                        "returned": "default",
                        "uniqueness": "server"
                    },
                    {
                        "name": "name",
                        "type": "complex",
                        "multiValued": False,
                        "required": False,
                        "subAttributes": [
                            {
                                "name": "givenName",
                                "type": "string",
                                "multiValued": False,
                                "required": False
                            },
                            {
                                "name": "familyName",
                                "type": "string",
                                "multiValued": False,
                                "required": False
                            }
                        ]
                    },
                    {
                        "name": "active",
                        "type": "boolean",
                        "multiValued": False,
                        "required": False,
                        "mutability": "readWrite"
                    },
                    {
                        "name": "groups",
                        "type": "complex",
                        "multiValued": True,
                        "required": False,
                        "mutability": "readOnly"
                    }
                ],
                "meta": {
                    "resourceType": "Schema",
                    "location": "/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:User"
                }
            },
            {
                "id": "urn:ietf:params:scim:schemas:core:2.0:Group",
                "name": "Group",
                "description": "SCIM 2.0 Group Resource",
                "attributes": [
                    {
                        "name": "displayName",
                        "type": "string",
                        "multiValued": False,
                        "required": True,
                        "caseExact": False,
                        "mutability": "readWrite"
                    },
                    {
                        "name": "members",
                        "type": "complex",
                        "multiValued": True,
                        "required": False,
                        "subAttributes": [
                            {
                                "name": "value",
                                "type": "string",
                                "multiValued": False,
                                "required": True
                            },
                            {
                                "name": "$ref",
                                "type": "reference",
                                "multiValued": False,
                                "required": False
                            },
                            {
                                "name": "type",
                                "type": "string",
                                "multiValued": False,
                                "required": False
                            }
                        ]
                    }
                ],
                "meta": {
                    "resourceType": "Schema",
                    "location": "/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:Group"
                }
            }
        ]
    }


@router.get("/ResourceTypes")
async def get_resource_types():
    """GET /scim/v2/ResourceTypes - SCIM resource type discovery"""
    return {
        "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
        "totalResults": 2,
        "Resources": [
            {
                "id": "User",
                "name": "User",
                "endpoint": "/scim/v2/Users",
                "description": "User Account",
                "schema": "urn:ietf:params:scim:schemas:core:2.0:User",
                "schemaExtensions": [],
                "meta": {
                    "resourceType": "ResourceType",
                    "location": "/scim/v2/ResourceTypes/User"
                }
            },
            {
                "id": "Group",
                "name": "Group",
                "endpoint": "/scim/v2/Groups",
                "description": "Group",
                "schema": "urn:ietf:params:scim:schemas:core:2.0:Group",
                "schemaExtensions": [],
                "meta": {
                    "resourceType": "ResourceType",
                    "location": "/scim/v2/ResourceTypes/Group"
                }
            }
        ]
    }

