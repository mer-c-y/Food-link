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

    if (!providersList) return;

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
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ==================== HANDLE CONTACT FORM SUBMISSION ====================
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;

    alert(
        `Thank you ${name}! We received your message about "${subject}". We will get back to you at ${email} soon. Together, we're fighting hunger! 🍽️❤️`
    );

    document.getElementById('contactForm').reset();
}

// ==================== INITIALIZE PAGE ====================
document.addEventListener('DOMContentLoaded', () => {

    // Display provider cards
    displayProviders();

    // Animate statistics
    setTimeout(animateNumbers, 500);

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation =
                    'slideUp 0.8s ease forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// ==================== NAVBAR SHADOW EFFECT ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    if (window.scrollY > 100) {
        navbar.style.boxShadow =
            '0 8px 16px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow =
            '0 4px 6px rgba(0,0,0,0.1)';
    }
});
