Language.addEventListener('click', function() {
    if (rus) {
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
        if (boolBurgerMenu) {
            HomeButton.innerHTML = "Home";
            ProfileStr.innerHTML = "My profile";
            MessageStr.innerHTML = "Messenger";
            HistoryViewsStr.innerHTML = "Views<br>history";
            SubStr.innerHTML = "Subscriptions";
        } else {
            ProfileStr.innerHTML = "";
            MessageStr.innerHTML = "";
            HomeButton.innerHTML = "";
            HistoryViewsStr.innerHTML = "";
            SubStr.innerHTML = "";
        }
        ProfileStr.style.paddingLeft = "20px";
        HistoryViewsStr.style.paddingLeft = "20px"
        MessageStr.style.marginLeft = "10px";
        MyProfileStr.innerHTML = "My profile";
        LanguageStr.innerHTML = "Language";
        ThemeStr.innerHTML = "Theme";
        DocumentationStr.innerHTML = "Help";
        SettingsStr.innerHTML = "Settings";
        ExitStr.innerHTML = "Exit";
        profileIconRightMenu.innerHTML = "My profile";
        InputSearch.placeholder = "Search...";
        rus = false;
    } else {
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
        if (boolBurgerMenu) {
            ProfileStr.innerHTML = "Мой профиль";
            MessageStr.innerHTML = "Сообщения";
            HomeButton.innerHTML = "Главная";
            HistoryViewsStr.innerHTML = "История просмотров";
            SubStr.innerHTML = "Подписки";
        } else {
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
        ExitStr.innerHTML = "Выйти";
        profileIconRightMenu.innerHTML = "Мой профиль";
        InputSearch.placeholder = "Поиск...";
        rus = true
    }
});