// 1. Smooth Scroll for the Button
document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('memories').scrollIntoView({ behavior: 'smooth' });
});

// 2. Intersection Observer for Scroll Animations
// This matches the logic seen in the video source code (0:03)
const observerOptions = {
    threshold: 0.2 // Trigger when 20% of the item is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the class 'show' which changes opacity from 0 to 1
            entry.target.classList.add('show');
            // Optional: Stop observing once shown
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('.hidden');
sections.forEach((el) => observer.observe(el));
