document.addEventListener('DOMContentLoaded', function() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    
    // Configuration
    const config = {
        apiUrl: 'https://yourdomain.com/api/testimonials.php', // Replace with your Hostinger API endpoint
        fallbackAvatar: 'https://ui-avatars.com/api/?name=Guest&background=random',
        defaultErrorMessage: 'Testimonials are currently unavailable. Please check back later.',
        animationDelay: 100 // ms between each testimonial animation
    };

    // Fetch premium testimonials from Hostinger DB
    async function fetchPremiumTestimonials() {
        try {
            const response = await fetch(config.apiUrl, {
                headers: {
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            
            if (!data.success || !data.testimonials) {
                throw new Error('Invalid API response structure');
            }

            return data.testimonials;

        } catch (error) {
            console.error('Testimonials fetch failed:', error);
            return null;
        }
    }

    // Render testimonials to DOM
    function renderTestimonials(testimonials) {
        if (!testimonials || testimonials.length === 0) {
            return showFallbackMessage('No premium member testimonials available yet.');
        }

        testimonialsContainer.innerHTML = '';
        
        testimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.style.setProperty('--delay', `${index * 0.1}s`);
            
            card.innerHTML = `
                <div class="testimonial-content">
                    <p class="testimonial-text">"${testimonial.content}"</p>
                    <div class="testimonial-rating" aria-label="Rating: ${testimonial.rating} out of 5">
                        ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                    </div>
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.avatar || generateAvatar(testimonial.name)}" 
                         alt="${testimonial.name}'s profile picture" 
                         loading="lazy"
                         width="60"
                         height="60">
                    <div class="author-info">
                        <h4 class="author-name">${testimonial.name}</h4>
                        <p class="author-meta">${testimonial.membership} • Joined ${formatDate(testimonial.join_date)}</p>
                    </div>
                </div>
            `;
            
            testimonialsContainer.appendChild(card);
        });

        animateOnScroll();
    }

    // Helper functions
    function generateAvatar(name) {
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${getRandomColor()}`;
    }

    function getRandomColor() {
        const colors = ['0F2D5A', '117EAD', 'E74C3C', '41A116', 'FFD166'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function formatDate(dateString) {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'short' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    function showFallbackMessage(message) {
        testimonialsContainer.innerHTML = `
            <div class="testimonial-fallback">
                <i class="fas fa-comment-alt"></i>
                <p>${message || config.defaultErrorMessage}</p>
            </div>
        `;
    }

    // Animation handler
    function animateOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.testimonial-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Initialize
    (async function init() {
        const testimonials = await fetchPremiumTestimonials();
        renderTestimonials(testimonials);
    })();
});