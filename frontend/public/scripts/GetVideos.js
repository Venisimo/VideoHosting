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

            let d = new Date(responseData.VideosInfo[i].date);
            let dd = d.getDate();
            if (dd < 10) dd = '0' + dd;
            let mm = d.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            let yy = d.getFullYear() % 100;
            VideosChannel.innerHTML += `
                <div class="video">
                    <div class="preview">
                        <a href="/watch?${responseData.VideosInfo[i].path}">
                            <img class="imgPreview" src="${responseData.VideosInfo[i].preview}" />
                        </a>
                    </div>
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
        ParseText();
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
function ParseText() {
    const Name = document.querySelectorAll(".name");
    Name.forEach(element => {
        if (element.innerHTML.length > 16) {
            let el1 = element.innerHTML.slice(0, 15);
            let el2 = element.innerHTML.slice(15); 
            for (let i = 15; i > 0; i--) {
                if (el1[i] == " ") {
                    let a = i;
                    el1 = element.innerHTML.slice(0, a);
                    let el4 = element.innerHTML.slice(a, 15);
                    element.innerHTML = el1 + "<br>" + el4 + el2;
                    break;
                } else {
                    element.innerHTML = el1 + "-" + "<br>" + el2;
                }
            }
        }

        if (element.innerHTML.length > 36) {
            let el1 = element.innerHTML.slice(0, 33);
            element.innerHTML = el1 + "...";
        }
    });

    const NameChannel = document.querySelectorAll(".name-channel");
    NameChannel.forEach(element => {
        if (element.innerHTML.length > 10) {
            let el1 = element.innerHTML.slice(0, 8);
            element.innerHTML = el1 + "...";
        }
    });

    const Channel = document.querySelectorAll(".channel");
    Channel.forEach(element => {
        if (element.innerHTML.length > 30) {
            let el1 = element.innerHTML.slice(0, 28);
            element.innerHTML = el1 + "...";
        }
    });
}