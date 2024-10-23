document.addEventListener('DOMContentLoaded', function() {
function displayProducts(selectedCategory = '') {
    const productsList = document.getElementById('productsList');
    const products = JSON.parse(localStorage.getItem('products')) || [];
    productsList.innerHTML = '';


        products.forEach(product => {
        const productCard = document.createElement('li');
        productCard.classList.add('product-card');
        productCard.id = product.category.toLowerCase();

        productCard.innerHTML = `
            <h2 class="products-title">${product.category}</h2>
                <img class="product-img" src="${product.image}" alt="${product.name}">
            <div class="roduct">
            <p class="products-descr">${product.description}</p>
            <button class="btn-reset product-btn">Add to Cart</button>
            </div>
        `;
        productsList.appendChild(productCard);
    });

    
}



document.addEventListener('DOMContentLoaded', displayProducts);
displayProducts();

})







