
// Modern Portfolio JavaScript - Interactive & Animated Features

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLoader();
    initializeNavigation();
    initializeParticles();
    initializeAnimations();
    initializePortfolioFilters();
    initializeContactForm();
    initializeThemeToggle();
    initializeScrollEffects();
    initializeTypingAnimation();
    initializeCounterAnimation();
    initializeSkillProgressBars();
});

// Loading Screen
function initializeLoader() {
    const loader = document.getElementById('loading');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loader) {
                loader.classList.add('hide');
                setTimeout(() => loader.remove(), 500);
            }
        }, 1000);
    });
}

// Navigation
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Particles.js Background
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        const updateParticlesColor = () => {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            const particleColor = isDark ? '#6366f1' : '#4f46e5';
            
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: particleColor },
                    shape: { type: 'circle' },
                    opacity: { value: isDark ? 0.5 : 0.3 },
                    size: { value: 3, random: true },
                    line_linked: { 
                        enable: true, 
                        distance: 150, 
                        color: particleColor, 
                        opacity: isDark ? 0.4 : 0.2, 
                        width: 1 
                    },
                    move: { 
                        enable: true, 
                        speed: 6, 
                        direction: 'none', 
                        random: false, 
                        straight: false, 
                        out_mode: 'out', 
                        bounce: false 
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: { 
                        onhover: { enable: true, mode: 'repulse' }, 
                        onclick: { enable: true, mode: 'push' }, 
                        resize: true 
                    },
                    modes: { 
                        repulse: { distance: 200, duration: 0.4 }, 
                        push: { particles_nb: 4 } 
                    }
                },
                retina_detect: true
            });
        };
        
        // Initialize with current theme
        updateParticlesColor();
        
        // Update particles when theme changes
        window.updateParticlesOnThemeChange = updateParticlesColor;
    }
}

// AOS Initialization
function initializeAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100
        });
    }
}

// Portfolio Filters
function initializePortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Theme Toggle
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        updateThemeIcon(savedTheme);
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Update particles if available
            if (window.updateParticlesOnThemeChange) {
                window.updateParticlesOnThemeChange();
            }
        });
    }
}

// Scroll Effects
function initializeScrollEffects() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Typing Animation
function initializeTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    
    if (typingElement) {
        const text = typingElement.textContent;
        
        // Ensure the name is visible first, then add typing effect
        typingElement.style.opacity = '1';
        typingElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    typingElement.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing animation after page loads
        setTimeout(typeWriter, 2000);
    }
}

// Counter Animation
function initializeCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Skill Progress Bars
function initializeSkillProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
                progressObserver.unobserve(progressBar);
            }
        });
    });
    
    progressBars.forEach(bar => progressObserver.observe(bar));
}

// Utility Functions
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#10b981';
        case 'error': return '#ef4444';
        case 'warning': return '#f59e0b';
        default: return '#6366f1';
    }
}