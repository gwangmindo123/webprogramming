document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.event');

    const fadeIn = () => {
        events.forEach(event => {
            const eventTop = event.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (eventTop < screenHeight * 0.8) {
                event.style.opacity = '1';
                event.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial check
    fadeIn();

    // Add scroll listener
    window.addEventListener('scroll', fadeIn);

    // Initial styles for animation
    events.forEach(event => {
        event.style.opacity = '0';
        event.style.transform = 'translateY(20px)';
        event.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });
});
