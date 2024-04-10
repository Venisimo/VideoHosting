BurgerMenu.addEventListener('click', function() {
    if (boolBurgerMenu == true) {
        boolBurgerMenu = false;
    } else {
        boolBurgerMenu = true
    }
    
    if (!boolBurgerMenu) {
        LeftMenu.style.visibility = "visible";
        VideoBlock.style.overflow = 'hidden';
        RecBlock.style.overflow = 'hidden';
        // CoveringShadow.style.visibility = "visible";
    } else {
        LeftMenu.style.visibility = "hidden";
        VideoBlock.style.overflow = 'visible';
        RecBlock.style.overflow = 'visible';
        VideoBlock.style.overflowY = 'scroll';
        RecBlock.style.overflowY = 'scroll';
        // CoveringShadow.style.visibility = "hidden";
    }  
});