document.addEventListener('DOMContentLoaded', function () {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const genceProducts = products.filter(product => product.page === "Gəncə");
    const productContainer = document.getElementById('productContainer');

    // Функция отображения товаров по выбранной категории
    function displayProducts(category) {
        productContainer.innerHTML = '';

        const filteredProducts = category === "All"
            ? genceProducts
            : genceProducts.filter(product => product.category === category);

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

    // Устанавливаем обработчик для переключения категорий
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Удаляем класс 'active' у всех ссылок и добавляем только на текущую
            document.querySelectorAll('.nav-item a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Отображаем товары для выбранной категории
            const selectedCategory = this.getAttribute('data-category');
            displayProducts(selectedCategory);
        });
    });

    // Найти активную категорию по умолчанию и отобразить её товары при загрузке страницы
    const defaultActiveCategory = document.querySelector('.nav-item a.active').getAttribute('data-category');
    displayProducts(defaultActiveCategory); // Показать товары активной категории по умолчанию
});