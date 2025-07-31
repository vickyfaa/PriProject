// Introduction Section Script
console.log('Welcome to the Portfolio Project!');
// Future interactive features for the Introduction section can be added here.

// Contact Form Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const submitButton = document.querySelector('.submit-button');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form from reloading the page
            
            // Create success message element
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Thanks for reaching out!';
            successMessage.className = 'success-message';
            
            // Insert success message after the submit button
            submitButton.parentNode.insertBefore(successMessage, submitButton.nextSibling);
            
            // Clear the form
            contactForm.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                if (successMessage.parentNode) {
                    successMessage.parentNode.removeChild(successMessage);
                }
            }, 3000);
        });
    }
});
