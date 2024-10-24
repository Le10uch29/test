document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('leriksebeti');
    let products = JSON.parse(localStorage.getItem('products')) || [];

    function displayProducts() {
        productList.innerHTML = '';
        products
            .filter(product => product.category === 'Lerik səbəti')
            .forEach((product) => {
                const productCard = document.createElement('li');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <div class="product">
                        <h2 class="product-title">${product.category}</h2>
                        <img class="product-img" src="${product.image}" alt="${product.name}">
                        <p class="product-descr">${product.description}</p>
                    </div>
                `;
                productList.appendChild(productCard);
            });
    }

    displayProducts();
});
