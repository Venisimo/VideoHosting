let ArrayEl = [];
let ArrayEl2 = [];
function ParseText() {
    Name.forEach(element => {
        if (element.innerHTML.length > 16) {
            let el1;
            let el2;
            let el3;
            let el4;
            let a;
            el1 = element.innerHTML.slice(0, 15);
            el2 = element.innerHTML.slice(15); 
            for (let i = 15; i > 0; i--) {
                if (el1[i] == " ") {
                    a = i;
                    i = 0;
                    el3 = element.innerHTML.slice(0, a);
                    el4 = element.innerHTML.slice(a, 15);
                    console.log(el3);
                    element.innerHTML = el3 + "<br>" + el4 + el2;
                } else {
                    element.innerHTML = el1 + "-" + "<br>" + el2;
                }
            }
        }

        if (element.innerHTML.length > 36) {
            let el1 = "";
            el1 = element.innerHTML.slice(0, 33);
            element.innerHTML = el1 + "...";
        }
    });
    NameChannel.forEach(element => {
        if (element.innerHTML.length > 10) {
            let el1;
            el1 = element.innerHTML.slice(0, 8);
            element.innerHTML = el1 + "...";
        }
    })
    Channel.forEach(element => {
        if (element.innerHTML.length > 30) {
            let el1;
            el1 = element.innerHTML.slice(0, 28);
            element.innerHTML = el1 + "...";
        }
    })
}
ParseText();