// Mapa Integrado de Marinas de España
let integratedMap;
let integratedMarkers = [];
let filteredMarinas = [];

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Verificar que los datos estén disponibles
    if (typeof marinasEspana === 'undefined') {
        console.error('marinasEspana no está definido');
        return;
    }
    
    filteredMarinas = [...marinasEspana];
    
    // Inicializar el mapa si el contenedor existe
    const mapContainer = document.getElementById('integrated-map');
    if (mapContainer) {
        initIntegratedMap();
        setupIntegratedControls();
    }
});

// Colores por región
const regionColors = {
    'Andalucía': '#1e40af',
    'Baleares': '#166534', 
    'Cataluña': '#92400e',
    'Valencia': '#7c3aed',
    'Murcia': '#be185d',
    'Galicia': '#059669',
    'Asturias': '#dc2626',
    'Canarias': '#ea580c'
};

// Inicializar mapa integrado
function initIntegratedMap() {
    // Crear mapa centrado en España con altura compacta
    integratedMap = L.map('integratedMap', {
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        dragging: true,
        touchZoom: true
    }).setView([40.0, -3.5], 6);

    // Agregar tiles del mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(integratedMap);

    // Agregar controles de zoom personalizados
    L.control.zoom({
        position: 'bottomright'
    }).addTo(integratedMap);

    // Cargar marcadores
    loadIntegratedMarkers();
    
    // Configurar eventos
    setupIntegratedMapEvents();
}

// Cargar marcadores en el mapa integrado
function loadIntegratedMarkers() {
    // Limpiar marcadores existentes
    integratedMarkers.forEach(marker => integratedMap.removeLayer(marker));
    integratedMarkers = [];

    filteredMarinas.forEach((marina, index) => {
        const color = regionColors[marina.region] || '#666666';
        
        // Crear icono personalizado más pequeño para el mapa integrado
        const customIcon = L.divIcon({
            className: 'custom-marker-integrated',
            html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 10px; font-weight: bold;">${index + 1}</div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        const marker = L.marker([marina.lat, marina.lng], { icon: customIcon })
            .addTo(integratedMap);

        // Popup simplificado para el mapa integrado
        const popupContent = `
            <div class="integrated-popup">
                <h4>${marina.name}</h4>
                <div class="popup-buttons">
                    <a href="${marina.website}" target="_blank" class="popup-btn web-btn">
                        <i class="fas fa-globe"></i> Web
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=${marina.lat},${marina.lng}" target="_blank" class="popup-btn maps-btn">
                        <i class="fas fa-map-marker-alt"></i> Maps
                    </a>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: 200,
            className: 'custom-popup-integrated'
        });

        integratedMarkers.push(marker);
    });
}

// Configurar eventos del mapa integrado
function setupIntegratedMapEvents() {
    // Búsqueda
    const searchInput = document.getElementById('mapSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterMarinas(searchTerm, getCurrentRegionFilter());
        });
    }

    // Filtros de región
    const regionFilters = document.querySelectorAll('.region-filter');
    regionFilters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            // Actualizar estado activo
            regionFilters.forEach(f => f.classList.remove('active'));
            e.target.classList.add('active');
            
            const region = e.target.dataset.region;
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            filterMarinas(searchTerm, region);
        });
    });
}

// Filtrar marinas
function filterMarinas(searchTerm, region) {
    filteredMarinas = marinasEspana.filter(marina => {
        const matchesSearch = !searchTerm || 
            marina.name.toLowerCase().includes(searchTerm) ||
            marina.region.toLowerCase().includes(searchTerm);
        
        const matchesRegion = region === 'all' || marina.region === region;
        
        return matchesSearch && matchesRegion;
    });

    // Actualizar contador
    const totalElement = document.getElementById('totalMarinas');
    if (totalElement) {
        totalElement.textContent = filteredMarinas.length;
    }

    // Recargar marcadores
    loadIntegratedMarkers();
}

// Obtener filtro de región actual
function getCurrentRegionFilter() {
    const activeFilter = document.querySelector('.region-filter.active');
    return activeFilter ? activeFilter.dataset.region : 'all';
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un poco para asegurar que todos los elementos estén cargados
    setTimeout(() => {
        if (document.getElementById('integratedMap')) {
            initIntegratedMap();
        }
    }, 500);
});

// Redimensionar mapa cuando sea necesario
window.addEventListener('resize', function() {
    if (integratedMap) {
        setTimeout(() => {
            integratedMap.invalidateSize();
        }, 100);
    });
});

