async function Result() {
    console.log(requestResult[1]);
    try {
        const Data = {
            search: decodeURIComponent(requestResult[1]),
        }
        const response = await fetch('/getResultVideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        if (responseData.ResultUsers.length == 0 && responseData.ResultVideos.length == 0) {
            console.log("Такого на сайте нет(");
        } else {
            if (responseData.ResultVideos.length !== 0) {
                for (let i = 0; i < responseData.ResultVideos.length; i++) {
                    let d = new Date(responseData.ResultVideos[i].date);
                    let dd = d.getDate();
                    if (dd < 10) dd = '0' + dd;
                    let mm = d.getMonth() + 1;
                    if (mm < 10) mm = '0' + mm;
                    let yy = d.getFullYear() % 100;
                    ResultList.innerHTML += `
                        <div class="video">
                        <a class="preview" style="background-image: url(${responseData.ResultVideos[i].preview})" href="http://localhost:3000/watch?${responseData.ResultVideos[i].path}"></a> 
                        <div class="description-video">
                            <div class="name">${responseData.ResultVideos[i].name}</div>
                            <div class="avatar-and-name">
                                <a class="avatar-for-description" href="http://localhost:3000/videos?${responseData.UsersInfo[i].login}" style="background: url('${responseData.UsersInfo[i].avatar}') center / cover no-repeat"></a>
                                <div class="name-channel-stat">
                                    <a class="channel" href="http://localhost:3000/videos?${responseData.UsersInfo[i].login}">${responseData.UsersInfo[i].name}</a>
                                </div>
                            </div>
                            <div class="stat">
                                <img class="views-icon" src="images/dark-icon/views.png">
                                <div class="num">${responseData.ResultVideos[i].views}</div>
                                <div class="views"></div>
                                <div>•</div>
                                <div class="date">${dd + '/' + mm + '/' + yy}</div>
                            </div>
                        </div>
                    </div>`
                }
            }
            if (responseData.ResultUsers.length !== 0) {
                for (let i = 0; i < responseData.ResultUsers.length; i++) {
                    ResultList.innerHTML += `
                    <div class="channel-result">
                        <a class="avatar-for-result" href="http://localhost:3000/videos?${responseData.ResultUsers[i].login}" style="background: url('${responseData.ResultUsers[i].avatar}') center / cover no-repeat"></a>
                        <div class="channel-result-stat">
                            <a class="name-channel-result" href="http://localhost:3000/videos?${responseData.ResultUsers[i].login}">${responseData.ResultUsers[i].name}</a>
                            <div class="description-channel">${responseData.ResultUsers[i].description}</div>
                            <div class="channel-des">
                                <img class="sub-icon" src="images/dark-icon/menu/subscriptions.png"/>
                                <div class="num-subs">${responseData.CountsSubs[i].count}</div>
                                <div class="subs"></div>
                            </div>
                        </div>
                    </div>
                    `
                }
                console.log(responseData.ResultUsers);
            }
        }
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}
Result().then(() => {
    checkTheme();
});