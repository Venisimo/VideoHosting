ListChannelVideos.addEventListener('click', function() {
    LineChoiseChannel.style.marginLeft = "680px";
});
ListChannelSubscriptions.addEventListener('click', function() {
    LineChoiseChannel.style.marginLeft = "890px";
});
ListChannelAbout.addEventListener('click', function() {
    LineChoiseChannel.style.marginLeft = "1125px";
});
function urlCheking() {
    if(currentUrl == "http://localhost:3000/channel/videos") {
        LineChoiseChannel.style.marginLeft = "680px";
    } else if (currentUrl == "http://localhost:3000/channel/subscriptions") {
        LineChoiseChannel.style.marginLeft = "890px";
    } else if (currentUrl == "http://localhost:3000/channel/about") {
        LineChoiseChannel.style.marginLeft = "1125px";
    }
} 
urlCheking();

function ViewsTextSubs() {
    NumSubs.forEach(function(numElement) {
        let viewsElement = numElement.nextElementSibling;
        if (Number(numElement.innerHTML) >= 1000 && Number(numElement.innerHTML) < 1000000) {
            viewsElement.innerHTML = "тыс";
        } else if (Number(numElement.innerHTML) >= 1000000 && Number(numElement.innerHTML) < 1000000000) {
            viewsElement.innerHTML = "млн";
        } else if (Number(numElement.innerHTML) >= 1000000000 && Number(numElement.innerHTML) < 1000000000000) {
            viewsElement.innerHTML = "млрд";
        }
        console.log(viewsElement.innerHTML)
    });    
}
ViewsTextSubs();

function ParseNumberSubs() {
    NumSubs.forEach(element => {
        if (element.innerHTML.length == 3) {
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
ParseNumberSubs();