// Toggle menú móvil
function toggleNav() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

function closeNav() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
}

// Cerrar menú al hacer click fuera
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('.mobile-toggle');
    
    if (nav && toggle && !nav.contains(event.target) && !toggle.contains(event.target)) {
        closeNav();
    }
});

// Marcar link activo según la página actual
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Efecto de animación al scrollear
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar tarjetas
document.querySelectorAll('.card, .servicio-card, .proyecto-card, .tech-category, .metodo-item, .valor-item, .info-item, .stat').forEach(el => {
    observer.observe(el);
});

// Scroll suave personalizado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            closeNav();
        }
    });
});

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    setActiveLink();
});
