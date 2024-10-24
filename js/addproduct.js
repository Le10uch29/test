document.addEventListener('DOMContentLoaded', function () {
    const addForm = document.getElementById('addForm');
    const productInput = document.getElementById('productInput');
    const addSelect = document.getElementById('addSelect');
    const aboutProduct = document.getElementById('aboutProduct');
    const imgInput = document.getElementById('imgInput');


    let imageUrl = '';
    imgInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = function () {
            imageUrl = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });


    if (addForm) {
    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const product = {
            name: productInput.value,
            category: addSelect.value,
            description: aboutProduct.value,
            image: imageUrl,
        };

        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        alert('Product added successfully!');
        addForm.reset();
    });
} else {
    console.error("Form with id 'addForm' not found.");
}
});