BurgerMenu.addEventListener('click', function() {
    if (localStorage.getItem('Burger') == "off") {
        localStorage.setItem('Burger', "on");
        chekBurgerMenu();
    } else if (localStorage.getItem('Burger') == "on") {
        localStorage.setItem('Burger', "off");
        chekBurgerMenu();
    }
});

function chekBurgerMenu() {
    const LeftMenu = document.querySelector(".left-menu");
    const HomeButton = document.querySelector(".home-button");
    const Profile = document.querySelector(".profile");
    const ProfileIcon = document.querySelector(".profile-icon");
    const Messenger = document.querySelector(".messenger");
    const MessengerIcon = document.querySelector(".message-icon");
    const HistoryViews = document.querySelector(".history-views");
    const HistoryViewsIcon = document.querySelector('.history-views-icon');
    const Sub = document.querySelector(".sub");
    const Users = document.querySelector(".users");
    const User = document.querySelectorAll(".user");
    const SubStr = document.querySelector("#sub-str");
    const Line = document.querySelectorAll('.line');
    const Preview = document.querySelectorAll('.preview');
    const Videos = document.querySelector('.videos');
    const ProfileStr = document.querySelector('.profile-str');
    const MessageStr = document.querySelector('.message-str');
    const HistoryViewsStr = document.querySelector('.history-views-str');
    const Footer = document.querySelector('.footer');
    const SubIconLeftMenu = document.querySelector('#sub-icon-for-leftMenu');
    if (localStorage.getItem('Burger') == "on") {
        ProfileStr.classList.add('bg-on');
        MessageStr.classList.add('bg-on');
        HistoryViewsStr.classList.add('bg-on');
        if (Sub !== null) {
            SubStr.classList.add('bg-on');
            Sub.classList.add('bg-on2');
            Sub.classList.add('bg-on2');
            Sub.style.marginTop = "7px";
            Sub.style.marginLeft = "15px";
            SubIconLeftMenu.style.paddingLeft = "15px";
            Sub.style.width = "60px";
            Sub.style.height = "35px";  
            SubStr.innerHTML = "";
        } 
        HomeButton.innerHTML = "";
        MessageStr.innerHTML = "";
        ProfileStr.innerHTML = "";
        User.forEach(element => {
            element.classList.add('bg-on');
        });
        Line.forEach(element => {
            element.classList.add('bg-on');
        });
        Footer.classList.add('bg-on');
        Footer.innerHTML = "";
        Preview.forEach(element => {
            element.style.width = "400px";
            element.style.height = "300px";
        });
        HomeButton.innerHTML = "";
        HomeButton.style.backgroundPosition = "center";
        HomeButton.style.width = "60px";
        HomeButton.style.height = "35px";
        
        Profile.style.marginTop = "7px";
        Messenger.style.marginTop = "7px";
        HistoryViews.style.marginTop = "7px";
        
        Line.forEach(element => {
            element.style.width = "0px";
        });
        LeftMenu.style.width = "80px";
        Users.style.width = "0px";
        User.forEach(element => {
            element.style.width = "0px";
            element.style.height = "0px";
        });
        if (token) {
            ProfileIcon.style.paddingLeft = "6px";
        } else {
            ProfileIcon.style.paddingLeft = "10px";
            ProfileIcon.style.paddingTop = "2px";
        }
        Profile.style.paddingTop = "5px"
        MessengerIcon.style.paddingLeft = "5px";
        Messenger.style.paddingTop = "5px";
        HistoryViewsIcon.style.paddingTop = "2px";
        HistoryViewsIcon.style.paddingLeft = "3px";
        HistoryViews.style.paddingTop = "1px";
        Profile.style.width = "60px";
        Profile.style.height = "35px";
        Messenger.style.width = "60px";
        Messenger.style.height = "35px";
        HistoryViews.style.width = "60px";
        HistoryViews.style.height = "35px";

        Videos.style.marginLeft = "120px";
    } else if (localStorage.getItem('Burger') == "off") {
        ProfileStr.classList.remove('bg-on');
        MessageStr.classList.remove('bg-on');
        HistoryViewsStr.classList.remove('bg-on');
        if (Sub !== null) {
            SubStr.classList.remove('bg-on');
            Sub.classList.remove('bg-on2');
            Sub.style.marginTop = "20px";
            Sub.style.marginLeft = "10px";
            SubIconLeftMenu.style.paddingLeft = "0px";
            Sub.style.width = "200px";
            Sub.style.height = "25px";
            if (localStorage.getItem('language') == "ru") {
                SubStr.innerHTML = "Подписки";
            } else if (localStorage.getItem('language') == "en") {
                SubStr.innerHTML = "Subscriptions";
            }
        } 
        User.forEach(element => {
            element.classList.remove('bg-on');
        });
        Line.forEach(element => {
            element.classList.remove('bg-on');
        });
        Footer.classList.remove('bg-on');
        Preview.forEach(element => {
            element.style.width = "360px";
            element.style.height = "250px";
        });
        if (localStorage.getItem('language') == "ru") {
            HomeButton.innerHTML = "Главная";
            MessageStr.innerHTML = "Сообщения";
            Profile.style.paddingTop = "10px";
            if (token) {
                ProfileStr.innerHTML = "Мой профиль";
                ProfileIcon.style.paddingLeft = "0px";
                ProfileIcon.style.paddingTop = "1px";
            } else {
                ProfileIcon.style.paddingLeft = "45px";
                ProfileIcon.style.paddingTop = "3px";
                ProfileStr.innerHTML = "Вход";
            }  
            HistoryViewsStr.innerHTML = "История просмотров";
        } else if (localStorage.getItem('language') == "en") {
            HomeButton.innerHTML = "Home";
            Profile.style.paddingTop = "10px";
            if (token) {
                ProfileStr.innerHTML = "My profile";
                ProfileIcon.style.paddingLeft = "0px";
                ProfileIcon.style.paddingTop = "1px";
            } else {
                ProfileIcon.style.paddingLeft = "45px";
                ProfileIcon.style.paddingTop = "3px";
                ProfileStr.innerHTML = "Login";
            }         
            MessageStr.innerHTML = "Messenger";
            HistoryViewsStr.innerHTML = "Views<br>history";
        }
        
        HomeButton.style.backgroundPosition = "35px";
        HomeButton.style.width = "230px";
        HomeButton.style.height = "50px";
        LeftMenu.style.width = "300px";
        Profile.style.marginTop = "14px";
        Messenger.style.marginTop = "14px";
        HistoryViews.style.marginTop = "14px";
        Users.style.width = "265px";
        User.forEach(element => {
            element.style.width = "265px";
            element.style.height = "65px";
        });

        MessengerIcon.style.paddingLeft = "0px";
        Messenger.style.paddingTop = "10px";
        HistoryViewsIcon.style.paddingTop = "15px";
        HistoryViewsIcon.style.paddingLeft = "0px";
        HistoryViews.style.paddingTop = "10px";
        
        Line.forEach(element => {
            element.style.width = "300px";
        });
        LeftMenu.style.width = "300px";

        Profile.style.width = "230px";
        Profile.style.height = "50px";
        Messenger.style.width = "230px";
        Messenger.style.height = "50px";
        HistoryViews.style.width = "230px";
        HistoryViews.style.height = "80px";

        Videos.style.marginLeft = "317px";
        Footer.innerHTML = "© 2024 Venisimo";
    }
  
};