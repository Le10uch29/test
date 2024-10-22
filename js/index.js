let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');


function addToCart(productName) {
    cartCount++; 
    cartCountElement.textContent = cartCount; 
    alert(`${productName} səbətə əlavə edildi!`); 
}

document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    if (storedProducts.length > 0) {
        storedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = product.imageData ? `<img src="${product.imageData}" alt="${product.productName}" />` : '';

            productCard.innerHTML = `
                <h2>${product.category}</h2>
                ${productImage}
                <p>${product.productName}</p>
                <button>Səbətə at</button>
            `;

            const addButton = productCard.querySelector('button');
            addButton.onclick = () => addToCart(product.productName);

            productList.appendChild(productCard);
        });
    } else {
        productList.innerHTML = '<p>Heç bir məhsul tapılmadı</p>';
    }
});

// filter
document.addEventListener('DOMContentLoaded', function () {
    const allCategories = document.querySelectorAll('.products-category');
    const navLinks = document.querySelectorAll('.nav-item a');
    const allProductsLink = document.querySelector('.header-title a');

    function showAllCategories() {
        allCategories.forEach(category => {
            category.style.display = 'block';
        });
    }

    function filterByCategory(categoryId) {
        allCategories.forEach(category => {
            if (category.id === categoryId) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    }

    allProductsLink.addEventListener('click', function (event) {
        event.preventDefault();
        showAllCategories();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const categoryId = this.getAttribute('href').replace('#', '');
            filterByCategory(categoryId);
        });
    });

    showAllCategories();
});