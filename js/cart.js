document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    let storedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

 
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';

        if (storedProducts.length === 0) {
            cartItemsContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
            return;
        }

        storedProducts.forEach((product, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('item-product');

            listItem.innerHTML = `
                <div class="products-category">
                    <h2 class="products-title">${product.category}</h2>
                    <img class="product-img" src="${product.image}" alt="${product.name}">
                    <p class="products-descr">${product.name}</p>
                    <button class="btn-reset remove-btn" data-index="${index}">Delete</button>
                </div>
            `;

            cartItemsContainer.appendChild(listItem);
        });

        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productIndex = this.getAttribute('data-index');
                removeProductFromCart(productIndex);
            });
        });
    }

    function removeProductFromCart(index) {
        storedProducts.splice(index, 1);
        localStorage.setItem('cartProducts', JSON.stringify(storedProducts));
        renderCartItems(); 
    }

   
    renderCartItems();
});

// filter
document.addEventListener('DOMContentLoaded', function () {
    const allCategories = document.querySelectorAll('.products-category');
    const navLinks = document.querySelectorAll('.nav-item a');
    const allProductsLink = document.querySelector('.header-title a');

    function showAllCategories() {
        allCategories.forEach(category => {
            category.style.display = 'block';
        });
    }

    function filterByCategory(categoryId) {
        allCategories.forEach(category => {
            if (category.id === categoryId) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    }

    allProductsLink.addEventListener('click', function (event) {
        event.preventDefault();
        showAllCategories();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const categoryId = this.getAttribute('href').replace('#', '');
            filterByCategory(categoryId);
        });
    });

    showAllCategories();
});