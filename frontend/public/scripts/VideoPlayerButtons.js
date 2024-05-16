let t = localStorage.getItem("jwtToken");
if (t) {
    SubscribeBtn.addEventListener('click', function() {
        SubscribeBtn.classList.toggle('video-panel-on');
        if (rus) {
            if (SubscribeBtn.innerHTML == "Подписаться") {
                SubscribeBtn.innerHTML = "Отписаться";    
            } else if (SubscribeBtn.innerHTML == "Отписаться") {
                SubscribeBtn.innerHTML = "Подписаться";
            }
        } else {
            if (SubscribeBtn.innerHTML == "Subscribe") {
                SubscribeBtn.innerHTML = "Unsubscribe";    
            } else if (SubscribeBtn.innerHTML == "Unsubscribe") {
                SubscribeBtn.innerHTML = "Subscribe";
            }
        }
    });
    LikeBtn.addEventListener('click', function() {
        LikeBtn.classList.toggle('video-panel-on');
        DislikeBtn.classList.remove('video-panel-on');
    });
    DislikeBtn.addEventListener('click', function() {
        DislikeBtn.classList.toggle('video-panel-on');
        LikeBtn.classList.remove('video-panel-on');
    });
        
} else {
    SubscribeBtn.addEventListener('click', OpenModel);
    LikeBtn.addEventListener('click', OpenModel);
    DislikeBtn.addEventListener('click', OpenModel);
}

SortCommentButton.addEventListener('click', function() {
    SortCommentBlock.classList.toggle('on');
    if (!boolSCB) {
        VideoBlock.style.overflow = "hidden";
        boolSCB = true;
    } else if (boolSCB) {
        VideoBlock.style.overflow = "";
        boolSCB = false;
    }
});
// SortCommentButton.addEventListener('blur', function() {
//     SortCommentBlock.classList.remove('on');
//     VideoBlock.style.overflow = "";
//     boolSCB = false;
// });

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