"""Identity route exports"""

from extensions.server.integrations.identity.routes import (
    auth,
    organizations,
    authz,
    licensing,
    scim,
    protections,
)

__all__ = ["auth", "organizations", "authz", "licensing", "scim", "protections"]
