Theme.addEventListener('click', function() {
    InputSearchHistory.classList.toggle('dark5');
    BtnClearHistory.classList.toggle('dark');
    BtnSearchHistory.classList.toggle('dark');
    if (!theme) {
        SearchHistoryIcon.src = "images/light-icon/lupa.png";
        TrashIcon.src = "images/light-icon/trash-icon.png";
        HistoryViewsSearchStr.style.color = "#ffffff";
        HistoryViews.style.backgroundColor = "#ffffff";
        HistoryViews.style.backgroundColor = "#030303";
    } else {
        SearchHistoryIcon.src = "images/dark-icon/lupa.png";
        TrashIcon.src = "images/dark-icon/trash-icon.png";
        HistoryViewsSearchStr.style.color = "#000000";
        HistoryViews.style.backgroundColor = "#4FF4D7";
    }
})