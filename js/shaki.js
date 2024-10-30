document.addEventListener('DOMContentLoaded', function () {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const shakiProducts = products.filter(product => product.page === "Şəki");
    const productContainer = document.getElementById('productContainer');

    // Функция отображения товаров по выбранной категории
    function displayProducts(category = "All") {
        productContainer.innerHTML = '';

        const filteredProducts = category === "All"
            ? shakiProducts
            : shakiProducts.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'new-product-item';
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