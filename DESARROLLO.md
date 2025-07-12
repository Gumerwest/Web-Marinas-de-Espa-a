# 🚀 Configuración de Desarrollo - Marinas de España

## 📋 Flujo de Desarrollo Configurado

### 🌐 URLs del Proyecto
- **Producción:** https://gumerwest.github.io/Web-Marinas-de-Espa-a/
- **Desarrollo:** https://gumerwest.github.io/Web-Marinas-de-Espa-a/?branch=primer
- **Local:** http://localhost:3000

### 🔄 Estructura de Ramas
```
main (producción) ← merge cuando todo funcione
├── primer (desarrollo) ← trabajamos aquí
└── desarrollo-mapa (existente)
```

## ⚙️ Configuración GitHub Pages para Desarrollo

### Pasos para activar GitHub Pages en rama "primer":

1. **Ve a tu repositorio:** https://github.com/Gumerwest/Web-Marinas-de-Espa-a
2. **Settings > Pages**
3. **Source:** Deploy from a branch
4. **Branch:** Selecciona `primer` (en lugar de `main`)
5. **Folder:** `/ (root)`
6. **Save**

### 🎯 Resultado Esperado:
- **URL de desarrollo:** `https://gumerwest.github.io/Web-Marinas-de-Espa-a/` (desde rama primer)
- **Tiempo de despliegue:** 2-5 minutos después de cada push

## 📝 Comandos de Desarrollo

### Hacer cambios y probarlos:
```bash
# 1. Hacer cambios en los archivos
# 2. Ver cambios localmente en http://localhost:3000
# 3. Cuando estés conforme, publicar:
git add .
git commit -m "DESCRIPCIÓN de los cambios"
git push origin primer
```

### Pasar a producción (cuando todo funcione):
```bash
git checkout main
git merge primer
git push origin main
```

## ✅ Ventajas de Este Flujo

1. **Desarrollo Seguro:** Los cambios se prueban antes de ir a producción
2. **URL de Pruebas:** Puedes compartir la URL de desarrollo con otros
3. **Activación Instantánea:** Un solo merge y los cambios van a producción
4. **Sin Downtime:** La web principal nunca se rompe
5. **Historial Limpio:** Todos los cambios están documentados

## 🔧 Estado Actual
- ✅ Rama `primer` creada y pushed
- ✅ Servidor local funcionando en puerto 3000
- ⏳ Pendiente: Activar GitHub Pages para rama `primer`

---
**Siguiente paso:** Activar GitHub Pages para la rama `primer` siguiendo los pasos de arriba.