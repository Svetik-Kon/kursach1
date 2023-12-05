document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.transparent-header');
    var parallaxN = document.querySelector('.parallax-overlay');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'black';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
    });

    // Функция для переключения видимости меню
    function toggleMenu() {
        var navUl = document.querySelector('.transparent-header nav ul');
        navUl.classList.toggle('show');
    }

    // Привязываем функцию к кнопке
    var menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    function checkRegistration() {
        var response = prompt("Желаете войти в аккаунт? (Да/Нет)");
        if (response && response.toLowerCase() === "да") {
            alert("Круто!");
        } else {
            alert("Попробуй ещё раз");
        }
    }

    document.getElementById('loginButton').addEventListener('click', function(event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        console.log("Email:", email);
        console.log("Password:", password);

        checkRegistration();
    });

});
