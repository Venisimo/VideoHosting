InputSearchHistory.addEventListener('focus', function() {
   InputSearchHistory.placeholder = "";
   RightMenu.style.visibility = "hidden"
})
InputSearchHistory.addEventListener('blur', function() {
    if (localStorage.getItem('language') == "ru") {
      InputSearchHistory.placeholder = "Поиск видео";
    } else if (localStorage.getItem('language') == "en") {
      InputSearchHistory.placeholder = "Search video";
    }
})