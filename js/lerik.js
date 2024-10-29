document.addEventListener('DOMContentLoaded', function () {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const lerikProducts = products.filter(product => product.page === "Lerik");
    const productContainer = document.getElementById('productContainer');

    // Функция отображения товаров по выбранной категории
    function displayProducts(category = "All") {
        productContainer.innerHTML = '';

        const filteredProducts = category === "All"
            ? lerikProducts
            : lerikProducts.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            productContainer.appendChild(productElement);
        });
    }

    // Переключение категорий
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            document.querySelectorAll('.nav-item a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');
            displayProducts(selectedCategory);
        });
    });

    // Отображаем все товары по умолчанию
    displayProducts();
});