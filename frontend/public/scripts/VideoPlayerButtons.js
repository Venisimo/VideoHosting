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

SortCommentButton.addEventListener('click', function() {
    SortCommentBlock.classList.toggle('on');
})

BtnTopComment.addEventListener('click', function() {
});
BtnTopComment.addEventListener('click', function() {
});