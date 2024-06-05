async function GetSelfVideo() {
    try {
        const Data = {
            id: UserId
        };
        const response = await fetch('/getSelfVideo', {
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
        console.log(responseData);
        const VideosBlock = document.querySelector(".videos-block");
        let VideosChannel = createNewChannel(VideosBlock);
        VideosChannel.innerHTML += `
                <div class="video">
                    <div class="preview">
                        <button class="btn-add-video">
                            <div class="plus">+</div>
                        </button>
                    </div>  
                    <div class="description-video">
                        <div class="avatar-and-name">
                            <div class="name-channel-stat">
                                <div class="str-add-video">Добавить видео</div>
                            </div>
                        </div>
                    </div>
                    `
        for (let i = 0; i < responseData.VideosPath.length; i++) {
            if (VideosChannel.childElementCount >= 4) {
                VideosChannel = createNewChannel(VideosBlock);
            }

            let d = new Date(responseData.VideosDate[i]);
            let dd = d.getDate();
            if (dd < 10) dd = '0' + dd;
            let mm = d.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            let yy = d.getFullYear() % 100;

            let DurationVideo = responseData.VideosDuration[i];
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
            <a href="/watch?${responseData.VideosPath[i]}" type="button" data-barba="false" class="video">
            <div class="preview" style="background-image: url('${responseData.VideosPreviews[i]}')"></div>
            <div class="DurationVideo">${minutes}:${remainingSeconds}</div>
            <div class="description-video">
                <div class="avatar-and-name">
                    <div class="name-channel-stat">
                        <div class="name">${responseData.VideosNames[i]}</div>
                        <div class="stat">
                            <img class="views-icon" src="/images/dark-icon/views.png">
                            <div class="num">${responseData.VideosViews[i]}</div>
                            <div class="views"></div>
                            <div>•</div>
                            <div class="date">${dd + '/' + mm + '/' + yy}</div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        `;
        }

        // ParseText();
        ViewsText();
        ParseNumber();
    } catch (error) {
        console.error(error);
    }
}

function createNewChannel(parent) {
    const newChannel = document.createElement('div');
    newChannel.classList.add('videos-channel');
    parent.appendChild(newChannel);
    return newChannel;
}

// function ParseText() {
//     const Name = document.querySelectorAll(".name");
//     Name.forEach(element => {
//         if (element.innerHTML.length > 16) {
//             let el1 = element.innerHTML.slice(0, 15);
//             let el2 = element.innerHTML.slice(15); 
//             for (let i = 15; i > 0; i--) {
//                 if (el1[i] == " ") {
//                     let a = i;
//                     el1 = element.innerHTML.slice(0, a);
//                     let el4 = element.innerHTML.slice(a, 15);
//                     element.innerHTML = el1 + "<br>" + el4 + el2;
//                     break;
//                 } else {
//                     element.innerHTML = el1 + "-" + "<br>" + el2;
//                 }
//             }
//         }

//         if (element.innerHTML.length > 36) {
//             let el1 = element.innerHTML.slice(0, 33);
//             element.innerHTML = el1 + "...";
//         }
//     });

//     const NameChannel = document.querySelectorAll(".name-channel");
//     NameChannel.forEach(element => {
//         if (element.innerHTML.length > 10) {
//             let el1 = element.innerHTML.slice(0, 8);
//             element.innerHTML = el1 + "...";
//         }
//     });

//     const Channel = document.querySelectorAll(".channel");
//     Channel.forEach(element => {
//         if (element.innerHTML.length > 30) {
//             let el1 = element.innerHTML.slice(0, 28);
//             element.innerHTML = el1 + "...";
//         }
//     });
// }
