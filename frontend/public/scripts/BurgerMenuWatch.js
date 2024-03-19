BurgerMenu.addEventListener('click', function() {
    if (boolBurgerMenu == true) {
        boolBurgerMenu = false;
    } else {
        boolBurgerMenu = true
    }
    
    if (!boolBurgerMenu) {
        LeftMenu.style.visibility = "visible";
    } else {
        LeftMenu.style.visibility = "hidden";
    }  
});