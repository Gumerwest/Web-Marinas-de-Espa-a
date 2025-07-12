#!/bin/bash

# 🚀 Script de desarrollo para Marinas de España
# Ejecuta: bash start-dev.sh

echo "🚀 Iniciando entorno de desarrollo - Marinas de España"
echo "📁 Directorio: $(pwd)"
echo "🌿 Rama actual: $(git branch --show-current)"

# Verificar que estamos en la rama correcta
if [ "$(git branch --show-current)" != "primer" ]; then
    echo "⚠️  Cambiando a rama 'primer'..."
    git checkout primer
fi

# Mostrar estado del repositorio
echo ""
echo "📊 Estado del repositorio:"
git status --short

echo ""
echo "🌐 URLs disponibles:"
echo "   Local: http://localhost:3000"
echo "   GitHub Pages: https://gumerwest.github.io/Web-Marinas-de-Espa-a/ (rama primer)"
echo ""

# Preguntar si quiere iniciar servidor local
read -p "¿Iniciar servidor local en puerto 3000? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔄 Iniciando servidor en http://localhost:3000..."
    echo "💡 Presiona Ctrl+C para detener"
    python3 -m http.server 3000
fi
