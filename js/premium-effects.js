// Marinas de España - JavaScript Premium con Efectos Modernos
(function() {
    'use strict';
    
    // ===== LOADER PREMIUM =====
    function initLoader() {
        const loader = document.getElementById('loader');
        const progressBar = document.getElementById('progress-bar');
        
        if (loader && progressBar) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    setTimeout(() => {
                        loader.classList.add('hidden');
                        document.body.style.overflow = 'auto';
                        initPageAnimations();
                    }, 500);
                }
                progressBar.style.width = progress + '%';
            }, 200);
        }
    }
    
    // ===== CURSOR PERSONALIZADO =====
    function initCustomCursor() {
        const cursor = document.getElementById('cursor');
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        if (!cursor || !cursorDot || !cursorOutline) return;
        
        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let outlineX = 0, outlineY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Movimiento directo del punto
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });
        
        // Animación suave para el outline
        function animateCursor() {
            // Interpolación suave
            outlineX += (mouseX - outlineX) * 0.1;
            outlineY += (mouseY - outlineY) * 0.1;
            
            cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Efectos hover
        const hoverElements = document.querySelectorAll('a, button, .sponsor-card, .news-card, .association-card, .info-card, .feature-card');
        
        hoverElements.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorOutline.style.transform += ' scale(1.5)';
            });
            
            elem.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
        
        // Ocultar cursor en dispositivos táctiles
        document.addEventListener('touchstart', () => {
            cursor.style.display = 'none';
        });
    }
    
    // ===== NAVEGACIÓN MEJORADA =====
    function initNavigation() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Efecto scroll navbar
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
                
                // Hide/show navbar on scroll
                if (currentScroll > lastScroll && currentScroll > 500) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });
        
        // Mobile menu
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
            });
            
            // Cerrar menú al hacer clic en enlaces
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            });
        }
        
        // Active link on scroll
        const sections = document.querySelectorAll('section[id]');
        
        function updateActiveLink() {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (correspondingLink) {
                        correspondingLink.classList.add('active');
                    }
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveLink);
    }
    
    // ===== ANIMACIÓN DE NÚMEROS =====
    function animateNumbers() {
        const counters = document.querySelectorAll('.stat-number');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-count'));
                    const duration = 2000; // 2 segundos
                    const increment = target / (duration / 16); // 60 FPS
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.floor(current).toLocaleString('es-ES');
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target.toLocaleString('es-ES');
                            // Añadir efecto de brillo al completar
                            counter.style.transform = 'scale(1.1)';
                            setTimeout(() => {
                                counter.style.transform = 'scale(1)';
                            }, 300);
                        }
                    };
                    
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
    
    // ===== ANIMACIONES SCROLL REVEAL =====
    function initScrollAnimations() {
        const reveals = document.querySelectorAll('.section-header, .sponsor-card, .news-card, .info-card, .association-card, .feature-card, .contact-info, .contact-form');
        
        reveals.forEach((element, index) => {
            element.classList.add('reveal');
            element.style.transitionDelay = `${index * 0.1}s`;
        });
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Animación especial para cards
                    if (entry.target.classList.contains('sponsor-card') || 
                        entry.target.classList.contains('news-card') ||
                        entry.target.classList.contains('association-card')) {
                        entry.target.style.animation = 'fadeInScale 0.8s ease-out forwards';
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        reveals.forEach(element => {
            revealObserver.observe(element);
        });
    }
    
    // ===== EFECTOS PARALLAX =====
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.hero-overlay, .congreso-banner::before, .map-placeholder::before');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // ===== SMOOTH SCROLL =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // ===== ANIMACIONES HOVER AVANZADAS =====
    function initHoverEffects() {
        // Efecto 3D para cards
        const cards3D = document.querySelectorAll('.sponsor-card, .news-card, .association-card');
        
        cards3D.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
        
        // Efecto magnético para botones
        const magneticButtons = document.querySelectorAll('.btn-premium, .nav-cta, .btn-congreso-small');
        
        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }
    
    // ===== ANIMACIÓN DE TEXTO DINÁMICO =====
    function initTextAnimations() {
        const animatedTexts = document.querySelectorAll('.hero-title, .section-title');
        
        animatedTexts.forEach(text => {
            const words = text.innerHTML.split(' ');
            text.innerHTML = words.map(word => `<span class="animated-word">${word}</span>`).join(' ');
        });
        
        const animatedWords = document.querySelectorAll('.animated-word');
        
        const wordObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }, index * 100);
                }
            });
        }, { threshold: 0.5 });
        
        animatedWords.forEach(word => {
            wordObserver.observe(word);
        });
    }
    
    // ===== FORMULARIO INTERACTIVO =====
    function initFormEffects() {
        const formInputs = document.querySelectorAll('.form-control');
        
        formInputs.forEach(input => {
            // Efecto de onda al focus
            input.addEventListener('focus', (e) => {
                const ripple = document.createElement('span');
                ripple.className = 'input-ripple';
                input.parentNode.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 1000);
            });
            
            // Validación en tiempo real
            input.addEventListener('input', (e) => {
                if (input.value.length > 0) {
                    input.classList.add('has-value');
                } else {
                    input.classList.remove('has-value');
                }
            });
        });
        
        // Animación del botón submit
        const submitBtn = document.querySelector('.btn-submit');
        if (submitBtn) {
            const form = submitBtn.closest('form');
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Animación de envío
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado con éxito!';
                    submitBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                    
                    setTimeout(() => {
                        form.reset();
                        submitBtn.innerHTML = 'Enviar mensaje';
                        submitBtn.style.background = '';
                        submitBtn.disabled = false;
                        
                        // Eliminar clases has-value
                        formInputs.forEach(input => {
                            input.classList.remove('has-value');
                        });
                    }, 2000);
                }, 1500);
            });
        }
    }
    
    // ===== ANIMACIONES DE PÁGINA =====
    function initPageAnimations() {
        // Fade in inicial de elementos
        const fadeElements = document.querySelectorAll('.hero-content, .hero-stats, .nav-brand, .nav-menu');
        
        fadeElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // ===== OPTIMIZACIÓN DE RENDIMIENTO =====
    function debounce(func, wait) {
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
    
    // ===== SCROLL TO TOP =====
    function initScrollToTop() {
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        if (!scrollToTopBtn) return;
        
        window.addEventListener('scroll', debounce(() => {
            if (window.pageYOffset > 500) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }, 100));
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== PARTÍCULAS HERO =====
    function createParticles() {
        const particlesContainer = document.querySelector('.particles-container');
        
        if (!particlesContainer) return;
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Tamaño aleatorio
            const size = Math.random() * 5 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Posición aleatoria
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Opacidad aleatoria
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Animación aleatoria
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // ===== TRANSICIÓN DE VÍDEO A LOGO =====
    function initVideoLogoTransition() {
        const video = document.getElementById('hero-video');
        const logoContainer = document.querySelector('.logo-container');
        
        if (video && logoContainer) {
            video.addEventListener('ended', () => {
                // Fade out video
                video.style.opacity = '0';
                
                // Fade in logo
                setTimeout(() => {
                    logoContainer.style.opacity = '1';
                }, 500);
            });
        }
    }
    
    // ===== INICIALIZACIÓN =====
    function init() {
        // Inicializar loader
        initLoader();
        
        // Inicializar cursor personalizado
        initCustomCursor();
        
        // Inicializar navegación
        initNavigation();
        
        // Inicializar animaciones de scroll
        initScrollAnimations();
        
        // Inicializar efectos parallax
        initParallax();
        
        // Inicializar smooth scroll
        initSmoothScroll();
        
        // Inicializar efectos hover
        initHoverEffects();
        
        // Inicializar animaciones de texto
        initTextAnimations();
        
        // Inicializar efectos de formulario
        initFormEffects();
        
        // Inicializar animación de números
        animateNumbers();
        
        // Inicializar botón scroll to top
        initScrollToTop();
        
        // Crear partículas
        createParticles();
        
        // Inicializar transición de vídeo a logo
        initVideoLogoTransition();
    }
    
    // Iniciar cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', init);
})();
