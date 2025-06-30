// Mapa Integrado de Marinas de España - Versión Robusta
let integratedMap;
let integratedMarkers = [];
let filteredMarinas = [];

// Función para inicializar el mapa cuando todo esté listo
function initializeIntegratedMap() {
    // Verificar que los datos estén disponibles
    if (typeof marinasEspana === 'undefined' || !marinasEspana || marinasEspana.length === 0) {
        console.error('Datos de marinas no disponibles');
        // Intentar de nuevo en 1 segundo
        setTimeout(initializeIntegratedMap, 1000);
        return;
    }
    
    console.log('Inicializando mapa con', marinasEspana.length, 'marinas');
    filteredMarinas = [...marinasEspana];
    
    // Verificar que el contenedor del mapa existe
    const mapContainer = document.getElementById('integratedMap');
    if (!mapContainer) {
        console.error('Contenedor del mapa no encontrado');
        return;
    }
    
    // Inicializar el mapa
    initIntegratedMap();
    setupIntegratedControls();
    updateStats();
}

// Colores por región
const regionColors = {
    'Andalucía': '#1e40af',
    'Baleares': '#dc2626',
    'Cataluña': '#16a34a',
    'Valencia': '#2563eb',
    'Murcia': '#7c3aed',
    'Galicia': '#ea580c',
    'Asturias': '#0891b2',
    'Canarias': '#be123c'
};

// Inicializar mapa
function initIntegratedMap() {
    try {
        integratedMap = L.map('integratedMap', {
            center: [40.0, -4.0],
            zoom: 6,
            zoomControl: true,
            scrollWheelZoom: true
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(integratedMap);

        // Agregar marcadores
        addIntegratedMarkers();
        
        console.log('Mapa inicializado correctamente');
    } catch (error) {
        console.error('Error al inicializar el mapa:', error);
    }
}

// Agregar marcadores al mapa
function addIntegratedMarkers() {
    // Limpiar marcadores existentes
    integratedMarkers.forEach(marker => {
        integratedMap.removeLayer(marker);
    });
    integratedMarkers = [];

    // Agregar nuevos marcadores
    filteredMarinas.forEach(marina => {
        const color = regionColors[marina.region] || '#6b7280';
        
        const customIcon = L.divIcon({
            className: 'custom-marker-integrated',
            html: `<div style="
                background-color: ${color};
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: 2px solid white;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            "></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });

        const marker = L.marker([marina.lat, marina.lng], { icon: customIcon });
        
        const popupContent = `
            <div class="integrated-popup">
                <h4>${marina.name}</h4>
                <div class="popup-buttons">
                    <a href="${marina.website}" target="_blank" class="popup-btn web-btn">
                        <i class="fas fa-globe"></i> Web
                    </a>
                    <a href="${marina.google_maps}" target="_blank" class="popup-btn maps-btn">
                        <i class="fas fa-map-marker-alt"></i> Maps
                    </a>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            className: 'custom-popup-integrated'
        });
        
        marker.addTo(integratedMap);
        integratedMarkers.push(marker);
    });
}

// Configurar controles
function setupIntegratedControls() {
    const searchInput = document.querySelector('#mapSearch');
    const regionButtons = document.querySelectorAll('.region-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const activeRegion = document.querySelector('.region-filter.active')?.textContent || 'Todas';
            filterMarinas(searchTerm, activeRegion);
        });
    }
    
    regionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            regionButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const region = this.textContent;
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            filterMarinas(searchTerm, region);
        });
    });
    
    console.log('Controles configurados');
}

// Filtrar marinas
function filterMarinas(searchTerm, region) {
    if (!marinasEspana || marinasEspana.length === 0) {
        console.error('No hay datos de marinas para filtrar');
        return;
    }
    
    filteredMarinas = marinasEspana.filter(marina => {
        const matchesSearch = !searchTerm || 
            marina.name.toLowerCase().includes(searchTerm) ||
            marina.region.toLowerCase().includes(searchTerm);
        
        const matchesRegion = region === 'Todas' || marina.region === region;
        
        return matchesSearch && matchesRegion;
    });
    
    // Actualizar mapa y estadísticas
    if (integratedMap) {
        addIntegratedMarkers();
    }
    updateStats();
}

// Actualizar estadísticas
function updateStats() {
    const marinasCount = document.querySelector('.stat-number');
    const regionsCount = document.querySelectorAll('.stat-number')[1];
    
    if (marinasCount) {
        marinasCount.textContent = filteredMarinas.length;
    }
    
    if (regionsCount) {
        const uniqueRegions = [...new Set(filteredMarinas.map(m => m.region))];
        regionsCount.textContent = uniqueRegions.length;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, iniciando mapa...');
    // Intentar inicializar inmediatamente
    initializeIntegratedMap();
});

// También intentar inicializar cuando la ventana se carga completamente
window.addEventListener('load', function() {
    console.log('Ventana cargada, verificando mapa...');
    if (!integratedMap) {
        initializeIntegratedMap();
    }
});

// Redimensionar mapa cuando sea necesario
window.addEventListener('resize', function() {
    if (integratedMap) {
        setTimeout(() => {
            integratedMap.invalidateSize();
        }, 100);
    }
});

