async function ChekSubs() {
    try {
        const Data = {
            login: userLogin,
        }
        const response = await fetch('/ChekSubs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        for (let i = 0; i < responseData.length; i++) {
            if (UserId == responseData[i].user_id) {
                if (localStorage.getItem('language') == "en") {
                    BtnChannelEdit.innerHTML = "Unsubscribe";
                    BtnChannelEdit.classList.add('on');
                } else if (localStorage.getItem('language') == "ru") {
                    BtnChannelEdit.innerHTML = "Отписаться";
                    BtnChannelEdit.classList.add('on'); 
                }
            } else {
                if (localStorage.getItem('language') == "en") {
                    BtnChannelEdit.innerHTML = "Subscribe";
                } else if (localStorage.getItem('language') == "ru") {
                    BtnChannelEdit.innerHTML = "Подписаться";
                }
            }
        }
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}