Avatar.addEventListener('click', function(){
    if (boolRightMenu) {
        RightMenu.style.visibility = "visible";
        Body.style.overflow = "hidden";
        Header.style.overflow = "hidden";
        boolRightMenu = false;
    } else {
        RightMenu.style.visibility = "hidden";
        Header.style.overflow = "visible";
        Body.style.overflow = "visible";
        boolRightMenu = true;
    }
});