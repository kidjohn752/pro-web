let cart = JSON.parse(localStorage.getItem('ethioCart')) || [];

function saveCart() {
    localStorage.setItem('ethioCart', JSON.stringify(cart));
}

function updateCartUI() {
    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');
    
    if(!countEl) return; // Prevent errors on pages without a header

    countEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        itemsEl.innerHTML = '<div style="text-align: center; padding: 3rem 1rem; color: #666;">Your cart is empty</div>';
        footerEl.style.display = 'none';
    } else {
        itemsEl.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <span class="remove-item" onclick="removeFromCart(${item.id})">Remove</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalEl.textContent = `$${total.toFixed(2)}`;
        footerEl.style.display = 'block';
    }
}

function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) existingItem.quantity += qty;
    else cart.push({ ...product, quantity: qty });
    
    saveCart();
    updateCartUI();
    document.getElementById('cartSidebar').classList.add('open');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
}

// Function to empty cart after purchase
function checkoutCart() {
    if (cart.length === 0) return;
    alert('Thank you for your purchase!');
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}

// Function to replace Login button with Logout when authenticated
function updateAuthUI() {
    const authLinks = document.querySelectorAll('.auth-link');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    authLinks.forEach(link => {
        if (isLoggedIn) {
            link.textContent = 'Logout';
            link.href = '#';
            link.classList.remove('active');
            link.onclick = function(e) {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                window.location.href = 'login.html'; // Forces unauthenticated state redirect
            };
        } else {
            link.textContent = 'Login';
            link.href = 'login.html';
            link.onclick = null;
        }
    });
}

// Function used on products.html and index.html to show items
function renderProductGrid(containerId, category = 'all', limit = null) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    let filtered = category === 'all' ? products : products.filter(p => p.category === category);
    if (limit) filtered = filtered.slice(0, limit);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize UI on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    updateAuthUI();
});