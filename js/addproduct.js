document.addEventListener('DOMContentLoaded', function () {
    const addForm = document.getElementById('addForm');
    const productInput = document.getElementById('productInput');
    const addSelect = document.getElementById('addSelect');
    const aboutProduct = document.getElementById('aboutProduct');
    const imgInput = document.getElementById('imgInput');

    // Обработка загрузки изображения
    let imageUrl = '';
    imgInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = function () {
            imageUrl = reader.result; // Получение base64 изображения
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const product = {
            name: productInput.value,
            category: addSelect.value,
            description: aboutProduct.value,
            image: imageUrl,
        };

        // Получение продуктов из localStorage
        let products = JSON.parse(localStorage.getItem('products')) || [];

        // Добавление нового продукта в массив
        products.push(product);

        // Сохранение обновленного списка продуктов в localStorage
        localStorage.setItem('products', JSON.stringify(products));

        alert('Product added successfully!');
        // Очистка формы после отправки
        addForm.reset();
    });
});