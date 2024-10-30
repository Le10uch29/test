document.addEventListener('DOMContentLoaded', function () {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const lerikProducts = products.filter(product => product.page === "Lerik");
    const productContainer = document.getElementById('productContainer');

    function displayProducts(category) {
        productContainer.innerHTML = '';

        const filteredProducts = lerikProducts.filter(product => product.category === category);

        filteredProducts.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.className = 'new-product-item';
            productElement.innerHTML = `
            <div class="menu-product">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                </div>
                ${localStorage.getItem('loggedIn') === 'true' ? `<button class="delete-add-button" data-index="${index}">Delete</button>` : ''}
            `;

            productContainer.appendChild(productElement);
        });


        document.querySelectorAll('.delete-add-button').forEach(button => {
            button.addEventListener('click', function () {
                const productIndex = this.getAttribute('data-index');
                deleteProduct(productIndex, category);
            });
        });
    }

    function deleteProduct(index, category) {

        const lerikIndex = products.findIndex(product => product.page === "Lerik" && lerikProducts[index] === product);

        if (lerikIndex > -1) {

            products.splice(lerikIndex, 1);
            localStorage.setItem('products', JSON.stringify(products));
            lerikProducts.splice(index, 1);
        }

        displayProducts(category);
    }

    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            document.querySelectorAll('.nav-item a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');
            displayProducts(selectedCategory);
        });
    });

    const activeCategoryElement = document.querySelector('.nav-item a.active');
    const initialCategory = activeCategoryElement ? activeCategoryElement.getAttribute('data-category') : 'Standard';
    displayProducts(initialCategory);
});