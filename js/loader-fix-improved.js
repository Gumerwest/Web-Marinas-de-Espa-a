// Script de emergencia mejorado para forzar la ocultación del loader
// Este script se ejecuta inmediatamente sin esperar a DOMContentLoaded
(function() {
    console.log('Script de emergencia ejecutándose inmediatamente');
    
    // Función para ocultar el loader
    function hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
            console.log('Loader ocultado por script de emergencia mejorado');
        }
    }
    
    // Intentar ocultar el loader inmediatamente
    hideLoader();
    
    // También intentar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideLoader);
    }
    
    // Y como último recurso, después de un tiempo
    setTimeout(hideLoader, 1500);
    setTimeout(hideLoader, 3000);
})();
