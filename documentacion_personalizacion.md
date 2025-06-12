# Documentación de Personalización - Web Marinas de España

## Guía de Personalización y Mantenimiento

Esta documentación proporciona una guía completa para personalizar y mantener los efectos visuales premium implementados en la web de Marinas de España.

## Índice
1. [Estructura de Archivos](#estructura-de-archivos)
2. [Personalización de Estilos](#personalización-de-estilos)
3. [Ajuste de Efectos JavaScript](#ajuste-de-efectos-javascript)
4. [Optimización de Rendimiento](#optimización-de-rendimiento)
5. [Compatibilidad con Navegadores](#compatibilidad-con-navegadores)
6. [Mantenimiento Futuro](#mantenimiento-futuro)

## Estructura de Archivos

Los archivos principales para la personalización son:

- **`/css/ultra-modern.css`**: Contiene todos los estilos premium y efectos visuales CSS
- **`/js/premium-effects.js`**: Contiene todas las animaciones y efectos interactivos JavaScript
- **`/index.html`**: Estructura principal de la página con referencias a los archivos CSS y JS

Los archivos originales se han respaldado en la carpeta `/backups/` por seguridad.

## Personalización de Estilos

### Variables CSS

El archivo CSS utiliza variables para facilitar la personalización. Estas se encuentran al inicio del archivo `ultra-modern.css`:

```css
:root {
  --color-primary: #0a2342;      /* Color principal (azul marino) */
  --color-secondary: #126e82;    /* Color secundario (azul claro) */
  --color-accent: #d4af37;       /* Color de acento (dorado) */
  --color-light: #f8f9fa;        /* Color claro para fondos */
  --color-dark: #212529;         /* Color oscuro para textos */
  
  /* Gradientes modernos */
  --gradient-primary: linear-gradient(135deg, #0a2342 0%, #126e82 100%);
  --gradient-accent: linear-gradient(135deg, #d4af37 0%, #f4e19c 100%);
  
  /* Transiciones */
  --transition-smooth: cubic-bezier(0.43, 0.13, 0.23, 0.96);
  --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Sombras */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 6px 20px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  /* Bordes redondeados */
  --border-radius-sm: 0.5rem;
  --border-radius-md: 1rem;
  --border-radius-lg: 1.5rem;
}
```

Para cambiar el esquema de colores, simplemente modifica estas variables.

### Animaciones

Las animaciones están definidas como keyframes CSS. Puedes ajustar su comportamiento modificando los valores:

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(-2deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);  /* Ajusta la altura del float */
  }
}
```

### Sección Hero

La sección hero con el vídeo y el logo tiene estos componentes personalizables:

```css
.hero-video {
  filter: brightness(0.8);  /* Ajusta el brillo del vídeo */
}

.hero-overlay {
  opacity: 0.7;  /* Ajusta la opacidad del overlay */
}

.logo-image {
  max-width: 80%;  /* Ajusta el tamaño del logo */
  animation: float 6s ease-in-out infinite;  /* Ajusta la duración */
}
```

## Ajuste de Efectos JavaScript

### Partículas en Hero

Puedes ajustar la cantidad y apariencia de las partículas en la función `createParticles()`:

```javascript
function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    
    if (!particlesContainer) return;
    
    const particleCount = 50;  // Aumenta o disminuye para más/menos partículas
    
    // ...
}
```

### Velocidad de Animaciones

La velocidad de las animaciones de números se puede ajustar:

```javascript
function animateNumbers() {
    // ...
    const duration = 2000;  // Duración en milisegundos (2 segundos)
    // ...
}
```

### Efectos Hover 3D

La intensidad del efecto 3D en las tarjetas se puede modificar:

```javascript
function initHoverEffects() {
    // ...
    const rotateX = (y - centerY) / 10;  // Cambia el divisor para más/menos intensidad
    const rotateY = (centerX - x) / 10;
    // ...
}
```

## Optimización de Rendimiento

### Reducción de Partículas en Móviles

Para mejorar el rendimiento en dispositivos móviles, puedes ajustar la cantidad de partículas según el tamaño de pantalla:

```javascript
function createParticles() {
    // ...
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 50;  // Menos partículas en móvil
    // ...
}
```

### Lazy Loading

Las imágenes utilizan lazy loading para mejorar el rendimiento. Asegúrate de mantener este atributo en futuras imágenes:

```html
<img src="ruta/a/imagen.jpg" loading="lazy" alt="Descripción">
```

## Compatibilidad con Navegadores

Los efectos visuales avanzados funcionan mejor en navegadores modernos:

- **Totalmente compatible**: Chrome 88+, Firefox 86+, Safari 14+, Edge 88+
- **Parcialmente compatible**: IE 11 (sin efectos glassmorphism)

Para navegadores antiguos, se han incluido fallbacks que muestran una versión simplificada pero funcional.

## Mantenimiento Futuro

### Añadir Nuevas Secciones

Al añadir nuevas secciones, asegúrate de incluir las clases CSS adecuadas para mantener la coherencia visual:

```html
<section class="section" id="nueva-seccion">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Etiqueta</span>
            <h2 class="section-title">
                <span class="title-word">Título</span>
                <span class="title-word golden">Destacado</span>
            </h2>
            <p class="section-subtitle">Subtítulo descriptivo</p>
        </div>
        
        <!-- Contenido de la sección -->
    </div>
</section>
```

### Actualización de Dependencias

La web utiliza Font Awesome para iconos. Si necesitas actualizar:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Mantenimiento de Efectos

Si algún efecto deja de funcionar o causa problemas, puedes desactivarlo comentando su inicialización en `premium-effects.js`:

```javascript
function init() {
    // Comentar la línea del efecto problemático
    // initParallax();
    
    // El resto de inicializaciones
}
```

---

## Recomendaciones Finales

1. **Pruebas regulares**: Verifica la web en diferentes dispositivos y navegadores periódicamente
2. **Optimización de imágenes**: Comprime las nuevas imágenes antes de subirlas
3. **Validación W3C**: Valida el HTML y CSS periódicamente para mantener estándares
4. **Monitoreo de rendimiento**: Utiliza herramientas como Google Lighthouse para evaluar el rendimiento

Para cualquier consulta adicional o soporte, no dudes en contactar con el equipo de desarrollo.
