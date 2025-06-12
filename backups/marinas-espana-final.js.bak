// Marinas de España - JavaScript Ultra Básico
(function() {
    'use strict';
    
    // Función para el menú móvil
    function setupMobileMenu() {
        const navToggle = document.querySelector('#nav-toggle');
        const navMenu = document.querySelector('#nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Cerrar menú al hacer clic en enlaces
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }
    
    // Función para contadores
    function setupCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(function(counter) {
            const target = parseInt(counter.getAttribute('data-count')) || 0;
            let current = 0;
            const increment = target / 100;
            
            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    counter.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current).toLocaleString();
                }
            }, 20);
        });
    }
    
    // Función para navegación
    function setupNavigation() {
        const navbar = document.querySelector('#navbar');
        if (navbar) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }
    }
    
    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setupMobileMenu();
            setupCounters();
            setupNavigation();
        });
    } else {
        setupMobileMenu();
        setupCounters();
        setupNavigation();
    }
})();

