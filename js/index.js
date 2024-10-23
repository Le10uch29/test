document.addEventListener('DOMContentLoaded', function () {
    const productsList = document.getElementById('productsList');
    let products = JSON.parse(localStorage.getItem('products')) || [];

    function displayProducts() {
        productsList.innerHTML = '';
        products.forEach((product, index) => {
            const productCard = document.createElement('li');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h2 class="product-title">${product.name}</h2>
                <img class="product-img" src="${product.image}" alt="${product.name}">
                <p class="product-descr">${product.description}</p>
                <button class="btn-reset add-to-cart-btn" data-index="${index}">Add to Cart</button>
            `;
            productsList.appendChild(productCard);
        });
    }

    // Отобразить товары при загрузке страницы
    displayProducts();

    // Добавить товар в корзину
    productsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const index = event.target.dataset.index;
            const product = products[index];

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Product added to cart!');
        }
    });
});







