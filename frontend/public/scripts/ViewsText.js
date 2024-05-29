function ViewsText() {
    const Num = document.querySelectorAll('.num');
    Num.forEach(function(numElement) {
        let viewsElement = numElement.nextElementSibling;
        if (Number(numElement.innerHTML) >= 1000 && Number(numElement.innerHTML) < 1000000) {
            if (localStorage.getItem('language') == 'ru') {
                viewsElement.innerHTML = "тыс";
            } else  if (localStorage.getItem('language') == 'en') {
                numElement.style.marginRight = "0px";
                viewsElement.innerHTML = "k";
            }     
        } else if (Number(numElement.innerHTML) >= 1000000 && Number(numElement.innerHTML) < 1000000000) {
            if (localStorage.getItem('language') == 'ru') {
                viewsElement.innerHTML = "млн";
            } else  if (localStorage.getItem('language') == 'en') {
                viewsElement.innerHTML = "mln";
            }  
        } else if (Number(numElement.innerHTML) >= 1000000000 && Number(numElement.innerHTML) < 1000000000000) {
            if (localStorage.getItem('language') == 'ru') {
                viewsElement.innerHTML = "млрд";
            } else  if (localStorage.getItem('language') == 'en') {
                viewsElement.innerHTML = "bln";
            }  
        }
    });    
}
// ViewsText();