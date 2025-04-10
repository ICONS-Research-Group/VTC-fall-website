// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('nav ul');

    mobileNavToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        this.setAttribute('aria-expanded', 
            this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && navList.classList.contains('active')) {
            navList.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024 && navList.classList.contains('active')) {
            navList.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Enhanced scroll behavior for mobile view
document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.logo-container');
    const logo = document.querySelector('.ieee-logo');
    const title = document.querySelector('.workshop-title');
    
    let lastScroll = 0;
    let scrollThreshold = 50;
    
    // Check if device is mobile
    const isMobile = () => window.innerWidth <= 768;
    
    window.addEventListener('scroll', () => {
        if (!isMobile()) return;
        
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            // Scrolling down - hide elements
            logoContainer.classList.add('scroll-hide');
        } else {
            // Scrolling up - show elements
            logoContainer.classList.remove('scroll-hide');
        }
        
        lastScroll = currentScroll;
    });
    
    // Reset on window resize
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            logoContainer.classList.remove('scroll-hide');
            logo.style.opacity = '1';
            title.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
            title.style.transform = 'translateY(0)';
        }
    });
});