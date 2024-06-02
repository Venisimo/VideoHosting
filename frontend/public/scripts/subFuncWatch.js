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
        // console.log(response); 
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