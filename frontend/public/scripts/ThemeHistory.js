Theme.addEventListener('click', function() {
    if (localStorage.getItem('theme') == "light") {
        ChekThemeHisory();
    } else if (localStorage.getItem('theme') == "dark") {
        ChekThemeHisory();
    }
});
function ChekThemeHisory() {
    if (localStorage.getItem('theme') == "dark") {
        SearchHistoryIcon.src = "images/light-icon/lupa.png";
        TrashIcon.src = "images/light-icon/trash-icon.png";
        HistoryViewsSearchStr.style.color = "#ffffff";
        HistoryViews.style.backgroundColor = "#ffffff";
        HistoryViews.style.backgroundColor = "#030303";
        BtnClearHistory.classList.add('dark');
        BtnSearchHistory.classList.add('dark');
        InputSearchHistory.classList.add('dark5');
    } else if (localStorage.getItem('theme') == "light") {
        SearchHistoryIcon.src = "images/dark-icon/lupa.png";
        TrashIcon.src = "images/dark-icon/trash-icon.png";
        HistoryViewsSearchStr.style.color = "#000000";
        HistoryViews.style.backgroundColor = "#4FF4D7";
        BtnClearHistory.classList.remove('dark');
        BtnSearchHistory.classList.remove('dark');
        InputSearchHistory.classList.remove('dark5');
    }
}