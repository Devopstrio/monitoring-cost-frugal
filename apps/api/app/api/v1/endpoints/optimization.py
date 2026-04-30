from fastapi import APIRouter
router = APIRouter()
@router.get('/recommendations')
def get_recommendations():
    return [{'id': 'REC-1', 'type': 'CARDINALITY', 'potential_savings': 1200.00, 'impact': 'HIGH'}, {'id': 'REC-2', 'type': 'SAMPLING', 'potential_savings': 850.00, 'impact': 'MED'}]
