from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_logs():
    return {'status': 'ok', 'frugal_component': 'logs'}
