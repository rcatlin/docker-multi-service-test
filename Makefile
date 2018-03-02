.PHONY: build up down prune

build:
	docker-compose --project-name docker-multi-service build

up:
	docker-compose --project-name docker-multi-service -f docker-compose.yml up -d

down:
	docker-compose down

prune:
	docker system prune

