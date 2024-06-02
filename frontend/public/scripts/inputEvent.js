InputSearch.addEventListener('focus', function() {
   InputSearch.placeholder = "";
   RightMenu.style.visibility = "hidden"
})
InputSearch.addEventListener('blur', function() {
    if (localStorage.getItem('language') == "ru") {
       InputSearch.placeholder = "Поиск...";
    } else if (localStorage.getItem('language') == "en") {
       InputSearch.placeholder = "Search...";
    }
})