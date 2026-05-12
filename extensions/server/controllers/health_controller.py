"""Health controller - handles health and monitoring"""
import asyncio
from optorch.logging import get_logger, LoggingManager
import time
from pathlib import Path
from typing import AsyncGenerator, Optional
from extensions.server.models.health_response import HealthResponse
from extensions.server.models.logs_response import LogsResponse
from extensions.server.models.api_info_response import ApiInfoResponse

logger = get_logger(__name__)


class HealthController:
    """Health and monitoring controller"""
    
    def __init__(self, orchestrator=None, logging_manager: Optional[LoggingManager] = None, start_time: Optional[float] = None, version: str = "1.0.0"):
        self.orchestrator = orchestrator
        self.logging_manager = logging_manager or LoggingManager()
        self.start_time = start_time or time.time()
        self.version = version
    
    async def health_check(self) -> HealthResponse:
        """Basic health check"""
        return HealthResponse(status="ok", service="optorch-orchestrator", version=self.version)
    
    async def get_logs(self, session_id: Optional[str] = None, lines: Optional[int] = 500) -> LogsResponse:
        """Retrieve orchestrator logs with optional filtering
        
        Args:
            session_id: Optional session ID to filter logs
            lines: Number of lines to tail (default 500)
        """
        try:
            log_file = self.logging_manager.get_log_file_path()
            
            if log_file is None:
                return LogsResponse(logs="File logging is disabled")
            
            if not log_file.exists():
                return LogsResponse(logs=f"Log file not found at {log_file}")
            
            with open(log_file, "r") as f:
                all_lines = f.readlines()
            
            tail_count = lines if lines else 500
            recent_lines = all_lines[-tail_count:] if len(all_lines) > tail_count else all_lines
            
            if session_id:
                filtered_lines = [line for line in recent_lines if session_id in line]
                logs = ''.join(filtered_lines)
                info = f"Showing {len(filtered_lines)} lines matching session '{session_id}' (from last {tail_count} lines)\n\n"
            else:
                logs = ''.join(recent_lines)
                info = f"Showing last {len(recent_lines)} lines\n\n"
            
            return LogsResponse(logs=info + logs)
            
        except Exception as e:
            logger.error(f"Failed to read logs: {e}")
            return LogsResponse(error=str(e))
    
    async def stream_logs(self, session_id: Optional[str] = None, initial_lines: int = 100) -> AsyncGenerator[str, None]:
        """Stream logs in real-time via SSE (tail -f behavior)
        
        Args:
            session_id: Optional session ID to filter logs
            initial_lines: Number of recent lines to send before streaming (default 100)
        """
        log_file = self.logging_manager.get_log_file_path()
        
        if log_file is None:
            yield "data: File logging is disabled\n\n"
            return
        
        if not log_file.exists():
            yield f"data: Log file not found at {log_file}\n\n"
            return
        
        try:
            with open(log_file, "r") as f:
                all_lines = f.readlines()
                recent = all_lines[-initial_lines:] if len(all_lines) > initial_lines else all_lines
                
                for line in recent:
                    if not session_id or session_id in line:
                        escaped = line.rstrip('\n').replace('\n', ' ')
                        yield f"data: {escaped}\n\n"
            
            with open(log_file, "r") as f:
                f.seek(0, 2)
                
                while True:
                    line = f.readline()
                    if line:
                        if not session_id or session_id in line:
                            escaped = line.rstrip('\n').replace('\n', ' ')
                            yield f"data: {escaped}\n\n"
                    else:
                        await asyncio.sleep(0.5)
                        
        except Exception as e:
            logger.error(f"Error streaming logs: {e}")
            yield f"data: Error: {str(e)}\n\n"
    
    async def api_info(self) -> ApiInfoResponse:
        """Get API information"""
        return ApiInfoResponse(
            service="Optorch Orchestrator API",
            version=self.version,
            endpoints={
                "chat": "POST /api/v1/chat",
                "delete_session": "DELETE /api/v1/sessions/{session_id}",
                "download": "GET /api/v1/downloads/{download_id}",
                "health": "GET /health",
                "logs": "GET /api/v1/admin/logs",
                "metrics": "GET /metrics"
            },
            docs_url="/docs"
        )
