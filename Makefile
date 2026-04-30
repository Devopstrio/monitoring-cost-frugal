.PHONY: help build up down test lint migrate optimize-storage reduce-cardinality analyze-cost

help:
	@echo "Monitoring Cost Frugal - Management Commands"
	@echo "--------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Pipeline)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "optimize-storage   : Run tiered storage and retention optimization"
	@echo "reduce-cardinality : Run metrics cardinality reduction engine"
	@echo "analyze-cost       : Run observability spend analysis and budget report"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/pipelines
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

optimize-storage:
	docker-compose exec api python scripts/optimize/storage_tiering.py

reduce-cardinality:
	docker-compose exec api python scripts/optimize/cardinality_cli.py

analyze-cost:
	docker-compose exec api python scripts/analyze/spend_report.py
