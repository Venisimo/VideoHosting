Theme.addEventListener('click', function() {
    if (localStorage.getItem('theme') == "light") {
        localStorage.setItem('theme', "dark");
        checkTheme();
    } else if (localStorage.getItem('theme') == "dark") {
        localStorage.setItem('theme', "light");
        checkTheme();
    }
});
function checkTheme() {
    const HomeButton = document.querySelector(".home-button");
    const Profile = document.querySelector(".profile");
    const ProfileIcon = document.querySelector(".profile-icon");
    const Messenger = document.querySelector(".messenger");
    const MessengerIcon = document.querySelector(".message-icon");
    const HistoryViews = document.querySelector(".history-views");
    const HistoryViewsIcon = document.querySelector('.history-views-icon');
    const SubIcon = document.querySelectorAll(".sub-icon");
    const Sub = document.querySelector(".sub");
    const Users = document.querySelector(".users");
    const User = document.querySelectorAll(".user");
    const Line = document.querySelectorAll('.line');
    const Preview = document.querySelectorAll('.preview');
    const RightMenu = document.querySelector('.right-menu');
    const Theme = document.querySelector('.theme');
    const Language = document.querySelector('.language');
    const MyProfie = document.querySelector('.my-profile');
    const Documentation = document.querySelector('.documentation');
    const Settings = document.querySelector('.settings');
    const Exit = document.querySelector('.exit');
    const Body = document.querySelector('body');
    const Header = document.querySelector('header');
    const DescriptionVideo = document.querySelectorAll('.description-video');
    const Search = document.querySelector('.search');
    const Lupa = document.querySelector('.lupa');
    const ViewsIcon = document.querySelectorAll('.views-icon');
    const profileIconRightMenu = document.querySelector('#profileIconRightMenu');
    const languageIconRightMenu = document.querySelector('#languageIconRightMenu');
    const themeIconRightMenu = document.querySelector('#themeIconRightMenu');
    const documentationIconRightMenu = document.querySelector('#documentationIconRightMenu');
    const settingsIconRightMenu = document.querySelector('#settingsIconRightMenu');
    const exitIconRightMenu = document.querySelector('#exitIconRightMenu');
    const ChannelResult = document.querySelectorAll('.channel-result');
    const FiltersTitle = document.querySelectorAll('.filters-title');
    const FilterIcon = document.querySelector('#filter-icon')
    const TypeIcon = document.querySelector('#type');
    const UploadDateIcon = document.querySelector('#upload-date-icon');
    const DurationIcon = document.querySelector('#duration');
    const SortByIcon = document.querySelector('#sort-by');
    const DescriptionChannel = document.querySelectorAll('.description-channel');
    const Filter = document.querySelectorAll('.filter');
    const Channel = document.querySelectorAll('.channel');
    const NameChannelResult = document.querySelectorAll('.name-channel-result');
    if (localStorage.getItem('theme') == "light") {
        HomeButton.classList.remove('dark');
        if (MyProfie !== null) {
            MyProfie.classList.remove('dark2');
            MyProfie.style.color = '#000000';
            profileIconRightMenu.src = 'images/dark-icon/menu/profile.png';
        }
        Language.classList.remove('dark2');
        Theme.classList.remove('dark2');
        Documentation.classList.remove('dark2');
        Settings.classList.remove('dark2');
        Exit.classList.remove('dark2');
        BurgerMenu.classList.remove('dark2');
        InputSearch.classList.remove('dark3');
        Lupa.classList.remove('dark');
        Profile.classList.remove('dark');
        Messenger.classList.remove('dark');
        HistoryViews.classList.remove('dark');
        User.forEach(element => {
            element.classList.remove('dark');
            element.style.color = "#000000";
        });
        NameChannelResult.forEach(element => {
            element.style.color = "#000000";
        });
        Filter.forEach(element => {
            element.classList.remove('dark');
        });
        Channel.forEach(element => {
            element.style.color = "#000000"
        });
        Body.style.background = '#FFFFFF';
        Header.style.background = '#4FF4D7';
        Preview.forEach(element => {
            element.style.backgroundColor = '#4FF4D7';
        });
        DescriptionVideo.forEach(element => {
            element.style.color = '#000000';
        });
        ViewsIcon.forEach(element => {
            element.src = 'images/dark-icon/views.png'
        })
        RightMenu.style.backgroundColor = '#4FF4D7';
        RightMenu.style.color = '#000000';
        if (Sub !== null) {
            Sub.classList.remove('dark')
            Sub.style.color = '#000000';
        }
        Users.style.color  = '#000000';
        Line.forEach(element => {
            element.style.backgroundColor = '#4FF4D7';
        })
        // HomeButton.style.backgroundColor = 'rgba(255, 255, 255, 1)';     
        Language.style.color = '#000000';
        Theme.style.color = '#000000';
        Documentation.style.color = '#000000';
        Settings.style.color = '#000000';
        Exit.style.color = '#000000';
        
        BurgerMenuIcon.src = 'images/dark-icon/header/burger-menu.png';
        SubIcon.forEach(element => {
            element.src = 'images/dark-icon/menu/subscriptions.png';
        });
        if (token) {
            ProfileIcon.src = 'images/dark-icon/menu/profile.png'; 
        } else {
            ProfileIcon.src = 'images/dark-icon/menu/log-out.png';
        }
        HomeButton.style.color = '#000000';
        Profile.style.color = '#000000';
        Messenger.style.color = '#000000';
        HistoryViews.style.color = '#000000';
        BurgerMenu.src = 'images/dark-icon/header/burger-menu.png';
        InputSearch.style.backgroundColor = '#FFFFFF';
        InputSearch.style.color = '#000000';
        Lupa.src = 'images/dark-icon/header/lupaV3.png';
        Search.style.backgroundColor = '#FFFFFF';
        languageIconRightMenu.src = 'images/dark-icon/menu/language.png';
        themeIconRightMenu.src = 'images/dark-icon/menu/moon.png'
        documentationIconRightMenu.src = 'images/dark-icon/menu/documentation.png';
        settingsIconRightMenu.src = 'images/dark-icon/menu/settings.png';
        exitIconRightMenu.src = 'images/dark-icon/menu/log-out.png';
        MessengerIcon.src = 'images/dark-icon/menu/message.png';
        HistoryViewsIcon.src = 'images/dark-icon/menu/history.png';
        ChannelResult.forEach(element => {
            element.style.color = '#000000';
        });
        FiltersTitle.forEach(element => {
            element.style.color = '#000000';
        });
        DescriptionChannel.forEach(element => {
            element.style.color = '#606060';
        });
        FilterIcon.src = 'images/dark-icon/filters/filters-icon.png';
        TypeIcon.src = 'images/dark-icon/filters/type.png';
        UploadDateIcon.src = 'images/dark-icon/filters/upload-date.png';
        DurationIcon.src = 'images/dark-icon/filters/duration.png';
        SortByIcon.src = 'images/dark-icon/filters/sort-by.png';
        
    } else if (localStorage.getItem('theme') == "dark") {
        HomeButton.classList.add('dark');
        Language.classList.add('dark2');
        Theme.classList.add('dark2');
        Documentation.classList.add('dark2');
        Settings.classList.add('dark2');
        Exit.classList.add('dark2');
        BurgerMenu.classList.add('dark2');
        InputSearch.classList.add('dark3');
        Lupa.classList.add('dark');
        Profile.classList.add('dark');
        Messenger.classList.add('dark');
        HistoryViews.classList.add('dark');
        User.forEach(element => {
            element.classList.add('dark');
            element.style.color = "#ffffff";
        });
        NameChannelResult.forEach(element => {
            element.style.color = "#ffffff";
        });
        if (MyProfie !== null) {
            MyProfie.classList.add('dark2');
            MyProfie.style.color = '#ffffff';
            profileIconRightMenu.src = 'images/light-icon/menu/profile.png';
        }
        if (Sub !== null) {
            Sub.classList.add('dark')
            Sub.style.color = '#ffffff';
        }
        if (token) {
            ProfileIcon.src = 'images/light-icon/menu/profile.png'; 
        } else {
            ProfileIcon.src = 'images/light-icon/menu/log-out.png';
        }
        Filter.forEach(element => {
            element.classList.add('dark');
        });
        Channel.forEach(element => {
            element.style.color = "#ffffff"
        });
        MessengerIcon.src = 'images/light-icon/menu/message.png';
        HistoryViewsIcon.src = 'images/light-icon/menu/history.png';
        BurgerMenuIcon.src = 'images/light-icon/header/burger-menu.png';
        Body.style.background = '#1F1C1C';
        Header.style.background = '#030303';
        Preview.forEach(element => {
            element.style.backgroundColor = '#030303';
        });
        DescriptionVideo.forEach(element => {
            element.style.color = '#ffffff';
        });
        ViewsIcon.forEach(element => {
            element.src = 'images/light-icon/views.png'
        });
        RightMenu.style.backgroundColor = '#030303';
        Users.style.color  = '#ffffff';
        Line.forEach(element => {
            element.style.backgroundColor = '#030303';
        });
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
        FilterIcon.src = 'images/light-icon/filters/filters-icon.png';
        TypeIcon.src = 'images/light-icon/filters/type.png';
        UploadDateIcon.src = 'images/light-icon/filters/upload-date.png';
        DurationIcon.src = 'images/light-icon/filters/duration.png';
        SortByIcon.src = 'images/light-icon/filters/sort-by.png'; 

    }
}