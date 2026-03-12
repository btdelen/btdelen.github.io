// ========================================
// Portfolio Website - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initLanguageToggle();
    initThemeToggle();
    initMobileMenu();
    initHeaderScroll();
    initImageCarousel();
    initSmoothScroll();
    initCVDownload();
    initProjectModals();
});

// ========================================
// Theme (Dark/Light) System
// ========================================
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    const sunIcon = themeBtn.querySelector('.sun-icon');
    const moonIcon = themeBtn.querySelector('.moon-icon');

    // Check localStorage or OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
        document.documentElement.setAttribute('data-theme', 'light');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'light') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    });
}

// ========================================
// Language Toggle System
// ========================================
function initLanguageToggle() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('preferred-language') || 'en';

    // Set initial language
    setLanguage(savedLang);
    updateLangButtons(savedLang);

    // Add click handlers
    langBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.dataset.lang;
            setLanguage(lang);
            updateLangButtons(lang);
            localStorage.setItem('preferred-language', lang);
        });
    });
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function updateLangButtons(activeLang) {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === activeLang);
    });
}

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !mobileNav) return;

    menuBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ========================================
// Header Scroll Effect
// ========================================
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// Image Carousel for Project Cards
// ========================================
function initImageCarousel() {
    const carousels = document.querySelectorAll('.image-carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img');
        const dots = carousel.querySelectorAll('.dot');
        let currentIndex = 0;
        let autoPlayInterval;

        if (images.length <= 1) return;

        // Auto-play function
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                updateCarousel();
            }, 4000);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        function updateCarousel() {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === currentIndex);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        // Dot click handlers
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
                stopAutoPlay();
                startAutoPlay();
            });
        });

        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);

        // Start autoplay
        startAutoPlay();
    });
}

// ========================================
// Smooth Scroll
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// CV Download Handler
// ========================================
function initCVDownload() {
    const cvButtons = document.querySelectorAll('.cv-btn');

    cvButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            // Get current language and build CV path
            const currentLang = localStorage.getItem('preferred-language') || 'en';
            const cvPath = `assets/cv/CV_${currentLang.toUpperCase()}.pdf`;

            // Open CV in new tab
            window.open(cvPath, '_blank');

            // Show confirmation toast
            const message = currentLang === 'tr'
                ? 'CV indiriliyor...'
                : 'Downloading CV...';
            showToast(message);
        });
    });
}

// ========================================
// Toast Notification
// ========================================
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-bg-card, #1E1E1E);
        color: var(--color-text-primary, #FFFFFF);
        padding: 12px 24px;
        border-radius: 8px;
        border: 1px solid var(--color-border, #2A2A2A);
        font-size: 14px;
        z-index: 10000;
        animation: toastIn 0.3s ease, toastOut 0.3s ease 2.7s forwards;
    `;

    // Add animation keyframes if not exists
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes toastIn {
                from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                to { opacity: 1; transform: translateX(-50%) translateY(0); }
            }
            @keyframes toastOut {
                from { opacity: 1; transform: translateX(-50%) translateY(0); }
                to { opacity: 0; transform: translateX(-50%) translateY(20px); }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Remove after animation
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ========================================
// Intersection Observer for Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll('.project-card, .coming-soon-card, .contact-link');
    animateElements.forEach(el => observer.observe(el));
}

// Modal Logic Removed for Multi-Page Refactor
