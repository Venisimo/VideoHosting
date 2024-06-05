const Body = document.querySelector('body');
const RedirectOnStart = document.querySelector('#RedirectOnStart');
const text = document.querySelectorAll('.text');
const PageText = document.querySelector('#PageText');
const headerBG = document.querySelector('.headerBG');
if (localStorage.getItem('language') == 'en') {
    RedirectOnStart.innerHTML = "On the start";
    PageText.innerHTML = "In developing";
    PageText.style.marginLeft = "830px";
} else if (localStorage.getItem('language') == 'ru') {
    RedirectOnStart.innerHTML = "На главную";
    PageText.style.marginLeft = "830px";
    PageText.innerHTML = "В разработке";
}

if (localStorage.getItem('theme') == 'light') {
    Body.style.backgroundColor = "rgb(255, 255, 255)";
    Body.style.color = "rgb(0, 0, 0)";
    headerBG.src = "/images/light-icon/header/header-bg.png";
} else if (localStorage.getItem('theme') == 'dark') {
    Body.style.backgroundColor = "rgb(31, 28, 28)";
    text.forEach(Element => {
        Element.style.color = "rgb(255, 255, 255)";
    });
    headerBG.src = "/images/dark-icon/header/header-bg.png";
}