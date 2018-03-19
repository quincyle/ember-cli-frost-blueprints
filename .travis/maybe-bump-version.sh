#!/bin/bash

if [[ ! "${PUBLISH_NODE_VERSION:-8.1.2}" =~ ^$TRAVIS_NODE_VERSION ]]
then
  echo "Skipping pr-bumper bump step for TRAVIS_NODE_VERSION [${TRAVIS_NODE_VERSION}]"
  exit 0
fi

$(npm root -g)/pr-bumper/.travis/maybe-bump-version.sh
