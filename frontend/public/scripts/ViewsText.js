function ViewsText() {
    Num.forEach(function(numElement) {
        let viewsElement = numElement.nextElementSibling;
        if (Number(numElement.innerHTML) >= 1000 && Number(numElement.innerHTML) < 1000000) {
            viewsElement.innerHTML = "тыс";
        } else if (Number(numElement.innerHTML) >= 1000000 && Number(numElement.innerHTML) < 1000000000) {
            viewsElement.innerHTML = "млн";
        } else if (Number(numElement.innerHTML) >= 1000000000 && Number(numElement.innerHTML) < 1000000000000) {
            viewsElement.innerHTML = "млрд";
        }
    });    
}
ViewsText();