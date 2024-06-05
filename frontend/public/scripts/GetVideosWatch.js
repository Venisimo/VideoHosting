async function GetWatchVideos() {
    try {
        const response = await fetch('/getStartVideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const responseData = await response.json();
        for (let i = 0; i < responseData.VideosInfo.length; i++) {
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
            RecBlock.innerHTML += `
                <div class="video">
                <a class="preview" style="background-image: url(${responseData.VideosInfo[i].preview})" href="/watch?${responseData.VideosInfo[i].path}">
                <div class="DurationVideo">${minutes}:${remainingSeconds}</div>
                </a> 
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
GetWatchVideos();