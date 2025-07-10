// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle Nav
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
});
// Updated counter values for blog metrics
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counters with blog-appropriate values
document.addEventListener('DOMContentLoaded', () => {
    animateValue('mentor-count', 0, 28, 2000);    // Changed from mentors to authors
    animateValue('course-count', 0, 142, 2000);  // Changed from courses to articles
    animateValue('user-count', 0, 3560, 2000);   // Changed to monthly readers
});

// Updated category filtering for blog posts
const tabBtns = document.querySelectorAll('.tab-btn');
const resourceCards = document.querySelectorAll('.resource-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        
        resourceCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Testimonial slider - Can remain but consider repurposing for featured author quotes
let testimonialIndex = 1;
showTestimonial(testimonialIndex);

function currentTestimonial(n) {
    showTestimonial(testimonialIndex = n);
}

function showTestimonial(n) {
    let i;
    let testimonials = document.getElementsByClassName("testimonial");
    let dots = document.getElementsByClassName("dot");
    
    if (n > testimonials.length) {testimonialIndex = 1}
    if (n < 1) {testimonialIndex = testimonials.length}
    
    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.remove("active");
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    testimonials[testimonialIndex-1].classList.add("active");
    dots[testimonialIndex-1].classList.add("active");
}

// Updated form validation for newsletter signup (simplified)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitBtn = newsletterForm.querySelector('button');
        
        if (emailInput.value.trim() === '' || !isEmail(emailInput.value.trim())) {
            emailInput.style.borderColor = 'var(--danger)';
        } else {
            emailInput.style.borderColor = 'var(--success)';
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            submitBtn.style.backgroundColor = 'var(--success)';
            
            setTimeout(() => {
                newsletterForm.reset();
                submitBtn.innerHTML = '<span>Subscribe</span><i class="fas fa-paper-plane"></i>';
                submitBtn.style.backgroundColor = '';
                emailInput.style.borderColor = '';
            }, 2000);
            
            console.log('New subscriber:', emailInput.value.trim());
        }
    });
}

// Search functionality for blog articles
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.resource-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.resource-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
}

// Helper functions - No changes needed
function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isPhone(phone) {
    return /^[0-9]{10,15}$/.test(phone);
}

// Animated counter for stats
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counters when page loads
document.addEventListener('DOMContentLoaded', () => {
    animateValue('mentor-count', 0, 42, 2000);
    animateValue('course-count', 0, 136, 2000);
    animateValue('user-count', 0, 2543, 2000);
});

