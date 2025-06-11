// Ultra Luxury JavaScript 2025 - FEAPDT

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all premium features
    initPreloader();
    initCustomCursor();
    initPremiumNavigation();
    initHeroAnimations();
    initVideoFeatures();
    initScrollEffects();
    initParallaxEffects();
    initTiltEffects();
    initMagneticButtons();
    initTypewriter();
    initCounterAnimations();
    initSmoothScrolling();
    initContactForm();
    initParticles();
    initGSAPAnimations();
});

// Premium Preloader with Progress
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('progress-bar');
    
    let progress = 0;
    const duration = 2000;
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
    if (window.innerWidth <= 1024) return;
    
    const cursor = document.getElementById('cursor');
    const cursorDot = cursor.querySelector('.cursor-dot');
    const cursorOutline = cursor.querySelector('.cursor-outline');
    const cursorText = cursor.querySelector('.cursor-text');
    
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
    const interactiveElements = document.querySelectorAll('a, button, .magnetic-link, .magnetic-button, [data-cursor]');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            const cursorType = this.getAttribute('data-cursor');
            
            if (cursorType === 'view') {
                cursorText.textContent = 'Ver';
                cursorText.style.opacity = '1';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(2)';
            } else {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            }
            
            cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        
        el.addEventListener('mouseleave', function() {
            cursorText.style.opacity = '0';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Premium Navigation with Scroll Effects
function initPremiumNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const progressTrack = document.querySelector('.progress-track');
    
    // Scroll effects
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Navbar background
        if (scrolled > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll progress
        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrolled / winHeight) * 100;
        progressTrack.style.width = scrollPercent + '%';
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Active link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
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

// Hero Animations with GSAP
function initHeroAnimations() {
    // Split text animation for title
    const titleWords = document.querySelectorAll('.title-word');
    
    gsap.set(titleWords, {
        y: 100,
        opacity: 0
    });
    
    gsap.to(titleWords, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5
    });
    
    // Hero content animations
    gsap.from('.hero-badge', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
    
    gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "power3.out"
    });
    
    gsap.from('.hero-actions', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
    });
    
    gsap.from('.hero-stats', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 1.8,
        ease: "power3.out"
    });
}

// Video Features
function initVideoFeatures() {
    const playButton = document.getElementById('play-video');
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeButton = document.querySelector('.video-modal-close');
    const backdrop = document.querySelector('.video-modal-backdrop');
    
    // Play video modal
    playButton.addEventListener('click', () => {
        videoModal.classList.add('active');
        modalVideo.src = 'videos/barco-video-final-correcto.mp4';
        modalVideo.play();
    });
    
    // Close modal
    function closeModal() {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.src = '';
    }
    
    closeButton.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Pause video on scroll
    const heroVideo = document.querySelector('.hero-video');
    let ticking = false;
    
    function updateVideo() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled > window.innerHeight * 0.5) {
            heroVideo.pause();
        } else {
            heroVideo.play();
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateVideo);
            ticking = true;
        }
    });
}

// Scroll Effects with GSAP ScrollTrigger
function initScrollEffects() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section.querySelectorAll('.section-header'), {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // Animate cards
    gsap.utils.toArray('[data-aos]').forEach(element => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // Parallax effect for hero
    gsap.to('.hero-video', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-ultra",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Tilt Effects
function initTiltEffects() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale3d(1.05, 1.05, 1.05)';
        });
        
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Magnetic Buttons
function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.magnetic-link, .magnetic-button');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });
}

// Typewriter Effect
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    const texts = [
        'recuerdos inolvidables',
        'aventuras marinas',
        'momentos únicos',
        'experiencias náuticas',
        'historias especiales'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();
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
            
            // Format number with commas
            counter.textContent = Math.floor(current).toLocaleString();
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
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitButton = form.querySelector('.btn-submit');
            const originalText = submitButton.querySelector('.btn-content span').textContent;
            
            submitButton.querySelector('.btn-content span').textContent = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.querySelector('.btn-content span').textContent = 'Mensaje enviado ✓';
                
                setTimeout(() => {
                    submitButton.querySelector('.btn-content span').textContent = originalText;
                    submitButton.disabled = false;
                    form.reset();
                }, 2000);
            }, 1000);
        });
    }
}

// Particles System
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 215, 0, 0.5);
            border-radius: 50%;
            pointer-events: none;
        `;
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// GSAP Animations
function initGSAPAnimations() {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Timeline for entrance animations
    const tl = gsap.timeline({ paused: true });
    
    tl.from('.navbar-ultra', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    .from('.hero-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5");
    
    // Store timeline globally for preloader
    window.entranceTimeline = tl;
}

// Trigger entrance animations
function triggerEntranceAnimations() {
    if (window.entranceTimeline) {
        window.entranceTimeline.play();
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
    if (window.innerWidth > 1024) {
        initCustomCursor();
    }
}, 250));

// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
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

