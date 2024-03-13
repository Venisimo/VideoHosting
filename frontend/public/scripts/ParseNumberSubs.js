function ParseNumber() {
    NumSubs.forEach(element => {
        if (Number(element.innerHTML) < 1000) {
            element.style.marginRight = "0px";
        } else if (Number(element.innerHTML) > 999 && Number(element.innerHTML) < 1100) {
            element.innerHTML = element.innerHTML[0];
        } else if (Number(element.innerHTML) > 1099 && Number(element.innerHTML) < 10000) {
            element.innerHTML = element.innerHTML[0] + ',' + element.innerHTML[1];
        } else if (Number(element.innerHTML) > 9999 && Number(element.innerHTML) < 100000) {
            element.innerHTML = element.innerHTML[0] + element.innerHTML[1];
        } else if (Number(element.innerHTML) > 99999 && Number(element.innerHTML) < 1000000) {
            element.innerHTML = element.innerHTML[0] + element.innerHTML[1] + element.innerHTML[2];
        } else if (Number(element.innerHTML) > 999999 && Number(element.innerHTML) < 1100000) {
            element.innerHTML = element.innerHTML[0];
        } else if (Number(element.innerHTML) > 1099999 && Number(element.innerHTML) < 10000000) {
            element.innerHTML = element.innerHTML[0] + ',' + element.innerHTML[1];
        } else if (Number(element.innerHTML) > 9999999 && Number(element.innerHTML) < 100000000) {
            element.innerHTML = element.innerHTML[0] + element.innerHTML[1];             
        } else if (Number(element.innerHTML) > 99999999 && Number(element.innerHTML) < 1000000000) {
            element.innerHTML = element.innerHTML[0] + element.innerHTML[1] + element.innerHTML[2];
        } else if (Number(element.innerHTML) > 999999999 && Number(element.innerHTML) < 1100000000) {
            element.innerHTML = element.innerHTML[0]; 
        } else if (Number(element.innerHTML) > 1099999999 && Number(element.innerHTML) < 10000000000) {
            element.innerHTML = element.innerHTML[0] + ',' + element.innerHTML[1];
        } else if (Number(element.innerHTML) > 1099999999 && Number(element.innerHTML) < 100000000000) {
            element.innerHTML = element.innerHTML[0] + element.innerHTML[1];
        } else if (Number(element.innerHTML) > 9999999999 && Number(element.innerHTML) < 1000000000000) {
            element.innerHTML = element.innerHTML[0] + element.innerHTML[1] + element.innerHTML[2];
        }
    })  
}
ParseNumber();