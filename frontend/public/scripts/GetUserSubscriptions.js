async function GetUserSubscriptions() {
    try {
        const Data = {
            login: userLogin,
        }
        const responseLink = await fetch('/getUserSubscriptions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await responseLink.json();
        console.log(responseData);
        const SubsBlock = document.querySelector(".SubsBlock");
        let Sub = createNewChannel(SubsBlock);
        for (let i = 0; i < responseData.subs.length; i++) {
            if (Sub.childElementCount >= 4) {
                Sub = createNewChannel(Sub);
            }
            Sub.innerHTML += `
            <a class="user-channel-menu" data-barba="false" href="/videos?${responseData.subs[i].channel}">
                <img class="subscriptions-avatar" src="${responseData.SubsInfo[i].avatar}">
                <div class="name-channel">${responseData.SubsInfo[i].name}</div>
            </a>
            `;
        }
        if (!responseLink.ok) {
            throw new Error('Ошибка вывода подписок');
        } else {
        }
    } catch (error) {
        console.error(error);
    
    }
}

function createNewChannel(parent) {
    const newChannel = document.createElement('div');
    newChannel.classList.add('users-channel-menu');
    parent.appendChild(newChannel);
    return newChannel;
}