# INSTRUCCIONES PARA PÁGINAS NUEVAS
## Marinas de España - Estándares de Desarrollo Web

### 📋 MENÚ SUPERIOR ESTÁNDAR

**OBLIGATORIO**: Todas las páginas nuevas DEBEN usar exactamente el mismo menú superior.

#### ✅ Estructura Correcta del Menú:
```
Logo (clickeable) | I Congreso | Colaboradores | Noticias | Mapa Puertos | La Federación | Asociaciones | Contacto
```

#### ❌ Elementos Prohibidos:
- **NO incluir "Inicio"** en el menú (el logo ya cumple esa función)
- **NO cambiar el orden** de los elementos
- **NO agregar enlaces adicionales** sin autorización

### 🔧 Implementación

1. **Copiar el código** desde `PLANTILLA_MENU_SUPERIOR.html`
2. **Pegar después** de `<body>` y antes del contenido principal
3. **NO modificar** ningún elemento, clase o enlace
4. **Verificar** que se ve idéntico a las páginas existentes

### 📱 Páginas de Noticias

Para páginas de noticias específicamente:

#### Estructura HTML Básica:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Título de la Noticia] - Marinas de España</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    
    <!-- MENÚ SUPERIOR (copiar desde PLANTILLA_MENU_SUPERIOR.html) -->
    
    <!-- CONTENIDO DE LA NOTICIA -->
    <div class="article-container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
            <a href="index.html" class="breadcrumb-link">Inicio</a>
            <span class="breadcrumb-separator">/</span>
            <a href="todas-las-noticias.html" class="breadcrumb-link">Noticias</a>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-current">[Título de la Noticia]</span>
        </nav>
        
        <!-- Resto del contenido... -->
    </div>
    
</body>
</html>
```

### 🎯 Verificación de Calidad

Antes de publicar cualquier página nueva:

1. **Verificar menú**: ¿Es idéntico a las páginas existentes?
2. **Probar enlaces**: ¿Todos los enlaces del menú funcionan?
3. **Revisar responsive**: ¿Se ve bien en móvil y desktop?
4. **Comprobar coherencia**: ¿Mantiene el estilo visual del sitio?

### 📞 Contacto

Si tienes dudas sobre la implementación, consulta siempre estas instrucciones antes de crear páginas nuevas.

---

**ÚLTIMA ACTUALIZACIÓN**: Enero 2025  
**VERSIÓN**: 1.0  
**ESTADO**: Estándar oficial aprobado

