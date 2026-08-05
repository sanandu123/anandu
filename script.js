document.addEventListener("DOMContentLoaded", function () {
    // 1. Mobile Menu Navigation Toggle
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Close menu when clicking a nav link on mobile
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
            }
        });
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Scroll Elevation Shadow on Header
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // 4. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
    };



    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 5. Dynamically Set Current Year in Footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 6. FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Open the clicked item if it wasn't already active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
