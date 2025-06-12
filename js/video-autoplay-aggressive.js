// Solución agresiva para garantizar la reproducción automática del vídeo
(function() {
    'use strict';
    
    // Función principal que se ejecuta inmediatamente
    function forceVideoPlayback() {
        console.log("Iniciando solución agresiva para reproducción de vídeo");
        
        // Función para forzar la reproducción del vídeo con múltiples estrategias
        function forceVideoPlay() {
            const videoElement = document.getElementById('hero-video');
            
            if (!videoElement) {
                console.error("No se encontró el elemento de vídeo");
                return;
            }
            
            // 1. Asegurar que el vídeo esté visible y con opacidad completa
            videoElement.style.opacity = '1';
            videoElement.style.visibility = 'visible';
            videoElement.style.display = 'block';
            
            // 2. Reiniciar el vídeo desde el principio
            videoElement.currentTime = 0;
            
            // 3. Asegurar que los atributos necesarios estén presentes
            videoElement.setAttribute('autoplay', '');
            videoElement.setAttribute('muted', '');
            videoElement.setAttribute('playsinline', '');
            videoElement.muted = true; // Doble confirmación de silencio
            
            // 4. Forzar la reproducción con manejo de promesa
            try {
                const playPromise = videoElement.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('✅ Reproducción iniciada con éxito');
                    }).catch(error => {
                        console.error('❌ Error al reproducir el vídeo:', error);
                        // Estrategia alternativa: recrear el elemento de vídeo
                        recreateVideoElement();
                    });
                }
            } catch (e) {
                console.error('❌ Excepción al intentar reproducir el vídeo:', e);
                // Estrategia alternativa: recrear el elemento de vídeo
                recreateVideoElement();
            }
        }
        
        // Función para recrear el elemento de vídeo desde cero
        function recreateVideoElement() {
            console.log("Recreando elemento de vídeo...");
            
            const videoContainer = document.querySelector('.hero-video-bg');
            const oldVideo = document.getElementById('hero-video');
            
            if (!videoContainer || !oldVideo) return;
            
            // Guardar la referencia a la fuente del vídeo
            const videoSource = oldVideo.querySelector('source').src;
            
            // Crear un nuevo elemento de vídeo
            const newVideo = document.createElement('video');
            newVideo.id = 'hero-video';
            newVideo.className = 'hero-video';
            newVideo.autoplay = true;
            newVideo.muted = true;
            newVideo.setAttribute('playsinline', '');
            newVideo.style.opacity = '1';
            
            // Crear y añadir el elemento source
            const source = document.createElement('source');
            source.src = videoSource;
            source.type = 'video/mp4';
            newVideo.appendChild(source);
            
            // Reemplazar el vídeo antiguo con el nuevo
            videoContainer.replaceChild(newVideo, oldVideo);
            
            // Intentar reproducir el nuevo vídeo
            setTimeout(() => {
                newVideo.play().catch(e => {
                    console.error("Aún no se puede reproducir después de recrear:", e);
                });
            }, 100);
            
            // Restaurar el evento de transición al logo
            newVideo.addEventListener('ended', function() {
                newVideo.style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('logo-container').style.opacity = '1';
                }, 500);
            });
        }
        
        // Estrategia 1: Intentar reproducir inmediatamente
        forceVideoPlay();
        
        // Estrategia 2: Intentar después de un breve retraso
        setTimeout(forceVideoPlay, 500);
        
        // Estrategia 3: Intentar después de que el DOM esté completamente cargado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', forceVideoPlay);
        }
        
        // Estrategia 4: Intentar después de que la página esté completamente cargada
        window.addEventListener('load', forceVideoPlay);
        
        // Estrategia 5: Intentar después de que el loader se oculte
        const loader = document.getElementById('loader');
        if (loader) {
            // Observar cambios en el loader
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class' && 
                        loader.classList.contains('hidden')) {
                        forceVideoPlay();
                        observer.disconnect();
                    }
                });
            });
            
            observer.observe(loader, { attributes: true });
            
            // Respaldo si el observer no detecta el cambio
            setTimeout(() => {
                if (loader.style.display === 'none' || 
                    loader.classList.contains('hidden') ||
                    getComputedStyle(loader).opacity === '0') {
                    forceVideoPlay();
                }
            }, 2500);
        }
        
        // Estrategia 6: Verificar periódicamente si el vídeo está pausado
        const videoCheckInterval = setInterval(() => {
            const videoElement = document.getElementById('hero-video');
            if (videoElement && videoElement.paused) {
                console.log("Vídeo detectado como pausado, intentando reproducir nuevamente");
                forceVideoPlay();
            } else if (videoElement && !videoElement.paused) {
                console.log("Vídeo reproduciéndose correctamente, deteniendo verificaciones");
                clearInterval(videoCheckInterval);
            }
        }, 1000);
        
        // Detener el intervalo después de 10 segundos para no consumir recursos indefinidamente
        setTimeout(() => {
            clearInterval(videoCheckInterval);
        }, 10000);
        
        // Estrategia 7: Usar interacción del usuario como respaldo
        document.addEventListener('click', function() {
            const videoElement = document.getElementById('hero-video');
            if (videoElement && videoElement.paused) {
                forceVideoPlay();
            }
        }, { once: false });
        
        // Estrategia 8: Simular interacción del usuario (último recurso)
        setTimeout(() => {
            const videoElement = document.getElementById('hero-video');
            if (videoElement && videoElement.paused) {
                console.log("Simulando interacción de usuario como último recurso");
                // Crear un evento de clic sintético
                const clickEvent = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                document.body.dispatchEvent(clickEvent);
            }
        }, 3000);
    }
    
    // Ejecutar inmediatamente
    forceVideoPlayback();
    
    // También ejecutar cuando el DOM esté listo (por si se ejecutó demasiado pronto)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', forceVideoPlayback);
    } else {
        // Si el DOM ya está listo, ejecutar con un pequeño retraso
        setTimeout(forceVideoPlayback, 100);
    }
})();
