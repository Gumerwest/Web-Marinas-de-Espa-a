// Ultra Premium JavaScript - Marinas de España 2025

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all premium features
    initPreloader();
    initPremiumNavigation();
    initCustomCursor();
    initHeroVideo();
    initSmoothScrolling();
    initCounterAnimations();
    initParallaxEffects();
    initInteractiveMap();
    initNewsCarousel();
    initVideoModals();
    initContactForm();
    initScrollReveal();
    initWaveAnimations();
    initAOS();
});

// Premium Preloader with Progress
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.progress-bar');
    
    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            setTimeout(() => {
                preloader.classList.add('hidden');
                // Trigger entrance animations
                triggerEntranceAnimations();
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 100);
}

// Premium Navigation with Advanced Effects
function initPremiumNavigation() {
    const navbar = document.querySelector('.navbar-premium');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effects
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Active link highlighting with smooth transition
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Custom Cursor with Interactive Effects
function initCustomCursor() {
    // Only initialize on desktop
    if (window.innerWidth <= 768) return;
    
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    let cursorX = 0;
    let cursorY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        
        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
    });
    
    // Smooth follow for outline
    function animateCursor() {
        let distX = cursorX - outlineX;
        let distY = cursorY - outlineY;
        
        outlineX += distX * 0.1;
        outlineY += distY * 0.1;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive, .map-marker, .experience-card, .news-card, .partner-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '50px';
            cursorOutline.style.height = '50px';
            cursorOutline.style.borderColor = 'var(--accent-gold)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '30px';
            cursorOutline.style.height = '30px';
            cursorOutline.style.borderColor = 'var(--accent-gold)';
        });
    });
}

// Hero Video Management
function initHeroVideo() {
    const video = document.querySelector('.hero-family-video');
    const playBtn = document.getElementById('play-story');
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    
    // Optimize video playback
    if (video) {
        video.playbackRate = 0.8; // Slightly slower for emotional effect
        
        // Pause video when out of view
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting && !video.paused) {
                    video.pause();
                } else if (entry.isIntersecting && video.paused) {
                    video.play().catch(e => console.log('Video autoplay prevented'));
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(video);
    }
    
    // Play story button
    if (playBtn && videoModal && modalVideo) {
        playBtn.addEventListener('click', () => {
            modalVideo.src = 'videos/barco-video-final-correcto.mp4';
            videoModal.classList.add('active');
            modalVideo.play().catch(e => console.log('Video play prevented'));
            document.body.style.overflow = 'hidden';
        });
    }
}

// Advanced Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = 80;
                const targetPosition = targetSection.offsetTop - offset;
                
                // Custom smooth scroll with easing
                smoothScrollTo(targetPosition, 1000);
            }
        });
    });
}

function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function
        const easeInOutCubic = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, start + distance * easeInOutCubic);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Premium Counter Animations
