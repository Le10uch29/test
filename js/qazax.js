document.addEventListener('DOMContentLoaded', function () {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const qazaxProducts = products.filter(product => product.page === "Qazax");
    const productContainer = document.getElementById('productContainer');

    function displayProducts(category) {
        productContainer.innerHTML = '';

        const filteredProducts = qazaxProducts.filter(product => product.category === category);

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

        const qazaxIndex = products.findIndex(product => product.page === "Qazax" && qazaxProducts[index] === product);

        if (qazaxIndex > -1) {

            products.splice(qazaxIndex, 1);
            localStorage.setItem('products', JSON.stringify(products));
            qazaxProducts.splice(index, 1);
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