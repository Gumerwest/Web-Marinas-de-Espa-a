// Script para corregir títulos problemáticos
document.addEventListener('DOMContentLoaded', function() {
    // Función para corregir títulos que muestran código HTML literal
    function fixBrokenTitles() {
        // Buscar todos los elementos que contengan "class=" en su texto
        const allElements = document.querySelectorAll('*');
        
        allElements.forEach(function(element) {
            if (element.textContent && element.textContent.includes('class="golden">')) {
                // Corregir el título del congreso
                if (element.textContent.includes('I Congreso class="golden">Marinas de España')) {
                    element.innerHTML = '<span>I Congreso</span> <span class="golden">Marinas de España</span>';
                }
                // Corregir el título de colaboradores
                else if (element.textContent.includes('class="golden">COLABORADORES')) {
                    element.innerHTML = '<span class="golden">COLABORADORES</span>';
                }
                // Corregir otros títulos problemáticos
                else if (element.textContent.includes('class="golden">')) {
                    const text = element.textContent.replace(/class="golden">/, '');
                    element.innerHTML = `<span class="golden">${text}</span>`;
                }
            }
        });
        
        console.log('Títulos corregidos');
    }
    
    // Ejecutar inmediatamente
    fixBrokenTitles();
    
    // Ejecutar después de un retraso para asegurar que se aplica
    setTimeout(fixBrokenTitles, 500);
    setTimeout(fixBrokenTitles, 1000);
    setTimeout(fixBrokenTitles, 2000);
});

