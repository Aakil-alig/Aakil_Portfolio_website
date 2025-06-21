// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all functions
    initLoadingScreen();
    initCustomCursor();
    initParticleAnimation();
    initScrollProgress();
    initTypingAnimation();
    initNavigation();
    initSmoothScrolling();
    initScrollEffects();
    initSkillAnimations();
    initContactForm();
    initBackToTop();
    initParallaxEffects();
    initCounters();
    initHoverEffects();
    initMobileMenu();
    initThemeSwitcher();
    initTiltEffect();
    initTestimonialSlider();
    initGitHubProjects();
    initAccordion();
    initAdvancedAnimations();
    initMagneticEffect();
    initGlitchEffect();
    initTextReveal();
    initInteractiveGrid();
    initAdvancedButtonEffects();
    init3DCardEffect();
    initShowcaseFeatures();
    initPerformanceMetrics();
    initCanvasAnimations();
    initAdvancedScrollEffects();
    initInteractiveElements();
});

// Custom Cursor Effect
function initCustomCursor() {
    if (window.innerWidth <= 768) return; // Disable on mobile

    const cursor = document.querySelector('.custom-cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    const cursorText = document.querySelector('.cursor-text');

    if (!cursor || !cursorTrail || !cursorText) return;

    let mouseX = 0, mouseY = 0;

    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorTrail.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorText.style.transform = `translate3d(${mouseX + 25}px, ${mouseY - 15}px, 0)`;

        // Show cursor text on interactive elements
        const target = e.target;
        const isInteractive = target.closest('a, button, .magnetic-hover, .skill-card, .timeline-content');
        if (isInteractive) {
            cursorText.textContent = target.getAttribute('data-cursor-text') || target.textContent || 'Interact';
            cursorText.style.opacity = '1';
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1.5)`;
        } else {
            cursorText.style.opacity = '0';
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1)`;
        }
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorTrail.style.opacity = '0';
        cursorText.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorTrail.style.opacity = '1';
    });
}

// Particle Animation
function initParticleAnimation() {
    if (window.innerWidth <= 768) return; // Disable on mobile

    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    document.body.appendChild(particleContainer);

    const particleCount = 50;
    const particles = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particleContainer.appendChild(particle);
        particles.push(particle);
    }

    // Mouse interaction with particles
    document.addEventListener('mousemove', (e) => {
        particles.forEach((particle, index) => {
            const rect = particle.getBoundingClientRect();
            const distance = Math.sqrt(
                Math.pow(e.clientX - rect.left, 2) +
                Math.pow(e.clientY - rect.top, 2)
            );

            if (distance < 100) {
                particle.style.transform = `scale(2) translate(${(e.clientX - rect.left) * 0.1}px, ${(e.clientY - rect.top) * 0.1}px)`;
            } else {
                particle.style.transform = 'scale(1) translate(0, 0)';
            }
        });
    });
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Advanced Animations
function initAdvancedAnimations() {
    // Intersection Observer for advanced animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add floating animation to elements
                if (entry.target.classList.contains('floating-element')) {
                    entry.target.style.animationPlayState = 'running';
                }

                // Reveal text animation
                if (entry.target.classList.contains('text-reveal')) {
                    entry.target.classList.add('revealed');
                }

                // Add gradient text animation
                if (entry.target.classList.contains('gradient-text')) {
                    entry.target.style.backgroundSize = '200% 200%';
                }
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.floating-element, .text-reveal, .gradient-text');
    animatedElements.forEach(el => observer.observe(el));
}

// Magnetic Effect
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.magnetic-hover');

    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

// Glitch Effect
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');

    glitchElements.forEach(element => {
        element.setAttribute('data-text', element.textContent);

        // Random glitch trigger
        setInterval(() => {
            if (Math.random() > 0.95) {
                element.style.animation = 'glitch-1 0.2s ease-in-out';
                setTimeout(() => {
                    element.style.animation = '';
                }, 200);
            }
        }, 3000);
    });
}

// Text Reveal Animation
function initTextReveal() {
    const textElements = document.querySelectorAll('.text-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    textElements.forEach(el => observer.observe(el));
}

// Interactive Grid Effect
function initInteractiveGrid() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Advanced Button Effects
function initAdvancedButtonEffects() {
    const advancedButtons = document.querySelectorAll('.btn-advanced');

    advancedButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.setProperty('--mouse-x', x + 'px');
            button.style.setProperty('--mouse-y', y + 'px');
        });
    });
}

