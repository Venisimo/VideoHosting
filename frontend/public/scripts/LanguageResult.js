Language.addEventListener('click', function() {
    if (rus) {
        Subs.forEach(element => {
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

        FiltersStr.innerHTML = "FILTERS";
        UploadDateStr.innerHTML = "UPLOAD DATE";
        LastHour.innerHTML = "Last hour";
        Today.innerHTML = "Today";
        Week.innerHTML = "This week";
        Month.innerHTML = "This month";
        Year.innerHTML = "This year";
        TypeStr.innerHTML = "TYPE";
        VideoFilter.innerHTML = "Video";
        ChannelFilter.innerHTML = "Channels";
        PlaylistFilter.innerHTML = "Playlists";
        DurationStr.innerHTML = "Duration";
        LessFiveMinutes.innerHTML = "Under 5 minutes";
        FiveTwentyMinutes.innerHTML = "5 - 20 minutes";
        MoreTwentyMinutes.innerHTML = "Over 20 minutes";
        SortByStr.innerHTML = "SORT BY";
        Relevance.innerHTML = "Relevance";
        UploadDateFilter.innerHTML = "Upload date";
        NumOfViews.innerHTML = "Views count";
        Rating.innerHTML = "Rating";

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
        Subs.forEach(element => {
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

        FiltersStr.innerHTML = "ФИЛЬТРЫ";
        UploadDateStr.innerHTML = "ПО ДАТЕ";
        LastHour.innerHTML = "За последний час";
        Today.innerHTML = "Сегодня";
        Week.innerHTML = "За эту неделю";
        Month.innerHTML = "За этот месяц";
        Year.innerHTML = "За этот год";
        TypeStr.innerHTML = "ТИП";
        VideoFilter.innerHTML = "Видео";
        ChannelFilter.innerHTML = "Каналы";
        PlaylistFilter.innerHTML = "Плейлисты";
        DurationStr.innerHTML = "ДЛИТЕЛЬНОСТЬ";
        LessFiveMinutes.innerHTML = "Менее 5 минут";
        FiveTwentyMinutes.innerHTML = "От 5 до 20 минут";
        MoreTwentyMinutes.innerHTML = "Более 20 минут";
        SortByStr.innerHTML = "Упорядочить";
        Relevance.innerHTML = "По релевантности";
        UploadDateFilter.innerHTML = "По дате загрузки";
        NumOfViews.innerHTML = "По числу просмотров";
        Rating.innerHTML = "По рейтингу";

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