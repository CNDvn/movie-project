#!/bin/bash

docker compose --env-file .env-docker-compose -f ./databases/docker-compose.yml down
docker compose -f ./message-queue/docker-compose.yml down
docker compose --env-file .env-docker-compose -f ./user-management-svc/docker-compose.yml down