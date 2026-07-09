/* ===================================
   PERSONAL WEBSITE JAVASCRIPT
   Interactive features and functionality
   =================================== */

// LOG MESSAGE - Shows when page loads
console.log("Welcome to Andrew's Personal Website! 🚀");

/* ===================================
   SMOOTH SCROLLING FOR NAVIGATION
   Navigating via menu smoothly scrolls to sections
   =================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section ID from the link
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===================================
   PAGE LOAD ANIMATION
   Fade in content when page loads
   =================================== */
window.addEventListener('load', function() {
    console.log("Page fully loaded! 📄");
    
    // Add a subtle animation when the page loads
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '1';
        heroTitle.style.animation = 'fadeInDown 0.8s ease';
    }
});

/* ===================================
   INTERACTIVE CARD HOVER EFFECTS
   Cards respond when you hover over them
   =================================== */
const interestCards = document.querySelectorAll('.interest-card');
const projectCards = document.querySelectorAll('.project-card');

// Add hover effect listener to interest cards
interestCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add hover effect listener to project cards
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

/* ===================================
   SCROLL ANIMATION - Fade in sections as you scroll
   Sections appear when you scroll to them
   =================================== */
const observerOptions = {
    threshold: 0.1,  // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add a fade-in class when section comes into view
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInDown 0.6s ease';
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

/* ===================================
   ACTIVE NAVIGATION HIGHLIGHTING
   Highlights the current section in navigation
   =================================== */
function updateActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        
        if (section) {
            // Check if section is in view
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + 100;
            
            // Highlight the link if its section is currently visible
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.style.color = 'var(--primary-color)';
                link.style.fontWeight = 'bold';
            } else {
                link.style.color = 'var(--text-dark)';
                link.style.fontWeight = '500';
            }
        }
    });
}

// Update active navigation when page scrolls
window.addEventListener('scroll', updateActiveNavigation);

/* ===================================
   CONTACT BUTTON FUNCTIONALITY
   Handle contact button clicks
   =================================== */
const contactButtons = document.querySelectorAll('.btn-contact');

contactButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Email link will handle naturally
        const href = this.getAttribute('href');
        
        // For message button, show a friendly message
        if (href === '#' && this.textContent.includes('Message')) {
            e.preventDefault();
            alert('Thanks for your interest! 😊\n\nTip: Ask a parent or guardian for the best way to contact Andrew safely.');
        }
    });
});

/* ===================================
   KEYBOARD NAVIGATION
   Use arrow keys to navigate between sections
   =================================== */
const sectionIds = ['#home', '#about', '#interests', '#projects', '#learning', '#contact'];

document.addEventListener('keydown', function(event) {
    // Only activate on arrow keys
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const currentScroll = window.scrollY;
        const sections = sectionIds.map(id => document.querySelector(id));
        
        let nextSection = sections[0];
        
        if (event.key === 'ArrowDown') {
            // Scroll to next section
            for (let section of sections) {
                if (section && section.offsetTop > currentScroll + 100) {
                    nextSection = section;
                    break;
                }
            }
        } else {
            // Scroll to previous section
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop < currentScroll - 100) {
                    nextSection = section;
                    break;
                }
            }
        }
        
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
});

/* ===================================
   MOBILE MENU TOGGLE (Optional Enhancement)
   Toggle mobile navigation menu
   =================================== */
function initMobileMenu() {
    // Check if on mobile
    if (window.innerWidth <= 768) {
        // Mobile-specific functionality can go here
        console.log("Mobile view detected! 📱");
    }
}

// Run on page load and window resize
window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', initMobileMenu);

/* ===================================
   WELCOME MESSAGE
   Shows in browser console (for developers!)
   =================================== */
console.log("%cWelcome to Andrew's Website! 🎉", "color: #6366f1; font-size: 20px; font-weight: bold;");
console.log("%cMade with ❤️ by Andrew", "color: #ec4899; font-size: 14px;");
console.log("Interested in web development? Great! Check out the HTML, CSS, and JavaScript files to see how this website works!");
