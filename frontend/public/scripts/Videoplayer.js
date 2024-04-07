function toggleVideoStatus() {
    if(video.paused) {
        video.play();
        pauseBtn.src = 'images/light-icon/videoplayer/pause-icon.png';
    } else {
        video.pause();
        pauseBtn.src = 'images/light-icon/videoplayer/play-icon.png';
    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function updateProgress() {
    ProgressBar.value = (video.currentTime / video.duration) * 100;
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    CurrentTimeVideo.innerHTML = `${minutes}:${seconds}`
}

function setProgress() {
    video.currentTime = (ProgressBar.value * video.duration) / 100;
}

function DurationTime() {
    let minutes = Math.floor(video.duration / 60) * 100;
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    let seconds = Math.floor(video.duration % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    DurationTimeVideo.innerHTML = `${minutes}:${seconds}`
}
video.addEventListener('loadedmetadata', DurationTime);
ProgressBar.addEventListener('change',setProgress);
video.addEventListener('timeupdate', updateProgress);
pauseBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);