SubscribeBtn.addEventListener('click', function() {
    SubscribeBtn.classList.toggle('video-panel-on');
    if (rus) {
        if (SubscribeBtn.innerHTML == "Удалить") {
            SubscribeBtn.innerHTML = "Удалено";
            DeleteVideo();
        }
    } else {
        if (SubscribeBtn.innerHTML == "Delete") {
            SubscribeBtn.innerHTML = "deleted";
            DeleteVideo();
        } 
    }
});

async function DeleteVideo() {
    try {
        const Data = {
            path: VideoPath,
        }
        const response = await fetch('/deleteVideo', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при удалении');
        } 
    } catch (error) {
        console.error(error);
    
    }
}