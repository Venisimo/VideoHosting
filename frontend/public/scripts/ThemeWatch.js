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
    const InputSearch = document.querySelector(".input-search");
    const BurgerMenu = document.querySelector(".burger-menu");
    const BurgerMenuIcon = document.querySelector(".burger-menu-icon");
    const LeftMenu = document.querySelector(".left-menu");
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
    const DescriptionChannel = document.querySelectorAll('.description-channel');
    const CommentText = document.querySelector('.comment-text');
    const BtnSumbit = document.querySelector('.btn-submit');
    const BtnCancel = document.querySelector('.btn-cancel');
    const SubscribeBtn = document.querySelector('.subscribe-btn');
    const LikeBtn = document.querySelector('.like');
    const DislikeBtn = document.querySelector('.dislike');
    const NumLike = document.querySelector('.num-like');
    const NumDislike = document.querySelector('.num-dislike');
    const SortCommentButton = document.querySelector(".sort-comment-btn");
    const SortCommentIcon = document.querySelector(".sort-comment-icon");
    const CommentBlock = document.querySelector(".comment-block");
    const DescriptionEntry = document.querySelector(".description-entry");
    const CommentEntry = document.querySelectorAll(".comment-entry");
    const VideoName = document.querySelector(".video-name");
    const NameSub = document.querySelector(".name-sub");
    const Repost = document.querySelector(".repost");
    const Likes = document.querySelector(".likes");
    const Dislikes = document.querySelector(".dislikes");
    const SortCommentBlock = document.querySelector(".sort-comment-block");
    const BtnTopComment = document.querySelector(".btn-top-comment");
    const BtnNewComment = document.querySelector(".btn-new-comment");
    const Video = document.querySelector('.video-in-player');
    const Channel = document.querySelectorAll('.channel');
    const BtnAnswers = document.querySelectorAll(".btn-answer");
    const CommentTextAnswers = document.querySelectorAll(".comment-text-answer");
    const BtnCancelAnswer = document.querySelectorAll(".btn-cancel-answer");
    const BtnSubmitAnswer = document.querySelectorAll(".btn-submit-answer");
    const DeleteComment = document.querySelectorAll(".Delete-Comment");
    const DeleteAnswer = document.querySelectorAll(".Answer-Comment");
    const BtnAnswersList = document.querySelectorAll(".btn-answers");
    const AnswersSummaryIcon = document.querySelectorAll(".answers-summary-icon");
    // const LikeAnswer = document.querySelector(".like-answer");
    // const DislikeAnswer = document.querySelector(".dislike-answer");
    if (localStorage.getItem('theme') == "light") {
        if (token) {
            ProfileIcon.src = '/images/dark-icon/menu/profile.png'; 
        } else {
            ProfileIcon.src = '/images/dark-icon/menu/log-out.png';
        }
        HomeButton.classList.remove('dark');
        SortCommentButton.classList.remove('dark');
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
        SubscribeBtn.classList.remove('dark4');
        SubscribeBtn.classList.remove('dark');
        Repost.classList.remove('dark');
        LikeBtn.classList.remove('dark');
        DislikeBtn.classList.remove('dark');
        BtnSumbit.classList.remove('dark');
        BtnCancel.classList.remove('dark');
        SortCommentBlock.classList.remove('dark')
        BtnTopComment.classList.remove('dark');
        BtnNewComment.classList.remove('dark');
        // LikeAnswer.classList.remove('dark');
        // DislikeAnswer.classList.remove('dark')
        Video.style.backgroundColor = "#4FF4D7";
        BtnAnswersList.forEach(element => {
            element.style.backgroundColor = "#4FF4D7";
        })  
        BtnAnswers.forEach(element => {
            element.classList.remove('dark');
        })
        User.forEach(element => {
            element.style.color = "#000000";
            element.classList.remove('dark');
        });
        if (MyProfie !== null) {
            MyProfie.classList.remove('dark2');
            MyProfie.style.color = '#000000';
            profileIconRightMenu.src = '/images/dark-icon/menu/profile.png';
        }
        if (Sub !== null) {
            Sub.classList.remove('dark')
            Sub.style.color  = '#000000';
        }
        BtnCancelAnswer.forEach(element => {
            element.classList.remove('dark');
        });
        BtnSubmitAnswer.forEach(element => {
            element.classList.remove('dark');
        });
        DeleteComment.forEach(element => {
            element.classList.remove('dark');
        });
        DeleteAnswer.forEach(element => {
            element.classList.remove('dark');
        });
        AnswersSummaryIcon.forEach(element => {
            element.src = "/images/dark-icon/videoplayer/answers-summary-logo.png"
        });
        Body.style.background = '#FFFFFF';
        Header.style.background = '#4FF4D7';
        DescriptionEntry.style.background = '#4FF4D7';
        Preview.forEach(element => {
            element.style.backgroundColor = '#4FF4D7';
            if (element.style.backgroundImage == `url("/videos/posters/default-dark.png")`) {
                element.style.backgroundImage = `url("/videos/posters/default.png")`
            }
        });
        DescriptionVideo.forEach(element => {
            element.style.color = '#000000';
        });
        ViewsIcon.forEach(element => {
            element.src = '/images/dark-icon/views.png';
        })
        RightMenu.style.backgroundColor = '#4FF4D7';
        RightMenu.style.color = '#000000';
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
        
        BurgerMenuIcon.src = '/images/dark-icon/header/burger-menu.png';
        SubIcon.forEach(element => {
            element.src = '/images/dark-icon/menu/subscriptions.png';
        });
        HomeButton.style.color = '#000000';
        Profile.style.color = '#000000';
        Messenger.style.color = '#000000';
        HistoryViews.style.color = '#000000';
        BurgerMenu.src = '/images/dark-icon/header/burger-menu.png';
        InputSearch.style.backgroundColor = '#FFFFFF';
        InputSearch.style.color = '#000000';
        Lupa.src = '/images/dark-icon/header/lupaV3.png';
        Search.style.backgroundColor = '#FFFFFF';
        languageIconRightMenu.src = '/images/dark-icon/menu/language.png';
        themeIconRightMenu.src = '/images/dark-icon/menu/moon.png'
        documentationIconRightMenu.src = '/images/dark-icon/menu/documentation.png';
        settingsIconRightMenu.src = '/images/dark-icon/menu/settings.png';
        exitIconRightMenu.src = '/images/dark-icon/menu/log-out.png';
        MessengerIcon.src = '/images/dark-icon/menu/message.png';
        HistoryViewsIcon.src = '/images/dark-icon/menu/history.png';
        SortCommentIcon.src = '/images/dark-icon/videoplayer/comment-icon.png';
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
        Channel.forEach(element => {
            element.style.color = "#000000"
        });

        LeftMenu.style.backgroundColor = '#ffffff';
        CommentText.style.backgroundColor = '#ffffff';
        CommentText.style.color = '#000000';
        CommentTextAnswers.forEach(element => {
            element.style.backgroundColor = '#ffffff';
            element.style.color = '#000000';
        });
        SortCommentButton.style.color = '#000000';
        CommentBlock.style.color = '#000000';
        DescriptionEntry.style.color = '#000000';
        VideoName.style.color = '#000000';
        NameSub.style.color = '#000000';
        NumLike.style.color = '#000000';
        NumDislike.style.color = '#000000';
        Likes.style.color = '#000000';
        Dislikes.style.color = '#000000';
        if (ModalWindow) {
            ModalWindow.style.background = "#4FF4D7";
            ReqLog.style.color = "#000000";
            BtnOK.style.background = "#FFFFFF";
            BtnOK.style.color = "#000000";
            btnCancel.style.background = "#FFFFFF";
            btnCancel.style.color = "#000000";
        }
    } else if (localStorage.getItem('theme') == "dark") {
        if (token) {
            ProfileIcon.src = '/images/light-icon/menu/profile.png'; 
        } else {
            ProfileIcon.src = '/images/light-icon/menu/log-out.png';
        }
        HomeButton.classList.add('dark');
        SortCommentButton.classList.add('dark');
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
        SubscribeBtn.classList.add('dark4');
        SubscribeBtn.classList.add('dark');
        Repost.classList.add('dark');
        LikeBtn.classList.add('dark');
        DislikeBtn.classList.add('dark');
        BtnSumbit.classList.add('dark');
        BtnCancel.classList.add('dark');
        SortCommentBlock.classList.add('dark')
        BtnTopComment.classList.add('dark');
        BtnNewComment.classList.add('dark');
        // LikeAnswer.classList.add('dark');
        // DislikeAnswer.classList.add('dark')
        Video.style.backgroundColor = "#030303";
        BtnAnswersList.forEach(element => {
            element.style.backgroundColor = "#030303";
        }) 
        BtnAnswers.forEach(element => {
            element.classList.add('dark');
        })
        User.forEach(element => {
            element.style.color = "#ffffff";
            element.classList.add('dark');
        });
        Channel.forEach(element => {
            element.style.color = "#FFFFFF"
        });
        MessengerIcon.src = '/images/light-icon/menu/message.png';
        HistoryViewsIcon.src = '/images/light-icon/menu/history.png';
        BurgerMenuIcon.src = '/images/light-icon/header/burger-menu.png';
        Body.style.background = '#1F1C1C';
        Header.style.background = '#030303';
        DescriptionEntry.style.background = '#030303';
        Preview.forEach(element => {
            element.style.backgroundColor = '#030303';
            if (element.style.backgroundImage == `url("/videos/posters/default.png")`) {
                element.style.backgroundImage = "url(/videos/posters/default-dark.png)"
            }
        });
        DescriptionVideo.forEach(element => {
            element.style.color = '#ffffff';
        });
        ViewsIcon.forEach(element => {
            element.src = '/images/light-icon/views.png'
        });
        RightMenu.style.backgroundColor = '#030303';
        if (MyProfie !== null) {
            MyProfie.classList.add('dark2');
            MyProfie.style.color = '#ffffff';
            profileIconRightMenu.src = '/images/light-icon/menu/profile.png';
        }
        if (Sub !== null) {
            Sub.classList.add('dark')
            Sub.style.color  = '#ffffff';
        }
        BtnCancelAnswer.forEach(element => {
            element.classList.add('dark');
        });
        BtnSubmitAnswer.forEach(element => {
            element.classList.add('dark');
        });
        DeleteComment.forEach(element => {
            element.classList.add('dark');
        });
        DeleteAnswer.forEach(element => {
            element.classList.add('dark');
        });
        Users.style.color  = '#ffffff';
        Line.forEach(element => {
            element.style.backgroundColor = '#030303';
        });
        AnswersSummaryIcon.forEach(element => {
            element.src = "/images/light-icon/videoplayer/answers-summary-logo.png"
        });
        Language.style.color = '#ffffff';
        Theme.style.color = '#ffffff';
        Documentation.style.color = '#ffffff';
        Settings.style.color = '#ffffff';
        Exit.style.color = '#ffffff';
        SubIcon.forEach(element => {
            element.src = '/images/light-icon/menu/subscriptions.png';
        });
        HomeButton.style.color = '#ffffff';
        Profile.style.color = '#ffffff';
        Messenger.style.color = '#ffffff';
        HistoryViews.style.color = '#ffffff';
        BurgerMenu.src = '/images/light-icon/header/burger-menu.png';
        InputSearch.style.backgroundColor = '#1F1C1C';
        InputSearch.style.color = '#ffffff';
        Lupa.src = '/images/light-icon/header/lupaV3.png';
        Search.style.backgroundColor = '#1F1C1C';
        languageIconRightMenu.src = '/images/light-icon/menu/language.png';
        themeIconRightMenu.src = '/images/light-icon/menu/sun.png'
        documentationIconRightMenu.src = '/images/light-icon/menu/documentation.png';
        settingsIconRightMenu.src = '/images/light-icon/menu/settings.png';
        exitIconRightMenu.src = '/images/light-icon/menu/log-out.png';
        SortCommentIcon.src = '/images/light-icon/videoplayer/comment-icon.png';
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
        CommentTextAnswers.forEach(element => {
            element.style.backgroundColor = '#1F1C1C';
            element.style.color = '#ffffff';
        });
        SortCommentButton.style.color = '#ffffff';
        CommentBlock.style.color = '#ffffff';
        DescriptionEntry.style.color = '#ffffff';
        VideoName.style.color = '#ffffff';
        NameSub.style.color = '#ffffff';
        NumLike.style.color = '#ffffff';
        NumDislike.style.color = '#ffffff';
        Likes.style.color = '#ffffff';
        Dislikes.style.color = '#ffffff';
        if (ModalWindow !== null) {
            ModalWindow.style.background = "#1F1C1C";
            ReqLog.style.color = "#FFFFFF";
            BtnOK.style.background = "#030303";
            BtnOK.style.color = "#FFFFFF";
            btnCancel.style.background = "#030303";
            btnCancel.style.color = "#FFFFFF";
        } 
    }
}