#!/bin/bash

# Script de build robusto para Render.com
echo "🚀 Iniciando build para Render..."

# Instalar dependências com flags corretas
echo "📦 Instalando dependências..."
npm install --legacy-peer-deps --force

# Instalar dependências específicas que podem estar faltando
echo "🔧 Instalando dependências críticas..."
npm install @tailwindcss/postcss postcss autoprefixer critters --save-dev --legacy-peer-deps

# Verificar se as dependências foram instaladas
echo "✅ Verificando instalação..."
if [ ! -d "node_modules/@tailwindcss" ]; then
    echo "❌ Erro: @tailwindcss não foi instalado"
    exit 1
fi

if [ ! -d "node_modules/critters" ]; then
    echo "❌ Erro: critters não foi instalado"
    exit 1
fi

# Limpar cache do Next.js
echo "🧹 Limpando cache..."
rm -rf .next

# Executar build
echo "🏗️ Executando build..."
npm run build

echo "✅ Build concluído com sucesso!"
