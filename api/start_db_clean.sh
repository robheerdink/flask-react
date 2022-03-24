#!/bin/bash

# docker pull postgres:14.2-alpine
# docker run -p 5432:5432 <image-id> -e POSTGRES_PASSWORD=postgres -d postgres:14.2-alpine
# docker exec -ti <container-id> psql -U postgres
# docker stop epg
# docker rm epg
# docker ps -a

# stops and removes docker container (so we loose all databse data)
# starts docker container, for the first time, which will trigger all sql or sh scripts in
# /docker-entrypoint-initdb.d/
docker-compose down
docker-compose up

