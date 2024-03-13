InputSearch.addEventListener('focus', function() {
   InputSearch.placeholder = "";
   RightMenu.style.visibility = "hidden"
})
InputSearch.addEventListener('blur', function() {
    if (rus) {
       InputSearch.placeholder = "Поиск...";
    } else {
       InputSearch.placeholder = "Search...";
    }
})