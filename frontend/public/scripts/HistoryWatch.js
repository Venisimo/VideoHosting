async function GetHistory() {
    try {
        const Data = {
            id: UserId,
        }
        const response = await fetch('/getHistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        console.log(responseData);
        for (let i = responseData.historyVideos.length - 1; i > -1; i--) {
            let d = new Date(responseData.VideosInfo[i].date);
            let dd = d.getDate();
            if (dd < 10) dd = '0' + dd;
            let mm = d.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            let yy = d.getFullYear() % 100;
            ResultList.innerHTML += `
                <div class="video">
                <a class="preview" style="background-image: url(${responseData.VideosInfo[i].preview})" href="/watch?${responseData.historyVideos[i].path}"></a> 
                <div class="description-video">
                    <div class="name">${responseData.VideosInfo[i].name}</div>
                    <div class="avatar-and-name">
                        <a class="avatar-for-description" href="/videos?${responseData.UsersInfo[i].login}" style="background: url('${responseData.UsersInfo[i].avatar}') center / cover no-repeat"></a>
                        <div class="name-channel-stat">
                            <a class="channel" href="/videos?${responseData.UsersInfo[i].login}">${responseData.UsersInfo[i].name}</a>
                        </div>
                    </div>
                    <div class="stat">
                        <img class="views-icon" src="images/dark-icon/views.png">
                        <div class="num">${responseData.VideosInfo[i].views}</div>
                        <div class="views"></div>
                        <div>•</div>
                        <div class="date">${dd + '/' + mm + '/' + yy}</div>
                    </div>
                </div>
            </div>`
        }
        ParseText();
        ViewsText();
        ParseNumber();
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}

async function DeleteHistory() {
    try {
        const Data = {
            id: UserId,
        }
        const response = await fetch('/deleteHistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при удалении');
        }
    } catch (error) {
        throw error;
    }
}

async function SearchHistory(SearchValue) {
    try {
        const Data = {
            id: UserId,
            name: SearchValue,
        }
        const response = await fetch('/searchHistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при поиске');
        }
        const responseData = await response.json();
        ResultList.innerHTML = "";
        for (let i = responseData.VideosInfo.length - 1; i > -1; i--) {
            let d = new Date(responseData.VideosInfo[i].date);
            let dd = d.getDate();
            if (dd < 10) dd = '0' + dd;
            let mm = d.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            let yy = d.getFullYear() % 100;
            ResultList.innerHTML += `
                <div class="video">
                <a class="preview" style="background-image: url(${responseData.VideosInfo[i].preview})" href="/watch?${responseData.VideosInfo[i].path}"></a> 
                <div class="description-video">
                    <div class="name">${responseData.VideosInfo[i].name}</div>
                    <div class="avatar-and-name">
                        <a class="avatar-for-description" href="/videos?${responseData.UsersInfo[i].login}" style="background: url('${responseData.UsersInfo[i].avatar}') center / cover no-repeat"></a>
                        <div class="name-channel-stat">
                            <a class="channel" href="/videos?${responseData.UsersInfo[i].login}">${responseData.UsersInfo[i].name}</a>
                        </div>
                    </div>
                    <div class="stat">
                        <img class="views-icon" src="images/dark-icon/views.png">
                        <div class="num">${responseData.VideosInfo[i].views}</div>
                        <div class="views"></div>
                        <div>•</div>
                        <div class="date">${dd + '/' + mm + '/' + yy}</div>
                    </div>
                </div>
            </div>`
        }
    } catch (error) {
        throw error;
    }
}
InputSearchHistory.addEventListener("keyup", e => {
    if (e.key == "Enter" && InputSearchHistory.value.trim() != "") {
        SearchHistory(InputSearchHistory.value.trim());
    }
});
SearchHistoryIcon.addEventListener('click', function() {
    if (InputSearchHistory.value.trim() != "") {
        SearchHistory(InputSearchHistory.value.trim());
    } 
});
BtnClearHistory.addEventListener('click', DeleteHistory);
BtnClearHistory.addEventListener('click', function() {
    location.reload();
});