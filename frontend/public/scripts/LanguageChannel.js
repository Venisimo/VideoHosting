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
    const StrAddVideo = document.querySelector('.str-add-video');
    const LinksStr = document.querySelector('.links-str');
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
            ProfileStr.style.paddingLeft = "20px";
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
        
        BtnChannelEdit.innerHTML = "Edit";

        if (StrAddVideo !== null) {
            StrAddVideo.innerHTML = "Add video";
            StrAddVideo.style.marginLeft = "65px";
            UploadVideoButton.innerHTML = "Upload video";
            UploadPreviewButton.innerHTML = "Upload preview";

            PopupVideoName.innerHTML = "Name video:";
            PopupVideoDes.innerHTML = "Description:";
            TextAreaDesVideo.style.marginLeft = "28px";
            BtnPublic.innerHTML = "Publish";

            SuccesLogVideo.innerHTML = "Video uploaded successfully!";
        }

        SuccesLogProfile.innerHTML = "The profile has been configured successfully!";
        ModalVideoId.style.width = "660px";

        linkVideo.innerHTML = "Video";
        linkSubs.innerHTML = "Subscriptions";
        linkAbout.innerHTML = "About";
        
        PopupNameStr.innerHTML = "Nickname:";
        InputName.style.marginLeft = "30px";
        PopupDesStrId.innerHTML = "Description:";
        PopupLinkStr.innerHTML = "Links:";
        BtnSave.innerHTML = "Save";

        if (DbcStr !== null) {
            DbcStr.innerHTML = "Description:";
            LinksStr.innerHTML = "Links:";
            StatisticStr.innerHTML = "Statistic:";
            RegStr.innerHTML = "Registration:";
            ViewsStr.innerHTML = "Views:";
            VideosStr.innerHTML = "Videos:";
        }

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
        
        if (StrAddVideo !== null) {
            StrAddVideo.innerHTML = "Добавить видео";
            StrAddVideo.style.marginLeft = "25px";
            UploadVideoButton.innerHTML = "Загрузить видео";
            UploadPreviewButton.innerHTML = "Загрузить превью";

            PopupVideoName.innerHTML = "Название:"
            PopupVideoDes.innerHTML = "Описание:";
            TextAreaDesVideo.style.marginLeft = "15px";
            BtnPublic.innerHTML = "Опубликовать";
            SuccesLogVideo.innerHTML = "Видео загружено успешно!";
        }
        
        SuccesLogProfile.innerHTML = "Профиль настроен успешно!";    
        ModalVideoId.style.width = "550px";

        BtnChannelEdit.innerHTML = "Изменить";

        linkVideo.innerHTML = "Видео";
        linkSubs.innerHTML = "Подписки";
        linkAbout.innerHTML = "Описание";

        PopupNameStr.innerHTML = "Никнейм:";
        InputName.style.marginLeft = "20px";
        PopupDesStrId.innerHTML = "Описание:";
        PopupLinkStr.innerHTML = "Ссылки:";

        BtnSave.innerHTML = "Сохранить";

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