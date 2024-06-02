async function GetSelfSubscriptions() {
    try {
        const Data = {
            id: UserId,
        }
        const responseLink = await fetch('/getSelfSubscriptions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });

        if (!responseLink.ok) {
            throw new Error('Ошибка вывода подписок');
        }

        const responseData = await responseLink.json();
        console.log(responseData);
        const SubsBlock = document.querySelector(".SubsBlock");

        let Sub = createNewChannel(SubsBlock);
        let count = 0;

        for (let i = 0; i < responseData.subs.length; i++) {
            if (count >= 4) {
                Sub = createNewChannel(SubsBlock);
                count = 0;
            }
            Sub.innerHTML += `
            <a class="user-channel-menu" data-barba="false" href="http://localhost:3000/videos?${responseData.subs[i].channel}">
                <img class="subscriptions-avatar" src="${responseData.SubsInfo[i].avatar}">
                <div class="name-channel">${responseData.SubsInfo[i].name}</div>
            </a>
            `;
            count++;
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
