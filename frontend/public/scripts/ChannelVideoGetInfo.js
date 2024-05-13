async function GetInfo() {
    try {
        const Data = {
            id: UserId
        }
        const response = await fetch('/userInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        DesChannel.innerHTML = responseData.description;
        TextAreaDes.value = DesChannel.innerHTML;
        InputName.value = responseData.name;
        AvatarForChannel.src = responseData.avatar
        Avatar.src = responseData.avatar;
        AvatarForChannelPopup.src = responseData.avatar;
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}