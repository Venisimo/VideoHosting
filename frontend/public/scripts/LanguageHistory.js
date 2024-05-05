Language.addEventListener('click', function() {
    if (rus) {
        HistoryViewsSearchStr.innerHTML = "Очистить историю";
        InputSearchHistory.placeholder = "Поиск видео";
    } else {
        HistoryViewsSearchStr.innerHTML = "Clear history";
        InputSearchHistory.placeholder = "Search video";
    }
});