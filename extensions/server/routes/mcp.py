"""MCP admin API routes - server and tool management"""
from fastapi import Depends
from typing import Any, Dict, List, Optional
from pathlib import Path
from pydantic import BaseModel, Field
from optorch.logging import get_logger
from optorch.errors import HTTPError
from extensions.server.dependencies import get_orchestrator
from extensions.server.routing import APIRouter, capability

logger = get_logger(__name__)

router = APIRouter(prefix="/mcp")


class ToolInfo(BaseModel):
    name: str
    description: str = ""
    is_mcp: bool
    is_native: bool
    has_wrapper: bool = False
    server: Optional[str] = None
    registered: bool = True
    enabled: bool = True
    metadata: Optional[Dict[str, Any]] = None


class ToolListResponse(BaseModel):
    tools: List[ToolInfo]
    count: int


class ServerInfo(BaseModel):
    name: str
    url: str
    transport: str = "sse"
    enabled: bool = True
    connected: bool = False
    tool_count: int = 0


class ServerListResponse(BaseModel):
    servers: List[ServerInfo]
    count: int


class ToolSchema(BaseModel):
    name: str
    description: str = ""
    input_schema: Dict[str, Any] = Field(default_factory=dict)
    registered: bool = False
    auto_registered: bool = False
    has_manual_proxy: bool = False
    server: str
    enabled: bool = True
    metadata: Optional[Dict[str, Any]] = None


class ServerToolsResponse(BaseModel):
    server: str
    tools: List[ToolSchema]
    count: int
    message: Optional[str] = None


class ConnectionTestResponse(BaseModel):
    status: str
    server: str
    tool_count: int


class ToolWrapperRequest(BaseModel):
    mode: str = "structured"
    server: str = ""
    tool: str
    definition: Optional[str] = None


class ToolUploadResponse(BaseModel):
    status: str
    file: str
    tool: str
    server: Optional[str] = None
    is_native: bool = False
    message: str


class ToolSourceResponse(BaseModel):
    mode: str
    tool: Optional[str] = None
    wrapper: Optional[str] = None
    code: str
    definition: Optional[Dict[str, Any]] = None


class ToolCreateRequest(BaseModel):
    mode: str = "raw"
    name: Optional[str] = None
    tool: Optional[str] = None
    code: Optional[str] = None
    server: str = ""
    description: Optional[str] = None
    parameters: Optional[List[Dict[str, Any]]] = None
    execute_body: Optional[str] = None
    timeout: int = 30
    retries: int = 1
    is_async: bool = False


class ToolCreateResponse(BaseModel):
    status: str
    file: str
    tool: str
    server: Optional[str] = None
    is_native: bool = False
    message: str


@capability("admin_ui")
@router.get(
    "/tools",
    summary="List all tools",
    description="Get list of all registered tools including MCP and native tools with metadata",
    response_description="List of tools with registration and enablement status",
    response_model=ToolListResponse
)
async def list_all_tools(orchestrator = Depends(get_orchestrator)):
    from optorch.mcp import MCPRegistry
    from optorch.mcp.mcp_tool_adapter import MCPToolAdapter
    
    tool_registry = orchestrator.container.tool_registry
    config_manager = orchestrator.container.config_manager
    
    mcp_tool_names = set()
    
    for client in MCPRegistry._clients.values():
        try:
            tools = await client.list_tools()
            for t in tools:
                name = t.get("name") if isinstance(t, dict) else t
                mcp_tool_names.add(name)
        except:
            pass
    
    if hasattr(MCPRegistry, '_tool_routing'):
        mcp_tool_names.update(MCPRegistry._tool_routing.keys())
    
    all_tools = []
    
    for tool_name in tool_registry.list_keys():
        tool = tool_registry.get_optional(tool_name)
        if not tool:
            continue
        
        is_mcp = isinstance(tool, MCPToolAdapter)
        server = MCPRegistry._tool_routing.get(tool_name) if is_mcp else None
        
        has_manual_proxy = False
        is_native = not is_mcp
        
        is_wrapper = False
        if is_native and tool_name in mcp_tool_names:
            is_wrapper = True
        elif is_native:
            import inspect
            try:
                source = inspect.getsource(tool)
                if 'MCPRegistry' in source or 'call_tool' in source:
                    is_wrapper = True
            except:
                pass
        
        if is_wrapper:
            continue
        
        if is_mcp and hasattr(tool, '_wrapper_fn'):
            has_manual_proxy = tool._wrapper_fn is not None
        
        enabled = True
        if is_native:
            tool_config = config_manager.get(f"tools.{tool_name}", {})
            if isinstance(tool_config, dict):
                enabled_val = tool_config.get("enabled", True)
                enabled = enabled_val if isinstance(enabled_val, bool) else str(enabled_val).lower() != 'false'
        else:
            if server:
                server_tool_config = config_manager.get(f"optorch.mcp.servers.{server}.tools.{tool_name}", {})
                if isinstance(server_tool_config, dict) and "enabled" in server_tool_config:
                    enabled_val = server_tool_config["enabled"]
                    enabled = enabled_val if isinstance(enabled_val, bool) else str(enabled_val).lower() != 'false'
                else:
                    all_tool_config = config_manager.get(f"optorch.mcp.servers.all.tools.{tool_name}", {})
                    if isinstance(all_tool_config, dict) and "enabled" in all_tool_config:
                        enabled_val = all_tool_config["enabled"]
                        enabled = enabled_val if isinstance(enabled_val, bool) else str(enabled_val).lower() != 'false'
        
        tool_info = {
            "name": tool_name,
            "description": getattr(tool, 'description', '') or getattr(tool, '__doc__', '') or '',
            "is_mcp": is_mcp,
            "is_native": is_native,
            "has_manual_proxy": has_manual_proxy,
            "server": server,
            "registered": True,
            "enabled": enabled,
        }
        
        if is_mcp and hasattr(tool, 'get_metadata'):
            tool_info["metadata"] = tool.get_metadata()
        
        all_tools.append(tool_info)
    
    return {"tools": all_tools, "count": len(all_tools)}


