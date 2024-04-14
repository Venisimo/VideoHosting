BurgerMenu.addEventListener('click', function() {
    ProfileStr.classList.toggle('bg-on');
    MessageStr.classList.toggle('bg-on');
    HistoryViewsStr.classList.toggle('bg-on');
    SubStr.classList.toggle('bg-on');
    LineChannel.classList.toggle('bg-on2');
    User.forEach(element => {
        element.classList.toggle('bg-on');
    });
    Line.forEach(element => {
        element.classList.toggle('bg-on');
    });
    Footer.classList.toggle('bg-on');
    Sub.classList.toggle('bg-on2');
    console.log(Sub.classList.contains('bg-on2') && Profile.classList.contains('dark'));
    if (Sub.classList.contains('bg-on2') && Profile.classList.contains('dark')) {
        Sub.classList.add('dark');
    } else {
        Sub.classList.remove('dark');
    }
    if (boolBurgerMenu == true) {
        boolBurgerMenu = false;
    } else {
        boolBurgerMenu = true
    }
    
    if (!boolBurgerMenu) {
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
        Sub.style.marginTop = "7px";
        
        Line.forEach(element => {
            element.style.width = "0px";
        });
        LeftMenu.style.width = "80px";
        Sub.style.width = "20px";
        Users.style.width = "0px";
        User.forEach(element => {
            element.style.width = "0px";
            element.style.height = "0px";
        });

        ProfileIcon.style.paddingLeft = "6px";
        Profile.style.paddingTop = "5px"
        MessengerIcon.style.paddingLeft = "5px";
        Messenger.style.paddingTop = "5px";
        HistoryViewsIcon.style.paddingTop = "2px";
        HistoryViewsIcon.style.paddingLeft = "3px";
        HistoryViews.style.paddingTop = "1px";
        Sub.style.marginLeft = "15px";
        SubIconLeftMenu.style.paddingLeft = "15px";

        Sub.style.width = "60px";
        Sub.style.height = "35px";  
        Profile.style.width = "60px";
        Profile.style.height = "35px";
        Messenger.style.width = "60px";
        Messenger.style.height = "35px";
        HistoryViews.style.width = "60px";
        HistoryViews.style.height = "35px";

        VideosChannel.forEach(element => {
            element.style.marginLeft = "150px";
        });
    } else {
        Preview.forEach(element => {
            element.style.width = "360px";
            element.style.height = "250px";
        });
        if (rus) {
            HomeButton.innerHTML = "Главная";
            MessageStr.innerHTML = "Сообщения";
            ProfileStr.innerHTML = "Мой профиль";
            HistoryViewsStr.innerHTML = "История просмотров";
            SubStr.innerHTML = "Подписки";
        } else {
            HomeButton.innerHTML = "Home";
            ProfileStr.innerHTML = "My profile";
            MessageStr.innerHTML = "Messenger";
            HistoryViewsStr.innerHTML = "Views<br>history";
            SubStr.innerHTML = "Subscriptions";
        }
        
        HomeButton.style.backgroundPosition = "35px";
        HomeButton.style.width = "230px";
        HomeButton.style.height = "50px";
        
        Profile.style.marginTop = "14px";
        Messenger.style.marginTop = "14px";
        HistoryViews.style.marginTop = "14px";
        Sub.style.marginTop = "20px";
        Users.style.width = "265px";
        User.forEach(element => {
            element.style.width = "265px";
            element.style.height = "65px";
        });

        ProfileIcon.style.paddingLeft = "0px";
        ProfileIcon.style.paddingTop = "1px";
        Profile.style.paddingTop = "10px";
        MessengerIcon.style.paddingLeft = "0px";
        Messenger.style.paddingTop = "10px";
        HistoryViewsIcon.style.paddingTop = "15px";
        HistoryViewsIcon.style.paddingLeft = "0px";
        HistoryViews.style.paddingTop = "10px";
        Sub.style.marginLeft = "10px";
        SubIconLeftMenu.style.paddingLeft = "0px";
        
        Line.forEach(element => {
            element.style.width = "300px";
        });
        LeftMenu.style.width = "300px";
        Sub.style.width = "200px";
        Sub.style.height = "25px";

        Profile.style.width = "230px";
        Profile.style.height = "50px";
        Messenger.style.width = "230px";
        Messenger.style.height = "50px";
        HistoryViews.style.width = "230px";
        HistoryViews.style.height = "80px";

        VideosChannel.forEach(element => {
            element.style.marginLeft = "330px";
        });
    }  
});