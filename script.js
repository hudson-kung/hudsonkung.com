// WebCraft Studio JavaScript

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Package selection
function selectPackage(packageName, price) {
    // Store selected package
    localStorage.setItem('selectedPackage', JSON.stringify({
        name: packageName,
        price: price
    }));
    
    // Scroll to contact form
    scrollToSection('contact');
    
    // Pre-fill the form with package info
    setTimeout(() => {
        const messageField = document.getElementById('message');
        if (messageField) {
            messageField.value = `I'm interested in the ${packageName} package ($${price}). Please provide more details about what's included.`;
        }
    }, 500);
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        projectType: document.getElementById('projectType').value,
        budget: document.getElementById('budget').value,
        message: document.getElementById('message').value,
        selectedPackage: localStorage.getItem('selectedPackage')
    };
    
    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<div class="spinner inline-block w-4 h-4 mr-2"></div>Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Log form data (in production, send to server)
        console.log('Form submitted:', formData);
        
        // Reset form
        e.target.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success modal
        showSuccessModal();
        
        // Clear stored package
        localStorage.removeItem('selectedPackage');
    }, 2000);
});

// Success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Add animation
    setTimeout(() => {
        modal.querySelector('.bg-white').classList.add('animate-fade-in-up');
    }, 100);
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Close modal on outside click
document.getElementById('successModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .package-card, .portfolio-item');
    animateElements.forEach(el => observer.observe(el));
    
    // Add smooth reveal animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        sectionObserver.observe(section);
    });
});

// Dynamic pricing calculator
function calculateCustomPrice() {
    const features = document.querySelectorAll('input[name="feature"]:checked');
    let basePrice = 599;
    
    features.forEach(feature => {
        basePrice += parseInt(feature.value);
    });
    
    document.getElementById('customPrice').textContent = `$${basePrice}`;
}

// Form validation enhancements
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone);
}

// Real-time form validation
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value;
    if (email && !validateEmail(email)) {
        this.classList.add('border-red-500');
        this.classList.remove('border-gray-300');
    } else {
        this.classList.remove('border-red-500');
        this.classList.add('border-gray-300');
    }
});

// Package comparison feature
function comparePackages() {
    const packages = ['Starter', 'Professional', 'Enterprise'];
    const features = [
        'Pages',
        'Custom Design',
        'E-commerce',
        'CMS Integration',
        'Support',
        'Revisions'
    ];
    
    // Create comparison table
    let comparisonHTML = '<table class="w-full border-collapse"><thead><tr><th>Feature</th>';
    packages.forEach(pkg => {
        comparisonHTML += `<th>${pkg}</th>`;
    });
    comparisonHTML += '</tr></thead><tbody>';
    
    features.forEach(feature => {
        comparisonHTML += `<tr><td class="font-semibold">${feature}</td>`;
        // Add feature comparison logic here
        comparisonHTML += '</tr>';
    });
    
    comparisonHTML += '</tbody></table>';
    
    // Display comparison modal
    document.getElementById('comparisonContent').innerHTML = comparisonHTML;
    document.getElementById('comparisonModal').classList.remove('hidden');
}

// Live chat widget (simulated)
function toggleChat() {
    const chatWidget = document.getElementById('chatWidget');
    chatWidget.classList.toggle('hidden');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        // Add message to chat
        const messagesContainer = document.getElementById('chatMessages');
        const messageElement = document.createElement('div');
        messageElement.className = 'bg-blue-100 p-3 rounded-lg mb-2';
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        
        // Clear input
        input.value = '';
        
        // Simulate response
        setTimeout(() => {
            const responseElement = document.createElement('div');
            responseElement.className = 'bg-gray-100 p-3 rounded-lg mb-2';
            responseElement.textContent = 'Thanks for your message! Our team will respond shortly.';
            messagesContainer.appendChild(responseElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Scroll to top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollToTop');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.classList.remove('hidden');
        } else {
            scrollButton.classList.add('hidden');
        }
    }
});

// Initialize tooltips
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-gray-800 text-white text-sm px-2 py-1 rounded z-50';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.top = '-30px';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            this.style.position = 'relative';
            this.appendChild(tooltip);
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.absolute');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initTooltips();
    
    // Add loading animation removal
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Export functions for global access
window.scrollToSection = scrollToSection;
window.selectPackage = selectPackage;
window.closeModal = closeModal;
window.toggleMobileMenu = toggleMobileMenu;
window.calculateCustomPrice = calculateCustomPrice;
window.comparePackages = comparePackages;
window.toggleChat = toggleChat;
window.sendMessage = sendMessage;
window.scrollToTop = scrollToTop;
