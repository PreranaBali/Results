document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<span class="spinner"></span> Sending...';
            submitButton.disabled = true;
            
            const formData = new FormData(contactForm);
            
            fetch('api/contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Show success message
                    const formMessage = document.querySelector('.form-message');
                    formMessage.textContent = data.message;
                    formMessage.classList.add('success-message');
                    formMessage.classList.remove('error-message');
                    contactForm.reset();
                } else {
                    // Show error message
                    const formMessage = document.querySelector('.form-message');
                    formMessage.textContent = data.message;
                    formMessage.classList.add('error-message');
                    formMessage.classList.remove('success-message');
                }
                
                // Reset button
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            })
            .catch(error => {
                console.error('Error:', error);
                const formMessage = document.querySelector('.form-message');
                formMessage.textContent = 'An error occurred while sending your message. Please try again.';
                formMessage.classList.add('error-message');
                formMessage.classList.remove('success-message');
                
                // Reset button
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
    
    // Character counter for message textarea
    const messageTextarea = document.getElementById('controlTextarea');
    const charCount = document.getElementById('charCount');
    
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const maxLength = this.getAttribute('maxlength');
            const currentLength = this.value.length;
            charCount.textContent = `${currentLength}/${maxLength}`;
        });
        
        // Initialize counter
        const maxLength = messageTextarea.getAttribute('maxlength');
        charCount.textContent = `0/${maxLength}`;
    }
});