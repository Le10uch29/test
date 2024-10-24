document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('gəncəSəbəti');
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Функция для обновления и отображения продуктов
    function displayProducts() {
        productList.innerHTML = '';
        products
            .filter(product => product.category === 'Gəncə sebeti')
            .forEach((product, index) => {
                const productCard = document.createElement('li');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <div class="product">
                        <h2 class="product-title">${product.category}</h2>
                        <img class="product-img" src="${product.image}" alt="${product.name}">
                        <p class="product-descr">${product.name}</p>
                        <button class="btn-reset product-btn" data-index="${index}">Add to Cart</button>
                    </div>
                `;
                productList.appendChild(productCard);
            });
    }

    // Обработка клика по кнопке "Add to Cart"
    productList.addEventListener('click', function (event) {
        if (event.target.classList.contains('product-btn')) {
            const index = event.target.dataset.index;
            const product = products[index];

            // Добавление товара в корзину
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Product added to cart!');
        }
    });

    displayProducts();
});








