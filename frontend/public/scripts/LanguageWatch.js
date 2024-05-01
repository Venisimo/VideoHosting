Language.addEventListener('click', function() {
    let likeElement = NumLike.nextElementSibling;
    if (rus) {
        if (likeElement.innerHTML == "млн") {
            likeElement.innerHTML = "mln";
        } else if (likeElement.innerHTML == "тыс") {
            likeElement.innerHTML = "k";
            NumLike.style.marginRight = "0px";
        } else if (likeElement.innerHTML == "млрд") {
            likeElement.innerHTML = "bln";
        }
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

        SortCommentBlock.style.marginLeft = "250px";
        ProfileStr.style.paddingLeft = "20px";
        HistoryViewsStr.style.paddingLeft = "20px"
        MessageStr.style.marginLeft = "10px";
        SubscribeBtn.style.marginLeft = "60px";
        SortCommentButton.style.width = "230px";

        BtnTopComment.innerHTML = "Top comments";
        BtnNewComment.innerHTML = "New comments";

        SubscribeBtn.innerHTML = "Subscribe";
        StrComment.innerHTML = "Comments";
        SortByStrWatch.innerHTML = "Sort by";
        BtnCancel.innerHTML = "Cancel";
        BtnSumbit.innerHTML = "Send";
        CommentText.placeholder = "Add a comment";

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
        if (likeElement.innerHTML == "mln") {
            likeElement.innerHTML = "млн";
        } else if (likeElement.innerHTML == "k") {
            likeElement.innerHTML = "тыс";
            NumLike.style.marginRight = "5px";
        } else if (likeElement.innerHTML == "bln") {
            likeElement.innerHTML = "млрд";
        } else {
            likeElement.innerHTML = "";
        }
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

        SortCommentBlock.style.marginLeft = "330px";
        ProfileStr.style.paddingLeft = "0px";
        HistoryViewsStr.style.paddingLeft = "0px"
        MessageStr.style.marginLeft = "3px";
        SubscribeBtn.style.marginLeft = "20px";
        SortCommentButton.style.width = "310px";

        BtnTopComment.innerHTML = "Сначала популярные";
        BtnNewComment.innerHTML = "Сначала новые";

        SubscribeBtn.innerHTML = "Подписаться";
        StrComment.innerHTML = "Комментарии";
        SortByStrWatch.innerHTML = "Упорядочить";
        BtnCancel.innerHTML = "Отмена";
        BtnSumbit.innerHTML = "Отправить";
        CommentText.placeholder = "Введите комментарий";

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