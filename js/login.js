document.addEventListener('DOMContentLoaded', function () {
    const admins = [
        { username: 'Elnur', password: 'admin123' },
    ];

    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message'); // Добавьте, если нужно для отображения ошибок

    // Проверка, был ли пользователь уже авторизован
    if (localStorage.getItem('loggedIn') === 'true') {
        return window.location.href = 'addproduct.html';
    }

    // Проверка, существует ли форма входа
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // предотвращение отправки формы по умолчанию

            const enteredUsername = usernameInput.value.trim();
            const enteredPassword = passwordInput.value.trim();

            const admin = admins.find(admin => admin.username === enteredUsername && admin.password === enteredPassword);

            if (admin) {
                // Если аутентификация успешна, сохраняем состояние входа и перенаправляем
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('username', enteredUsername);
                window.location.assign('addproduct.html');
            } else {
                // Отображение сообщения об ошибке
                alert('Неверное имя пользователя или пароль.');
            }
        });
    } else {
        console.error("Login form not found.");
    }
});