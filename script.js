// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Generate Bubbles
const bubblesContainer = document.getElementById('bubbles-container');
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 60 + 20; // 20 to 80px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${Math.random() * 10 + 10}s`; // 10 to 20s
    bubblesContainer.appendChild(bubble);

    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 20000);
}

setInterval(createBubble, 1000); // Create a bubble every second

// Fetch Token Data
async function fetchTokenData() {
    try {
        const response = await fetch('https://api.multiversx.com/tokens/NIX-de14cc');
        const data = await response.json();

        // Price and MCAP not in this API. Using placeholders.
        // To get price, would need xExchange GraphQL or other, but for now N/A
        document.getElementById('price').textContent = 'N/A (Not listed yet)';
        const supply = parseFloat(data.supply);
        document.getElementById('mcap').textContent = 'N/A (Supply: ' + supply + ')';
        document.getElementById('transfers').textContent = data.transfers;
        document.getElementById('accounts').textContent = data.accounts;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('price').textContent = 'Error';
        document.getElementById('mcap').textContent = 'Error';
        document.getElementById('transfers').textContent = 'Error';
        document.getElementById('accounts').textContent = 'Error';
    }
}

fetchTokenData();
