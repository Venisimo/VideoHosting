async function GetSelfSubsLeftMenu() {
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
        const responseData = await responseLink.json();
        console.log(responseData);
        for (let i = 0; i < responseData.subs.length; i++) {
            Users.innerHTML += `
            <a class="user" data-barba="false" href="/videos?${responseData.subs[i].channel}">
                <img class="avatar-for-sub" src="${responseData.SubsInfo[i].avatar}"/>
                <div class="name-channel">${responseData.SubsInfo[i].name}</div>
            </a>
            `;
        }
        Users.innerHTML += `<div class="line" id="line-for-leftMenu"></div>
                                <div class="footer">© 2024 Venisimo</div>
                                <div class="zagluhka-footer"></div>`
        if (!responseLink.ok) {
            throw new Error('Ошибка вывода подписок');
        } else {
        }
    } catch (error) {
        console.error(error);
    
    }
}