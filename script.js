// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Toggle current answer
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            
            // Rotate icon
            icon.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0)';
            
            // Close other answers
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('i');
                    otherAnswer.style.display = 'none';
                    otherIcon.style.transform = 'rotate(0)';
                }
            });
        });
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Create WhatsApp message
            const whatsappMessage = `New Contact Form Submission:%0A%0A` +
                                   `Name: ${name}%0A` +
                                   `Phone: ${phone}%0A` +
                                   `Email: ${email}%0A` +
                                   `Message: ${message}`;
            
            // Open WhatsApp with pre-filled message
            window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank');
            
            // Reset form
            this.reset();
            
            // Show success message
            alert('Thank you! Opening WhatsApp to send your message.');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Product Image Zoom
    const productImages = document.querySelectorAll('.product-img img');
    productImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Live Order Counter (Simulation)
function updateOrderCounter() {
    const counter = document.getElementById('orderCounter');
    if (counter) {
        let count = Math.floor(Math.random() * 50) + 150;
        counter.textContent = count;
        
        // Update every 30 seconds
        setInterval(() => {
            count += Math.floor(Math.random() * 3) + 1;
            counter.textContent = count;
        }, 30000);
    }
}

// Initialize when page loads
window.onload = function() {
    updateOrderCounter();
    
    // Add animation to hero section
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            hero.style.transition = 'opacity 1s, transform 1s';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 300);
    }
};