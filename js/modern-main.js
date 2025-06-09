// JavaScript Moderno para FEAPDT
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegación suave mejorada
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.institutional-header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar estado activo
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Header moderno con efectos
    const header = document.querySelector('.institutional-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Aplicar animaciones a elementos
    const animatedElements = document.querySelectorAll('.association-card, .board-member, .publication-card, .stat-card');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(element);
    });

    // Efecto parallax suave para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
        }
    });

    // Contador animado para estadísticas
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Activar contadores cuando sean visibles
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                if (!element.dataset.animated) {
                    element.dataset.animated = 'true';
                    
                    // Extraer número del texto
                    if (text === '152') {
                        animateCounter(element, 152);
                    } else if (text === '8') {
                        animateCounter(element, 8);
                    } else if (text === '125K+') {
                        element.textContent = '0';
                        animateCounter(element, 125);
                        setTimeout(() => {
                            element.textContent = '125K+';
                        }, 2000);
                    } else if (text === '8000') {
                        animateCounter(element, 8000);
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Efectos hover mejorados para tarjetas
    const cards = document.querySelectorAll('.association-card, .board-member, .publication-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        });
    });

    // Efecto de escritura para el título principal
    function typeWriter(element, text, speed = 80) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Aplicar efecto de escritura al título destacado
    const titleHighlight = document.querySelector('.title-highlight');
    if (titleHighlight) {
        const originalText = titleHighlight.textContent;
        setTimeout(() => {
            typeWriter(titleHighlight, originalText, 60);
        }, 1500);
    }

    // Scroll suave al hacer clic en el indicador
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const federacionSection = document.querySelector('#federacion');
            if (federacionSection) {
                federacionSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Navegación activa basada en scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Efecto de partículas sutiles en el hero
    function createParticles() {
        const hero = document.querySelector('.hero-institutional');
        if (!hero) return;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: rgba(245, 158, 11, 0.4);
                border-radius: 50%;
                pointer-events: none;
                animation: float ${8 + Math.random() * 12}s infinite linear;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                z-index: 2;
            `;
            hero.appendChild(particle);
        }
    }

    // Añadir CSS para animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .nav-menu a.active {
            color: #1e3a8a;
            background-color: #dbeafe;
        }
        
        .nav-menu a.active::after {
            width: 80%;
        }
        
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2rem !important;
            }
            
            .title-highlight {
                font-size: 2.5rem !important;
            }
            
            .stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 1rem !important;
            }
            
            .stat-card {
                padding: 1rem !important;
            }
            
            .stat-number {
                font-size: 2rem !important;
            }
        }
        
        @media (max-width: 480px) {
            .associations-grid,
            .publications-grid {
                grid-template-columns: 1fr !important;
            }
            
            .board-grid {
                grid-template-columns: repeat(2, 1fr) !important;
            }
        }
    `;
    document.head.appendChild(style);

    createParticles();

    // Mejorar rendimiento con throttling
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Aplicar throttling a eventos de scroll
    window.addEventListener('scroll', throttle(function() {
        // Código de scroll optimizado ya aplicado arriba
    }, 16));

    console.log('🌊 FEAPDT - Página institucional moderna cargada correctamente');
});

