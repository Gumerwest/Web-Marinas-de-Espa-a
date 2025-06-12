# Documentación: Ajustes en Logos y Título de Patrocinadores

## Cambios Realizados

### 1. Ajuste de Tamaño de Logos Importantes (Fila Superior)
- Se ha creado un nuevo archivo CSS (`logos-adjustments.css`) para optimizar la presentación de los logos
- Se han ajustado los tamaños de cada logo individualmente para adaptarlos a sus banners:
  - **Iberdrola**: Altura máxima de 70px con padding de 10px
  - **Viltec**: Altura máxima de 60px con padding de 5px horizontal y 15px vertical
  - **Almarín**: Altura máxima de 65px con padding de 10px
  - **Pandora Global**: Altura máxima de 55px con padding de 15px superior e inferior y 5px horizontal

### 2. Mejoras Visuales en la Presentación
- Se ha establecido un tamaño uniforme para las tarjetas de patrocinadores (altura de 180px)
- Se ha centrado vertical y horizontalmente cada logo dentro de su contenedor
- Se ha añadido una transición suave al pasar el cursor sobre los logos (efecto de escala)
- Se ha mejorado la consistencia visual entre los logos principales y secundarios

### 3. Cambio de Título
- Se ha mantenido el título "PATROCINADORES" en toda la web, incluyendo:
  - El título de la sección
  - El enlace de navegación
  - El ID de la sección

### 4. Logo de Repsol
- Se ha dejado el espacio reservado para el logo de Repsol en la fila inferior
- Se ha actualizado la referencia en el HTML para usar formato PNG en lugar de AI
- El usuario proporcionará el archivo PNG o SVG del logo de Repsol para completar la implementación

## Recomendaciones Técnicas

1. **Optimización de Logos**: Para una presentación óptima, todos los logos deberían tener un formato y resolución similar (PNG o SVG con fondo transparente).

2. **Consistencia Visual**: Mantener proporciones similares entre logos ayuda a la coherencia visual de la sección.

3. **Responsive Design**: Los ajustes implementados son compatibles con dispositivos móviles y tablets.

4. **Accesibilidad**: Todos los logos mantienen sus textos alternativos (alt) para lectores de pantalla.
