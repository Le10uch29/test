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
        const imageUrl = URL.createObjectURL(productImage); 
        console.log('Generated Image URL:', imageUrl);
    
    
        const product = {
            name: productName,
            category: productCategory,
            categoryId: productCategoryId,
            description: productDescription,
            image: imageUrl
    };

  
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products)); 

    
    document.getElementById('addForm').reset();
    document.getElementById('file-name').innerText = "No file chosen";
    alert('Product added successfully!');
    displayProducts(); 
} else {
    alert('Please select an image to upload.');
}
});

if (form) {  
    form.addEventListener('submit', function(event) {
        event.preventDefault();


    });
} else {
    console.error('Element with ID "addForm" not found.');
}
})