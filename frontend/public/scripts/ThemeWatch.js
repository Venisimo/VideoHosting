Theme.addEventListener('click', function() {
    HomeButton.classList.toggle('dark');
    SortCommentButton.classList.toggle('dark');
    MyProfie.classList.toggle('dark2');
    Language.classList.toggle('dark2');
    Theme.classList.toggle('dark2');
    Documentation.classList.toggle('dark2');
    Settings.classList.toggle('dark2');
    Exit.classList.toggle('dark2');
    BurgerMenu.classList.toggle('dark2');
    InputSearch.classList.toggle('dark3');
    Lupa.classList.toggle('dark');
    Profile.classList.toggle('dark');
    Messenger.classList.toggle('dark');
    HistoryViews.classList.toggle('dark');
    SubscribeBtn.classList.toggle('dark4');
    SubscribeBtn.classList.toggle('dark');
    Repost.classList.toggle('dark');
    LikeBtn.classList.toggle('dark');
    DislikeBtn.classList.toggle('dark');
    BtnSumbit.classList.toggle('dark');
    BtnCancel.classList.toggle('dark');
    SortCommentBlock.classList.toggle('dark')
    BtnTopComment.classList.toggle('dark');
    BtnNewComment.classList.toggle('dark');
    User.forEach(element => {
        element.classList.toggle('dark');
    });
    if (!theme) {
        Body.style.background = '#FFFFFF';
        Header.style.background = '#4FF4D7';
        DescriptionEntry.style.background = '#4FF4D7';
        Preview.forEach(element => {
            element.style.background = '#4FF4D7';
        });
        DescriptionVideo.forEach(element => {
            element.style.color = '#000000';
        });
        ViewsIcon.forEach(element => {
            element.src = 'images/dark-icon/views.png';
        })
        RightMenu.style.backgroundColor = '#4FF4D7';
        RightMenu.style.color = '#000000';
        Sub.style.color  = '#000000';
        Users.style.color  = '#000000';
        Line.forEach(element => {
            element.style.backgroundColor = '#4FF4D7';
        })
        // HomeButton.style.backgroundColor = 'rgba(255, 255, 255, 1)';     
        MyProfie.style.color = '#000000';
        Language.style.color = '#000000';
        Theme.style.color = '#000000';
        Documentation.style.color = '#000000';
        Settings.style.color = '#000000';
        Exit.style.color = '#000000';
        
        BurgerMenuIcon.src = 'images/dark-icon/header/burger-menu.png';
        SubIcon.forEach(element => {
            element.src = 'images/dark-icon/menu/subscriptions.png';
        });
        HomeButton.style.color = '#000000';
        Profile.style.color = '#000000';
        Messenger.style.color = '#000000';
        HistoryViews.style.color = '#000000';
        BurgerMenu.src = 'images/dark-icon/header/burger-menu.png';
        InputSearch.style.backgroundColor = '#FFFFFF';
        InputSearch.style.color = '#000000';
        Lupa.src = 'images/dark-icon/header/lupaV3.png';
        Search.style.backgroundColor = '#FFFFFF';
        profileIconRightMenu.src = 'images/dark-icon/menu/profile.png';
        languageIconRightMenu.src = 'images/dark-icon/menu/language.png';
        themeIconRightMenu.src = 'images/dark-icon/menu/moon.png'
        documentationIconRightMenu.src = 'images/dark-icon/menu/documentation.png';
        settingsIconRightMenu.src = 'images/dark-icon/menu/settings.png';
        exitIconRightMenu.src = 'images/dark-icon/menu/log-out.png';
        ProfileIcon.src = 'images/dark-icon/menu/profile.png';
        MessengerIcon.src = 'images/dark-icon/menu/message.png';
        HistoryViewsIcon.src = 'images/dark-icon/menu/history.png';
        SortCommentIcon.src = 'images/dark-icon/videoplayer/comment-icon.png';
        ChannelResult.forEach(element => {
            element.style.color = '#000000';
        });
        FiltersTitle.forEach(element => {
            element.style.color = '#000000';
        });
        DescriptionChannel.forEach(element => {
            element.style.color = '#606060';
        });
        CommentEntry.forEach(element => {
            element.style.color = '#000000';
        });

        LeftMenu.style.backgroundColor = '#ffffff';
        CommentText.style.backgroundColor = '#ffffff';
        CommentText.style.color = '#000000';
        SortCommentButton.style.color = '#000000';
        CommentBlock.style.color = '#000000';
        DescriptionEntry.style.color = '#000000';
        VideoName.style.color = '#000000';
        NameSub.style.color = '#000000';
        NumLike.style.color = '#000000';
        NumDislike.style.color = '#000000';
        Likes.style.color = '#000000';
        Dislikes.style.color = '#000000';

        theme = true;
    } else {
        ProfileIcon.src = 'images/light-icon/menu/profile.png';
        MessengerIcon.src = 'images/light-icon/menu/message.png';
        HistoryViewsIcon.src = 'images/light-icon/menu/history.png';
        BurgerMenuIcon.src = 'images/light-icon/header/burger-menu.png';
        Body.style.background = '#1F1C1C';
        Header.style.background = '#030303';
        DescriptionEntry.style.background = '#030303';
        Preview.forEach(element => {
            element.style.background = '#030303';
        });
        DescriptionVideo.forEach(element => {
            element.style.color = '#ffffff';
        });
        ViewsIcon.forEach(element => {
            element.src = 'images/light-icon/views.png'
        });
        RightMenu.style.backgroundColor = '#030303';
        Sub.style.color  = '#ffffff';
        Users.style.color  = '#ffffff';
        Line.forEach(element => {
            element.style.backgroundColor = '#030303';
        });
        // HomeButton.style.backgroundColor = '#1F1C1C';
        MyProfie.style.color = '#ffffff';
        Language.style.color = '#ffffff';
        Theme.style.color = '#ffffff';
        Documentation.style.color = '#ffffff';
        Settings.style.color = '#ffffff';
        Exit.style.color = '#ffffff';
        SubIcon.forEach(element => {
            element.src = 'images/light-icon/menu/subscriptions.png';
        });
        HomeButton.style.color = '#ffffff';
        Profile.style.color = '#ffffff';
        Messenger.style.color = '#ffffff';
        HistoryViews.style.color = '#ffffff';
        BurgerMenu.src = 'images/light-icon/header/burger-menu.png';
        InputSearch.style.backgroundColor = '#1F1C1C';
        InputSearch.style.color = '#ffffff';
        Lupa.src = 'images/light-icon/header/lupaV3.png';
        Search.style.backgroundColor = '#1F1C1C';
        profileIconRightMenu.src = 'images/light-icon/menu/profile.png';
        languageIconRightMenu.src = 'images/light-icon/menu/language.png';
        themeIconRightMenu.src = 'images/light-icon/menu/sun.png'
        documentationIconRightMenu.src = 'images/light-icon/menu/documentation.png';
        settingsIconRightMenu.src = 'images/light-icon/menu/settings.png';
        exitIconRightMenu.src = 'images/light-icon/menu/log-out.png';
        SortCommentIcon.src = 'images/light-icon/videoplayer/comment-icon.png';
        ChannelResult.forEach(element => {
            element.style.color = '#ffffff';
        });
        FiltersTitle.forEach(element => {
            element.style.color = '#ffffff';
        });
        DescriptionChannel.forEach(element => {
            element.style.color = '#4FF4D7';
        }); 
        CommentEntry.forEach(element => {
            element.style.color = '#FFFFFF'
        });

        LeftMenu.style.backgroundColor = '#1F1C1C';
        CommentText.style.backgroundColor = '#1F1C1C';
        CommentText.style.color = '#ffffff';
        SortCommentButton.style.color = '#ffffff';
        CommentBlock.style.color = '#ffffff';
        DescriptionEntry.style.color = '#ffffff';
        VideoName.style.color = '#ffffff';
        NameSub.style.color = '#ffffff';
        NumLike.style.color = '#ffffff';
        NumDislike.style.color = '#ffffff';
        Likes.style.color = '#ffffff';
        Dislikes.style.color = '#ffffff';

        theme = false;
    }
})