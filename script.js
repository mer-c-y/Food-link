// ==================== FOOD PROVIDER CATEGORIES ====================
const providers = [
    {
        name: "Restaurants & Hotels",
        emoji: "🍽️",
        description: "Daily unsold meals and catering leftovers"
    },
    {
        name: "Supermarkets & Grocery",
        emoji: "🛒",
        description: "Cosmetically perfect but unsold food items"
    },
    {
        name: "Bakeries & Pastries",
        emoji: "🍞",
        description: "End-of-day fresh but unsold baked goods"
    },
    {
        name: "Events & Catering",
        emoji: "🎪",
        description: "Excess catering from events and functions"
    },
    {
        name: "Food Factories",
        emoji: "🏭",
        description: "Overproduction and processing byproducts"
    },
    {
        name: "Home Cooks",
        emoji: "🏠",
        description: "Homemade food and prepared meals"
    },
    {
        name: "Food Courts & Malls",
        emoji: "🏬",
        description: "Restaurant waste from busy commercial areas"
    },
    {
        name: "Corporate Cafeterias",
        emoji: "🍱",
        description: "Leftover meals from office cafeterias"
    }
];

// ==================== DISPLAY PROVIDER CARDS ====================
function displayProviders() {
    const providersList = document.getElementById('providersList');
    providersList.innerHTML = '';
    
    providers.forEach((provider, index) => {
        const providerCard = document.createElement('div');
        providerCard.className = 'provider-card';
        providerCard.style.animationDelay = `${index * 0.1}s`;
        providerCard.innerHTML = `
            <div class="provider-icon">${provider.emoji}</div>
            <h3>${provider.name}</h3>
            <p>${provider.description}</p>
        `;
        providersList.appendChild(providerCard);
    });
}

// ==================== ANIMATE STATISTICS NUMBERS ====================
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// ==================== SMOOTH SCROLL FUNCTION ====================
    function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== HANDLE CONTACT FORM SUBMISSION ====================
function handleSubmit(event) {
    event.preventDefault();
    
    const name = event.target.querySelector('#name').value;
    const email = event.target.querySelector('#email').value;
    const subject = event.target.querySelector('#subject').value;
    const message = event.target.querySelector('#message').value;
    
    // Show success message
    alert(`Thank you ${name}! We received your message about "${subject}". We'll get back to you at ${email} soon. Together, we're fighting hunger! 🍽️❤️`);
    
    // Reset form
    event.target.reset();
}

// ==================== INITIALIZE PAGE ====================
document.addEventListener('DOMContentLoaded', function() {
    // Display all provider cards
    displayProviders();
    
    // Animate numbers when page loads
    setTimeout(animateNumbers, 500);
    
    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// ==================== SMOOTH PAGE TRANSITIONS ====================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
});
