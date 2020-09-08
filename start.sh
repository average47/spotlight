#!/bin/bash

set -e

"$(npm bin)/tsc" --watch &
"$(npm bin)/node-sass" -w src/spotlight.scss dist/spotlight.css &
"$(npm bin)/lite-server"
