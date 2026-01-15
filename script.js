// ========================================
// Portfolio Website - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initLanguageToggle();
    initMobileMenu();
    initHeaderScroll();
    initImageCarousel();
    initSmoothScroll();
    initCVDownload();
    initProjectModals();
});

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

// Initialize scroll animations after DOM is ready
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ========================================
// Project Modals
// ========================================
function initProjectModals() {
    const overlay = document.getElementById('modal-overlay');
    const projectCards = document.querySelectorAll('.project-card[data-modal]');

    if (!overlay) return;

    // Open modal when clicking project card
    projectCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Don't open modal if clicking on a link
            if (e.target.closest('a')) return;

            const modalId = this.dataset.modal;
            const modal = document.getElementById(`modal-${modalId}`);

            if (modal) {
                openModal(modal);
            }
        });
    });

    // Close modal handlers
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeActiveModal);
    });

    // Close on overlay click
    overlay.addEventListener('click', closeActiveModal);

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeActiveModal();
        }
    });

    // Initialize modal galleries
    initModalGalleries();
}

function openModal(modal) {
    const overlay = document.getElementById('modal-overlay');

    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Apply current language to modal
    const currentLang = localStorage.getItem('preferred-language') || 'en';
    setLanguage(currentLang);
}

function closeActiveModal() {
    const overlay = document.getElementById('modal-overlay');
    const activeModal = document.querySelector('.project-modal.active');

    // Pause any playing videos in the modal
    if (activeModal) {
        const videos = activeModal.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }

    if (overlay) overlay.classList.remove('active');
    if (activeModal) activeModal.classList.remove('active');
    document.body.style.overflow = '';
}

function initModalGalleries() {
    const galleries = document.querySelectorAll('.modal-gallery');

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('.modal-img');
        const dots = gallery.querySelectorAll('.gallery-dot');

        if (images.length <= 1 || dots.length === 0) return;

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                images.forEach((img, j) => {
                    img.classList.toggle('active', j === i);
                });
                dots.forEach((d, j) => {
                    d.classList.toggle('active', j === i);
                });
            });
        });
    });
}
