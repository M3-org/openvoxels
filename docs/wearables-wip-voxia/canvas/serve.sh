#!/bin/bash
# Simple local server for Canvas viewer
echo "🎨 Starting Canvas Viewer Server..."
echo "📂 Serving from: $(pwd)"
echo "🌐 Open: http://localhost:8080"
echo "⏹️  Press Ctrl+C to stop"
echo ""

if command -v python3 &> /dev/null; then
    echo "Using Python 3..."
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    echo "Using Python 2..."
    python -m http.server 8080
elif command -v node &> /dev/null && command -v npx &> /dev/null; then
    echo "Using Node.js..."
    npx http-server -p 8080 --silent
else
    echo "❌ No suitable server found."
    echo "Please install Python or Node.js to run the server."
    echo ""
    echo "Alternative: Try opening index.html directly in your browser"
    echo "(May have CORS issues with local file access)"
fi