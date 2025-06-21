// Script para corregir títulos problemáticos - Versión mejorada
(function() {
    'use strict';
    
    function fixBrokenTitles() {
        console.log('Ejecutando corrección de títulos...');
        
        // Corregir títulos específicos por ID o clase
        const titleMappings = [
            {
                selector: 'h2, h3, .section-title',
                search: 'I Congreso class="golden">Marinas de España',
                replace: 'I Congreso <span class="golden">Marinas de España</span>'
            },
            {
                selector: 'h2, h3, .section-title',
                search: 'class="golden">COLABORADORES',
                replace: '<span class="golden">COLABORADORES</span>'
            },
            {
                selector: 'h2, h3, .section-title',
                search: 'Últimas class="golden">Noticias',
                replace: 'Últimas <span class="golden">Noticias</span>'
            },
            {
                selector: 'h2, h3, .section-title',
                search: 'Mapa de class="golden">Puertos Deportivos',
                replace: 'Mapa de <span class="golden">Puertos Deportivos</span>'
            },
            {
                selector: 'h2, h3, .section-title',
                search: 'La class="golden">Federación',
                replace: 'La <span class="golden">Federación</span>'
            },
            {
                selector: 'h2, h3, .section-title',
                search: 'class="golden">Asociaciones',
                replace: '<span class="golden">Asociaciones</span>'
            },
            {
                selector: 'h2, h3, .section-title',
                search: 'class="golden">Contacto Directo',
                replace: '<span class="golden">Contacto Directo</span>'
            }
        ];
        
        titleMappings.forEach(function(mapping) {
            const elements = document.querySelectorAll(mapping.selector);
            elements.forEach(function(element) {
                if (element.textContent && element.textContent.includes(mapping.search)) {
                    element.innerHTML = mapping.replace;
                    console.log('Título corregido:', mapping.search);
                }
            });
        });
        
        // Búsqueda general para cualquier elemento que contenga "class="golden">"
        const allElements = document.querySelectorAll('*');
        allElements.forEach(function(element) {
            if (element.textContent && element.textContent.includes('class="golden">')) {
                const originalText = element.textContent;
                const correctedText = originalText.replace(/(.*)class="golden">(.*)/, '$1<span class="golden">$2</span>');
                if (correctedText !== originalText) {
                    element.innerHTML = correctedText;
                    console.log('Título genérico corregido:', originalText);
                }
            }
        });
    }
    
    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixBrokenTitles);
    } else {
        fixBrokenTitles();
    }
    
    // Ejecutar múltiples veces para asegurar que se aplica
    setTimeout(fixBrokenTitles, 100);
    setTimeout(fixBrokenTitles, 500);
    setTimeout(fixBrokenTitles, 1000);
    setTimeout(fixBrokenTitles, 2000);
    
    // Observar cambios en el DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                setTimeout(fixBrokenTitles, 100);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
    
})();

