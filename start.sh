#!/bin/bash

# Ensure we are in the project root directory
cd "$(dirname "$0")"

# Check if node_modules exists, otherwise run npm install
if [ ! -d "node_modules" ]; then
  echo "📁 node_modules não encontrado. Instalando dependências..."
  npm install
fi

# Run the development server
echo "🚀 Iniciando o servidor de desenvolvimento da Semper Technology..."
npm run dev
