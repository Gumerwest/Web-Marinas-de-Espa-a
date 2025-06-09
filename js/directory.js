// Directorio de Puertos Deportivos - JavaScript

// Datos de puertos deportivos organizados por regiones
const puertosData = [
    // Cataluña
    {
        nombre: "Puerto de Portbou",
        region: "cataluna",
        ubicacion: "Portbou, Girona",
        amarres: 297,
        esloraMaxima: 20,
        servicios: ["Aseos", "Duchas", "Escuela de vela", "Meteorología"],
        web: "http://portdeportbou.gencat.cat/es/",
        telefono: null,
        coordenadas: "42º 25,07' N – 003º 10' E"
    },
    {
        nombre: "Club Náutico Llança",
        region: "cataluna",
        ubicacion: "Llança, Girona",
        amarres: 490,
        esloraMaxima: 18,
        servicios: ["Bar", "Restaurante", "Vigilancia 24h", "Wi-Fi", "Supermercado"],
        web: "https://www.cnllanca.cat/es",
        telefono: null,
        coordenadas: "42º 22,4' N – 3º 09, 7 E"
    },
    {
        nombre: "Puerto deportivo de Roses",
        region: "cataluna",
        ubicacion: "Roses, Girona",
        amarres: 485,
        esloraMaxima: 45,
        servicios: ["Bar", "Restaurante", "Supermercado", "Wi-Fi", "Farmacia"],
        web: "https://www.portroses.com/es",
        telefono: null,
        coordenadas: "42º 15,2' N – 3º 10,5' E"
    },
    {
        nombre: "Marina Empuriabrava",
        region: "cataluna",
        ubicacion: "Empuriabrava, Girona",
        amarres: 5000,
        esloraMaxima: 26,
        servicios: ["Restaurante", "Bar", "Vigilancia 24h", "Farmacia", "Alquiler coches"],
        web: "http://www.portempuriabrava.com/",
        telefono: null,
        coordenadas: "42º 03,1' N – 03º 12, 4' E"
    },
    {
        nombre: "Club Náutico Estartit",
        region: "cataluna",
        ubicacion: "L'Estartit, Girona",
        amarres: 643,
        esloraMaxima: 25,
        servicios: ["Restaurante", "Bar", "Escuela de vela", "Complejo deportivo"],
        web: "https://www.cnestartit.com/es/",
        telefono: null,
        coordenadas: "42º 03' 1 N – 003º 12' 4 E"
    },
    {
        nombre: "Port Ginesta",
        region: "cataluna",
        ubicacion: "Sitges, Barcelona",
        amarres: 1189,
        esloraMaxima: 30,
        servicios: ["75 empresas", "Servicios náuticos", "Restauración", "Comercios"],
        web: "https://www.portginesta.com/",
        telefono: null,
        coordenadas: "41º 16' N – 1º 52' E"
    },

    // Baleares
    {
        nombre: "Port Adriano",
        region: "baleares",
        ubicacion: "El Toro, Mallorca",
        amarres: 488,
        esloraMaxima: 80,
        servicios: ["Marina de lujo", "Restaurantes", "Boutiques", "Servicios VIP"],
        web: "https://www.portadriano.com/",
        telefono: "+34 971 232494",
        coordenadas: "39º 30' N – 2º 28' E"
    },
    {
        nombre: "Puerto deportivo Alcudiamar",
        region: "baleares",
        ubicacion: "Puerto de Alcudia, Mallorca",
        amarres: 800,
        esloraMaxima: 25,
        servicios: ["Restaurante", "Bar", "Supermercado", "Servicios técnicos"],
        web: "https://www.alcudiamar.es/",
        telefono: "971 54 60 00",
        coordenadas: "39º 51' N – 3º 07' E"
    },
    {
        nombre: "Marina de Bonaire",
        region: "baleares",
        ubicacion: "Alcudia, Mallorca",
        amarres: 350,
        esloraMaxima: 20,
        servicios: ["Restaurante", "Bar", "Piscina", "Apartamentos"],
        web: null,
        telefono: null,
        coordenadas: "39º 52' N – 3º 06' E"
    },
    {
        nombre: "Marina de Tramontana",
        region: "baleares",
        ubicacion: "Port de Sóller, Mallorca",
        amarres: 170,
        esloraMaxima: 15,
        servicios: ["Restaurante", "Bar", "Servicios técnicos"],
        web: "www.marinatramontana.com",
        telefono: "971632960",
        coordenadas: "39º 48' N – 2º 41' E"
    },

    // Andalucía
    {
        nombre: "Puerto Banús",
        region: "andalucia",
        ubicacion: "Marbella, Málaga",
        amarres: 915,
        esloraMaxima: 60,
        servicios: ["Marina de lujo", "Restaurantes", "Boutiques", "Vida nocturna"],
        web: "https://www.puertobanus.es/",
        telefono: "+34 952 909 800",
        coordenadas: "36º 29' N – 4º 57' W"
    },
    {
        nombre: "Marina de Sotogrande",
        region: "andalucia",
        ubicacion: "Sotogrande, Cádiz",
        amarres: 1400,
        esloraMaxima: 70,
        servicios: ["Marina de lujo", "Golf", "Polo", "Restaurantes exclusivos"],
        web: "https://www.marinasotogrande.com/",
        telefono: "+34 956 790 000",
        coordenadas: "36º 17' N – 5º 16' W"
    },
    {
        nombre: "Club Náutico el Candado",
        region: "andalucia",
        ubicacion: "Málaga",
        amarres: 267,
        esloraMaxima: 15,
        servicios: ["Restaurante", "Bar", "Escuela de vela", "Piscina"],
        web: "https://www.cnelcandado.com/",
        telefono: "+34 952 29 00 41",
        coordenadas: "36º 44' N – 4º 20' W"
    },

    // Valencia
    {
        nombre: "Marina Real Juan Carlos I",
        region: "valencia",
        ubicacion: "Valencia",
        amarres: 721,
        esloraMaxima: 120,
        servicios: ["Marina de lujo", "Restaurantes", "Centro comercial", "Hotel"],
        web: "https://www.marinarealjuancarlos.com/",
        telefono: "+34 96 367 90 11",
        coordenadas: "39º 27' N – 0º 19' W"
    },
    {
        nombre: "Club Náutico de Altea",
        region: "valencia",
        ubicacion: "Altea, Alicante",
        amarres: 400,
        esloraMaxima: 20,
        servicios: ["Restaurante", "Bar", "Escuela de vela", "Servicios técnicos"],
        web: "https://www.cnaltea.com/",
        telefono: "+34 96 584 02 04",
        coordenadas: "38º 36' N – 0º 03' E"
    },
    {
        nombre: "Marina de Dénia",
        region: "valencia",
        ubicacion: "Dénia, Alicante",
        amarres: 546,
        esloraMaxima: 25,
        servicios: ["Restaurante", "Bar", "Supermercado", "Servicios técnicos"],
        web: "https://www.marinadenia.com/",
        telefono: "+34 96 578 32 33",
        coordenadas: "38º 50' N – 0º 06' E"
    },

    // Murcia
    {
        nombre: "Marina de las Salinas",
        region: "murcia",
        ubicacion: "Torrevieja, Alicante",
        amarres: 242,
        esloraMaxima: 15,
        servicios: ["Restaurante", "Bar", "Supermercado", "Piscina"],
        web: "https://www.marinasalinas.com/",
        telefono: "+34 96 571 09 94",
        coordenadas: "37º 58' N – 0º 41' W"
    },
    {
        nombre: "Puerto Deportivo Tomás Maestre",
        region: "murcia",
        ubicacion: "La Manga, Murcia",
        amarres: 543,
        esloraMaxima: 20,
        servicios: ["Restaurante", "Bar", "Supermercado", "Hotel"],
        web: "https://www.tomasmaestre.com/",
        telefono: "+34 968 14 53 79",
        coordenadas: "37º 42' N – 0º 44' W"
    },

    // Galicia
    {
        nombre: "Marina Coruña",
        region: "galicia",
        ubicacion: "A Coruña",
        amarres: 518,
        esloraMaxima: 25,
        servicios: ["Restaurante", "Bar", "Servicios técnicos", "Combustible"],
        web: "https://www.marinacoruna.com/",
        telefono: "+34 981 20 76 25",
        coordenadas: "43º 22' N – 8º 23' W"
    },
    {
        nombre: "Marina de Vigo",
        region: "galicia",
        ubicacion: "Vigo, Pontevedra",
        amarres: 350,
        esloraMaxima: 20,
        servicios: ["Restaurante", "Bar", "Servicios técnicos", "Supermercado"],
        web: "https://www.marinavigo.com/",
        telefono: "+34 986 44 77 88",
        coordenadas: "42º 14' N – 8º 43' W"
    },

    // Asturias
    {
        nombre: "Puerto Deportivo de Gijón",
        region: "asturias",
        ubicacion: "Gijón",
        amarres: 543,
        esloraMaxima: 25,
        servicios: ["Restaurante", "Bar", "Servicios técnicos", "Combustible"],
        web: "https://www.puertodeportivogijon.com/",
        telefono: "+34 985 34 69 75",
        coordenadas: "43º 33' N – 5º 40' W"
    },
    {
        nombre: "Real Club Astur de Regatas",
        region: "asturias",
        ubicacion: "Gijón",
        amarres: 200,
        esloraMaxima: 15,
        servicios: ["Restaurante", "Bar", "Escuela de vela", "Regatas"],
        web: "https://www.rcar.es/",
        telefono: "+34 985 35 13 24",
        coordenadas: "43º 33' N – 5º 39' W"
    },

    // Canarias
    {
        nombre: "Marina Las Palmas",
        region: "canarias",
        ubicacion: "Las Palmas, Gran Canaria",
        amarres: 1250,
        esloraMaxima: 120,
        servicios: ["Marina internacional", "Restaurantes", "Servicios técnicos", "Combustible"],
        web: "https://www.marinasatlantic.com/",
        telefono: "+34 928 31 66 16",
        coordenadas: "28º 08' N – 15º 25' W"
    },
    {
        nombre: "Marina de Arrecife",
        region: "canarias",
        ubicacion: "Arrecife, Lanzarote",
        amarres: 400,
        esloraMaxima: 30,
        servicios: ["Restaurante", "Bar", "Servicios técnicos", "Centro comercial"],
        web: "https://www.marinaarrecife.com/",
        telefono: "+34 928 81 16 37",
        coordenadas: "28º 58' N – 13º 33' W"
    }
];

