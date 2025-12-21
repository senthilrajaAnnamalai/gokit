/**
 * 1. Intersection Observer (Fade-in Animations)
 */
const observerOptions = {
    threshold: 0.15 // Trigger earlier on mobile
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // If it's the about section, add the specific reveal class too
            if(entry.target.id === 'about') {
                entry.target.classList.add('reveal-active');
            }
        }
    });
}, observerOptions);

// Observe all sections with fade-section class and the about section
document.querySelectorAll('.fade-section, #about').forEach(el => observer.observe(el));


/**
 * 2. Hero Slider Logic
 */
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function updateSlider(index) {
    if (slides.length === 0) return;

    // Wrap index if out of bounds
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // Update slides
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

// Make functions global so HTML onclick works
window.moveSlide = function(step) {
    updateSlider(currentSlide + step);
};

window.jumpToSlide = function(index) {
    updateSlider(index);
};

// Automatic Slider (5 seconds)
setInterval(() => window.moveSlide(1), 5000);


/**
 * 3. Mobile Navigation (Single Event Listener)
 */
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents click from bubbling
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('open');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('open');
            });
        });

        // Close menu if clicking anywhere outside the menu
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('open');
            }
        });
    }
});
