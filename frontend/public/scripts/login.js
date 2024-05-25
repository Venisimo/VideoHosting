const Theme = document.querySelector('.theme');
const ThemeIcon = document.querySelector('#theme-icon');
const Language = document.querySelector('.language');
const LanguageIcon = document.querySelector('#Language-icon');
const body = document.getElementsByTagName('body')[0];
const loginMargin = document.getElementsByClassName('login-margin')[0];
const signInTitle = document.getElementsByClassName('sign-in-title')[0];
const loginInput = document.getElementsByClassName('login-input')[0];
const passwordInput = document.getElementsByClassName('password-input')[0];
const login = document.getElementsByClassName('login')[0];
const password = document.getElementsByClassName('password')[0];
const signIn = document.getElementsByClassName('sign-in')[0];
const signUp = document.getElementsByClassName('sign-up')[0];
const ru = document.getElementsByClassName('ru')[0];
const en = document.getElementsByClassName('en')[0];
const RusEng = document.getElementsByClassName('rus-eng')[0];
const ErrorMessageLogin = document.getElementsByClassName('error_message_login')[0];
const Modal = document.getElementsByClassName('modal')[0];
const BtnOK = document.getElementsByClassName('btnOK')[0]; 
const ModalWindow = document.getElementsByClassName('modal-widnow')[0];
const SuccesLog = document.getElementsByClassName('SuccesLog')[0];
let Lang = localStorage.getItem('language');
if (Lang == null) {
    localStorage.setItem('language', "ru");
}
let ThemeLocalStorage = localStorage.getItem('theme');
if (ThemeLocalStorage == null) {
    localStorage.setItem('theme', "light");
}
Theme.addEventListener('click', function() {
    if (localStorage.getItem('theme') == "light") {
        localStorage.setItem('theme', "dark");
        ChekTheme();
    } else if (localStorage.getItem('theme') == "dark") {
        localStorage.setItem('theme', "light");
        ChekTheme();
    }
});
function ChekTheme() {
    if (localStorage.getItem('theme') == "light") {
        body.style.background = '#FFFFFF';
        loginMargin.style.background = 'rgb(79, 244, 215)';
        ModalWindow.style.background = 'rgb(79, 244, 215)';
        ModalWindow.style.color = '#000000';
        BtnOK.style.background = 'rgb(255, 255, 255)';
        BtnOK.style.color = 'black';
        signInTitle.style.color = "black";
        loginInput.style.background = "";
        passwordInput.style.background = "";
        loginInput.style.color = "black";
        passwordInput.style.color = "black";
        login.style.color = "black";
        password.style.color = "black";
        signIn.style.background = "#030303";
        signUp.style.color = "black";
        ru.style.color = "black";
        en.style.color = "black";
        LanguageIcon.src = 'images/dark-icon/language-icon-sign.png';
        ThemeIcon.src = 'images/dark-icon/Moon-sign.png';
        Theme.classList.remove('dark');
    } else if (localStorage.getItem('theme') == "dark") {
        body.style.background = '#1F1C1C';
        loginMargin.style.background = '#030303';
        ModalWindow.style.background = '#1F1C1C';
        ModalWindow.style.color = '#FFFFFF';
        BtnOK.style.background = '#030303';
        BtnOK.style.color = 'white';
        signInTitle.style.color = "white";
        loginInput.style.background = "#1F1C1C";
        passwordInput.style.background = "#1F1C1C";
        loginInput.style.color = "white";
        passwordInput.style.color = "white";
        login.style.color = "white";
        password.style.color = "white";
        signIn.style.background = "#1F1C1C";
        signUp.style.color = "white";
        ru.style.color = "white";
        en.style.color = "white";
        LanguageIcon.src = 'images/light-icon/language-icon-sign.png';
        ThemeIcon.src = 'images/light-icon/Sun-sign.png';
        Theme.classList.add('dark');
    }
}
ChekTheme();
en.addEventListener('click', function() {
    localStorage.setItem('language', "en");
    ChekLanguage();
})

ru.addEventListener('click', function() {
    localStorage.setItem('language', "ru");
    ChekLanguage();
});

function ChekLanguage() {
    if (localStorage.getItem('language') == "en") {
        ru.innerHTML = "ru/";
        ru.style.fontWeight = 'normal';
        en.innerHTML = "en";
        en.style.fontWeight = 'bold';

        Language.style.right = '110px'
        RusEng.style.right = '-20px';

        signInTitle.innerHTML = "Sign in";  
        signInTitle.style.width = "210px";
        signInTitle.style.left = "220px";
        signInTitle.style.right = "220px";
        
        login.innerHTML = "Login";
        password.innerHTML = "Password";
        signIn.innerHTML = "Login";
        signUp.innerHTML = "Sign up";
        signUp.style.left = "270px";
        SuccesLog.innerHTML = "Login success!";
    } else if (localStorage.getItem('language') == "ru") {
        ru.innerHTML = "рус";
        ru.style.fontWeight = 'bold';
        en.innerHTML = "/анг";
        en.style.fontWeight = 'normal';

        Language.style.right = '140px'
        RusEng.style.right = '10px';

        signInTitle.innerHTML = "Вход";  
        signInTitle.style.width = "170px";
        signInTitle.style.left = "240px";
        signInTitle.style.right = "240px";
        
        login.innerHTML = "Логин";
        password.innerHTML = "Пароль";
        signIn.innerHTML = "Войти";
        signUp.innerHTML = "Зарегистрироваться";
        signUp.style.left = "175px";
        SuccesLog.innerHTML = "Успешный вход!";
    }
}
ChekLanguage();
BtnOK.addEventListener('click', function() {
    location.reload()
});