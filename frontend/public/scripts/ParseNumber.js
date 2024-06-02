function ParseNumber() {
    const Num = document.querySelectorAll('.num');
    Num.forEach(element => {
        if (element.innerHTML.length < 4) {
            element.style.marginRight = "0px";
        } else if (element.innerHTML.length == 4 || element.innerHTML.length == 7 || element.innerHTML.length == 10) {
            if (element.innerHTML[1] != 0) {
                element.innerHTML = element.innerHTML[0] + ',' + element.innerHTML[1];
            } else {
                element.innerHTML = element.innerHTML[0];
            }
        } else if (element.innerHTML.length == 5 || element.innerHTML.length == 8 || element.innerHTML.length == 11) {
            element.innerHTML = element.innerHTML[0] + element.innerHTML[1];
        } else if (element.innerHTML.length == 6 || element.innerHTML.length == 9 || element.innerHTML.length == 12) {
            element.innerHTML = element.innerHTML[0] + element.innerHTML[1] + element.innerHTML[3];
        }
    })  
}
// ParseNumber();