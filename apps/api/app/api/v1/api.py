from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, metrics, logs, traces, cost, optimization, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
api_router.include_router(logs.router, prefix="/logs", tags=["logs"])
api_router.include_router(traces.router, prefix="/traces", tags=["traces"])
api_router.include_router(cost.router, prefix="/cost", tags=["cost"])
api_router.include_router(optimization.router, prefix="/optimization", tags=["optimization"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
