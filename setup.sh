#!/bin/bash
# create network if network already existed then not create
docker network inspect microservice-network >/dev/null 2>&1 || docker network create -d bridge microservice-network

# run all services
docker compose --env-file .env-docker-compose -f ./databases/docker-compose.yml up -d
docker compose -f ./message-queue/docker-compose.yml up -d
docker compose --env-file .env-docker-compose -f ./user-management-svc/docker-compose.yml up -d