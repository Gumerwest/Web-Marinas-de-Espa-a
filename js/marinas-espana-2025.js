// Marinas de España 2025 - Ultra Premium JavaScript

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all premium features
    initPreloader();
    initCustomCursor();
    initNavigation();
    initHeroAnimations();
    initVideoFeatures();
    initScrollEffects();
    initCounterAnimations();
    initSmoothScrolling();
    initContactForm();
    initMobileMenu();
});

// Premium Preloader
function initPreloader() {
    const preloader = document.getElementById('loader');
    const progressBar = document.getElementById('progress-bar');
    
    let progress = 0;
    const duration = 2500;
    const interval = 16;
    const increment = 100 / (duration / interval);
    
    const loadingInterval = setInterval(() => {
        progress += increment;
        
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
    }, interval);
}

// Custom Cursor with Interactive Effects
function initCustomCursor() {
    // Only init on desktop
    if (window.innerWidth <= 768) return;
    
    const cursor = document.getElementById('cursor');
    const cursorDot = cursor.querySelector('.cursor-dot');
    const cursorOutline = cursor.querySelector('.cursor-outline');
    
    let cursorX = 0;
    let cursorY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        
        // Move dot immediately
        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
    });
    
    // Smooth follow for outline
    function animateCursor() {
        const distX = cursorX - outlineX;
        const distY = cursorY - outlineY;
        
        outlineX += distX * 0.1;
        outlineY += distY * 0.1;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn-premium, [data-cursor]');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        
        el.addEventListener('mouseleave', function() {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Premium Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effects
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Navbar background
        if (scrolled > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Hero Animations
function initHeroAnimations() {
    // Hero content is already animated via CSS
    // Additional JS animations can be added here
}

// Video Features
function initVideoFeatures() {
    const heroVideo = document.querySelector('.hero-video');
    
    if (!heroVideo) return;
    
    // Pause video when out of view
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play();
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.5 });
    
    videoObserver.observe(heroVideo);
    
    // Video modal functionality (if needed)
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add video modal functionality here
            console.log('Play button clicked');
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    // Intersection Observer for animations
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
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.section-header, .sponsor-card, .news-card, .association-card, .info-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Counter Animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format number with commas for large numbers
            if (target > 1000) {
                counter.textContent = Math.floor(current).toLocaleString();
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    };
    
    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    // Floating labels
    const formGroups = form.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            input.addEventListener('focus', () => {
                label.style.transform = 'translateY(-1.5rem) scale(0.8)';
                label.style.color = 'var(--accent-gold-dark)';
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.style.transform = 'translateY(0) scale(1)';
                    label.style.color = 'var(--gray-500)';
                }
            });
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.innerHTML = '<i class="fas fa-check"></i> Mensaje enviado';
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                form.reset();
                
                // Reset labels
                formGroups.forEach(group => {
                    const label = group.querySelector('label');
                    if (label) {
                        label.style.transform = 'translateY(0) scale(1)';
                        label.style.color = 'var(--gray-500)';
                    }
                });
            }, 2000);
        }, 1500);
    });
}

// Trigger entrance animations
function triggerEntranceAnimations() {
    // Add any additional entrance animations here
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
}

// Utility functions
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

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Performance optimizations
window.addEventListener('resize', debounce(() => {
    // Reinitialize cursor on resize
    if (window.innerWidth > 768) {
        initCustomCursor();
    }
}, 250));

// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
if (images.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
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

// Parallax effect for hero video
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo && scrolled < window.innerHeight) {
        const rate = scrolled * -0.5;
        heroVideo.style.transform = `translate(-50%, -50%) scale(1.1) translateY(${rate}px)`;
    }
}, 16));

// Add loading states for interactive elements
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-premium')) {
        const button = e.target;
        const originalContent = button.innerHTML;
        
        // Add loading state for buttons that don't have specific handlers
        if (!button.hasAttribute('data-no-loading')) {
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = originalContent;
                button.disabled = false;
            }, 1500);
        }
    }
});

// Console welcome message
console.log('%c🚢 Marinas de España 2025', 'color: #ffd700; font-size: 24px; font-weight: bold;');
console.log('%cPágina web ultra-premium desarrollada para FEAPDT', 'color: #1e3a8a; font-size: 14px;');
console.log('%c42 años liderando el sector náutico español', 'color: #6b7280; font-size: 12px;');

