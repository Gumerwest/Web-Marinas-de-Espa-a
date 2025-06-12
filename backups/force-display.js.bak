// Script para forzar la visualización del contenido
(function() {
    // Ejecutar inmediatamente
    forceDisplayContent();
    
    // También ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', forceDisplayContent);
    }
    
    // Y como respaldo, ejecutar después de un tiempo
    setTimeout(forceDisplayContent, 500);
    setTimeout(forceDisplayContent, 1500);
    setTimeout(forceDisplayContent, 3000);
    
    function forceDisplayContent() {
        console.log('Forzando visualización del contenido');
        
        // Ocultar el loader
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
            console.log('Loader ocultado');
        }
        
        // Asegurar que el body sea visible
        document.body.style.overflow = 'auto';
        document.body.style.visibility = 'visible';
        
        // Mostrar elementos principales
        const mainElements = [
            '.hero-ultra', 
            '.navbar-ultra', 
            '.section-header', 
            '.news-section', 
            '.map-section',
            '.federation-section', 
            '.associations-section', 
            '.contact-section', 
            '.footer-premium'
        ];
        
        mainElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el) {
                    el.style.display = 'block';
                    el.style.visibility = 'visible';
                    el.style.opacity = '1';
                }
            });
        });
    }
})();
