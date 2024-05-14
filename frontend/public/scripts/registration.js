const Theme = document.querySelector('.theme');
const ThemeIcon = document.querySelector('#theme-icon');
const Language = document.querySelector('.language');
const LanguageIcon = document.querySelector('#Language-icon');
const body = document.getElementsByTagName('body')[0];
const loginMargin = document.getElementsByClassName('login-margin')[0];
const signInTitle = document.getElementsByClassName('sign-in-title')[0];
const loginInput = document.getElementsByClassName('login-input')[0];
const emailInput = document.getElementsByClassName('email-input')[0];
const passwordInput = document.getElementsByClassName('password-input')[0];
const passwordRepitInput = document.getElementsByClassName('password-repit-input')[0];
const login = document.getElementsByClassName('login')[0];
const email = document.getElementsByClassName('email')[0];
const password = document.getElementsByClassName('password')[0];
const passwordRepit = document.getElementsByClassName('password-repit')[0];
const signIn = document.getElementsByClassName('sign-in')[0];
const signUp = document.getElementsByClassName('sign-up')[0];
const ru = document.getElementsByClassName('ru')[0];
const en = document.getElementsByClassName('en')[0];
const RusEng = document.getElementsByClassName('rus-eng')[0];
const ErrorMessageReg = document.getElementsByClassName('error_message_reg')[0];
const Modal = document.getElementsByClassName('modal')[0];
const BtnOK = document.getElementsByClassName('btnOK')[0]; 
const ModalWindow = document.getElementsByClassName('modal-widnow')[0];

Theme.addEventListener('click', function() {
    if (Theme.classList.contains('dark')) {
        body.style.background = '#FFFFFF';
        loginMargin.style.background = 'rgb(79, 244, 215)';
        signInTitle.style.color = "black";
        loginInput.style.background = "";
        emailInput.style.background = "";
        passwordInput.style.background = "";
        passwordRepitInput.style.background = "";
        loginInput.style.color = "black";
        passwordInput.style.color = "black";
        login.style.color = "black";
        email.style.color = "black";
        password.style.color = "black";
        passwordRepit.style.color = "black";
        emailInput.style.color = "black";
        passwordRepitInput.style.color = "black";
        signIn.style.color = "#000000";
        ru.style.color = "black";
        en.style.color = "black";
        LanguageIcon.src = 'images/dark-icon/language-icon-sign.png';
        ThemeIcon.src = 'images/dark-icon/Moon-sign.png';
        signUp.style.background = "black";
        loginInput.classList.remove('dark');
        Theme.classList.remove('dark');
    } else {
        loginInput.classList.add('dark');
        body.style.background = '#1F1C1C';
        loginMargin.style.background = '#030303';
        signInTitle.style.color = "white";
        loginInput.style.background = "#1F1C1C";
        emailInput.style.background = "#1F1C1C";
        passwordInput.style.background = "#1F1C1C";
        passwordRepitInput.style.background = "#1F1C1C";
        loginInput.style.color = "white";
        emailInput.style.color = "white";
        passwordInput.style.color = "white";
        passwordRepitInput.style.color = "white";
        login.style.color = "white";
        email.style.color = "white";
        password.style.color = "white";
        passwordRepit.style.color = "white";
        signIn.style.color = "#FFFFFF";
        ru.style.color = "white";
        en.style.color = "white";
        LanguageIcon.src = 'images/light-icon/language-icon-sign.png';
        ThemeIcon.src = 'images/light-icon/Sun-sign.png';
        signUp.style.background = "#1F1C1C";
        Theme.classList.add('dark');
    }
});
en.addEventListener('click', function() {
    ru.innerHTML = "ru/";
    ru.style.fontWeight = 'normal';
    en.innerHTML = "en";
    en.style.fontWeight = 'bold';

    Language.style.right = '110px'
    RusEng.style.right = '-20px';

    signInTitle.innerHTML = "Sign up";  
    signInTitle.style.width = "210px";
    signInTitle.style.left = "220px";
    signInTitle.style.right = "220px";
    
    login.innerHTML = "Login";
    email.innerHTML = "Email";
    password.innerHTML = "Password";
    passwordRepit.innerHTML = "Password repit"
    signIn.innerHTML = "Back";
    signIn.style.left = "280px";
})

ru.addEventListener('click', function() {
    ru.innerHTML = "рус";
    ru.style.fontWeight = 'bold';
    en.innerHTML = "/анг";
    en.style.fontWeight = 'normal';

    Language.style.right = '140px'
    RusEng.style.right = '10px';

    signInTitle.innerHTML = "Регистрация";  
    signInTitle.style.width = "170px";
    signInTitle.style.left = "160px";
    signInTitle.style.right = "160px";
    
    login.innerHTML = "Логин";
    email.innerHTML = "Почта";
    password.innerHTML = "Пароль";
    passwordRepit.innerHTML = "Повторите пароль"
    signIn.innerHTML = "Назад";
    signIn.style.left = "270px";
})

BtnOK.addEventListener('click', function() {
    window.location.replace("http://localhost:3000/login");
});