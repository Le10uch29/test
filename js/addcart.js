document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addCart');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const productName = document.getElementById('productInput').value;
        const category = document.getElementById('cartSelect').value;
        const imageInput = document.getElementById('imageInput').files[0];

    
        if (productName && category && imageInput) {
            const reader = new FileReader();
            reader.readAsDataURL(imageInput);  

            reader.onload = function() {
                const imageData = reader.result;

                const product = { category, productName, imageData };
                const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
                storedProducts.push(product);
                localStorage.setItem('products', JSON.stringify(storedProducts));
                form.reset();
                alert('Товар добавлен!');
            };
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });
});