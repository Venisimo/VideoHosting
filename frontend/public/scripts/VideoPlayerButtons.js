document.addEventListener('click', function(event) {
    if (event.target.matches('.subscribe-btn')) {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            OpenModel();
        } else {
            event.target.classList.toggle('video-panel-on');
            if (rus) {
                if (event.target.innerHTML == "Подписаться") {
                    event.target.innerHTML = "Отписаться"; 
                    subscribe();   
                } else if (event.target.innerHTML == "Отписаться") {
                    event.target.innerHTML = "Подписаться";
                    unsubscribe()
                }
            } else {
                if (event.target.innerHTML == "Subscribe") {
                    event.target.innerHTML = "Unsubscribe";
                    subscribe();    
                } else if (event.target.innerHTML == "Unsubscribe") {
                    event.target.innerHTML = "Subscribe";
                    unsubscribe()
                }
            }
        }
    }
});

document.addEventListener('click', function(event) {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        if (event.target.matches('.like')) {
            event.target.classList.toggle('video-panel-on');
            document.querySelector('.dislike').classList.remove('video-panel-on');
            Like();
        } else if (event.target.matches('.dislike')) {
            event.target.classList.toggle('video-panel-on');
            document.querySelector('.like').classList.remove('video-panel-on');
            Dislike();
        }
    } else {
        if (event.target.matches('.subscribe-btn') || event.target.matches('.like') || event.target.matches('.dislike')) {
            OpenModel();
        }
    }

    if (event.target.matches('.sort-comment-btn')) {
        SortCommentBlock.classList.toggle('on');
        if (!boolSCB) {
            VideoBlock.style.overflow = "hidden";
            boolSCB = true;
        } else {
            VideoBlock.style.overflow = "";
            boolSCB = false;
        }
    } else if (event.target.matches('.show-des')) {
        if (!boolShowDes) {
            event.target.innerHTML = "Скрыть описание";
            boolShowDes = true
        } else {
            event.target.innerHTML = "Показать описание";
            boolShowDes = false
        }
    } else if (event.target.matches('.btn-top-comment')) {
        event.target.classList.add('on');
        document.querySelector('.btn-new-comment').classList.remove('on');
    } else if (event.target.matches('.btn-new-comment')) {
        event.target.classList.add('on');
        document.querySelector('.btn-top-comment').classList.remove('on');
    }
});

ShowDes.addEventListener('click', function() {
    if (!boolShowDes) {
        ShowDes.innerHTML = "Скрыть описание";
        boolShowDes = true
    } else {
        ShowDes.innerHTML = "Показать описание";
        boolShowDes = false
    }
})

BtnTopComment.addEventListener('click', function() {
    BtnTopComment.classList.add('on');
    BtnNewComment.classList.remove('on');
});
BtnNewComment.addEventListener('click', function() {
    BtnNewComment.classList.add('on');
    BtnTopComment.classList.remove('on');
});

async function Like() {
    try {
        const Data = {
            id: UserId,
            path: VideoPath,
        }
        const response = await fetch('/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}
async function Dislike() {
    try {
        const Data = {
            id: UserId,
            path: VideoPath,
        }
        const response = await fetch('/dislike', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}
async function CountLikesDislikes() {
    try {
        const Data = {
            path: VideoPath,
        }
        const response = await fetch('/getLD', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        NumLike.innerHTML = responseData.countLike.count;
        NumDislike.innerHTML = responseData.countDislike.count;
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}
async function ChekSelfLD() {
    try {
        const Data = {
            path: VideoPath,
            id: UserId,
        }
        const response = await fetch('/chekSelfLD', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        if (typeof responseData.chekLike !== 'undefined') {
            LikeBtn.classList.add('video-panel-on');
        }
        if (typeof responseData.chekDisLike !== 'undefined') {
            DislikeBtn.classList.add('video-panel-on');
        }
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}