// Script para controlar la transición del vídeo al logo
document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('hero-video');
    const logoContainer = document.getElementById('logo-container');
    
    // Ocultar el logo inicialmente
    logoContainer.style.opacity = '0';
    
    // Función para mostrar el logo cuando el vídeo termina
    videoElement.addEventListener('ended', function() {
        // Ocultar el vídeo con una transición suave
        videoElement.style.opacity = '0';
        
        // Mostrar el logo con una transición suave después de que el vídeo se desvanezca
        setTimeout(function() {
            logoContainer.style.opacity = '1';
        }, 500); // 500ms de retraso para una transición escalonada
    });
});
