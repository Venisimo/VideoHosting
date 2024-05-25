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
const ProfileDark = document.querySelector(".profile.dark");
const MessengerDark = document.querySelector(".messenger.dark");
const HistoryViewsDark = document.querySelector(".history-views.dark");
const SubIcon = document.querySelectorAll(".sub-icon");
const Sub = document.querySelector(".sub");
const Users = document.querySelector(".users");
const User = document.querySelectorAll(".user");
const SubStr = document.querySelector("#sub-str");
const Line = document.querySelectorAll('.line');
const Preview = document.querySelectorAll('.preview');
const Videos = document.querySelector('.videos');
const Avatar = document.querySelector('.avatar');
const RightMenu = document.querySelector('.right-menu');
const Theme = document.querySelector('.theme');
const Language = document.querySelector('.language');
const MyProfie = document.querySelector('.my-profile');
const Documentation = document.querySelector('.documentation');
const Settings = document.querySelector('.settings');
const Exit = document.querySelector('.exit');
const Body = document.querySelector('body');
const Header = document.querySelector('header');
const Views = document.querySelectorAll('.views');
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
const MyProfileStr = document.querySelector('.my-profile-str');
const LanguageStr = document.querySelector('.language-str');
const ThemeStr = document.querySelector('.theme-str');
const DocumentationStr = document.querySelector('.documentation-str');
const SettingsStr = document.querySelector('.settings-str');
const ExitStr = document.querySelector('.exit-str');
const Num = document.querySelectorAll('.num');
const ProfileStr = document.querySelector('.profile-str');
const MessageStr = document.querySelector('.message-str');
const HistoryViewsStr = document.querySelector('.history-views-str');
const Footer = document.querySelector('.footer');
const Name = document.querySelectorAll('.name');
const NameChannel = document.querySelectorAll('.name-channel');
const Channel = document.querySelectorAll('.channel');
const ResultList = document.querySelector('.result-list');
const NumSubs = document.querySelectorAll('.num-subs');
const NumSubsDes = document.querySelector('#Num-Subs-des');
const Subs = document.querySelectorAll('.subs');
const ChannelResult = document.querySelectorAll('.channel-result');
const FiltersTitle = document.querySelectorAll('.filters-title');
const FilterIcon = document.querySelector('#filter-icon')
const TypeIcon = document.querySelector('#type');
const UploadDateIcon = document.querySelector('#upload-date-icon');
const DurationIcon = document.querySelector('#duration');
const SortByIcon = document.querySelector('#sort-by');
const DescriptionChannel = document.querySelectorAll('.description-channel');
const SubIconLeftMenu = document.querySelector('#sub-icon-for-leftMenu');
const lineLeftMenu = document.querySelector('#line-for-leftMenu');
const Filter = document.querySelectorAll('.filter');
const FiltersStr = document.querySelector('.filters-str');
const UploadDateStr = document.querySelector('.upload-date-str');
const LastHour = document.querySelector('.last-hour');
const Today = document.querySelector('.today');
const Week = document.querySelector('.week');
const Month = document.querySelector('.month');
const Year = document.querySelector('.year');
const TypeStr = document.querySelector('.type-str');
const VideoFilter = document.querySelector('.video-filter');
const ChannelFilter = document.querySelector('.channel-filter');
const PlaylistFilter = document.querySelector('.playlist-filter');
const DurationStr = document.querySelector('.duration-str');
const LessFiveMinutes = document.querySelector('.less-five-minutes');
const FiveTwentyMinutes = document.querySelector('.five-twenty-minutes');
const MoreTwentyMinutes = document.querySelector('.more-twenty-minutes');
const SortByStr = document.querySelector('.sort-by-str');
const Relevance = document.querySelector('.relevance');
const UploadDateFilter = document.querySelector('.upload-date-filter');
const NumOfViews = document.querySelector('.num-of-views');
const Rating = document.querySelector('.rating');
const CommentText = document.querySelector('.comment-text');
const BtnSumbit = document.querySelector('.btn-submit');
const BtnCancel = document.querySelector('.btn-cancel');
const SubscribeBtn = document.querySelector('.subscribe-btn');
const LikeBtn = document.querySelector('.like');
const DislikeBtn = document.querySelector('.dislike');
const RecBlock = document.querySelector('.recommendation');
const VideoBlock = document.querySelector('.video-block');
const NumLike = document.querySelector('.num-like');
const NumDislike = document.querySelector('.num-dislike');
const Video = document.querySelector('.video-in-player');
const VolumeRangeInput = document.querySelector('.volume_range');
const currentTimeElement = document.querySelector('.current');
const durationElement = document.querySelector('.duration');
const pauseBtn = document.querySelector('.pause-icon');
const stopBtn = document.querySelector('.stop-icon');
const SoundLevelIcon = document.querySelector('.sound-lvl-icon');
const HighScreenBtn = document.querySelector('.high-screen-icon');
const settingsIcon = document.querySelector('.settings-videoplayer-icon');
const FullscreenBtn = document.querySelector('.fullscreen-icon');
const ProgressBar = document.querySelector('.progress-bar');
const CurrentTimeVideo = document.querySelector('.current');
const DurationTimeVideo = document.querySelector('.duration');
const CoveringShadow = document.querySelector('.covering-shadow');
const VideoplayerPanel = document.querySelector('.videoplayer-panel');
const ListChannelVideos = document.querySelector('.list-channel-videos');
const ListChannelSubscriptions = document.querySelector('.list-channel-subscriptions');
const ListChannelAbout = document.querySelector('.list-channel-about');
const LineChannel = document.querySelector('.lineChannel');
const LineChoiseChannel = document.querySelector('.lineChoiseChannel');
const VideosChannel = document.querySelectorAll('.videos-channel');
const BtnAddLink = document.querySelector(".btn-add-link");
const Popup = document.querySelector(".popup");
const UlListLinks = document.querySelector(".ul-list-links");
const BtnDeleteLinks = document.querySelectorAll('.btn-delete-link');
const TextAreaDes = document.querySelector(".textarea-des");
const TextAreaDesVideo = document.querySelector(".textarea-des-video");
const BtnEditLinks = document.querySelectorAll(".btn-edit-link");
const LinksInDes = document.querySelectorAll(".links-in-des");
const PopupFull = document.querySelector(".popup-full");
const mainElement = document.documentElement;
const mainElementHeight = mainElement.clientHeight;
const mainElementWidth = mainElement.clientWidth;
const BtnChannelEdit = document.querySelector(".btn-channel");
const PopupClose = document.querySelector(".popup__close");
const PopupCloseAddVideo = document.querySelector(".popup-close-add-video");
const currentUrl = window.location.href;
const ShadowForLeftMenu = document.querySelector(".Shadow-for-leftMenu");
const StrComment = document.querySelector(".str-comment");
const SortByStrWatch = document.querySelector(".sort-by-str-watch");
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
const ShowDes = document.querySelector(".show-des");
const CommentTextAnswers = document.querySelectorAll(".comment-text-answer");
const BtnCancelAnswer = document.querySelectorAll(".btn-cancel-answer");
const BtnSubmitAnswer = document.querySelectorAll(".btn-submit-answer");
const BtnAnswers = document.querySelectorAll(".btn-answer");
const BtnAnswersList = document.querySelectorAll(".btn-answers");
const AnswersSummaryIcon = document.querySelectorAll(".answers-summary-icon");
const TrashIcon = document.querySelector(".trash-icon");
const InputSearchHistory = document.querySelector(".input-search-history");
const HistoryViewsSearchStr = document.querySelector(".history-views-search-str");
const SearchHistoryIcon = document.querySelector(".search-history-icon");
const BtnClearHistory = document.querySelector(".btn-clear-history");
const BtnSearchHistory = document.querySelector(".btn-search-history");
const BtnAddVideo = document.querySelector(".btn-add-video");
const LikeAnswer = document.querySelector(".like-answer");
const DislikeAnswer = document.querySelector(".dislike-answer");
const PopupAddVideoFull = document.querySelector(".popup-add-video-full");
const PopupPreviewPreview = document.querySelector(".upload-preview-preview");
const InputName = document.querySelector(".input-name");
const AvatarForChannelPopup = document.querySelector(".avatar-for-channel-popup");
const AvatarForChannel = document.querySelector(".avatar-for-channel");
const ErrorMessageProfile = document.querySelector(".error_message_profile");
const DesChannel = document.querySelector(".des-channel");
const DesChannelAbout = document.querySelector(".des-channel-about");
const RegDate = document.querySelector(".reg-date");
const InputLinkAdd = document.querySelector(".input-link-add");
const LinksBlockChannel = document.querySelector(".links-block-channel");
const ErrorMessageEditProfile = document.querySelector(".ErrorMessageEditProfile");
const BtnSave = document.querySelector(".btn-save");
const Modal = document.querySelector(".modal");
const ModalVideo = document.querySelector(".modal-video");
const BtnOK = document.querySelector(".btnOK");
const BtnOKVideo = document.querySelector(".btnOKVideo");
const InputNameVideos = document.querySelector(".input-name-video");
const ErrorMessageUploadVideo = document.querySelector('.ErrorMessageUploadVideo');
const VideoBlockChannelName = document.querySelector(".video-block-channel-name");
const DescriptionEntryText = document.querySelector(".description-entry-text");
const NumWatchVideo = document.querySelector("#num-watch-video");
const NumWatchDate = document.querySelector("#num-watch-date");
const AvatarWatchVideo = document.querySelector("#AvatarWatchVideo");
const DesText = document.querySelector(".des-text");
const imgPreview = document.querySelectorAll(".imgPreview");
const UserName = document.querySelector(".user-name");
const VideosUrl = document.querySelector(".videosUrl");
const SubsUrl = document.querySelector(".subsUrl");
const AboutsUrl = document.querySelector(".aboutUrl");
const AmountVideos = document.querySelector(".amount-videos");
const AmountViews = document.querySelector(".amount-views");
const VideoBlockBtns = document.querySelector(".video-block-btns");
const CommentAvatar = document.querySelector(".comment-avatar");
const AnswerAvatar = document.querySelectorAll(".answer-avatar");
const AnswerBlock = document.querySelectorAll(".answer-block");
const NumComment = document.querySelector(".num-comment");
const DeleteComment = document.querySelectorAll(".Delete-Comment");
const ThemeIcon = document.querySelector("#theme-icon");
const ru = document.getElementsByClassName('ru')[0];
const en = document.getElementsByClassName('en')[0];
const LanguageIcon = document.querySelector('#Language-icon');
const NameStr = document.querySelector('.name-str');
const PopupDesStr = document.querySelector('.popup-des-str');
const PopupLinksStr = document.querySelector('.popup-links-str');
const ModalWindow = document.querySelector('.modal-widnow');
const SuccesLog = document.querySelector('.SuccesLog');
const ReqLog = document.querySelector('.ReqLog');
let Lang = localStorage.getItem('language');
if (Lang == null) {
    localStorage.setItem('language', "ru");
}
let BurgMenu = localStorage.getItem('Burger');
if (BurgMenu == null) {
    localStorage.setItem('Burger', "off");
}
let boolSoundLvl = true;
let boolBurgerMenu = true; 
let boolRightMenu = true;
let rus = true;
let theme = true;
let boolHighScreen = false;
let boolEndVideo = false;
let boolStartVideo = false;
let boolSCB = false;
let boolShowDes = false;