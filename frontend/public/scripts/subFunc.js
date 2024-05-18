console.log(!token);
if (!token == true) {
    console.log("dsdsa");
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
                unsubscribe();
            }
        } else {
            if (BtnChannelEdit.innerHTML == "Subscribe") {
                BtnChannelEdit.innerHTML = "Unsubscribe"; 
                subscribe();   
            } else if (BtnChannelEdit.innerHTML == "Unsubscribe") {
                BtnChannelEdit.innerHTML = "Subscribe";
                unsubscribe();
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