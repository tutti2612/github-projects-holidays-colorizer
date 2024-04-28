#!/bin/bash

set -euo pipefail

pnpm check
pnpm test
rm -rf dist
mkdir dist
cp manifest.json src/index.css dist
bun bin/styleGenerator.ts >> dist/index.css