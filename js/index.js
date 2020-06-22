window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    let form = document.querySelector('.form'),
        login = document.getElementById('login'),
        password = document.getElementById('password'),
        email = document.getElementById('email'),
        phone = document.getElementById('phone'),
        popupLog = form.querySelector('.login_popup'),
        popupPass = form.querySelector('.password_popup'),
        popupEmail = form.querySelector('.email_popup');

    login.addEventListener("input", function () {
        //возвращает true если значение элемента не соответствует правильному синтаксису; в противном случае - false. Если возвращает true, элемент будет соответствовать CSS псевдоклассу :invalid.
        if (login.validity.patternMismatch) {
            //метод устанавливает специальное сообщение. Если элемент не имеет пользовательской ошибки в параметре указывается пустая строка
            login.classList.add("form_input_invalid");
            popupLog.style.display = 'block';
            popupLog.innerHTML = "Логин должен состоять из 4-12 букв латинского алфавита и начинаться с буквы. Может содержать цифры и символы '-', '_'";
            
        } else {

            login.setCustomValidity("");
            login.classList.remove("form_input_invalid");
            popupLog.style.display = 'none';
        }
        
    });


    password.addEventListener("input", function () {
        if (password.validity.patternMismatch) {

            password.classList.add("form_input_invalid");
            popupPass.style.display = 'block';
            popupPass.innerHTML = "Пароль должен содержать строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов";
            

        } else {

            password.setCustomValidity("");
            password.classList.remove("form_input_invalid");
            popupPass.style.display = 'none';
        }
        
    });


    email.addEventListener("input", function () {
        
        if (email.validity.typeMismatch) {
            
            email.classList.add("form_input_invalid");
            popupEmail.style.display = 'block';
            popupEmail.innerHTML = "Пожалуйста, введите существующий адрес электронной почты";

        } else {
            
            email.setCustomValidity("");
            email.classList.remove("form_input_invalid");
            popupEmail.style.display = 'none';
        }
    });


    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(phone);


    $('form').on('click', '.password_control', function(){
        if ($('#password').attr('type') == 'password'){
            $(this).addClass('password_control_view');
            $('#password').attr('type', 'text');
        } else {
            $(this).removeClass('password_control_view');
            $('#password').attr('type', 'password');
        }
        return false;
    });


    //отправка формы происходит по нажатию Enter или кнопки Отправить
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        login.value = '';
        password.value = '';
        email.value = '';
        phone.value = '';
    });
});