// DOM Elements
const sideNav = document.getElementById('mySidenav');
const title = document.getElementById('title');
const themeIcon = document.getElementById('theme-icon');

// Navigation Functions
const openNav = () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    sideNav.style.width = '250px';
    document.body.style.marginLeft = '250px';
    document.body.style.transition = 'margin-left 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
    if (toggleBtn) {
        toggleBtn.classList.add('sidebar-open');
    }
}

const closeNav = () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    sideNav.style.width = '0';
    document.body.style.marginLeft = '0';
    document.body.style.transition = 'margin-left 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
    if (toggleBtn) {
        toggleBtn.classList.remove('sidebar-open');
    }
}

// Theme Toggle Function
const toggleTheme = () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme icon
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (newTheme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
    
    console.log('Theme switched to:', newTheme); // Debug log
}

// Initialize theme on page load
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (savedTheme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
    
    console.log('Theme initialized to:', savedTheme); // Debug log
}

// Smooth scrolling for navigation links
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Typing animation for hero subtitle
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';

    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };

    type();
}

// Typing effect for rotating roles
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['AI Engineer', 'Data Scientist','Data Analyst', 'Machine Learning Engineer', 'Data Engineer','Data Visualization Specialist','Data Architecture Specialist','Data Science Consultant' ,
    'llm engineer','AI Researcher','AI Architect','AI Consultant','AI Strategist'
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

// Initialize animations and theme on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Start typing animation
    if (typedTextSpan && cursorSpan) {
        setTimeout(type, newTextDelay + 250);
    }

    // Scroll to top on page load to show hero section
    window.scrollTo(0, 0);
    
    // Add intersection observer for scroll animations
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
    const animatedElements = document.querySelectorAll('.card, .about img, .about p');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.willChange = 'opacity, transform'; // GPU acceleration hint
        observer.observe(el);
    });

    // Remove will-change after animations complete to free resources
    animatedElements.forEach(el => {
        el.addEventListener('transitionend', function removeWillChange() {
            el.style.willChange = 'auto';
            el.removeEventListener('transitionend', removeWillChange);
        }, { once: true });
    });
});

// Parallax effect for hero background (optimized with requestAnimationFrame)
let ticking = false;
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    lastScrollY = window.pageYOffset;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            const parallax = document.querySelector('.hero');
            if (parallax) {
                // Only apply parallax when near the hero section for better performance
                if (lastScrollY < window.innerHeight * 1.5) {
                    const speed = lastScrollY * 0.5;
                    parallax.style.transform = `translateY(${speed}px)`;
                }
            }
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const submitBtn = form.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;

            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            try {
                // Using Formspree (you'll need to replace with your actual form ID)
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.className = 'success';
                    formStatus.textContent = 'Thanks for your message! I\'ll get back to you soon.';
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                formStatus.className = 'error';
                formStatus.textContent = 'Oops! Something went wrong. Please try emailing me directly.';
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;

                // Hide status message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        });
    }
});

// Toggle All Projects functionality
window.toggleAllProjects = function() {
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    const viewAllBtn = document.getElementById('view-all-btn');

    if (!viewAllBtn || hiddenProjects.length === 0) {
        console.error('Elements not found');
        return;
    }

    // Check if projects are currently hidden (check computed style)
    const isHidden = window.getComputedStyle(hiddenProjects[0]).display === 'none';

    if (isHidden) {
        // Show all hidden projects
        hiddenProjects.forEach(project => {
            project.style.display = 'flex';
        });
        viewAllBtn.innerHTML = '⬆️ Show Less Projects';

        // Scroll to first additional project
        setTimeout(() => {
            hiddenProjects[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    } else {
        // Hide all additional projects
        hiddenProjects.forEach(project => {
            project.style.display = 'none';
        });
        viewAllBtn.innerHTML = '⬇️ View All Projects';

        // Scroll back to button
        setTimeout(() => {
            viewAllBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    }
}

