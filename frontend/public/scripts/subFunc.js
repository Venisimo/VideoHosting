if (!token) {
    BtnChannelEdit.addEventListener('click', function() {
        OpenModel();
    });
} else {
    BtnChannelEdit.addEventListener('click', function() {
        BtnChannelEdit.classList.toggle('on');
        if (rus) {
            if (BtnChannelEdit.innerHTML == "Подписаться") {
                BtnChannelEdit.innerHTML = "Отписаться";
                subscribe();    
            } else if (BtnChannelEdit.innerHTML == "Отписаться") {
                BtnChannelEdit.innerHTML = "Подписаться";
            }
        } else {
            if (BtnChannelEdit.innerHTML == "Subscribe") {
                BtnChannelEdit.innerHTML = "Unsubscribe"; 
                subscribe();   
            } else if (BtnChannelEdit.innerHTML == "Unsubscribe") {
                BtnChannelEdit.innerHTML = "Subscribe";
            }
        }
    })
}

async function subscribe() {
    try {
        const Data = {
            id: UserId,
            channel: userUrlLogin[1],
        }
        const responseLink = await fetch('/subcribeOnChannel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseLinkData = await responseLink.json();
        if (!responseLink.ok) {
            throw new Error('Ошибка при настройке профиля');
        } else {
            console.log("Профиль успешно настроен")
            OpenModel();
        }
    } catch (error) {
        console.error(error);
    
    }
}