#!/bin/bash

set -euo pipefail

rm -rf dist
mkdir dist
cp manifest.json src/index.css dist
bun bin/styleGenerator.ts >> dist/index.css