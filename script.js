const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        }
    });
});

// Copy Token ID
function copyTokenID() {
    navigator.clipboard.writeText('NIX-de14cc').then(() => {
        alert('Token ID copied to clipboard!');
    });
}

// Reveal Email
function revealEmail() {
    const email = document.getElementById('email');
    email.style.display = 'inline';
}

// Placeholder for API Data (to be replaced with real API call)
function fetchTokenData() {
    // Mock data (replace with api.multiversx.com call)
    const mockData = {
        price: '$0.50',
        mcap: '$10M',
        supply: '100M $NIX',
        transfers: '5000'
    };

    document.getElementById('price').textContent = mockData.price;
    document.getElementById('mcap').textContent = mockData.mcap;
    document.getElementById('supply').textContent = mockData.supply;
    document.getElementById('transfers').textContent = mockData.transfers;
}

fetchTokenData();

// Resize Canvas on Window Resize
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
