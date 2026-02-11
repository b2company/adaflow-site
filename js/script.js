// ===================================
// ADAFLOW - JAVASCRIPT INTERATIVO
// ===================================

// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const navbarLinks = document.querySelectorAll('.navbar-link');

    // Toggle menu mobile
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');

            // Animação do ícone hambúrguer
            const spans = this.querySelectorAll('span');
            if (navbarMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Fechar menu ao clicar em link
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 767 && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                const spans = navbarToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 767) {
            const isClickInsideMenu = navbarMenu.contains(event.target);
            const isClickOnToggle = navbarToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                const spans = navbarToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// ===== SLIDER DE DEPOIMENTOS =====
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.querySelector('.testimonial-nav.prev');
    const nextBtn = document.querySelector('.testimonial-nav.next');
    const dotsContainer = document.getElementById('testimonialsDots');

    if (!track) return;

    const cards = Array.from(track.children);
    const totalCards = cards.length;
    let currentIndex = 0;
    let cardsPerView = 3;
    let autoplayInterval;

    // Função para determinar cards por visualização
    function updateCardsPerView() {
        const width = window.innerWidth;
        if (width <= 767) {
            cardsPerView = 1;
        } else if (width <= 1024) {
            cardsPerView = 2;
        } else {
            cardsPerView = 3;
        }

        // Recalcular total de slides
        totalSlides = Math.ceil(totalCards / cardsPerView);
        createDots();
        updateSlider();
    }

    let totalSlides = Math.ceil(totalCards / cardsPerView);

    // Criar dots de navegação
    function createDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('testimonial-dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Atualizar slider
    function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(track).gap) || 32;
        const offset = -(currentIndex * (cardWidth + gap) * cardsPerView);
        track.style.transform = `translateX(${offset}px)`;

        // Atualizar dots
        document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Controlar visibilidade dos botões
        if (prevBtn && nextBtn) {
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
            nextBtn.style.opacity = currentIndex >= totalSlides - 1 ? '0.5' : '1';
            nextBtn.style.cursor = currentIndex >= totalSlides - 1 ? 'not-allowed' : 'pointer';
        }
    }

    // Ir para slide específico
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        currentIndex = index;
        updateSlider();
        resetAutoplay();
    }

    // Próximo slide
    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop
        }
        updateSlider();
    }

    // Slide anterior
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // Loop
        }
        updateSlider();
    }

    // Event listeners para botões
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                nextSlide();
                resetAutoplay();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                prevSlide();
                resetAutoplay();
            }
        });
    }

    // Autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000); // 5 segundos
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Pausar autoplay ao hover
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    // Suporte a touch/swipe em mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left - próximo
            if (currentIndex < totalSlides - 1) {
                nextSlide();
            }
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right - anterior
            if (currentIndex > 0) {
                prevSlide();
            }
        }
    }

    // Redimensionamento da janela
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCardsPerView();
        }, 250);
    });

    // Inicializar
    updateCardsPerView();
    startAutoplay();
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignorar links vazios ou apenas #
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Adicionar sombra quando rolar
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ===== ANIMAÇÃO DE ENTRADA (FADE IN) =====
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos para animar
    const elementsToAnimate = document.querySelectorAll('.section-title, .section-description, .block-layout, .testimonial-card');

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== PERFORMANCE: LAZY LOADING DE IMAGENS =====
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ===== ANALYTICS & TRACKING (OPCIONAL) =====
// Descomentar se quiser adicionar tracking de eventos

/*
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Exemplo: Rastrear cliques em CTAs
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        const label = this.textContent.trim();
        trackEvent('CTA', 'click', label);
    });
});
*/
