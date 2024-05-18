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
        let d = new Date(responseData.date)
        let dd = d.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = d.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let yy = d.getFullYear() % 100;
        RegDate.innerHTML =  dd + '.' + mm + '.' + yy;
        DesChannel.innerHTML = responseData.description;
        DesChannelAbout.innerHTML = responseData.description;
        TextAreaDes.value = DesChannel.innerHTML;
        InputName.value = responseData.name;
        Avatar.src = responseData.avatar;
        AvatarForChannel.src = responseData.avatar
        AvatarForChannelPopup.src = responseData.avatar;
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}
async function GetInfoVideos() {
    try {
        const Data = {
            id: UserId
        }
        const response = await fetch('/userInfoVideos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        AmountViews.innerHTML = responseData.totalViews;
        AmountVideos.innerHTML = responseData.totalVideos;
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}