@capability("admin_ui")
@router.get(
    "/servers",
    summary="List MCP servers",
    description="Get list of all configured MCP servers with connection status and tool counts",
    response_description="List of MCP servers with connection details",
    response_model=ServerListResponse
)
async def list_mcp_servers(orchestrator = Depends(get_orchestrator)):
    from optorch.mcp import MCPRegistry
    
    mcp_config = orchestrator.container.config_manager.get("optorch.mcp", {})
    if not mcp_config or not mcp_config.get("servers"):
        mcp_config = orchestrator.container.config_manager.get("mcp", {})
    
    configured_servers = mcp_config.get("servers", {})
    
    servers = []
    for name, config in configured_servers.items():
        if name == "all":
            continue
            
        client = MCPRegistry.get(name)
        connected = client is not None
        tool_count = MCPRegistry.get_server_tool_count(name) if connected else 0
        
        servers.append({
            "name": name,
            "url": config.get("url", ""),
            "transport": config.get("transport", "sse"),
            "enabled": config.get("enabled", True),
            "connected": connected,
            "tool_count": tool_count
        })
    
    return {"servers": servers, "count": len(servers)}


@capability("admin_ui")
@router.get(
    "/servers/{server_name}/tools",
    summary="List server tools",
    description="Get all tools provided by a specific MCP server with registration and enablement status",
    response_description="List of tools for the specified server",
    response_model=ServerToolsResponse
)
async def list_mcp_server_tools(
    server_name: str,
    orchestrator = Depends(get_orchestrator)
):
    from optorch.mcp import MCPRegistry
    from optorch.mcp.mcp_tool_adapter import MCPToolAdapter
    
    config_manager = orchestrator.container.config_manager
    
    mcp_config = config_manager.get("optorch.mcp", {})
    if not mcp_config or not mcp_config.get("servers"):
        mcp_config = config_manager.get("mcp", {})
    
    server_config = mcp_config.get("servers", {}).get(server_name)
    if not server_config:
        raise HTTPError(f"MCP server '{server_name}' not found in config", status_code=404)
    
    client = MCPRegistry.get(server_name)
    if not client:
        logger.info(f"MCP server '{server_name}' not connected, attempting lazy connect...")
        try:
            from optorch.mcp import MCPServerConfig
            server_cfg = MCPServerConfig(**server_config)
            MCPRegistry.register(server_name, server_cfg)
            client = MCPRegistry.get(server_name)
            if client:
                await client.connect()
                logger.info(f"Successfully connected to '{server_name}'")
        except Exception as e:
            logger.error(f"Failed to connect to '{server_name}': {e}")
        
        client = MCPRegistry.get(server_name)
        if not client:
            raise HTTPError(f"MCP server '{server_name}' failed to initialize", status_code=404)
    
    try:
        tools_meta = await client.list_tools()
        tool_registry = orchestrator.container.tool_registry
        tools = []
        
        for tool_meta in tools_meta:
            tool_name = tool_meta.get("name") if isinstance(tool_meta, dict) else tool_meta
            
            registered_tool = tool_registry.get_optional(tool_name)
            is_auto_registered = isinstance(registered_tool, MCPToolAdapter) if registered_tool else False
            
            has_manual_proxy = False
            if registered_tool is not None:
                if not is_auto_registered:
                    has_manual_proxy = True
                elif hasattr(registered_tool, '_wrapper_fn') and registered_tool._wrapper_fn is not None:
                    has_manual_proxy = True
            
            logger.debug(f"Tool {tool_name}: registered={registered_tool is not None}, is_auto={is_auto_registered}, has_manual_proxy={has_manual_proxy}, type={type(registered_tool).__name__ if registered_tool else 'None'}")
            
            tool_info = {
                "name": tool_name,
                "description": tool_meta.get("description", "") if isinstance(tool_meta, dict) else "",
                "input_schema": tool_meta if isinstance(tool_meta, dict) else {"name": tool_name},
                "registered": registered_tool is not None,
                "auto_registered": is_auto_registered,
                "has_manual_proxy": has_manual_proxy,
                "server": server_name
            }
            
            if is_auto_registered and hasattr(registered_tool, 'get_metadata'):
                tool_info["metadata"] = registered_tool.get_metadata()
            
            enabled = True
            server_tool_config = config_manager.get(f"optorch.mcp.servers.{server_name}.tools.{tool_name}", {})
            if isinstance(server_tool_config, dict) and "enabled" in server_tool_config:
                enabled_val = server_tool_config["enabled"]
                enabled = enabled_val if isinstance(enabled_val, bool) else str(enabled_val).lower() != 'false'
            else:
                all_tool_config = config_manager.get(f"optorch.mcp.servers.all.tools.{tool_name}", {})
                if isinstance(all_tool_config, dict) and "enabled" in all_tool_config:
                    enabled_val = all_tool_config["enabled"]
                    enabled = enabled_val if isinstance(enabled_val, bool) else str(enabled_val).lower() != 'false'
            
            tool_info["enabled"] = enabled
            
            tools.append(tool_info)
        
        return {
            "server": server_name,
            "tools": tools,
            "count": len(tools)
        }
        
    except Exception as e:
        logger.error(f"Failed to list tools from '{server_name}': {e}")
        raise HTTPError(str(e), status_code=500)


