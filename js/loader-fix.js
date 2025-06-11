// Script para forzar la ocultación del loader
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar el loader después de 3 segundos
    setTimeout(function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
            console.log('Loader ocultado por script de emergencia');
        }
    }, 3000);
});
