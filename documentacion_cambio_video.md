# Documentación de Cambio de Vídeo - Web Marinas de España

## Resumen del Cambio

Se ha realizado la sustitución del vídeo principal de la web de Marinas de España, reemplazando el archivo anterior (`barco-video-final-correcto.mp4`) por un nuevo vídeo proporcionado por el usuario (`nuevo-video-marinas.mp4`).

## Detalles Técnicos

### Cambios Realizados

1. **Eliminación del vídeo anterior**:
   - Se eliminó el archivo `barco-video-final-correcto.mp4` (9 MB) de la carpeta `/videos/`

2. **Incorporación del nuevo vídeo**:
   - Se añadió el archivo `nuevo-video-marinas.mp4` (85 MB) a la carpeta `/videos/`

3. **Actualización de referencias**:
   - Se modificó el archivo `index.html` para actualizar la ruta del vídeo:
   ```html
   <video class="hero-video" id="hero-video" autoplay muted playsinline>
       <source src="videos/nuevo-video-marinas.mp4" type="video/mp4">
   </video>
   ```

4. **Publicación de cambios**:
   - Se realizó commit y push de los cambios al repositorio de GitHub

## Consideraciones y Recomendaciones

### Tamaño del Archivo

El nuevo vídeo tiene un tamaño de aproximadamente 85 MB, lo que supera la recomendación de GitHub de 50 MB máximo para archivos individuales. Esto puede tener las siguientes implicaciones:

- **Rendimiento**: Tiempos de carga más largos para usuarios con conexiones lentas
- **Experiencia de usuario**: Posible buffering o retrasos en la reproducción
- **Gestión del repositorio**: Posibles problemas en operaciones de clonado o pull

### Recomendaciones para Futuras Actualizaciones

1. **Compresión de vídeo**:
   - Considerar la compresión del vídeo para reducir su tamaño sin sacrificar demasiada calidad
   - Herramientas recomendadas: HandBrake, FFmpeg, Adobe Media Encoder

2. **Git LFS (Large File Storage)**:
   - Implementar Git LFS para gestionar archivos grandes en el repositorio
   - Esto mejora el rendimiento del repositorio y facilita el trabajo con archivos multimedia

3. **Alojamiento externo**:
   - Considerar alojar el vídeo en plataformas como YouTube o Vimeo
   - Integrar mediante iframe o API para mantener la estética actual

4. **Formatos adaptativos**:
   - Implementar streaming adaptativo (HLS o DASH) para ofrecer diferentes calidades según la conexión del usuario

## Monitoreo y Seguimiento

Se recomienda monitorear los siguientes aspectos tras la implementación del nuevo vídeo:

1. **Tiempos de carga**: Verificar que la página no experimente retrasos significativos
2. **Reproducción en dispositivos móviles**: Confirmar que funciona correctamente en diferentes dispositivos
3. **Consumo de datos**: Evaluar el impacto en usuarios con planes de datos limitados

---

Documentación preparada el 12 de junio de 2025
