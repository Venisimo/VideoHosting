Theme.addEventListener('click', function() {
    console.log(Sub.classList.contains('bg-on2') && Profile.classList.contains('dark'));
    if (Profile.classList.contains('dark')) {
        Body.style.background = '#FFFFFF';
        Header.style.background = '#4FF4D7';
        Preview.forEach(element => {
            element.style.background = '#4FF4D7';
        });
        DescriptionVideo.forEach(element => {
            element.style.color = '#000000';
        });
        ViewsIcon.forEach(element => {
            element.src = 'images/dark-icon/views.png'
        })
        RightMenu.style.backgroundColor = '#4FF4D7';
        RightMenu.style.color = '#000000';
        Sub.style.color  = '#000000';
        Users.style.color  = '#000000';
        Line.forEach(element => {
            element.style.backgroundColor = '#4FF4D7';
        })
        HomeButton.style.backgroundColor = '#4FF4D7';
        MyProfie.classList.remove('dark2');
        Language.classList.remove('dark2');
        Theme.classList.remove('dark2');
        Documentation.classList.remove('dark2');
        Settings.classList.remove('dark2');
        Exit.classList.remove('dark2');
        BurgerMenu.classList.remove('dark2');
        InputSearch.classList.remove('dark3');
        
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
        Lupa.classList.remove('dark');
        Profile.classList.remove('dark');
        ProfileIcon.src = 'images/dark-icon/menu/profile.png';
        Messenger.classList.remove('dark');
        MessengerIcon.src = 'images/dark-icon/menu/message.png';
        HistoryViews.classList.remove('dark');
        HistoryViewsIcon.src = 'images/dark-icon/menu/history.png';
        User.forEach(element => {
            element.classList.remove('dark');
        });
        Sub.classList.remove('dark');
        ChannelResult.forEach(element => {
            element.style.color = '#000000';
        });
        FiltersTitle.forEach(element => {
            element.style.color = '#000000';
        });
        DescriptionChannel.forEach(element => {
            element.style.color = '#606060';
        });
        Filter.forEach(element => {
            element.classList.remove('dark');
        });
        FilterIcon.src = 'images/dark-icon/filters/filters-icon.png';
        TypeIcon.src = 'images/dark-icon/filters/type.png';
        UploadDateIcon.src = 'images/dark-icon/filters/upload-date.png';
        DurationIcon.src = 'images/dark-icon/filters/duration.png';
        SortByIcon.src = 'images/dark-icon/filters/sort-by.png';  
    } else {
        ProfileIcon.src = 'images/light-icon/menu/profile.png';
        MessengerIcon.src = 'images/light-icon/menu/message.png';
        HistoryViewsIcon.src = 'images/light-icon/menu/history.png';
        BurgerMenuIcon.src = 'images/light-icon/header/burger-menu.png';
        Profile.classList.add('dark')
        Messenger.classList.add('dark');
        HistoryViews.classList.add('dark');
        // Sub.classList.add('dark');
        MyProfie.classList.add('dark2');
        Language.classList.add('dark2');
        Theme.classList.add('dark2');
        Documentation.classList.add('dark2');
        Settings.classList.add('dark2');
        Exit.classList.add('dark2');
        BurgerMenu.classList.add('dark2');
        InputSearch.classList.add('dark3');
        User.forEach(element => {
            element.classList.add('dark');
        });
        Lupa.classList.add('dark');
        Body.style.background = '#1F1C1C';
        Header.style.background = '#030303';
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
        HomeButton.style.backgroundColor = '#030303';
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
        ChannelResult.forEach(element => {
            element.style.color = '#ffffff';
        });
        FiltersTitle.forEach(element => {
            element.style.color = '#ffffff';
        });
        DescriptionChannel.forEach(element => {
            element.style.color = '#4FF4D7';
        });
        Filter.forEach(element => {
            element.classList.add('dark');
        });
        FilterIcon.src = 'images/light-icon/filters/filters-icon.png';
        TypeIcon.src = 'images/light-icon/filters/type.png';
        UploadDateIcon.src = 'images/light-icon/filters/upload-date.png';
        DurationIcon.src = 'images/light-icon/filters/duration.png';
        SortByIcon.src = 'images/light-icon/filters/sort-by.png';  
    }
})