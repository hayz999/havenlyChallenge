#!/bin/bash

DOCKER_BIN=$(which docker)

if [[ -z $DOCKER_BIN ]]; then
    echo "Couldn't find docker, please install"
    open https://docs.docker.com/install/
    exit;
fi;

ABSOLUTE_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

$DOCKER_BIN run -v $ABSOLUTE_PATH:/app --rm phpunit/phpunit -c phpunit.xml
