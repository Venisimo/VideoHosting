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
    const InputSearch = document.querySelector(".input-search");
    const HomeButton = document.querySelector(".home-button");
    const SubStr = document.querySelector("#sub-str");
    const Views = document.querySelectorAll('.views');
    const profileIconRightMenu = document.querySelector('#profileIconRightMenu');
    const MyProfileStr = document.querySelector('.my-profile-str');
    const LanguageStr = document.querySelector('.language-str');
    const ThemeStr = document.querySelector('.theme-str');
    const DocumentationStr = document.querySelector('.documentation-str');
    const SettingsStr = document.querySelector('.settings-str');
    const ExitStr = document.querySelector('.exit-str');
    const ProfileStr = document.querySelector('.profile-str');
    const MessageStr = document.querySelector('.message-str');
    const HistoryViewsStr = document.querySelector('.history-views-str');
    const Subs = document.querySelectorAll('.subs');
    const CommentText = document.querySelector('.comment-text');
    const BtnSumbit = document.querySelector('.btn-submit');
    const BtnCancel = document.querySelector('.btn-cancel');
    const SubscribeBtn = document.querySelector('.subscribe-btn');
    const NumLike = document.querySelector('.num-like');
    const StrComment = document.querySelector(".str-comment");
    const SortByStrWatch = document.querySelector(".sort-by-str-watch");
    const SortCommentButton = document.querySelector(".sort-comment-btn");
    const SortCommentBlock = document.querySelector(".sort-comment-block");
    const BtnTopComment = document.querySelector(".btn-top-comment");
    const BtnNewComment = document.querySelector(".btn-new-comment");
    const ShowDes = document.querySelector(".show-des");
    const BtnAnswers = document.querySelectorAll(".btn-answer");
    const CommentTextAnswers = document.querySelectorAll(".comment-text-answer");
    const BtnCancelAnswer = document.querySelectorAll(".btn-cancel-answer");
    const BtnSubmitAnswer = document.querySelectorAll(".btn-submit-answer");
    const DeleteComment = document.querySelectorAll(".Delete-Comment");
    const DeleteAnswer = document.querySelectorAll(".Answer-Comment");
    const BtnAnswersList = document.querySelectorAll(".btn-answers");
    const AnswersSummaryIcon = document.querySelectorAll(".answers-summary-icon");
    const BtnAnswersListStr = document.querySelectorAll(".btn-answers-str");
    let likeElement = NumLike.nextElementSibling;
    if (localStorage.getItem('language') == "en") {
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
            if (ProfileStr.innerHTML == "Мой профиль") {
                ProfileStr.innerHTML = "My profile";
                ProfileStr.style.paddingLeft = "20px";
            } else if (ProfileStr.innerHTML == "Вход") {
                ProfileStr.innerHTML = "Login";
                ProfileStr.style.paddingLeft = "0px";
            }
            MessageStr.innerHTML = "Messenger";
            HistoryViewsStr.innerHTML = "Views<br>history";
            if (SubStr !== null) {
                SubStr.innerHTML = "Subscriptions";
            }            
        } else {
            ProfileStr.innerHTML = "";
            MessageStr.innerHTML = "";
            HomeButton.innerHTML = "";
            HistoryViewsStr.innerHTML = "";
            SubStr.innerHTML = "";
        }

        BtnAnswers.forEach(element => {
            element.innerHTML = "Reply"
        })
        DeleteAnswer.forEach(element => {
            element.innerHTML = "Delete"
        })
        DeleteComment.forEach(element => {
            element.innerHTML = "Delete"
        })
        BtnAnswersListStr.forEach(element => {
            element.innerHTML = "Replies"
        })
        BtnCancelAnswer.forEach(element => {
            element.innerHTML = "Cancel"
        })
        BtnSubmitAnswer.forEach(element => {
            element.innerHTML = "Reply"
        })

        SortCommentBlock.style.marginLeft = "250px";
        HistoryViewsStr.style.paddingLeft = "20px"
        MessageStr.style.marginLeft = "10px";
        SortCommentButton.style.width = "230px";

        BtnTopComment.innerHTML = "Top comments";
        BtnNewComment.innerHTML = "New comments";

        StrComment.innerHTML = "Comments";
        SortByStrWatch.innerHTML = "Sort by";
        BtnCancel.innerHTML = "Cancel";
        BtnSumbit.innerHTML = "Send";
        CommentText.placeholder = "Add a comment";
        CommentTextAnswers.forEach(element => {
            element.placeholder = "Add a comment";
        })

        if (SubscribeBtn.innerHTML == "Отписаться") {
            SubscribeBtn.innerHTML = "Unsubscribe";
        } else if (SubscribeBtn.innerHTML == "Подписаться") {
            SubscribeBtn.innerHTML = "Subscribe";
        } else if (SubscribeBtn.innerHTML == "Удалить") {
            SubscribeBtn.innerHTML = "Delete"
        };
        if (MyProfileStr !== null) {
            MyProfileStr.innerHTML = "My profile";
        }
        LanguageStr.innerHTML = "Language";
        ThemeStr.innerHTML = "Theme";
        DocumentationStr.innerHTML = "Help";
        SettingsStr.innerHTML = "Settings";
        if (ExitStr.innerHTML == "Выйти") {
            ExitStr.innerHTML = "Logout";
        } else if (ExitStr.innerHTML == "Войти") {
            ExitStr.innerHTML = "Login";
        }
        if (profileIconRightMenu !== null) {
            profileIconRightMenu.innerHTML = "My profile";
        }
        InputSearch.placeholder = "Search...";

        if (!boolShowDes) {
            ShowDes.innerHTML = "Show description";
        } else {
            ShowDes.innerHTML = "Hide description";
        }
        if (ModalWindow !== null) {
            ReqLog.innerHTML = "You must be logged in to use this feature";
            BtnOK.innerHTML = "Login";
            btnCancel.innerHTML = "Cancel";
            ModalWindow.style.height = "160px";
        }

    } else if (localStorage.getItem('language') == "ru") {
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
            if (ProfileStr.innerHTML == "My profile") {
                ProfileStr.innerHTML = "Мой профиль";
            } else if (ProfileStr.innerHTML == "Login") {
                ProfileStr.innerHTML = "Вход";
            }
            MessageStr.innerHTML = "Сообщения";
            HomeButton.innerHTML = "Главная";
            HistoryViewsStr.innerHTML = "История просмотров";
            if (SubStr !== null) {
                SubStr.innerHTML = "Подписки";
            } 
        } else {
            ProfileStr.innerHTML = "";
            MessageStr.innerHTML = "";
            HomeButton.innerHTML = "";
            HistoryViewsStr.innerHTML = "";
            SubStr.innerHTML = "";
        }

        BtnAnswers.forEach(element => {
            element.innerHTML = "Ответить"
        })
        DeleteAnswer.forEach(element => {
            element.innerHTML = "Удалить"
        })
        DeleteComment.forEach(element => {
            element.innerHTML = "Удалить"
        })
        BtnAnswersListStr.forEach(element => {
            element.innerHTML = "Ответы"
        })
        BtnCancelAnswer.forEach(element => {
            element.innerHTML = "Назад"
        })
        BtnSubmitAnswer.forEach(element => {
            element.innerHTML = "Ответить"
        })

        SortCommentBlock.style.marginLeft = "330px";
        HistoryViewsStr.style.paddingLeft = "0px"
        MessageStr.style.marginLeft = "3px";
        SubscribeBtn.style.marginLeft = "20px";
        SortCommentButton.style.width = "310px";

        BtnTopComment.innerHTML = "Сначала популярные";
        BtnNewComment.innerHTML = "Сначала новые";

        StrComment.innerHTML = "Комментарии";
        SortByStrWatch.innerHTML = "Упорядочить";
        BtnCancel.innerHTML = "Отмена";
        BtnSumbit.innerHTML = "Отправить";
        CommentText.placeholder = "Введите комментарий";
        CommentTextAnswers.forEach(element => {
            element.placeholder = "Введите комментарий";
        })

        if (SubscribeBtn.innerHTML == "Unsubscribe") {
            SubscribeBtn.innerHTML = "Отписаться";
        } else if (SubscribeBtn.innerHTML == "Subscribe") {
            SubscribeBtn.innerHTML = "Подписаться";
        } else if (SubscribeBtn.innerHTML == "Delete") {
            SubscribeBtn.innerHTML = "Удалить"
        };;
        if (MyProfileStr !== null) {
            MyProfileStr.innerHTML = "Мой профиль";
        }
        LanguageStr.innerHTML = "Язык";
        ThemeStr.innerHTML = "Тема";
        DocumentationStr.innerHTML = "Справка";
        SettingsStr.innerHTML = "Настройки";
        if (ExitStr.innerHTML == "Logout") {
            ExitStr.innerHTML = "Выйти";
        } else if (ExitStr.innerHTML == "Login") {
            ExitStr.innerHTML = "Войти";
        }
        if (profileIconRightMenu !== null) {
            profileIconRightMenu.innerHTML = "Мой профиль";
        }
        InputSearch.placeholder = "Поиск...";

        if (!boolShowDes) {
            ShowDes.innerHTML = "Показать описание";
        } else {
            ShowDes.innerHTML = "Скрыть описание";
        }

        if (ModalWindow !== null) {
            ReqLog.innerHTML = "Чтобы пользоваться данной функцией нужно войти в систему";
            btnCancel.innerHTML = "Назад";
            BtnOK.innerHTML = "Войти";
            ModalWindow.style.height = "200px";
        } 
    }
}