// Variables globales
let filtroActual = 'all';
let busquedaActual = '';

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    inicializarDirectorio();
    configurarEventos();
});

function inicializarDirectorio() {
    mostrarPuertos(puertosData);
    actualizarContadores();
}

function configurarEventos() {
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            busquedaActual = e.target.value.toLowerCase();
            filtrarPuertos();
        });
    }

    // Filtros por región
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Actualizar botón activo
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Aplicar filtro
            filtroActual = this.dataset.region;
            filtrarPuertos();
        });
    });
}

function filtrarPuertos() {
    let puertosFiltrados = puertosData;

    // Filtrar por región
    if (filtroActual !== 'all') {
        puertosFiltrados = puertosFiltrados.filter(puerto => puerto.region === filtroActual);
    }

    // Filtrar por búsqueda
    if (busquedaActual) {
        puertosFiltrados = puertosFiltrados.filter(puerto => 
            puerto.nombre.toLowerCase().includes(busquedaActual) ||
            puerto.ubicacion.toLowerCase().includes(busquedaActual) ||
            puerto.servicios.some(servicio => servicio.toLowerCase().includes(busquedaActual))
        );
    }

    mostrarPuertos(puertosFiltrados);
}

function mostrarPuertos(puertos) {
    const grid = document.getElementById('directoryGrid');
    if (!grid) return;

    if (puertos.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>No se encontraron puertos</h3>
                <p>Intenta ajustar los filtros o la búsqueda</p>
                <button class="clear-filters-btn" onclick="limpiarFiltros()">
                    Limpiar filtros
                </button>
            </div>
        `;
        return;
    }

    grid.innerHTML = puertos.map(puerto => crearTarjetaPuerto(puerto)).join('');
    
    // Animar entrada
    setTimeout(() => {
        const cards = grid.querySelectorAll('.port-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 50);
}

function crearTarjetaPuerto(puerto) {
    const regionNames = {
        'cataluna': 'Cataluña',
        'baleares': 'Baleares',
        'andalucia': 'Andalucía',
        'valencia': 'Valencia',
        'murcia': 'Murcia',
        'galicia': 'Galicia',
        'asturias': 'Asturias',
        'canarias': 'Canarias'
    };

    const serviciosLimitados = puerto.servicios.slice(0, 4);
    const serviciosExtra = puerto.servicios.length > 4 ? puerto.servicios.length - 4 : 0;

    return `
        <div class="port-card" data-region="${puerto.region}">
            <div class="port-header">
                <h3 class="port-name">${puerto.nombre}</h3>
                <span class="port-region">${regionNames[puerto.region]}</span>
            </div>
            
            <div class="port-location">${puerto.ubicacion}</div>
            
            <div class="port-stats">
                <div class="port-stat">
                    <span class="port-stat-value">${puerto.amarres}</span>
                    <span class="port-stat-label">Amarres</span>
                </div>
                <div class="port-stat">
                    <span class="port-stat-value">${puerto.esloraMaxima}m</span>
                    <span class="port-stat-label">Eslora máx.</span>
                </div>
            </div>
            
            <div class="port-services">
                <h4>Servicios</h4>
                <div class="services-list">
                    ${serviciosLimitados.map(servicio => 
                        `<span class="service-tag">${servicio}</span>`
                    ).join('')}
                    ${serviciosExtra > 0 ? `<span class="service-tag">+${serviciosExtra} más</span>` : ''}
                </div>
            </div>
            
            <div class="port-contact">
                ${puerto.telefono ? `<a href="tel:${puerto.telefono}" class="contact-btn">📞 Llamar</a>` : ''}
                ${puerto.web ? `<a href="${puerto.web}" target="_blank" class="contact-btn website">🌐 Web</a>` : ''}
                ${!puerto.telefono && !puerto.web ? '<span class="contact-btn">📧 Contacto disponible</span>' : ''}
            </div>
        </div>
    `;
}

function limpiarFiltros() {
    // Limpiar búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
        busquedaActual = '';
    }

    // Limpiar filtro de región
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-region="all"]').classList.add('active');
    filtroActual = 'all';

    // Mostrar todos los puertos
    mostrarPuertos(puertosData);
}

function actualizarContadores() {
    const contadores = {
        'cataluna': puertosData.filter(p => p.region === 'cataluna').length,
        'baleares': puertosData.filter(p => p.region === 'baleares').length,
        'andalucia': puertosData.filter(p => p.region === 'andalucia').length,
        'valencia': puertosData.filter(p => p.region === 'valencia').length,
        'murcia': puertosData.filter(p => p.region === 'murcia').length,
        'galicia': puertosData.filter(p => p.region === 'galicia').length,
        'asturias': puertosData.filter(p => p.region === 'asturias').length,
        'canarias': puertosData.filter(p => p.region === 'canarias').length
    };

    // Actualizar contadores en las tarjetas de asociaciones
    Object.keys(contadores).forEach(region => {
        const card = document.querySelector(`[data-region="${region}"] .port-count`);
        if (card) {
            card.textContent = `${contadores[region]} puertos`;
        }
    });
}

// Función para añadir más puertos dinámicamente
function agregarPuerto(puerto) {
    puertosData.push(puerto);
    filtrarPuertos();
    actualizarContadores();
}

// Exportar funciones para uso externo
window.DirectorioPuertos = {
    agregarPuerto,
    limpiarFiltros,
    filtrarPuertos
};

