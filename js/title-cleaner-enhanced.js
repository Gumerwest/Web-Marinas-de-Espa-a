// Marinas de España - Script de corrección de títulos
// Este script reemplaza dinámicamente los títulos problemáticos con versiones limpias

document.addEventListener('DOMContentLoaded', function() {
  // Función para limpiar los títulos con fragmentos literales
  function cleanTitles() {
    // Sección de Noticias
    const newsTitle = document.querySelector('.news-section .section-title');
    if (newsTitle) {
      newsTitle.innerHTML = '<span>Últimas</span> <span class="golden">Noticias</span>';
    }
    
    // Sección de Mapa
    const mapTitle = document.querySelector('.map-section .section-title');
    if (mapTitle) {
      mapTitle.innerHTML = '<span>Mapa</span> <span class="golden">Interactivo</span>';
    }
    
    // Sección de Federación
    const fedTitle = document.querySelector('.federation-section .section-title');
    if (fedTitle) {
      fedTitle.innerHTML = '<span>La</span> <span class="golden">Federación</span>';
    }
    
    // Sección de Patrocinadores
    const sponsorsTitle = document.querySelector('.sponsors-section .section-title');
    if (sponsorsTitle) {
      sponsorsTitle.innerHTML = '<span class="golden">PATROCINADORES</span>';
    }
    
    // Sección de Asociaciones (si existe)
    const assocTitle = document.querySelector('.associations-section .section-title');
    if (assocTitle) {
      assocTitle.innerHTML = '<span class="golden">Asociaciones</span>';
    }
    
    // Limpieza adicional para cualquier texto que contenga "class=" en títulos
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(heading) {
      if (heading.innerText.includes('class=')) {
        // Extraer solo el texto real sin los fragmentos de clase
        let cleanText = heading.innerText
          .replace(/class="[^"]*"/g, '')
          .replace(/class='[^']*'/g, '')
          .replace(/class=[^ ]*/g, '')
          .trim();
        
        heading.innerText = cleanText;
      }
    });
    
    // Limpieza específica para la sección de patrocinadores que parece persistente
    const sponsorsSection = document.querySelector('.sponsors-section');
    if (sponsorsSection) {
      const problematicTexts = sponsorsSection.querySelectorAll('*');
      problematicTexts.forEach(function(element) {
        if (element.innerText && element.innerText.includes('class="golden">PATROCINADORES')) {
          element.innerText = 'PATROCINADORES';
        }
      });
    }
    
    console.log('Títulos limpiados correctamente');
  }
  
  // Ejecutar la limpieza inmediatamente
  cleanTitles();
  
  // También ejecutar después de un breve retraso para asegurar que se aplica después de cualquier otro script
  setTimeout(cleanTitles, 500);
  
  // Y ejecutar periódicamente para asegurar que se mantiene la limpieza
  setInterval(cleanTitles, 2000);
});
