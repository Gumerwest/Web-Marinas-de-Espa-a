/**
 * Script para manejar la reproducción del vídeo y la transición al logo
 * Solución robusta para problemas de autoplay
 */

document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos clave
    const videoElement = document.getElementById('hero-video');
    const logoContainer = document.getElementById('logo-container');
    const loader = document.getElementById('loader');
    
    // Variables de control
    let videoPlayed = false;
    let videoEnded = false;
    
    // Función para mostrar el logo
    function showLogo() {
        if (videoElement) videoElement.classList.add('hidden');
        if (logoContainer) {
            logoContainer.classList.add('visible');
            console.log('Mostrando logo...');
        }
    }
    
    // Función para intentar reproducir el vídeo
    function playVideo() {
        if (!videoElement || videoPlayed) return;
        
        console.log('Intentando reproducir vídeo...');
        
        // Asegurar que el vídeo esté configurado correctamente
        videoElement.muted = true;
        videoElement.setAttribute('playsinline', '');
        
        // Intentar reproducir el vídeo
        const playPromise = videoElement.play();
        
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('Video reproduciéndose correctamente');
                    videoPlayed = true;
                    
                    // Cuando el vídeo termine, mostrar el logo
                    videoElement.addEventListener('ended', function() {
                        videoEnded = true;
                        showLogo();
                    });
                })
                .catch(error => {
                    console.error('Error al reproducir video:', error);
                    
                    // Si hay error, mostrar el logo después de un breve retraso
                    setTimeout(showLogo, 2000);
                });
        } else {
            // Si no hay promesa (navegadores antiguos), mostrar logo después de un tiempo
            setTimeout(showLogo, 2000);
        }
    }
    
    // Detectar cuando el loader desaparece para iniciar el vídeo
    if (loader) {
        // Usando MutationObserver para detectar cambios en el loader
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class' && 
                    loader.classList.contains('hidden')) {
                    playVideo();
                    observer.disconnect();
                }
            });
        });
        
        observer.observe(loader, { attributes: true });
        
        // Respaldo: si después de 3 segundos el loader sigue visible, intentar reproducir
        setTimeout(function() {
            if (!videoPlayed) playVideo();
        }, 3000);
    } else {
        // Si no hay loader, reproducir inmediatamente
        playVideo();
    }
    
    // Timeout de seguridad: si después de 10 segundos el vídeo no ha terminado, mostrar logo
    setTimeout(function() {
        if (!videoEnded) showLogo();
    }, 10000);
});