// Resource category filtering
const tabBtns = document.querySelectorAll('.tab-btn');
const resourceCards = document.querySelectorAll('.resource-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        
        // Filter resources
        resourceCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Testimonial slider
let testimonialIndex = 1;
showTestimonial(testimonialIndex);

function currentTestimonial(n) {
    showTestimonial(testimonialIndex = n);
}

function showTestimonial(n) {
    let i;
    let testimonials = document.getElementsByClassName("testimonial");
    let dots = document.getElementsByClassName("dot");
    
    if (n > testimonials.length) {testimonialIndex = 1}
    if (n < 1) {testimonialIndex = testimonials.length}
    
    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.remove("active");
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    testimonials[testimonialIndex-1].classList.add("active");
    dots[testimonialIndex-1].classList.add("active");
}

// Auto slide testimonials
setInterval(() => {
    testimonialIndex++;
    if (testimonialIndex > document.getElementsByClassName("testimonial").length) {
        testimonialIndex = 1;
    }
    showTestimonial(testimonialIndex);
}, 5000);

// Form Validation
const form = document.getElementById('mentorshipForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('full-name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const location = document.getElementById('location');
        const interest = document.getElementById('interest');
        const goals = document.getElementById('goals');
        const terms = document.getElementById('terms');
        const skillLevel = document.querySelector('input[name="skill-level"]:checked');
        let isValid = true;
        
        // Name validation
        if (name.value.trim() === '') {
            isValid = false;
            setErrorFor(name, 'Name cannot be blank');
        } else {
            setSuccessFor(name);
        }
        
        // Email validation
        if (email.value.trim() === '') {
            isValid = false;
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(email.value.trim())) {
            isValid = false;
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }
        
        // Phone validation
        if (phone.value.trim() === '') {
            isValid = false;
            setErrorFor(phone, 'Phone number cannot be blank');
        } else if (!isPhone(phone.value.trim())) {
            isValid = false;
            setErrorFor(phone, 'Phone number is not valid');
        } else {
            setSuccessFor(phone);
        }
        
        // Location validation
        if (location.value === '') {
            isValid = false;
            setErrorFor(location, 'Please select your location');
        } else {
            setSuccessFor(location);
        }
        
        // Interest validation
        if (interest.value === '') {
            isValid = false;
            setErrorFor(interest, 'Please select your interest area');
        } else {
            setSuccessFor(interest);
        }
        
        // Skill level validation
        if (!skillLevel) {
            isValid = false;
            const skillLevels = document.querySelector('.skill-levels');
            const errorMsg = document.createElement('small');
            errorMsg.textContent = 'Please select your skill level';
            errorMsg.style.visibility = 'visible';
            errorMsg.style.color = 'var(--danger)';
            
            // Remove existing error message if any
            const existingError = skillLevels.nextElementSibling;
            if (existingError && existingError.tagName === 'SMALL') {
                existingError.remove();
            }
            
            skillLevels.after(errorMsg);
        } else {
            const existingError = skillLevels.nextElementSibling;
            if (existingError && existingError.tagName === 'SMALL') {
                existingError.remove();
            }
        }
        
        // Goals validation
        if (goals.value.trim() === '') {
            isValid = false;
            setErrorFor(goals, 'Please describe your goals');
        } else {
            setSuccessFor(goals);
        }
        
        // Terms validation
        if (!terms.checked) {
            isValid = false;
            setErrorFor(terms, 'You must agree to the terms');
        } else {
            setSuccessFor(terms);
        }
        
        if (isValid) {
            // Show success message
            const formContainer = document.querySelector('.form-container');
            formContainer.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h2>Request Submitted Successfully!</h2>
                    <p>We'll match you with a suitable PLP mentor within 48 hours. Check your email for confirmation.</p>
                    <a href="index.html" class="btn btn-primary">Back to Home</a>
                </div>
            `;
            
            // You would typically send the form data to a server here
            // For demonstration, we'll just log it
            const formData = {
                name: name.value.trim(),
                email: email.value.trim(),
                phone: phone.value.trim(),
                location: location.value,
                interest: interest.value,
                skillLevel: skillLevel.value,
                goals: goals.value.trim()
            };
            console.log('Form submitted:', formData);
        }
    });
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isPhone(phone) {
    return /^[0-9]{10,15}$/.test(phone);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.value-card, .resource-card, .mentor-card, .benefit-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.value-card, .resource-card, .mentor-card, .benefit-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Trigger animation on load for elements in view
    animateOnScroll();
});

// Trigger animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Search functionality for resources page
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.resource-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.resource-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (emailInput.value.trim() === '') {
            emailInput.style.borderColor = 'var(--danger)';
        } else if (!isEmail(emailInput.value.trim())) {
            emailInput.style.borderColor = 'var(--danger)';
        } else {
            emailInput.style.borderColor = 'var(--success)';
            
            // Show success message
            const submitBtn = newsletterForm.querySelector('button');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            submitBtn.style.backgroundColor = 'var(--success)';
            
            // Reset after 2 seconds
            setTimeout(() => {
                newsletterForm.reset();
                submitBtn.innerHTML = '<span>Subscribe</span><i class="fas fa-paper-plane"></i>';
                submitBtn.style.backgroundColor = '';
                emailInput.style.borderColor = '';
            }, 2000);
            
            // You would typically send the email to a server here
            console.log('Subscribed email:', emailInput.value.trim());
        }
    });
}