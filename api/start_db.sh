#!/bin/bash
# stop and start docker postgres
# does not remove container, so we keep the state of the database
docker stop epg
docker-compose up -d