@capability("admin_ui")
@router.post(
    "/servers/{server_name}/test",
    summary="Test server connection",
    description="Test connection to a specific MCP server and return tool count",
    response_description="Connection status and tool count",
    response_model=ConnectionTestResponse
)
async def test_mcp_connection(
    server_name: str,
    orchestrator = Depends(get_orchestrator)
):
    from optorch.mcp import MCPRegistry
    
    config_manager = orchestrator.container.config_manager
    mcp_config = config_manager.get("optorch.mcp", {})
    if not mcp_config or not mcp_config.get("servers"):
        mcp_config = config_manager.get("mcp", {})
    
    server_config = mcp_config.get("servers", {}).get(server_name)
    if not server_config:
        raise HTTPError(f"MCP server '{server_name}' not found in config", status_code=404)
    
    client = MCPRegistry.get(server_name)
    if not client:
        logger.info(f"MCP server '{server_name}' not registered, attempting registration and connection...")
        try:
            from optorch.mcp import MCPServerConfig
            server_cfg = MCPServerConfig(**server_config)
            MCPRegistry.register(server_name, server_cfg)
            client = MCPRegistry.get(server_name)
            if not client:
                raise HTTPError(f"Failed to register MCP server '{server_name}'", status_code=500)
        except Exception as e:
            logger.error(f"Failed to register '{server_name}': {e}")
            raise HTTPError(f"MCP server '{server_name}' registration failed: {str(e)}", status_code=500)
    
    try:
        tools = await client.list_tools()
        return {
            "status": "connected",
            "server": server_name,
            "tool_count": len(tools)
        }
    except Exception as e:
        logger.error(f"Connection test failed for '{server_name}': {e}")
        raise HTTPError(f"Connection failed: {str(e)}", status_code=500)


