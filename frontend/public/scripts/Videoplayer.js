function toggleVideoStatus() {
    if(video.paused) {
        video.play();
        pauseBtn.src = 'images/light-icon/videoplayer/pause-icon.png';
        pauseBtn.style.width = "25px";
        pauseBtn.style.height = "25px";
        pauseBtn.style.marginTop = "0px";
        pauseBtn.style.marginLeft = "30px";
    } else {
        video.pause();
        pauseBtn.src = 'images/light-icon/videoplayer/play-icon.png';
        pauseBtn.style.width = "20px";
        pauseBtn.style.height = "20px";
        pauseBtn.style.marginTop = "2px";
        pauseBtn.style.marginLeft = "35px";
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
function range() {
    let ProgressBarValue = ProgressBar.value;
    ProgressBar.style.background = '-webkit-linear-gradient(left, rgb(79, 244, 215) 0%, rgb(79, 244, 215) '+ProgressBarValue+'%, #fff '+ProgressBarValue+'%, #fff 100%)';
}
function setVolume() {
    let VolumeRangeValue = VolumeRangeInput.value / 100;
    let InputRangeValue = VolumeRangeInput.value;
    VolumeRangeInput.style.background = '-webkit-linear-gradient(left, rgb(79, 244, 215) 0%, rgb(79, 244, 215) '+InputRangeValue+'%, #fff '+InputRangeValue+'%, #fff 100%)';
    video.volume = VolumeRangeValue;
    if (video.volume >= 0.75) {
        soundLevelIcon.src = 'images/light-icon/videoplayer/sound-lvl3-icon.png';
    } else if (video.volume < 0.75 && video.volume >= 0.25) {
        soundLevelIcon.src = 'images/light-icon/videoplayer/sound-lvl2-icon.png';
    } else if (video.volume < 0.25 && video.volume > 0) {
        soundLevelIcon.src = 'images/light-icon/videoplayer/sound-lvl1-icon.png';
    } else if (video.volume == 0) {
        soundLevelIcon.src = 'images/light-icon/videoplayer/sound-lvl0-icon.png';
    }
}
soundLevelIcon.addEventListener('click', function() {
    let VolumeRangeValue = VolumeRangeInput.value / 100;
    let InputRangeValue;
    if (VolumeRangeValue > 0) {
        InputRangeValue = VolumeRangeInput.value;
    }
    if (boolSoundLvl) {
        video.volume = 0;
        VolumeRangeInput.value = 0;
        boolSoundLvl = false;
        setVolume();
    } else if (!boolSoundLvl) {
        video.volume = VolumeRangeValue;
        VolumeRangeInput.value = InputRangeValue;
        boolSoundLvl = true;
        setVolume();
    }
});
FullscreenBtn.addEventListener('click', function() {
    video.requestFullscreen()
})
VolumeRangeInput.addEventListener('change', setVolume);
video.addEventListener('loadedmetadata', DurationTime);
ProgressBar.addEventListener('change',setProgress);
video.addEventListener('timeupdate', function() {
    updateProgress();
    range();
});
pauseBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);