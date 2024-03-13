function SubsText() {
    NumSubs.forEach(function(numElement) {
        let subsElement = numElement.nextElementSibling;
        if (Number(numElement.innerHTML) >= 1000 && Number(numElement.innerHTML) < 1000000) {
            subsElement.innerHTML = "тыс";
        } else if (Number(numElement.innerHTML) >= 1000000 && Number(numElement.innerHTML) < 1000000000) {
            subsElement.innerHTML = "млн";
        } else if (Number(numElement.innerHTML) >= 1000000000 && Number(numElement.innerHTML) < 1000000000000) {
            subsElement.innerHTML = "млрд";
        }
        console.log(subsElement.innerHTML);
    });    
}
SubsText();