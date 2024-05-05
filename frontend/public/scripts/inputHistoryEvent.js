InputSearchHistory.addEventListener('focus', function() {
   InputSearchHistory.placeholder = "";
   RightMenu.style.visibility = "hidden"
})
InputSearchHistory.addEventListener('blur', function() {
    if (rus) {
      InputSearchHistory.placeholder = "Поиск видео";
    } else {
      InputSearchHistory.placeholder = "Search video";
    }
})