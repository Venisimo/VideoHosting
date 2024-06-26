let ChekSelfSub = false;
async function ChekSubs() {
    try {
        const Data = {
            login: channelLogin,
        };
        const response = await fetch('/ChekSubs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при получении данных с сервера');
        }
        const responseData = await response.json();
        for (let i = 0; i < responseData.length; i++) {
            if (UserId == responseData[i].user_id) {
                ChekSelfSub = true;
                if (localStorage.getItem('language') == "ru") {
                    SubscribeBtn.innerHTML = "Отписаться";
                    SubscribeBtn.classList.add('video-panel-on');
                } else if (localStorage.getItem('language') == "en") {
                    SubscribeBtn.innerHTML = "Unsubscribe";
                    SubscribeBtn.classList.add('video-panel-on'); 
                }
            }
        }

    } catch (error) {
        console.error('Ошибка выполнения ChekSubs:', error);
    }
}