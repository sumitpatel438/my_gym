document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.bento-item, .card, .hero-text, .hero-main-img, .section-title');
    
    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
});

// Custom CSS for JS animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.9s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(styleSheet);