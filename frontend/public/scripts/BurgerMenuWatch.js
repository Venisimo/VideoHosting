function closeLeftMenu() {
    if (boolBurgerMenu == true) {
        boolBurgerMenu = false;
    } else {
        boolBurgerMenu = true
    }
    
    if (!boolBurgerMenu) {
        ShadowForLeftMenu.style.visibility = "visible";
        LeftMenu.style.visibility = "visible";
    } else {
        ShadowForLeftMenu.style.visibility = "hidden";
        LeftMenu.style.visibility = "hidden";
    }  
}
BurgerMenu.addEventListener('click', closeLeftMenu);
ShadowForLeftMenu.addEventListener('click', closeLeftMenu);
