document.addEventListener('DOMContentLoaded', function () {
    // Массив администраторов
    const admins = [
        { username: 'admin', password: 'admin' },

    ];

    // Находим элементы формы и поля ввода
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Обработка отправки формы
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Получаем введенные значения
        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        // Проверяем, совпадают ли введенные данные с данными из массива администраторов
        const admin = admins.find(admin => admin.username === enteredUsername && admin.password === enteredPassword);

        if (admin) {
            // Если данные верны, перенаправляем на страницу addproduct.html
            window.location.href = 'addproduct.html';
        } else {
            // Если данные неверны, выводим сообщение об ошибке
            errorMessage.style.display = 'block';
        }
    });
});