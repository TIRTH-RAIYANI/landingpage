function openQuoteModal() {
            document.getElementById('quoteModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        function closeQuoteModal() {
            document.getElementById('quoteModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('quoteModal');
            if (event.target === modal) {
                closeQuoteModal();
            }
        }
        
        // Form submission
        function submitQuote(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            console.log('Quote request submitted:', data);
            
            // Show success message
            alert('Thank you for your quote request! We will contact you within 24 hours to discuss your solar energy needs.');
            
            // Reset form and close modal
            event.target.reset();
            closeQuoteModal();
        }
        
        // Testimonial carousel functionality
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        
        function showTestimonial(index) {
            testimonials.forEach((card, i) => {
                card.style.display = i === index ? 'block' : 'none';
            });
        }
        
        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }
        
        function previousTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        }
        
        // Case studies functionality
        function showCaseStudies() {
            alert('Case studies feature coming soon! Our team is preparing detailed success stories from our satisfied customers.');
        }
        
        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                const text = this.textContent.toLowerCase();
                let targetSection;
                
                switch(text) {
                    case 'products':
                        targetSection = document.querySelector('.pick-sun-section');
                        break;
                    case 'solutions':
                        targetSection = document.querySelector('.dashboard-preview');
                        break;
                    case 'services':
                        targetSection = document.querySelector('.services-section');
                        break;
                    case 'configure':
                        targetSection = document.querySelector('.features-section');
                        break;
                }
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // Add fade-in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);
        
        // Observe sections for animation
        document.querySelectorAll('.service-card, .feature-card, .testimonial-card').forEach(el => {
            observer.observe(el);
        });
        
        // Initialize testimonial display
        document.addEventListener('DOMContentLoaded', function() {
            showTestimonial(0);
        });
        
        // Add hover effects to interactive elements
        document.querySelectorAll('.service-card, .feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Contact phone number click functionality
        document.querySelector('.contact-info').addEventListener('click', function() {
            window.location.href = 'tel:555818282';
        });
        
        // Add loading states for buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.style.opacity = '0.7';
                
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 200);
            });
        });