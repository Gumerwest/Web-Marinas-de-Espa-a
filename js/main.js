// Datos de las marinas principales de España
const marinasData = [
    {
        id: 1,
        name: "Marina d'Empuriabrava",
        location: "Girona, Costa Brava",
        amarres: "5.000",
        eslora: "25m",
        description: "La marina residencial más grande de Europa, conocida como la 'Venecia catalana' con 23 km de canales navegables.",
        image: "images/empuriabrava.jpg",
        badge: "Más Grande"
    },
    {
        id: 2,
        name: "Puerto Deportivo Tomás Maestre",
        location: "Murcia, Mar Menor",
        amarres: "1.721",
        eslora: "Variable",
        description: "El puerto más grande del Mediterráneo en su categoría, con acceso tanto al Mar Menor como al Mediterráneo.",
        image: "images/tomas-maestre.jpg",
        badge: "Mediterráneo"
    },
    {
        id: 3,
        name: "Puerto Sotogrande",
        location: "Cádiz, Costa del Sol",
        amarres: "1.382",
        eslora: "Variable",
        description: "El enclave de turismo náutico más exclusivo del sur de España, cerca del Estrecho de Gibraltar.",
        image: "images/sotogrande.jpg",
        badge: "Exclusivo"
    },
    {
        id: 4,
        name: "Marina Las Palmas",
        location: "Gran Canaria, Canarias",
        amarres: "1.363",
        eslora: "50m",
        description: "Punto estratégico para travesías transatlánticas, ubicado en la encrucijada del Atlántico.",
        image: "images/las-palmas.jpg",
        badge: "Atlántico"
    },
    {
        id: 5,
        name: "Puerto Banús",
        location: "Marbella, Costa del Sol",
        amarres: "915",
        eslora: "100m+",
        description: "El puerto de lujo más famoso de España, destino exclusivo para superyates y celebridades.",
        image: "images/puerto-banus.jpg",
        badge: "Lujo"
    },
    {
        id: 6,
        name: "Marina Ibiza",
        location: "Ibiza, Islas Baleares",
        amarres: "539",
        eslora: "110m",
        description: "Uno de los puertos más visitados en verano, con servicios VIP para superyates.",
        image: "images/marina-ibiza.jpg",
        badge: "VIP"
    }
];

// Función para renderizar las marinas
function renderMarinas() {
    const marinasGrid = document.querySelector('.marinas-grid');
    
    marinasGrid.innerHTML = marinasData.map(marina => `
        <div class="marina-card" data-aos="fade-up">
            <div class="marina-image" style="background-image: url('${marina.image}')">
                <div class="marina-badge">${marina.badge}</div>
            </div>
            <div class="marina-content">
                <h3>${marina.name}</h3>
                <div class="marina-location">
                    <span>📍</span> ${marina.location}
                </div>
                <p class="marina-description">${marina.description}</p>
                <div class="marina-stats">
                    <div class="stat">
                        <div class="stat-number">${marina.amarres}</div>
                        <div class="stat-label">Amarres</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">${marina.eslora}</div>
                        <div class="stat-label">Eslora máx.</div>
                    </div>
                </div>
                <a href="#" class="marina-link">Ver más detalles →</a>
            </div>
        </div>
    `).join('');
}

// Navegación suave
function smoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajuste para navbar fijo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Menú móvil
function mobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animación del botón hamburguesa
        const bars = this.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            bar.style.transform = navMenu.classList.contains('active') 
                ? `rotate(${index === 0 ? '45deg' : index === 1 ? '0deg' : '-45deg'}) translate(${index === 1 ? '0px' : '6px'}, ${index === 0 ? '6px' : index === 1 ? '0px' : '-6px'})`
                : 'none';
            bar.style.opacity = navMenu.classList.contains('active') && index === 1 ? '0' : '1';
        });
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });
}

// Efecto parallax en el hero
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Animación de aparición al hacer scroll
function scrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    const animatedElements = document.querySelectorAll('.marina-card, .service-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Contador animado para estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 20);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Cambio de color de navbar al hacer scroll
function navbarScrollEffect() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(30, 60, 114, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Función para cargar imágenes de forma lazy
function lazyLoadImages() {
    const images = document.querySelectorAll('.marina-image');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Aquí se cargarían las imágenes reales cuando estén disponibles
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    renderMarinas();
    smoothScroll();
    mobileMenu();
    parallaxEffect();
    scrollAnimations();
    animateCounters();
    navbarScrollEffect();
    lazyLoadImages();
    
    // Mensaje de bienvenida en consola
    console.log('🚢 Marinas de España - Página web cargada correctamente');
    console.log('Desarrollado con ❤️ para los amantes del mar');
});

// Función para mostrar información adicional de una marina
function showMarinaDetails(marinaId) {
    const marina = marinasData.find(m => m.id === marinaId);
    if (marina) {
        alert(`Información detallada de ${marina.name}:\n\n${marina.description}\n\nUbicación: ${marina.location}\nAmarres: ${marina.amarres}\nEslora máxima: ${marina.eslora}`);
    }
}

// Exportar funciones para uso global
window.marinasApp = {
    showMarinaDetails,
    marinasData
};

