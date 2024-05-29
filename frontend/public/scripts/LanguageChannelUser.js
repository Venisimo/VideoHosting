Language.addEventListener('click', function() {
    if (localStorage.getItem('language') == "ru") {
        localStorage.setItem('language', "en");
        if (BtnChannelEdit.innerHTML == "Подписаться") {
            BtnChannelEdit.innerHTML = "Subscribe";            
        } else if (BtnChannelEdit.innerHTML == "Отписаться") {
            BtnChannelEdit.innerHTML = "Unsubscribe"; 
        }
        ChekLanguage();
    } else if (localStorage.getItem('language') == "en") {
        localStorage.setItem('language', "ru");
        if (BtnChannelEdit.innerHTML == "Subscribe") {
            BtnChannelEdit.innerHTML = "Подписаться";            
        } else if (BtnChannelEdit.innerHTML == "Unsubscribe") {
            BtnChannelEdit.innerHTML = "Отписаться"; 
        }
        ChekLanguage();
    }
});
function ChekLanguage() {
    const DbcStr = document.querySelector('.dbc-str');
    const LinksStr = document.querySelector('.links-str');
    if (localStorage.getItem('language') == "en") {

        if (BtnChannelEdit.innerHTML == "Подписаться") {
            BtnChannelEdit.innerHTML = "Subscribe";            
        } else if (BtnChannelEdit.innerHTML == "Отписаться") {
            BtnChannelEdit.innerHTML = "Unsubscribe"; 
        }

        if (!token) {
            BtnChannelEdit.innerHTML = "Subscribe";
        }
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
            // ProfileStr.style.paddingLeft = "20px";
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
        if (ModalWindow !== null) {
            ReqLog.innerHTML = "You must be logged in to use this feature";
            btnLogin.innerHTML = "Login";
            btnCancel.innerHTML = "Cancel";
            ModalWindow.style.height = "160px";
        }

        VideosUrl.innerHTML = "Video";
        SubsUrl.innerHTML = "Subscriptions";
        AboutsUrl.innerHTML = "About";

        if (DbcStr !== null) {
            DbcStr.innerHTML = "Description:";
            LinksStr.innerHTML = "Links:";
            StatisticStr.innerHTML = "Statistic:";
            RegStr.innerHTML = "Registration:";
            ViewsStr.innerHTML = "Views:";
            VideosStr.innerHTML = "Videos:";
        }

    } else if (localStorage.getItem('language') == "ru") {
        if (!token) {
            BtnChannelEdit.innerHTML = "Подписаться";
        }

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
        if (ModalWindow !== null) {
            ReqLog.innerHTML = "Чтобы пользоваться данной функцией нужно войти в систему";
            btnCancel.innerHTML = "Назад";
            btnLogin.innerHTML = "Войти";
            ModalWindow.style.height = "200px";
        }
        
        VideosUrl.innerHTML = "Видео";
        SubsUrl.innerHTML = "Подписки";
        AboutsUrl.innerHTML = "Описание";

        if (DbcStr !== null) {
            DbcStr.innerHTML = "Описание:";
            LinksStr.innerHTML = "Ссылки:";
            StatisticStr.innerHTML = "Статистика:";
            RegStr.innerHTML = "Регистрация:";
            ViewsStr.innerHTML = "Просмотры:";
            VideosStr.innerHTML = "Видео:";
        }
    }
}
ChekLanguage();