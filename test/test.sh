#!/bin/bash

cd "$(dirname "$0")"

eval $(cat ../.env | sed 's/^/export /')

# Run tests
(cd .. ; ./node_modules/tap/bin/run.js)

# Stop immudb
kill -9 $(lsof -ti:56789)

# Clean up
rm -rf data
rm -rf roots
