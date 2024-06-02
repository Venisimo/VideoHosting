console.log(!token);
if (!token == true) {
    BtnChannelEdit.addEventListener('click', function() {
        OpenModel();
    });
} else {
    BtnChannelEdit.addEventListener('click', function() {
        BtnChannelEdit.classList.toggle('on');
        if (ChekSelfSub) {
            if (localStorage.getItem('language') == "ru") {
                BtnChannelEdit.innerHTML = "Подписаться";
            } else if (localStorage.getItem('language') == "en") {
                BtnChannelEdit.innerHTML = "Subscribe";
            }
            unsubscribe();
            ChekSelfSub = false;
        } else {
            if (localStorage.getItem('language') == "ru") {
                BtnChannelEdit.innerHTML = "Отписаться";
            } else if (localStorage.getItem('language') == "en") {
                BtnChannelEdit.innerHTML = "Unsubscribe";
            }
            subscribe();
            ChekSelfSub = true;
        }
    })
}

async function subscribe() {
    try {
        const Data = {
            id: UserId,
            channel: userUrlLogin[1],
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
            channel: userUrlLogin[1],
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
    try {
        const Data = {
            channel: userUrlLogin[1],
        }
        const response = await fetch('/CountSub', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        NumSubsDes.innerHTML = responseData.count
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка при выводе числа подписчиков');
        } 
    } catch (error) {
        console.error(error);
    
    }
}
CountSub();