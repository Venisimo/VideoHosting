let VideoPath = location.href;
let arrPath = VideoPath.split('?');
let channelLogin;
VideoPath = arrPath[1];
console.log(VideoPath);
async function GetVideo() {
    try {
        const Data = {
            path: VideoPath
        }
        const response = await fetch('/getWatchVideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (response.ok && typeof UserId !== 'undefined') {
            addInHtistory();
        }
        const responseData = await response.json();
        if (responseData.UserId == UserId) {
            SubscribeBtn.innerHTML = "Удалить"
        }
        let d = new Date(responseData.VideoInfo.date);
        let dd = d.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = d.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let yy = d.getFullYear() % 100;    

        Video.poster = responseData.VideoInfo.preview;
        let source = Video.querySelector('source');
        source.src = "videos/" + VideoPath;
        VideoName.innerHTML = responseData.VideoInfo.name;
        DescriptionEntryText.innerHTML += responseData.VideoInfo.description;
        NumWatchVideo.innerHTML = responseData.VideoInfo.views;
        NumWatchDate.innerHTML = dd + '/' + mm + '/' + yy;
        console.log(VideoBlockChannelName);
        VideoBlockChannelName.innerHTML = responseData.UserInfo.name;
        AvatarWatchVideo.style.background = `url(..${responseData.UserInfo.avatar}) center no-repeat`;
        AvatarWatchVideo.style.backgroundSize = `cover`;
        AvatarWatchVideo.href = "http://localhost:3000/videos?" + responseData.UserInfo.login;
        channelLogin = responseData.UserInfo.login;
        Video.load(); 
    } catch (error) {
        throw error;
    }
}

async function addInHtistory() {
    const Data = {
        path: VideoPath,
        id: UserId,
    }
    const response = await fetch('/addHistory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data),
    });
    const responseData = await response.json();
    console.log(responseData);
}