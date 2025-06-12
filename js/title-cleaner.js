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
    
    console.log('Títulos limpiados correctamente');
  }
  
  // Ejecutar la limpieza inmediatamente
  cleanTitles();
  
  // También ejecutar después de un breve retraso para asegurar que se aplica después de cualquier otro script
  setTimeout(cleanTitles, 500);
});
