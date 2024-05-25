Language.addEventListener('click', function() {
    if (localStorage.getItem('language') == "ru") {
        localStorage.setItem('language', "en");
        ChekLanguage();
    } else if (localStorage.getItem('language') == "en") {
        localStorage.setItem('language', "ru");
        ChekLanguage();
    }
});
function ChekLanguage() {
    console.log(ProfileStr.innerHTML)
    if (localStorage.getItem('language') == "en") {
        Views.forEach(element => {
            let numElement = element.previousElementSibling;
    
            if (element.innerHTML == "млн") {
                element.innerHTML = "mln";
            } else if (element.innerHTML == "тыс") {
                element.innerHTML = "k";
                numElement.style.marginRight = "0px";
            } else if (element.innerHTML == "млрд") {
                element.innerHTML = "bln";
            }
        });
        if (localStorage.getItem('Burger') == "off") {
            HomeButton.innerHTML = "Home";
            if (ProfileStr.innerHTML == "Мой профиль") {
                ProfileStr.innerHTML = "My profile";
                ProfileStr.style.paddingLeft = "20px";
            } else if (ProfileStr.innerHTML == "Вход") {
                ProfileStr.innerHTML = "Login";
                ProfileStr.style.paddingLeft = "0px";
            }
            MessageStr.innerHTML = "Messenger";
            HistoryViewsStr.innerHTML = "Views<br>history";
            SubStr.innerHTML = "Subscriptions";
        } else if (localStorage.getItem('Burger') == "on") {
            ProfileStr.innerHTML = "";
            MessageStr.innerHTML = "";
            HomeButton.innerHTML = "";
            HistoryViewsStr.innerHTML = "";
            SubStr.innerHTML = "";
        }
        HistoryViewsStr.style.paddingLeft = "20px"
        MessageStr.style.marginLeft = "10px";
        MyProfileStr.innerHTML = "My profile";
        LanguageStr.innerHTML = "Language";
        ThemeStr.innerHTML = "Theme";
        DocumentationStr.innerHTML = "Help";
        SettingsStr.innerHTML = "Settings";
        if (ExitStr.innerHTML == "Выйти") {
            ExitStr.innerHTML = "Logout";
        } else if (ExitStr.innerHTML == "Войти") {
            ExitStr.innerHTML = "Login";
        }
        profileIconRightMenu.innerHTML = "My profile";
        InputSearch.placeholder = "Search...";
    } else if (localStorage.getItem('language') == "ru") {
        Views.forEach(element => {
            let numElement = element.previousElementSibling;
            if (element.innerHTML == "mln") {
                element.innerHTML = "млн";
            } else if (element.innerHTML == "k") {
                element.innerHTML = "тыс";
                numElement.style.marginRight = "5px";
            } else if (element.innerHTML == "bln") {
                element.innerHTML = "млрд";
            } else {
                element.innerHTML = "";
            }
        });
        if (localStorage.getItem('Burger') == "off") {
            if (ProfileStr.innerHTML == "My profile") {
                ProfileStr.innerHTML = "Мой профиль";
            } else if (ProfileStr.innerHTML == "Login") {
                ProfileStr.innerHTML = "Вход";
            }
            MessageStr.innerHTML = "Сообщения";
            HomeButton.innerHTML = "Главная";
            HistoryViewsStr.innerHTML = "История просмотров";
            SubStr.innerHTML = "Подписки";
        } else if (localStorage.getItem('Burger') == "on") {
            ProfileStr.innerHTML = "";
            MessageStr.innerHTML = "";
            HomeButton.innerHTML = "";
            HistoryViewsStr.innerHTML = "";
            SubStr.innerHTML = "";
        }
        ProfileStr.style.paddingLeft = "0px";
        HistoryViewsStr.style.paddingLeft = "0px"
        MessageStr.style.marginLeft = "3px";
        MyProfileStr.innerHTML = "Мой профиль";
        LanguageStr.innerHTML = "Язык";
        ThemeStr.innerHTML = "Тема";
        DocumentationStr.innerHTML = "Справка";
        SettingsStr.innerHTML = "Настройки";
        if (ExitStr.innerHTML == "Logout") {
            ExitStr.innerHTML = "Выйти";
        } else if (ExitStr.innerHTML == "Login") {
            ExitStr.innerHTML = "Войти";
        }
        profileIconRightMenu.innerHTML = "Мой профиль";
        InputSearch.placeholder = "Поиск...";
        localStorage.setItem('language', "ru");
    }
}
ChekLanguage();