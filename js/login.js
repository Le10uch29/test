document.addEventListener('DOMContentLoaded', function () {
    const admins = [
        { username: 'admin', password: 'admin123' },
        { username: 'Elnur', password: 'Elnur123' }
    ];

    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('openLogin');
    const logoutButton = document.getElementById('logoutBtn');
    const addProductLink = document.getElementById('addProductLink');
    const usernameDisplay = document.getElementById('username-display');

    function checkLoginStatus() {
        const loggedIn = localStorage.getItem('loggedIn');
        const username = localStorage.getItem('username');
        if (loggedIn === 'true') {
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
            addProductLink.style.display = 'inline-block';
            if (username) {
                usernameDisplay.textContent = `Welcome, ${username}!`;
            }
        } else {
            loginButton.style.display = 'block';
            logoutButton.style.display = 'none';
            addProductLink.style.display = 'none';
            usernameDisplay.textContent = ''; 
        }
    }

    checkLoginStatus();

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const enteredUsername = usernameInput.value.trim();
            const enteredPassword = passwordInput.value.trim();

            const admin = admins.find(admin => admin.username === enteredUsername && admin.password === enteredPassword);

            if (admin) {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('username', enteredUsername);

                checkLoginStatus(); 
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        checkLoginStatus();
        window.location.href = 'index.html';
    });
});