function initCounterAnimations() {
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
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    const duration = 2500;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    updateCounter();
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Interactive Map
function initInteractiveMap() {
    const markers = document.querySelectorAll('.map-marker');
    
    markers.forEach(marker => {
        marker.addEventListener('mouseenter', function() {
            // Animate all other markers
            markers.forEach(m => {
                if (m !== marker) {
                    m.style.opacity = '0.5';
                    m.style.transform = 'translate(-50%, -50%) scale(0.8)';
                }
            });
            
            // Enhance current marker
            this.style.transform = 'translate(-50%, -50%) scale(1.2)';
        });
        
        marker.addEventListener('mouseleave', function() {
            markers.forEach(m => {
                m.style.opacity = '1';
                m.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
        
        marker.addEventListener('click', function() {
            const region = this.dataset.region;
            showRegionInfo(region);
        });
    });
}

function showRegionInfo(region) {
    // Create a simple notification for region info
    const regionNames = {
        'andalucia': 'Andalucía',
        'baleares': 'Islas Baleares',
        'cataluna': 'Cataluña',
        'valencia': 'Comunidad Valenciana',
        'galicia': 'Galicia',
        'asturias': 'Principado de Asturias',
        'cantabria': 'Cantabria',
        'pais-vasco': 'País Vasco',
        'murcia': 'Región de Murcia'
    };
    
    const regionName = regionNames[region] || region;
    showNotification(`Explorando ${regionName} - Descubre nuestras instalaciones náuticas`, 'info');
}

// News Carousel
function initNewsCarousel() {
    const newsCarousel = document.querySelector('.news-carousel');
    
    if (newsCarousel && typeof Swiper !== 'undefined') {
        new Swiper('.news-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }
}

// Video Modals
function initVideoModals() {
    const videoModal = document.querySelector('.video-modal-premium');
    const modalClose = document.querySelector('.video-modal-close');
    const modalBackdrop = document.querySelector('.video-modal-backdrop');
    const modalVideo = document.getElementById('modal-video');
    
    if (!videoModal) return;
    
    // Close modal
    function closeModal() {
        videoModal.classList.remove('active');
        if (modalVideo) {
            modalVideo.pause();
            modalVideo.src = '';
        }
        document.body.style.overflow = '';
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Contact Form with Validation
function initContactForm() {
    const form = document.querySelector('.contact-form-premium');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const nameInput = form.querySelector('#name');
            const emailInput = form.querySelector('#email');
            const subjectInput = form.querySelector('#subject');
            const messageInput = form.querySelector('#message');
            const submitBtn = form.querySelector('.btn-premium');
            const originalBtnContent = submitBtn.innerHTML;
            
            // Validate inputs
            if (!nameInput.value.trim()) {
                showNotification('Por favor, introduce tu nombre', 'error');
                nameInput.focus();
                return;
            }
            
            if (!validateEmail(emailInput.value)) {
                showNotification('Por favor, introduce un email válido', 'error');
                emailInput.focus();
                return;
            }
            
            if (!subjectInput.value.trim()) {
                showNotification('Por favor, introduce un asunto', 'error');
                subjectInput.focus();
                return;
            }
            
            if (!messageInput.value.trim()) {
                showNotification('Por favor, escribe tu mensaje', 'error');
                messageInput.focus();
                return;
            }
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success
            showNotification('¡Mensaje enviado correctamente! Te responderemos pronto.', 'success');
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = originalBtnContent;
            submitBtn.disabled = false;
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'exclamation-circle' : 
                 'info-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '20px 30px',
        background: type === 'success' ? 'var(--accent-gold)' : 
                   type === 'error' ? '#ef4444' : 
                   'var(--primary-blue)',
        color: type === 'success' ? 'var(--primary-navy)' : 'var(--white)',
        borderRadius: '50px',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        fontWeight: '600',
        zIndex: '9999',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease-out',
        maxWidth: '400px',
        fontSize: '0.9rem'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Scroll Reveal Animations
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    
    if (revealElements.length === 0) return;
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Wave Animations
function initWaveAnimations() {
    const waves = document.querySelectorAll('.wave');
    
    waves.forEach((wave, index) => {
        wave.style.animationDelay = `${index * 0.5}s`;
    });
}

// Initialize AOS (Animate On Scroll)
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 100
        });
    }
}

// Trigger entrance animations after preloader
function triggerEntranceAnimations() {
    // Add entrance classes to elements
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title-premium, .hero-description-premium, .hero-cta-group, .hero-stats-premium');
    
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Performance optimizations
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Handle resize events
window.addEventListener('resize', debounce(() => {
    // Reinitialize custom cursor on resize
    if (window.innerWidth > 768) {
        initCustomCursor();
    }
}, 250));

// Handle visibility change (tab switching)
document.addEventListener('visibilitychange', () => {
    const video = document.querySelector('.hero-family-video');
    if (video) {
        if (document.hidden) {
            video.pause();
        } else {
            video.play().catch(e => console.log('Video autoplay prevented'));
        }
    }
});

// Error handling for video
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.hero-family-video');
    if (video) {
        video.addEventListener('error', (e) => {
            console.log('Video error:', e);
            // Fallback to image if video fails
            const fallbackImg = video.nextElementSibling;
            if (fallbackImg && fallbackImg.tagName === 'IMG') {
                fallbackImg.style.display = 'block';
                video.style.display = 'none';
            }
        });
    }
});

