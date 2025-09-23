#!/bin/bash
echo "Starting explorer server..."
echo "Open: http://localhost:8000"
if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server 8000
elif command -v npx >/dev/null 2>&1; then
  npx serve -p 8000 .
else
  echo "Install python3 or node.js to serve"
fi