document.getElementById('addForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from the form
    const productName = document.getElementById('productInput').value;
    const description = document.getElementById('aboutProduct').value;
    const page = document.getElementById('addSelect').value;
    const category = document.getElementById('addSubSelect').value;

    // Create product object with name, description, page, and category
    const product = {
        name: productName,
        description: description,
        page: page,
        category: category
    };

    // Save product in localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    document.getElementById('addForm').reset();
    alert("Товар добавлен успешно!");
});

// Function to load products for the current page
function loadProductsForPage(pageName) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const filteredProducts = products.filter(product => product.page === pageName);

    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear existing products

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.description}</p>
        `;
        productContainer.appendChild(productElement);
    });
}
