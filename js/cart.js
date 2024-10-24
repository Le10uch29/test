document.addEventListener('DOMContentLoaded', function () {
    const cartList = document.getElementById('cartList');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
        cartList.innerHTML = '';
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `
                <h2 class="cart-title">${item.category}</h2>
                <img class="cart-img" src="${item.image}" alt="${item.name}">
                <p class="cart-descr">${item.description}</p>
                <div class="btn-group">
                <button class="btn-reset buy-btn" data-index="${index}">Buy</button>
                <button class="btn-reset remove-btn" data-index="${index}">Remove</button>
                </div>
            `;
            cartList.appendChild(listItem);
        });
    }


    displayCartItems();

   //delete
    cartList.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-btn')) {
            const index = event.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems();
        }
    });


    document.getElementById('clearCart').addEventListener('click', function () {
        cart = [];
        localStorage.removeItem('cart');
        displayCartItems();
    });
});