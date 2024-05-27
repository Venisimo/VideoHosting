if (!token == true) {
    SubscribeBtn.addEventListener('click', function() {
        OpenModel();
    });
} else {
    SubscribeBtn.addEventListener('click', function() {
        SubscribeBtn.classList.toggle('video-panel-on');
        if (localStorage.getItem('language') == "ru") {
            if (SubscribeBtn.innerHTML == "Подписаться") {
                SubscribeBtn.innerHTML = "Отписаться"; 
                subscribe();   
            } else if (SubscribeBtn.innerHTML == "Отписаться") {
                SubscribeBtn.innerHTML = "Подписаться";
                unsubscribe()
            }
        } else if (localStorage.getItem('language') == "en") {
            if (SubscribeBtn.innerHTML == "Subscribe") {
                SubscribeBtn.innerHTML = "Unsubscribe";
                subscribe();    
            } else if (SubscribeBtn.innerHTML == "Unsubscribe") {
                SubscribeBtn.innerHTML = "Subscribe";
                unsubscribe()
            }
        }
    });
}

async function subscribe() {
    try {
        const Data = {
            id: UserId,
            channel: channelLogin,
        }
        const response = await fetch('/subcribeOnChannel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при подписке');
        } 
    } catch (error) {
        console.error(error);
    
    }
}
async function unsubscribe() {
    try {
        const Data = {
            id: UserId,
            channel: channelLogin,
        }
        const response = await fetch('/unSubcribeOnChannel', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при отписке');
        } 
    } catch (error) {
        console.error(error);
    
    }
}

async function CountSub() {
    console.log(channelLogin);
    try {
        const Data = {
            channel: channelLogin,
        }
        const response = await fetch('/CountSub', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        const NumsS = document.querySelector('.num-subs');        
        NumsS.innerHTML = responseData.count
        if (!response.ok) {
            throw new Error('Ошибка при выводе числа подписчиков');
        } 
    } catch (error) {
        console.error(error);
    
    }
}