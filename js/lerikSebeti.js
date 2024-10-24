document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('lerikSebeti');
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const loggedIn = localStorage.getItem('loggedIn') === 'true';  // Check if user is logged in

    function displayProducts() {
        productList.innerHTML = ''; // Clear the current list
        products
            .filter(product => product.category === 'Lerik səbəti')
            .forEach((product, index) => {
                const productCard = document.createElement('li');
                productCard.classList.add('product-card');
                productCard.innerHTML =`
                    <div class="product">
                        <h2 class="product-title">${product.category}</h2>
                        <img class="product-img" src="${product.image}" alt="${product.name}">
                        <p class="product-descr">${product.name}</p>
                        <div class="btn-group">
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
            const product = products.filter(p => p.category === 'Lerik səbəti')[index];

            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Product added to cart!');
        }

        if (event.target.classList.contains('delete-product-btn')) {
        
            const filteredProducts = products.filter(p => p.category === 'Lerik səbəti');
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





