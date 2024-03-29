SubscribeBtn.addEventListener('click', function() {
    SubscribeBtn.classList.toggle('video-panel-on');
    if (SubscribeBtn.innerHTML == "Подписаться") {
        SubscribeBtn.innerHTML = "Отписаться";    
    } else if (SubscribeBtn.innerHTML == "Отписаться") {
        SubscribeBtn.innerHTML = "Подписаться";
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