@capability("admin_ui")
@router.post(
    "/wrappers",
    summary="Create tool wrapper",
    description="""Create custom wrapper for MCP tool or native tool code.
    
    Supports structured mode (recommended) with ToolDefinition schema or legacy raw mode.
    
    if server is empty: registers as native non-MCP tool
    if server is specified: saves as wrapper for MCP tool
    
    structured mode payload: {
        "mode": "structured",
        "server": "server_name" or "",
        "tool": "tool_name",
        "definition": "{...ToolDefinition as JSON...}"
    }
    
    raw mode payload (legacy): {
        "mode": "raw",
        "server": "server_name" or "",
        "tool": "tool_name",
        "file": <binary upload>
    }""",
    response_description="Upload status with file path and registration result",
    response_model=ToolUploadResponse
)
async def upload_wrapper(
    wrapper_data: ToolWrapperRequest,
    orchestrator = Depends(get_orchestrator)
):
    from optorch.mcp.tool_builder import ToolDefinition, generate_tool_code
    
    mode = wrapper_data.mode
    server = wrapper_data.server
    tool = wrapper_data.tool
    
    if not tool:
        raise HTTPError("Tool name required", status_code=400)
    
    mcp_config = orchestrator.container.config_manager.get("optorch.mcp", {})
    tools_module = mcp_config.get("tools", {}).get("module", "app.tools")
    wrapper_dir = Path(tools_module.replace(".", "/"))
    wrapper_dir.mkdir(exist_ok=True, parents=True)
    target_file = wrapper_dir / f"{tool}.py"
    
    try:
        if mode == "structured":
            import json
            definition_str = wrapper_data.definition
            if not definition_str:
                raise HTTPError("Definition required for structured mode", status_code=400)
            
            tool_def = ToolDefinition(**json.loads(definition_str))
            code = generate_tool_code(tool_def)
            target_file.write_text(code)
        else:
            raise HTTPError("Raw mode not supported. Use structured mode.", status_code=400)
        
        logger.info(f"Created {'native tool' if not server else f'wrapper for {server}'}: {tool} to {target_file}")
        
        if not server:
            try:
                import importlib
                import sys
                
                module_name = f"{tools_module}.{tool}"
                if module_name in sys.modules:
                    del sys.modules[module_name]
                
                module = importlib.import_module(module_name)
                
                tool_fn = getattr(module, tool)
                
                tool_registry = orchestrator.container.node_controller.tools
                tool_registry.register(tool, tool_fn)
                
                logger.info(f"✅ Registered native tool: {tool}")
                
                return {
                    "status": "success",
                    "file": str(target_file),
                    "tool": tool,
                    "is_native": True,
                    "message": f"Native tool '{tool}' uploaded and registered successfully"
                }
            except Exception as e:
                logger.error(f"Failed to register native tool {tool}: {e}")
                return {
                    "status": "partial",
                    "file": str(target_file),
                    "tool": tool,
                    "message": f"File saved but registration failed: {str(e)}. Restart server to load."
                }
        else:
            return {
                "status": "success",
                "file": str(target_file),
                "server": server,
                "tool": tool,
                "message": "Wrapper uploaded successfully. Restart server to load."
            }
    except Exception as e:
        logger.error(f"Failed to upload wrapper: {e}")
        raise HTTPError(f"Upload failed: {str(e)}", status_code=500)


@capability("admin_ui")
@router.get(
    "/tools/{tool_name}/source",
    summary="Get tool source",
    description="Retrieve source code and parsed ToolDefinition for a native tool",
    response_description="Tool source code with structured definition if parseable",
    response_model=ToolSourceResponse
)
async def get_tool_source(
    tool_name: str,
    orchestrator = Depends(get_orchestrator)
):
    from pathlib import Path
    from optorch.mcp.tool_parser import parse_tool_file
    
    mcp_config = orchestrator.container.config_manager.get("optorch.mcp", {})
    tools_module = mcp_config.get("tools", {}).get("module", "app.tools")
    tool_file = Path(tools_module.replace(".", "/")) / f"{tool_name}.py"
    
    if not tool_file.exists():
        raise HTTPError(f"tool file not found: {tool_name}", status_code=404)
    
    code = tool_file.read_text(encoding='utf-8')
    parsed = parse_tool_file(code, expected_name=tool_name)
    
    if parsed:
        return {
            "mode": "structured",
            "tool": tool_name,
            "code": code,
            "definition": parsed.model_dump()
        }
    else:
        return {
            "mode": "raw",
            "tool": tool_name,
            "code": code
        }


