document.getElementById('addForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Получаем значения из формы
    const productName = document.getElementById('productInput').value;
    const description = document.getElementById('aboutProduct').value;
    const page = document.getElementById('addSelect').value;
    const category = document.getElementById('addSubSelect').value; // Убедитесь, что выбирается категория

    // Создаем объект товара, содержащий имя, описание, страницу и категорию
    const product = {
        name: productName,
        description: description,
        page: page,
        category: category // Сохраняем выбранную категорию
    };

    // Сохраняем товар в localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    document.getElementById('addForm').reset();
    alert("Товар добавлен успешно!");
});