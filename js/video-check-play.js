// Script para garantizar la reproducción del vídeo
document.addEventListener('DOMContentLoaded', function() {
    // Función para verificar si el vídeo existe y es reproducible
    function checkVideoAndPlay() {
        const videoElement = document.getElementById('hero-video');
        
        if (!videoElement) {
            console.error('Error: No se encontró el elemento de vídeo');
            return;
        }
        
        // Verificar si el vídeo tiene una fuente válida
        const videoSource = videoElement.querySelector('source');
        if (!videoSource || !videoSource.src) {
            console.error('Error: El vídeo no tiene una fuente válida');
            return;
        }
        
        // Verificar si el vídeo es accesible
        fetch(videoSource.src)
            .then(response => {
                if (!response.ok) {
                    console.error('Error: No se puede acceder al archivo de vídeo');
                    return;
                }
                
                console.log('Vídeo accesible, intentando reproducir...');
                
                // Asegurar que el vídeo esté configurado correctamente
                videoElement.muted = true;
                videoElement.setAttribute('playsinline', '');
                videoElement.setAttribute('autoplay', '');
                
                // Intentar reproducir el vídeo
                const playPromise = videoElement.play();
                
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log('Reproducción iniciada con éxito');
                        })
                        .catch(error => {
                            console.error('Error al reproducir el vídeo:', error);
                            
                            // Intentar reproducir nuevamente después de un tiempo
                            setTimeout(() => {
                                videoElement.play().catch(e => console.error('Segundo intento fallido:', e));
                            }, 1000);
                        });
                }
            })
            .catch(error => {
                console.error('Error al verificar el vídeo:', error);
            });
    }
    
    // Esperar a que la página esté completamente cargada
    window.addEventListener('load', function() {
        // Dar tiempo para que el loader desaparezca
        setTimeout(checkVideoAndPlay, 1000);
    });
    
    // También intentar reproducir cuando el loader desaparezca
    const loader = document.getElementById('loader');
    if (loader) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class' && 
                    loader.classList.contains('hidden')) {
                    checkVideoAndPlay();
                    observer.disconnect();
                }
            });
        });
        
        observer.observe(loader, { attributes: true });
    }
    
    // Intentar reproducir inmediatamente también
    checkVideoAndPlay();
});
