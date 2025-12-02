#! /bin/bash

docker build -f Dockerfile-local -t reg-frontend/local .

docker run --tty --interactive --network=host reg-frontend/local:latest