// 3D Card Tilt Effect
function init3DCardEffect() {
    const cards = document.querySelectorAll('.card-3d:not(.code-block)');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });
}

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;
    // Hide loading screen much sooner for better perceived performance
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 500); // Hide after 0.5s regardless of content load
}

// Typing Animation
function initTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    const words = ['Full Stack Developer', 'MCA Graduate', 'AI Enthusiast', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before next word
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing animation after a delay
    setTimeout(type, 1000);
}

// Navigation
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (hamburger.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                const bars = hamburger.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.skill-card, .project-card, .contact-card, .timeline-item, .testimonial-card');
    animateElements.forEach(el => observer.observe(el));
}

// Skill Animations
function initSkillAnimations() {
    const skillCards = document.querySelectorAll('.skill-card');

    const skillObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress');
                if (progressBar) {
                    const width = progressBar.getAttribute('data-width') || progressBar.style.width;
                    progressBar.style.width = width;
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => skillObserver.observe(card));
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            const whatsappNumber = '917599931298';
            let whatsappMessage = `Hello Mohd Aakil, I'd like to connect with you.\n\n`;
            whatsappMessage += `Name: ${name}\n`;
            whatsappMessage += `Email: ${email}\n`;
            whatsappMessage += `Subject: ${subject}\n`;
            whatsappMessage += `Message: ${message}`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
            showNotification('Redirecting to WhatsApp...', 'success');
            this.reset();
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `<span class="notification-message">${message}</span><button class="notification-close">&times;</button>`;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });

    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Parallax Effects
function initParallaxEffects() {
    const floatingShapes = document.querySelectorAll('.floating-shape');
    if (floatingShapes.length === 0) return;

    const onScroll = () => {
        const scrolled = window.pageYOffset;
        floatingShapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    };
    window.addEventListener('scroll', onScroll);
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length === 0) return;

    const counterObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/\D/g, ''));
                const suffix = counter.textContent.replace(/\d/g, '').trim();
                animateCounter(counter, 0, target, suffix);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, start, end, suffix) {
    let startTime = null;
    const duration = 2000;

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + suffix;
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step);
}

// Hover Effects
function initHoverEffects() {
    const cards = document.querySelectorAll('.skill-card, .service-card, .project-card, .contact-card, .timeline-content');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () { this.style.transform = 'translateY(-5px)'; });
        card.addEventListener('mouseleave', function () { this.style.transform = 'translateY(0)'; });
    });
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    hamburger.addEventListener('click', function () {
        const isOpen = navMenu.classList.contains('active');
        body.style.overflow = isOpen ? '' : 'hidden';
    });
}

// Theme Switcher
function initThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    const body = document.body;
    const moonIcon = '<i class="fas fa-moon"></i>';
    const sunIcon = '<i class="fas fa-sun"></i>';

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = sunIcon;
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = moonIcon;
        }
    };

    applyTheme(localStorage.getItem('theme'));

    themeToggle.addEventListener('click', function () {
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}

// 3D Tilt Effect
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.profile-card');
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const { width, height } = rect;
            const rotateX = (y / height - 0.5) * -15;
            const rotateY = (x / width - 0.5) * 15;
            this.style.transition = 'transform 0.1s';
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        element.addEventListener('mouseleave', function () {
            this.style.transition = 'transform 0.5s';
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Testimonial Slider
function initTestimonialSlider() {
    const sliderContainer = document.querySelector('.testimonial-slider-container');
    if (!sliderContainer) return;
    const slider = sliderContainer.querySelector('.testimonial-slider');
    const prevBtn = sliderContainer.querySelector('.prev-btn');
    const nextBtn = sliderContainer.querySelector('.next-btn');
    const testimonials = slider.querySelectorAll('.testimonial-card');
    if (!slider || !prevBtn || !nextBtn || testimonials.length === 0) return;
    let currentIndex = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    setInterval(() => nextBtn.click(), 7000);
}

// GitHub Projects - Lazy Loaded
function initGitHubProjects() {
    const projectsSection = document.querySelector('.projects');
    if (!projectsSection) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fetchAndDisplayProjects();
                observer.unobserve(projectsSection); // Stop observing once loaded
            }
        });
    }, { threshold: 0.1 });

    observer.observe(projectsSection);
}

function fetchAndDisplayProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    const username = 'Aakil-alig';
    const projectsFilter = document.querySelector('.projects-filter');

    projectsGrid.innerHTML = '<div class="project-loader"></div>';

    // Whitelist of repository names to display (case-insensitive)
    const approvedProjects = [
        'aakil-e-medicare',
        'aakil_gym_web.project',
        'ak_website_project'
    ];

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(repos => {
            // Filter repositories based on the whitelist (case-insensitive)
            const filteredRepos = repos.filter(repo => approvedProjects.includes(repo.name.toLowerCase()));

            projectsGrid.innerHTML = '';
            if (filteredRepos.length === 0) {
                projectsGrid.innerHTML = '<p class="text-center">No projects found on GitHub.</p>';
                return;
            }

            window.githubRepos = filteredRepos; // Store filtered repos globally
            displayProjects('all');
            initProjectModal();
        })
        .catch(error => {
            console.error('Error fetching GitHub repos:', error);
            projectsGrid.innerHTML = `<p class="text-center" style="color: red; width: 100%;">Error loading projects. Please try again later.</p>`;
        });

    if (projectsFilter) {
        projectsFilter.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                displayProjects(e.target.dataset.filter);
            }
        });
    }
}

function displayProjects(filter) {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';

    const filteredRepos = (filter === 'all')
        ? window.githubRepos
        : window.githubRepos.filter(repo => {
            const topics = repo.topics.map(t => t.toLowerCase());
            const language = repo.language ? repo.language.toLowerCase() : '';
            return topics.includes(filter) || language.includes(filter);
        });

    if (filteredRepos.length === 0) {
        projectsGrid.innerHTML = `<p class="text-center" style="width: 100%;">No projects found for the "${filter}" category.</p>`;
        return;
    }

    filteredRepos.forEach(repo => {
        const projectCardHTML = `
            <div class="project-card" data-repo-name="${repo.name}">
                <div class="project-image">
                    <img 
                        src="https://socialify.git.ci/Aakil-alig/${repo.name}/image?font=Inter&language=1&name=1&owner=1&pattern=Plus&theme=Dark" 
                        alt="Project Image for ${repo.name}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250/6366f1/ffffff?text=${encodeURIComponent(repo.name)}';">
                </div>
                <div class="project-content">
                    <h3>${repo.name.replace(/[-_]/g, ' ')}</h3>
                    <p>${repo.description || 'A project by Mohd Aakil.'}</p>
                    <div class="project-tech">
                        ${repo.language ? `<span class="tech-tag">${repo.language}</span>` : ''}
                        ${repo.stargazers_count > 0 ? `<span class="tech-tag"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>` : ''}
                    </div>
                    <p>Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                    <div class="project-links-modal">
                        <a href="${repo.html_url}" target="_blank" class="btn btn-primary">View on GitHub</a>
                        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="btn btn-secondary">Live Demo</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectCardHTML;
    });
}

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const modalBody = document.getElementById('modalBody');
    const projectsGrid = document.querySelector('.projects-grid');

    if (!modal || !closeModalBtn || !modalBody || !projectsGrid) return;

    projectsGrid.addEventListener('click', (e) => {
        const viewButton = e.target.closest('.view-details-btn');
        if (viewButton) {
            const card = viewButton.closest('.project-card');
            const repoName = card.dataset.repoName;
            const repo = window.githubRepos.find(r => r.name === repoName);

            if (repo) {
                const content = `
                    <h2>${repo.name.replace(/[-_]/g, ' ')}</h2>
                    <p>${repo.description || 'No description provided.'}</p>
                    <div class="project-tech">
                        ${repo.language ? `<span class="tech-tag">${repo.language}</span>` : ''}
                        ${repo.topics.map(topic => `<span class="tech-tag">${topic}</span>`).join('')}
                    </div>
                    <ul style="list-style: none; padding-left: 0; margin-top: 1rem;">
                        <li><i class="fas fa-star"></i> <strong>Stars:</strong> ${repo.stargazers_count}</li>
                        <li><i class="fas fa-code-branch"></i> <strong>Forks:</strong> ${repo.forks_count}</li>
                        <li><i class="fas fa-eye"></i> <strong>Watchers:</strong> ${repo.watchers_count}</li>
                        <li><strong>Last Updated:</strong> ${new Date(repo.updated_at).toLocaleDateString()}</li>
                    </ul>
                    <div class="project-links" style="margin-top: 1.5rem;">
                        <a href="${repo.html_url}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> View on GitHub</a>
                        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="btn btn-secondary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                    </div>
                `;
                modalBody.innerHTML = content;
                modal.classList.add('show');
            }
        }
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

function initAccordion() {
    const accordionItems = document.querySelectorAll('.other-project-item');
    if (accordionItems.length === 0) return;

    accordionItems.forEach(item => {
        const header = item.querySelector('.project-item-header');
        header.addEventListener('click', () => {
            const body = item.querySelector('.project-item-body');

            // Close other open items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.project-item-body').style.maxHeight = '0';
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = '0';
            }
        });
    });
}

// Add CSS for project loader and notifications
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    .project-loader {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 3rem auto;
    }
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(120%);
        transition: transform 0.3s ease;
        max-width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .notification.show {
        transform: translateX(0);
    }
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0 0 1rem;
        line-height: 1;
    }
    .notification-close:hover {
        opacity: 0.8;
    }
    .notification.notification-success { background-color: var(--success-color); }
    .notification.notification-error { background-color: var(--danger-color); }
`;
document.head.appendChild(dynamicStyles);

// Showcase Features
function initShowcaseFeatures() {
    // Copy code functionality
    window.copyCode = function (elementId) {
        const codeElement = document.getElementById(elementId);
        const text = codeElement.textContent;

        navigator.clipboard.writeText(text).then(() => {
            showNotification('Code copied to clipboard!', 'success');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Code copied to clipboard!', 'success');
        });
    };

    // Add syntax highlighting to code blocks
    const codeBlocks = document.querySelectorAll('.code-content');
    codeBlocks.forEach(block => {
        // Simple syntax highlighting
        const code = block.innerHTML;
        const highlightedCode = code
            .replace(/(\/\/.*)/g, '<span style="color: #6b7280;">$1</span>')
            .replace(/(function|const|let|var|if|else|for|while|return)/g, '<span style="color: #f59e0b;">$1</span>')
            .replace(/(\d+)/g, '<span style="color: #10b981;">$1</span>')
            .replace(/(['"`])(.*?)\1/g, '<span style="color: #ef4444;">$1$2$1</span>');
        block.innerHTML = highlightedCode;
    });
}

// Performance Metrics
function initPerformanceMetrics() {
    // Load time calculation
    const loadTime = performance.now();
    const loadTimeElement = document.getElementById('loadTime');
    if (loadTimeElement) {
        loadTimeElement.textContent = Math.round(loadTime);
    }

    // Memory usage (if available)
    if ('memory' in performance) {
        const memoryElement = document.getElementById('memoryUsage');
        if (memoryElement) {
            const memoryMB = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
            memoryElement.textContent = memoryMB;
        }
    }

    // Real-time performance monitoring
    setInterval(() => {
        if ('memory' in performance) {
            const memoryElement = document.getElementById('memoryUsage');
            if (memoryElement) {
                const memoryMB = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
                memoryElement.textContent = memoryMB;
            }
        }
    }, 5000);
}

// Canvas Animations
function initCanvasAnimations() {
    const canvas = document.createElement('canvas');
    canvas.id = 'backgroundCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.1';

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const distance = Math.sqrt(
                    Math.pow(particle.x - otherParticle.x, 2) +
                    Math.pow(particle.y - otherParticle.y, 2)
                );

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 - distance / 1000})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Advanced Scroll Effects
function initAdvancedScrollEffects() {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add parallax effect
                const speed = entry.target.dataset.speed || 0.5;
                const yPos = -(window.pageYOffset * speed);
                entry.target.style.transform = `translateY(${yPos}px)`;

                // Add fade in effect
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
}

// Interactive Elements
function initInteractiveElements() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add tilt effect to cards
    const cards = document.querySelectorAll('.card-3d:not(.code-block)');

    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // Add typing effect to elements with data-typing attribute
    const typingElements = document.querySelectorAll('[data-typing]');

    typingElements.forEach(element => {
        const text = element.getAttribute('data-typing');
        element.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(element);
    });
}