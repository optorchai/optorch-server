# optorch-server

FastAPI HTTP server extension for [Optorch](https://github.com/optorchai/optorch). Provides REST and SSE endpoints for orchestrator workflow execution, session management, configuration, identity, and admin UI hosting.

## Purpose

Optorch ships as a library — `Orchestrator.create()` and `await orchestrator.execute(...)`. That is enough to embed it inside any Python application, but most production deployments need an HTTP surface: a chat endpoint that streams responses, session lookup, health checks, configuration management, and an administrative UI.

`optorch-server` is that surface. It is a self-contained extension that:

- Wraps the orchestrator in a FastAPI application with sensible defaults
- Auto-discovers other extensions via a `server_initializer.py` convention
- Registers their routes, middleware, lifespan hooks, and UI components
- Filters routes by **server profile** so a single codebase can be deployed as a runtime API, a backoffice, or an all-in-one process
- Handles tenant context propagation, CORS, identity integration, and SSE streaming
- Provides a CLI (`optorch-server`) for direct execution

It deliberately depends only on `optorch`, `fastapi`, `uvicorn`, and `openpyxl`, so it stays cheap to deploy alongside the framework.

## Installation

```bash
pip install optorch-server
```

From source:

```bash
pip install -e ./extensions/server
```

## Quick Start

```bash
# Run with the default "all" profile
optorch-server --port 8000

# Or via Python
python -m extensions.server --port 8000 --profile runtime
```

The CLI auto-discovers `app/hooks.py` in your project and wires the orchestrator factory into the FastAPI app. On startup it:

1. Loads `config/optorch.yaml` (or the path in `OPTORCH_CONFIG_FILE`)
2. Builds an `Orchestrator` via `Orchestrator.create_async`
3. Discovers every extension under `extensions/` and the `app/` directory that exports a `*ServerInitializer` class
4. Registers their middleware, routes, lifespan handlers, and UI components
5. Filters everything through the active profile's capability set

## Server Profiles

Profiles let you deploy the same codebase as different runtime topologies. Each profile maps to a set of capabilities, and routes are only registered if their `@capability(...)` decorator matches.

| Profile      | Default capabilities                                         | Use case                                                                  |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `runtime`    | `orchestrator`, `llm`, `write_db`, `sessions`, `config_read` | Production workload server. Executes workflows. No admin UI.              |
| `backoffice` | `read_db`, `admin_ui`, `config_read`, `config_write`         | Admin / management server. Read-only over events DB. UI surfaces enabled. |
| `analytics`  | (set by analytics extension)                                 | Read-only analytics API.                                                  |
| `all`        | `*` (wildcard)                                               | Single-process all-in-one. Everything enabled. Default.                   |
| `custom`     | (defined in config)                                          | User-defined capability set.                                              |

Pick one at startup:

```bash
optorch-server --profile runtime
optorch-server --profile backoffice --port 8001
optorch-server --profile all
```

Or via env var: `OPTORCH_PROFILE=runtime`.

Mark routes with the capabilities they require:

```python
from extensions.server.routing import APIRouter
from extensions.server.decorators import capability

router = APIRouter()

@capability("orchestrator", "llm")
@router.post("/evaluate")
async def evaluate(...):
    ...
```

Routes with `@capability("admin_ui")` will not be registered on a `runtime` server. The same source tree can ship to multiple deployment shapes without conditional code.

## Configuration

In `config/optorch.yaml`:

```yaml
optorch:
  server:
    enabled: true
    host: 0.0.0.0
    port: 8000
    reload: false
    api_version_prefix: v1 # routes mount under /api/v1
    extensions_dir: extensions
    app_dir: app
    profile: all # runtime | backoffice | analytics | all | custom
    capabilities: null # used when profile=custom
    admin_ui_path: /admin
    cors:
      enabled: true
      origins: ["*"]
      credentials: true
      methods: ["*"]
      headers: ["*"]
    service_map: {} # microservice routing: { /analytics: https://analytics.optorch.io }

    profiles: # override default capability sets
      runtime:
        - orchestrator
        - llm
        - write_db
        - sessions
        - config_read
      custom:
        - my_capability
```

Every field can also be overridden via CLI flag:

```bash
optorch-server --port 9000 --reload --api-version-prefix v2
```

## Built-in Routes

All routes mount under `/api/{api_version_prefix}` (default `/api/v1`).

### Chat

| Method | Path    | Capability     | Description                                         |
| ------ | ------- | -------------- | --------------------------------------------------- |
| `POST` | `/chat` | `orchestrator` | Stream orchestrator execution as Server-Sent Events |

The chat endpoint is the primary conversational entry point. It accepts a `ChatRequest`, dispatches to the orchestrator, and streams events back over SSE:

| Event           | Payload             | When emitted            |
| --------------- | ------------------- | ----------------------- |
| `node.start`    | node name, state    | Node begins executing   |
| `llm.complete`  | model, tokens, cost | LLM call finished       |
| `tool.complete` | tool name, result   | Tool execution finished |
| `cost.update`   | running totals      | Cost tracker update     |
| `message`       | assistant text      | Final response ready    |
| `error`         | error details       | Execution failed        |

```bash
curl -N -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "find me a tariff for...", "session_id": "abc-123"}'
```

### Sessions

| Method   | Path                     | Capability | Description          |
| -------- | ------------------------ | ---------- | -------------------- |
| `GET`    | `/sessions/{id}`         | `sessions` | Get session state    |
| `DELETE` | `/sessions/{id}`         | `sessions` | Delete session       |
| `GET`    | `/sessions/{id}/history` | `sessions` | Conversation history |

### Health

| Method | Path            | Description                                    |
| ------ | --------------- | ---------------------------------------------- |
| `GET`  | `/health`       | Liveness probe                                 |
| `GET`  | `/health/ready` | Readiness probe (orchestrator + storage check) |

### Configuration

| Method  | Path      | Capability     | Description             |
| ------- | --------- | -------------- | ----------------------- |
| `GET`   | `/config` | `config_read`  | Active configuration    |
| `PATCH` | `/config` | `config_write` | Runtime config override |

### Admin

| Method | Path                | Capability | Description                                               |
| ------ | ------------------- | ---------- | --------------------------------------------------------- |
| `GET`  | `/admin/registries` | `admin_ui` | List registered nodes, tools, transformers, intents, LLMs |
| `GET`  | `/admin/prompts`    | `admin_ui` | Prompt registry inspection                                |
| `GET`  | `/admin/secrets`    | `admin_ui` | Secret manager keys (values redacted)                     |
| `GET`  | `/admin/servicemap` | `admin_ui` | Microservice routing map                                  |

### Graph

| Method | Path                    | Capability | Description                    |
| ------ | ----------------------- | ---------- | ------------------------------ |
| `GET`  | `/graph/nodes`          | `read_db`  | Node graph topology            |
| `GET`  | `/graph/execution_flow` | `read_db`  | Aggregated execution flow data |

### MCP

| Method | Path          | Description            |
| ------ | ------------- | ---------------------- |
| `GET`  | `/mcp/tools`  | List MCP-exposed tools |
| `POST` | `/mcp/invoke` | Invoke an MCP tool     |

### Docs

OpenAPI documentation is served at `/docs` (Swagger UI) and `/redoc`.

## Building Extensions

Any package under `extensions/` (or your `app/`) can hook into the server by exporting a `*ServerInitializer` class from `server_initializer.py`. The server discovers it automatically.

```python
# extensions/myext/server_initializer.py
from extensions.server.route_manager import RouteManager
from extensions.server.middleware_manager import MiddlewareManager
from extensions.server.lifespan_manager import LifespanManager
from extensions.server.profile_manager import ProfileManager
from optorch.config import ConfigManager
from extensions.myext.routes import router


class MyExtServerInitializer:
    @staticmethod
    def register_capabilities(manager: ProfileManager, config: ConfigManager) -> None:
        manager.add_capability("backoffice", "myext")

    @staticmethod
    def register_middleware(manager: MiddlewareManager, config: ConfigManager) -> None:
        manager.register("myext_auth", MyAuthMiddleware, priority=900)

    @staticmethod
    def register_routes(manager: RouteManager, config: ConfigManager) -> None:
        manager.register_router("/myext", router, tags=["MyExt"])

    @staticmethod
    def register_lifespan(manager: LifespanManager, config: ConfigManager) -> None:
        manager.register_startup(my_startup_hook)
        manager.register_shutdown(my_shutdown_hook)
```

All five methods are optional. The `ServerManager` validates the signature `(manager, config)` and skips methods with a different shape.

## Managers

The server is composed of five managers exposed on `ServerManager`:

| Manager             | Responsibility                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| `ProfileManager`    | Holds the active profile and its capability set. Decides whether a route is registered.                   |
| `MiddlewareManager` | Registers FastAPI middleware with priority ordering.                                                      |
| `RouteManager`      | Registers `APIRouter` instances under `/api/{version}` with capability filtering. Supports static mounts. |
| `LifespanManager`   | Runs startup and shutdown hooks.                                                                          |
| `UIManager`         | Holds `pages`, `widgets`, `dashboards`, and `chat_extension` registries for the admin UI.                 |

All five are accessible from the FastAPI `app.state` after startup.

## Tenant Context

`TenantContextMiddleware` is registered automatically. It reads the `X-Organization-ID` header on every request and sets the ambient organisation context, so downstream `storage.query()` calls auto-filter by tenant in distributed deployments.

In monolithic deployments, the `AuthenticationMiddleware` (from the identity integration) sets the same context once via `request.state.user`.

## Identity Integration

If the optorch identity extension is installed, the server registers authentication and authorisation routes under `/auth/*`, `/authz/*`, `/licensing/*`, `/organizations/*`, `/scim/*`. See the identity extension docs for details.

## Service Map

For microservice topologies, the `service_map` config defines route prefixes that should be proxied to downstream services rather than handled locally:

```yaml
optorch:
  server:
    service_map:
      /analytics: https://analytics.example.com
      /notifications: https://notify.example.com
```

The admin UI uses this to surface deployment topology and to route admin actions to the correct service.

## CLI Reference

```
optorch-server [OPTIONS]
```

| Flag                   | Default      | Description                                               |
| ---------------------- | ------------ | --------------------------------------------------------- |
| `--profile`            | `all`        | `runtime` / `backoffice` / `analytics` / `all` / `custom` |
| `--host`               | `0.0.0.0`    | Bind address                                              |
| `--port`               | `8000`       | Bind port                                                 |
| `--reload`             | `false`      | Auto-reload on source changes (dev only)                  |
| `--api-version-prefix` | `v1`         | Mounts routes under `/api/{prefix}`                       |
| `--extensions-dir`     | `extensions` | Where to discover extensions                              |
| `--app-dir`            | `app`        | Application package path                                  |
| `--admin-ui-path`      | `/admin`     | Admin UI mount path                                       |
| `--no-browser`         | `false`      | Skip auto-opening browser on startup                      |

Environment variables: `OPTORCH_PROFILE`, `OPTORCH_HOST`, `OPTORCH_PORT`, `OPTORCH_CONFIG_FILE`.

## Programmatic Use

```python
from optorch.estrator import Orchestrator
from optorch.config import ConfigManager
from extensions.server.manager import ServerManager
from app.hooks import register_app_hooks
from functools import partial

config = ConfigManager(config_dir="config")
orchestrator_factory = partial(
    Orchestrator.create_async,
    entry_node="my_entry_node",
    app_hooks=register_app_hooks,
    config_manager=config,
)

server = ServerManager(orchestrator_factory, config)
app = server.create_app()  # standard FastAPI app

# Run with any ASGI server
import uvicorn
uvicorn.run(app, host="0.0.0.0", port=8000)
```

## Project Layout

```
extensions/server/
├── __main__.py              # CLI entry point
├── manager.py               # ServerManager
├── config.py                # ServerConfig, ProfileCapabilitiesConfig, CORSConfig
├── decorators.py            # @capability
├── dependencies.py          # FastAPI dependency providers
├── routing.py               # APIRouter wrapper with capability finalisation
├── route_manager.py         # Route registration + capability filtering
├── middleware_manager.py    # Middleware registration with priority
├── lifespan_manager.py      # Startup/shutdown hook registration
├── profile_manager.py       # Profile and capability resolution
├── server_initializer.py    # Built-in route registration
├── controllers/             # ChatController, HealthController
├── routes/                  # chat, sessions, health, admin, config, graph, mcp, ...
├── models/                  # Pydantic request/response models
├── services/                # EventService, SessionService
├── queries/                 # Graph queries (sqlite/timescale/mysql)
├── ui/                      # UI manager + pages/widgets/dashboards/chat_extension
└── integrations/
    ├── tenant_context_middleware.py
    └── identity/            # auth, authz, licensing, scim, organizations
```

## Dependencies

| Package           | Required | Purpose                                       |
| ----------------- | -------- | --------------------------------------------- |
| `optorch>=0.1.0`  | Yes      | Core framework                                |
| `fastapi`         | Yes      | HTTP framework                                |
| `uvicorn`         | Yes      | ASGI runner                                   |
| `openpyxl>=3.1.0` | Yes      | Excel response support for backoffice exports |

## License

Proprietary. See [optorch](https://github.com/optorchai/optorch).
