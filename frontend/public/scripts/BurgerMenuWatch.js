function closeLeftMenu() {
    if (boolBurgerMenu == true) {
        boolBurgerMenu = false;
    } else {
        boolBurgerMenu = true
    }
    
    if (!boolBurgerMenu) {
        ShadowForLeftMenu.style.visibility = "visible";
        LeftMenu.style.visibility = "visible";
        if (token) {
            ProfileIcon.style.paddingLeft = "0px";
            ProfileIcon.style.width = "25px";
            ProfileIcon.style.height = "25px";
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                ProfileIcon.style.paddingTop = "4px";
            } else {
                ProfileIcon.style.paddingTop = "1px";
            }
        } else {
            ProfileIcon.style.paddingLeft = "45px";
            ProfileIcon.style.width = "24px";
            ProfileIcon.style.height = "24px";
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                ProfileIcon.style.paddingTop = "6px";
            } else {
                ProfileIcon.style.paddingTop = "3px";
            }
        }  
    } else {
        ShadowForLeftMenu.style.visibility = "hidden";
        LeftMenu.style.visibility = "hidden";
    }  
}
BurgerMenu.addEventListener('click', closeLeftMenu);
ShadowForLeftMenu.addEventListener('click', closeLeftMenu);
