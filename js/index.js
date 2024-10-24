document.addEventListener('DOMContentLoaded', function () {
    const productsList = document.getElementById('productsList');
    let products = JSON.parse(localStorage.getItem('products')) || [];

    function displayProducts() {
        productsList.innerHTML = '';
        products.forEach((product, index) => {
            const productCard = document.createElement('li');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
            <div claSS="product">
                <h2 class="product-title">${product.name}</h2>
                <img class="product-img" src="${product.image}" alt="${product.name}">
                <p class="product-descr">${product.description}</p>
                <button class="btn-reset product-btn" data-index="${index}">Add to Cart</button>\
                </DIV>
            `;
            productsList.appendChild(productCard);
        });
    }


    displayProducts();

    productsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('product-btn')) {
            const index = event.target.dataset.index;
            const product = products[index];

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Product added to cart!');
        }
    });
});








