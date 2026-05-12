"""Profile manager for capability-based route access control"""

from optorch.logging import get_logger
from extensions.server.config import ProfileCapabilitiesConfig

logger = get_logger(__name__)


class ProfileManager:
    """Manages server profiles and capability-based access control"""
    
    def __init__(
        self,
        current_profile: str,
        capabilities_config: ProfileCapabilitiesConfig | None = None
    ):
        """Initialize profile manager
        
        Args:
            current_profile: Active server profile (runtime, backoffice, analytics, all, custom)
            capabilities_config: Profile capability mappings (uses Pydantic defaults if None)
        """
        self.current_profile = current_profile
        self.capabilities_config = capabilities_config or ProfileCapabilitiesConfig()
        self.capabilities = self.capabilities_config.get_capabilities(current_profile)
        
        logger.info(
            f"ProfileManager initialized: profile={current_profile}, "
            f"capabilities={sorted(self.capabilities)}"
        )
    
    def add_capability(self, profile: str, capability: str) -> None:
        """Add capability to a profile
        
        Used by extensions to register their capabilities dynamically.
        If adding to current profile, updates active capabilities.
        
        Args:
            profile: Profile name to add capability to
            capability: Capability string to add
        """
        if hasattr(self.capabilities_config, profile):
            profile_caps = getattr(self.capabilities_config, profile)
            profile_caps.add(capability)
            
            if profile == self.current_profile:
                self.capabilities.add(capability)
                logger.debug(f"Added capability '{capability}' to active profile '{profile}'")
        else:
            logger.warning(f"Profile '{profile}' not found in capabilities config")
    
    def has_capability(self, required: str | set[str]) -> bool:
        """Check if current profile has required capability/capabilities
        
        Args:
            required: Single capability string or set of capabilities (any match)
        
        Returns:
            True if profile has capability
        """
        if "*" in self.capabilities:
            return True
        
        required_set = {required} if isinstance(required, str) else required
        return bool(required_set & self.capabilities)
