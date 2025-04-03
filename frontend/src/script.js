const products = [
    {
        id: 1,
        title: "Stylish T-Shirt",
        description: "Fun graphic T-shirt for kids.",
        price: 15.99,
        image: "path-to-image1.jpg" // Replace with actual image path
    },
    {
        id: 2,
        title: "Cute Dress",
        description: "Lovely dress perfect for any occasion.",
        price: 29.99,
        image: "path-to-image2.jpg" // Replace with actual image path
    },
    {
        id: 3,
        title: "Comfy Jeans",
        description: "Durable jeans for everyday use.",
        price: 24.99,
        image: "path-to-image3.jpg" // Replace with actual image path
    },
    // More products can be added here.
];

const cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous data
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Function to add product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.title} has been added to your cart!`);
        renderCart();
    }
}

// Function to render the cart
function renderCart() {
    const cartDetails = document.getElementById('cart-details');
    cartDetails.innerHTML = ''; // Clear previous entries
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p>${item.title} - $${item.price.toFixed(2)}</p>`;
        cartDetails.appendChild(itemDiv);
    });
}

// Function to handle login (not fully implemented)
function handleLogin(event) {
    event.preventDefault();
    alert('Login function needs to be implemented.');
}

// Function for switching sections
function displaySection(section) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(sec => {
        sec.classList.add('hidden');
        if (sec.id === section) {
            sec.classList.remove('hidden');
            if (section === 'products') displayProducts();
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displaySection('home'); // Start with home section
});