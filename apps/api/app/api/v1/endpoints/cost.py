from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_cost():
    return {'daily_spend': 450.25, 'monthly_projection': 13500.00, 'savings_last_30d': 4200.00, 'unit_cost_metrics': 0.00012}
