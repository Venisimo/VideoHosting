async function GetUsersSubs() {
    try {
        const Data = {
            login: userLogin
        };
        const response = await fetch('/getUsersVideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });

        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
        const responseData = await response.json();
        if (responseData.userInfo.id == UserId) {
            location.replace("/channel/subscriptions");
        }
        console.log(responseData);
        AvatarForChannel.src = responseData.userInfo.avatar;
        UserName.innerHTML = responseData.userInfo.name;
        DesChannel.innerHTML = responseData.userInfo.description;
    } catch (error) {
        console.error(error);
    }
}
if (!token) {
    GetUsersSubs();
}