@capability("admin_ui")
@router.get(
    "/wrappers/{wrapper_name}/source",
    summary="Get wrapper source",
    description="Retrieve source code and parsed ToolDefinition for an MCP tool wrapper",
    response_description="Wrapper source code with structured definition if parseable",
    response_model=ToolSourceResponse
)
async def get_wrapper_source(
    wrapper_name: str,
    orchestrator = Depends(get_orchestrator)
):
    from pathlib import Path
    from optorch.mcp.tool_parser import parse_tool_file
    
    mcp_config = orchestrator.container.config_manager.get("optorch.mcp", {})
    tools_module = mcp_config.get("tools", {}).get("module", "app.tools")
    tool_file = Path(tools_module.replace(".", "/")) / f"{wrapper_name}.py"
    
    if not tool_file.exists():
        raise HTTPError(f"Wrapper {wrapper_name} not found", status_code=404)
    
    code = tool_file.read_text(encoding='utf-8')
    parsed = parse_tool_file(code, expected_name=wrapper_name)
    
    if parsed:
        return {
            "mode": "structured",
            "wrapper": wrapper_name,
            "code": code,
            "definition": parsed.model_dump()
        }
    else:
        return {
            "mode": "raw",
            "wrapper": wrapper_name,
            "code": code
        }


@capability("admin_ui")
@router.post(
    "/tools/create",
    summary="Create native tool",
    description="""Create native tool from structured ToolDefinition or raw Python code.
    
    Structured mode validates security and generates code. Raw mode accepts full Python source.
    
    structured mode payload: {
        "mode": "structured",
        "name": "my_tool",
        "description": "...",
        "parameters": [{name, type, required, description, default}],
        "execute_body": "code without function def",
        "timeout": 30,
        "retries": 1,
        "is_async": false
    }
    
    raw code mode payload (legacy): {
        "mode": "raw",
        "tool": "my_tool_name",
        "code": "full python code",
        "server": "" (empty for native)
    }""",
    response_description="Creation status with file path and registration result",
    response_model=ToolCreateResponse
)
async def create_tool_from_code(
    tool_data: ToolCreateRequest,
    orchestrator = Depends(get_orchestrator)
):
    mode = tool_data.mode
    
    if mode == "structured":
        from optorch.mcp.tool_builder import ToolDefinition, generate_tool_code, ToolSecurityError
        
        try:
            from optorch.mcp.tool_builder import ToolParameter
            
            params = tool_data.parameters or []
            tool_params = []
            for p in params:
                if isinstance(p, dict):
                    tool_params.append(ToolParameter(**p))
                else:
                    tool_params.append(p)
            
            definition = ToolDefinition(
                name=tool_data.name or "",
                description=tool_data.description or "",
                parameters=tool_params,
                execute_body=tool_data.execute_body or "",
                timeout=tool_data.timeout,
                retries=tool_data.retries,
                is_async=tool_data.is_async
            )
            code = generate_tool_code(definition)
            tool_name = definition.name
            server = ""
        except ToolSecurityError as e:
            raise HTTPError(f"security validation failed: {str(e)}", status_code=400)
        except Exception as e:
            raise HTTPError(f"invalid tool definition: {str(e)}", status_code=400)
    else:
        tool_name = tool_data.tool
        code = tool_data.code
        server = tool_data.server
        
        if not tool_name or not code:
            raise HTTPError("missing required fields: tool, code", status_code=400)
    
    mcp_config = orchestrator.container.config_manager.get("optorch.mcp", {})
    tools_module = mcp_config.get("tools", {}).get("module", "app.tools")
    wrapper_dir = Path(tools_module.replace(".", "/"))
    wrapper_dir.mkdir(exist_ok=True, parents=True)
    
    target_file = wrapper_dir / f"{tool_name}.py"
    
    try:
        target_file.write_text(code, encoding='utf-8')
        
        logger.info(f"Created {'native tool' if not server else f'wrapper for {server}'}: {tool_name} at {target_file}")
        
        if not server:
            try:
                import importlib
                import sys
                
                module_name = f"{tools_module}.{tool_name}"
                if module_name in sys.modules:
                    del sys.modules[module_name]
                
                module = importlib.import_module(module_name)
                tool_fn = getattr(module, tool_name)
                tool_registry = orchestrator.container.node_controller.tools
                tool_registry.register(tool_name, tool_fn)
                
                logger.info(f"✅ Registered native tool: {tool_name}")
                
                return {
                    "status": "success",
                    "file": str(target_file),
                    "tool": tool_name,
                    "is_native": True,
                    "message": f"Native tool '{tool_name}' created and registered successfully"
                }
            except Exception as e:
                logger.error(f"Failed to register native tool {tool_name}: {e}")
                return {
                    "status": "partial",
                    "file": str(target_file),
                    "tool": tool_name,
                    "message": f"File saved but registration failed: {str(e)}. Restart server to load."
                }
        else:
            return {
                "status": "success",
                "file": str(target_file),
                "server": server,
                "tool": tool_name,
                "message": "Wrapper created successfully. Restart server to load."
            }
    except Exception as e:
        logger.error(f"Failed to create tool: {e}")
        raise HTTPError(f"Creation failed: {str(e)}", status_code=500)
