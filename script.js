// ==================== FOOD PROVIDER CATEGORIES ====================

const providers = [
    {
        name: "Restaurants & Hotels",
        emoji: "🍽️",
        description: "Daily unsold meals and catering leftovers"
    },
    {
        name: "Supermarkets & Grocery Stores",
        emoji: "🛒",
        description: "Perfectly good food that cannot be sold"
    },
    {
        name: "Bakeries",
        emoji: "🍞",
        description: "Fresh baked goods available at the end of the day"
    },
    {
        name: "Events & Catering",
        emoji: "🎪",
        description: "Excess food from weddings, parties, and events"
    },
    {
        name: "Food Factories",
        emoji: "🏭",
        description: "Surplus food products and ingredients"
    },
    {
        name: "Home Cooks",
        emoji: "🏠",
        description: "Food shared by generous community members"
    },
    {
        name: "Shopping Malls",
        emoji: "🏬",
        description: "Food court and restaurant donations"
    },
    {
        name: "Corporate Cafeterias",
        emoji: "🍱",
        description: "Meals shared from workplace cafeterias"
    }
];

// ==================== DISPLAY PROVIDERS ====================

function displayProviders() {

    const providersList = document.getElementById("providersList");

    if (!providersList) return;

    providersList.innerHTML = "";

    providers.forEach(provider => {

        const card = document.createElement("div");

        card.className = "provider-card";

        card.innerHTML = `
            <div class="provider-icon">${provider.emoji}</div>
            <h3>${provider.name}</h3>
            <p>${provider.description}</p>
        `;

        providersList.appendChild(card);
    });
}

// ==================== ANIMATE NUMBERS ====================

function animateNumbers() {

    const counters = document.querySelectorAll(".stat-number");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 50;

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

                clearInterval(timer);

            } else {

                counter.textContent = Math.floor(current);
            }

        }, 30);
    });
}

// ==================== SMOOTH SCROLL ====================

function scrollTo(sectionId) {

    const section = document.getElementById(sectionId);

    if (!section) {
        console.error("Section not found:", sectionId);
        return;
    }

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Make function available globally
window.scrollTo = scrollTo;

// ==================== CONTACT FORM ====================

function handleSubmit(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting FoodLink! We have received your message and will get back to you soon. ❤️"
    );

    event.target.reset();
}

window.handleSubmit = handleSubmit;

// ==================== NAVBAR SHADOW ====================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 4px 15px rgba(0,0,0,0.2)";

    } else {

        navbar.style.boxShadow = "none";
    }
});

// ==================== PAGE LOAD ====================

document.addEventListener("DOMContentLoaded", () => {

    displayProviders();

    setTimeout(() => {
        animateNumbers();
    }, 500);

});
