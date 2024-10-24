document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('gəncəSəbəti');
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const loggedIn = localStorage.getItem('loggedIn') === 'true';


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
                        <<div class="btn-group">
                        <button class="btn-reset product-btn" data-index="${index}">Add to Cart</button>
                        ${loggedIn ? `<button class="btn-reset delete-product-btn" data-index="${index}">Delete</button>` : ''}
                    </div>
                    </div>
                `;
                productList.appendChild(productCard);
            });
    }

    productList.addEventListener('click', function (event) {
        const index = event.target.dataset.index;

        if (event.target.classList.contains('product-btn')) {
            const product = products.filter(p => p.category === 'Gəncə sebeti')[index];

            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Product added to cart!');
        }

        if (event.target.classList.contains('delete-product-btn')) {
        
            const filteredProducts = products.filter(p => p.category === 'Gəncə sebeti');
            const productToDelete = filteredProducts[index];
            const productIndex = products.indexOf(productToDelete);

            products.splice(productIndex, 1);  
            localStorage.setItem('products', JSON.stringify(products));  
            displayProducts();  
            alert('Product deleted successfully!');
        }
    });

    displayProducts();
});








