// Marinas de España - JavaScript Simplificado
console.log('🚢 Marinas de España 2025', 'color: #ffd700; font-size: 24px; font-weight: bold;');

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Inicializar menú móvil
    initMobileMenu();
    
    // Inicializar contadores
    initCounters();
    
    // Inicializar navegación
    initNavigation();
});

// Menú móvil
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!navToggle || !navMenu) {
        console.error('Nav elements not found');
        return;
    }
    
    console.log('Mobile menu elements found, adding listeners...');
    
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Toggle clicked!');
        
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        console.log('Toggle active:', navToggle.classList.contains('active'));
        console.log('Menu active:', navMenu.classList.contains('active'));
    });
    
    // Cerrar menú al hacer clic en enlaces
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    console.log('Mobile menu initialized successfully');
}

// Contadores animados
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

// Navegación
function initNavigation() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

