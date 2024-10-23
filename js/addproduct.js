document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

    
    const productName = document.getElementById('productInput').value;
    const productSelect = document.getElementById('addSelect');
    const productCategory = productSelect.options[productSelect.selectedIndex].value; 
    const productCategoryId = productSelect.options[productSelect.selectedIndex].id; 
    const productImage = document.getElementById('imgInput').files[0];
    const productDescription = document.getElementById('aboutProduct').value;

    if (productImage && productImage.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(productImage); // Создаём URL для изображения
        console.log('Generated Image URL:', imageUrl);
    
    
        const product = {
            name: productName,
            category: productCategory,
            categoryId: productCategoryId,
            description: productDescription,
            image: imageUrl // Используем созданный URL
    };

  
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products)); 

    
    document.getElementById('addForm').reset();
    document.getElementById('file-name').innerText = "No file chosen";
    alert('Product added successfully!');
    displayProducts(); // Refresh the product display
} else {
    alert('Please select an image to upload.');
}
});

if (form) {  // Проверка на существование формы
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Логика обработки формы
    });
} else {
    console.error('Element with ID "addForm" not found.');
}
})