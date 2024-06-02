async function GetUsersAbout() {
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
        let d = new Date(responseData.userInfo.date)
        let dd = d.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = d.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let yy = d.getFullYear() % 100;
        RegDate.innerHTML =  dd + '.' + mm + '.' + yy;
        AvatarForChannel.src = responseData.userInfo.avatar;
        UserName.innerHTML = responseData.userInfo.name;
        DesChannel.innerHTML = responseData.userInfo.description;
        DesChannelAbout.innerHTML = responseData.userInfo.description;
        AmountViews.innerHTML = responseData.totalViews;
        AmountVideos.innerHTML = responseData.totalVideos;
        for (let i = 0; i < responseData.links.length; i++) {
            LinksBlockChannel.innerHTML += `<p><a href="${responseData.links[i].link}">${responseData.links[i].link}</a></p>`
        }
    } catch (error) {
        console.error(error);
    }
}
if (!token) {
    GetUsersAbout();
}