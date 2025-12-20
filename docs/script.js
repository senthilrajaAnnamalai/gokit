// Configuration for the observer
const observerOptions = {
    threshold: 0.25 // Trigger when 15% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Remove unobserve if you want it to fade out/in every time
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Apply to all sections with the fade-section class
document.querySelectorAll('.fade-section').forEach(section => {
    observer.observe(section);
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function updateSlider(index) {
    // Wrap index if it goes out of bounds
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // Update slides
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Arrow Navigation
function moveSlide(step) {
    updateSlider(currentSlide + step);
}

// Dot Navigation
function jumpToSlide(index) {
    updateSlider(index);
}

// Keep your automatic interval
setInterval(() => moveSlide(1), 5000);


//about section transition

// Intersection Observer for the About Section
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // This adds the 'reveal-active' class to the #about section
            entry.target.classList.add('reveal-active');
            
            // Optional: stop observing once it has revealed once
            // aboutObserver.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the section is visible
});

// Start observing the About Section
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

