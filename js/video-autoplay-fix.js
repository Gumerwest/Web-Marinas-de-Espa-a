// Script para garantizar la reproducción automática del vídeo después del loader
document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('hero-video');
    const loader = document.getElementById('loader');
    
    // Función para forzar la reproducción del vídeo
    function forceVideoPlay() {
        if (videoElement) {
            // Aseguramos que el vídeo esté visible
            videoElement.style.opacity = '1';
            
            // Forzamos la reproducción del vídeo
            const playPromise = videoElement.play();
            
            // Manejo de la promesa para evitar errores en consola
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    console.log('Reproducción automática iniciada con éxito');
                })
                .catch(error => {
                    console.log('Error en reproducción automática:', error);
                    // Intentamos reproducir nuevamente después de un gesto del usuario
                    document.addEventListener('click', function() {
                        videoElement.play();
                    }, { once: true });
                });
            }
        }
    }
    
    // Observamos cuando el loader se oculta para iniciar el vídeo
    if (loader) {
        // Opción 1: Usando MutationObserver para detectar cuando el loader se oculta
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class' && 
                    loader.classList.contains('hidden')) {
                    forceVideoPlay();
                    observer.disconnect();
                }
            });
        });
        
        observer.observe(loader, { attributes: true });
        
        // Opción 2: Respaldo por si el observer falla
        setTimeout(function() {
            forceVideoPlay();
        }, 2500); // Tiempo estimado para que el loader termine
    } else {
        // Si no hay loader, reproducimos inmediatamente
        forceVideoPlay();
    }
    
    // Respaldo adicional: intentar reproducir el vídeo después de un tiempo
    setTimeout(function() {
        if (videoElement && videoElement.paused) {
            forceVideoPlay();
        }
    }, 3000);
});
