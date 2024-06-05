async function GetStartVideo() {
    try {
        const response = await fetch('/getStartVideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        
        let VideosBlock = document.querySelector(".videos");

        let VideosChannel;
        for (let i = 0; i < responseData.VideosInfo.length; i++) {
            if (i % 4 === 0) {
                VideosChannel = createNewChannel(VideosBlock);
            }
            console.log(responseData.VideosInfo[i].duration);
            let d = new Date(responseData.VideosInfo[i].date);
            let dd = d.getDate();
            if (dd < 10) dd = '0' + dd;
            let mm = d.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            let yy = d.getFullYear() % 100;

            let DurationVideo = responseData.VideosInfo[i].duration;
            let minutes;
            let remainingSeconds;
            function formatDuration(DurationVideo) {
                minutes = Math.floor(DurationVideo / 60);
                remainingSeconds = Math.floor(DurationVideo % 60);
                if (minutes < 10) {
                    minutes = '0' + String(minutes);
                }
                if (remainingSeconds < 10) {
                    remainingSeconds = '0' + String(remainingSeconds);
                }
            }
            formatDuration(DurationVideo)
            VideosChannel.innerHTML += `
                <div class="video">
                    <div class="preview">
                        <a href="/watch?${responseData.VideosInfo[i].path}">
                            <img class="imgPreview" src="${responseData.VideosInfo[i].preview}" />
                        </a>
                    </div>
                    <div class="DurationVideo">${minutes}:${remainingSeconds}</div>
                    <div class="description-video">
                        <div class="avatar-and-name">
                            <a class="avatar-for-description" href="/videos?${responseData.UsersInfo[i].login}" style="background: url('${responseData.UsersInfo[i].avatar}') center / cover no-repeat"></a>
                            <div class="name-channel-stat">
                                <div class="name">${responseData.VideosInfo[i].name}</div>
                                <a class="channel" href="/videos?${responseData.UsersInfo[i].login}">${responseData.UsersInfo[i].name}</a>
                                <div class="stat">
                                    <img class="views-icon" src="images/dark-icon/views.png">
                                    <div class="num">${responseData.VideosInfo[i].views}</div>
                                    <div class="views"></div>
                                    <div>•</div>
                                    <div class="date">${dd + '/' + mm + '/' + yy}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        ViewsText();
        ParseNumber();
    } catch (error) {
        throw error;
    }
}


function createNewChannel(parent) {
    const newRowVideos = document.createElement('div');
    newRowVideos.classList.add('row-videos');
    parent.appendChild(newRowVideos);
    return newRowVideos;
}

GetStartVideo().then(()=> {
    checkTheme();
    chekBurgerMenu();
});