Language.addEventListener('click', function() {
    checkLanguageHistory()
});
function checkLanguageHistory() {
    if (localStorage.getItem('language') == "ru") {
        HistoryViewsSearchStr.innerHTML = "Очистить историю";
        HistoryViewsSearchStr.style.marginLeft = "10px";
        InputSearchHistory.placeholder = "Поиск видео";
    } else if (localStorage.getItem('language') == "en") {
        HistoryViewsSearchStr.innerHTML = "Clear history";
        HistoryViewsSearchStr.style.marginLeft = "40px";
        InputSearchHistory.placeholder = "Search video";
    }
}