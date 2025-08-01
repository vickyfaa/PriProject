document.addEventListener('DOMContentLoaded', function() {

    // --- Sticky Navigation ---
    const header = document.getElementById('site-header');
    const mainContent = document.querySelector('main');
    // We get the header height to add padding to the main content, preventing overlap.
    const headerHeight = header.offsetHeight;
    
    // Set initial padding
    mainContent.style.paddingTop = `${headerHeight}px`;

    window.addEventListener('scroll', () => {
        // When the user scrolls past the header's height, add the sticky class.
        if (window.scrollY > headerHeight) {
            header.classList.add('sticky-nav');
        } else {
            header.classList.remove('sticky-nav');
        }
    });


    // --- Contact Form Interactive Functionality ---
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form from reloading the page
            
            // Check if a success message already exists to avoid multiple messages
            if (document.querySelector('.success-message')) {
                return;
            }

            // Create success message element
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Thanks for reaching out!';
            successMessage.className = 'success-message';
            
            // Insert success message after the form
            contactForm.insertAdjacentElement('afterend', successMessage);
            
            // Clear the form fields
            contactForm.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                if (successMessage.parentNode) {
                    successMessage.parentNode.removeChild(successMessage);
                }
            }, 3000);
        });
    }

    // --- Fade-in Animation on Scroll using Intersection Observer ---
    const sectionsToFade = document.querySelectorAll('.fade-in-section');

    // Options for the observer
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.15 // 15% of the item must be visible to trigger
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing the element once it's visible to prevent re-animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach the observer to each section
    sectionsToFade.forEach(section => {
        observer.observe(section);
    });

});