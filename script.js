function openQuoteModal() {
            document.getElementById('quoteModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeQuoteModal() {
            document.getElementById('quoteModal').style.display = 'none';
            document.body.style.overflow = 'auto';
            resetForm();
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
            
            const form = document.getElementById('quoteForm');
            const formData = new FormData(form);
            
            // Validate required fields
            const name = formData.get('name');
            const email = formData.get('email');
            const address = formData.get('address');
            
            if (!name || !email || !address) {
                showError('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            showLoading();
            
            setTimeout(() => {
                showSuccess();
                form.reset();
                
                // Close modal after 2 seconds
                setTimeout(() => {
                    closeQuoteModal();
                }, 2000);
            }, 1500);
        }

        function showSuccess() {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            document.querySelector('.form-submit').textContent = 'Submit Quote Request';
            document.querySelector('.form-submit').disabled = false;
        }

        function showError(message) {
            document.getElementById('errorMessage').textContent = message;
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }

        function showLoading() {
            document.querySelector('.form-submit').textContent = 'Submitting...';
            document.querySelector('.form-submit').disabled = true;
        }

        function resetForm() {
            document.getElementById('quoteForm').reset();
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'none';
            document.querySelector('.form-submit').textContent = 'Submit Quote Request';
            document.querySelector('.form-submit').disabled = false;
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

        // Auto-advance testimonials
        setInterval(nextTestimonial, 5000);

        // Case studies functionality
        function showCaseStudies() {
            alert('Case studies section would show detailed customer success stories and system performance data.');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (this.getAttribute('href') !== '#quote') {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.service-card, .feature-card, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeQuoteModal();
            }
        });

        // Form validation
        document.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '#e2e8f0';
                }
            });
        });

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Set initial testimonial
            showTestimonial(0);
            
            // Add loading animation to CTA buttons
            document.querySelectorAll('.cta-button, .hero-cta, .testimonials-cta').forEach(button => {
                button.addEventListener('click', function() {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                });
            });
        });