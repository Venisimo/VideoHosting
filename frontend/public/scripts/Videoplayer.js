function toggleVideoStatus() {
    if(Video.paused) {
        Video.play();
        pauseBtn.src = 'images/light-icon/videoplayer/pause-icon.png';
        pauseBtn.style.width = "25px";
        pauseBtn.style.height = "25px";
        pauseBtn.style.marginTop = "0px";
        pauseBtn.style.marginLeft = "30px";
    } else {
        Video.pause();
        pauseBtn.src = 'images/light-icon/videoplayer/play-icon.png';
        pauseBtn.style.width = "20px";
        pauseBtn.style.height = "20px";
        pauseBtn.style.marginTop = "2px";
        pauseBtn.style.marginLeft = "35px";
    }
}

function toggleFullScreen() {
    
}


function AfterEnd() {
    if (Video.currentTime == Video.duration) {
        boolEndVideo = true;
    }
    console.log(boolEndVideo)
    if (boolEndVideo) {
        toggleVideoStatus();
        if (Video.currentTime != Video.duration) {
            boolEndVideo = false;
        }
    }
}


function stopVideo() {
    Video.currentTime = 0;
    Video.pause();
    pauseBtn.src = 'images/light-icon/videoplayer/play-icon.png';
    pauseBtn.style.width = "20px";
    pauseBtn.style.height = "20px";
    pauseBtn.style.marginTop = "2px";
    pauseBtn.style.marginLeft = "35px";
    
}

function updateProgress() {
    ProgressBar.value = (Video.currentTime / Video.duration) * 100;
    let minutes = Math.floor(Video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    let seconds = Math.floor(Video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    CurrentTimeVideo.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
    console.log(Video.paused);
    Video.currentTime = (ProgressBar.value * Video.duration) / 100;
    AfterEnd();
}

function DurationTime() {
    let minutes = Math.floor(Video.duration / 60) * 100;
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    let seconds = Math.floor(Video.duration % 60);
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
    Video.volume = VolumeRangeValue;
    if (Video.volume >= 0.75) {
        SoundLevelIcon.src = 'images/light-icon/videoplayer/sound-lvl3-icon.png';
    } else if (Video.volume < 0.75 && Video.volume >= 0.25) {
        SoundLevelIcon.src = 'images/light-icon/videoplayer/sound-lvl2-icon.png';
    } else if (Video.volume < 0.25 && Video.volume > 0) {
        SoundLevelIcon.src = 'images/light-icon/videoplayer/sound-lvl1-icon.png';
    } else if (Video.volume == 0) {
        SoundLevelIcon.src = 'images/light-icon/videoplayer/sound-lvl0-icon.png';
    }
}
let InputRangeValue;
SoundLevelIcon.addEventListener('click', function() {
    let VolumeRangeValue = VolumeRangeInput.value / 100;
    if (VolumeRangeValue > 0) {
        InputRangeValue = VolumeRangeInput.value;
    } else if (VolumeRangeValue == 0 && boolSoundLvl) {
        InputRangeValue = 20;
        VolumeRangeValue = 0.2;
    }
    if (boolSoundLvl) {
        if (VolumeRangeInput.value == 0) {
            Video.volume = VolumeRangeValue;
            VolumeRangeInput.value = InputRangeValue;
        } else {
            Video.volume = 0;
            VolumeRangeInput.value = 0;
            boolSoundLvl = false;
        }
        setVolume();
    } else if (!boolSoundLvl) {
        Video.volume = VolumeRangeValue;
        VolumeRangeInput.value = InputRangeValue;
        boolSoundLvl = true;
        setVolume();
    }
});

HighScreenBtn.addEventListener('click', function() {
    if (!boolHighScreen) {
        Video.style.height = "800px";
        Video.style.width = "1300px";
        VideoBlock.style.width = "1400px"
        VideoBlock.style.marginLeft = "0px";
        Video.style.marginTop = "100px";
        boolHighScreen = true;
    } else {
        Video.style.height = "600px";
        Video.style.width = "1100px";
        VideoBlock.style.width = "1200px"
        VideoBlock.style.marginLeft = "75px";
        Video.style.marginTop = "130px";
        boolHighScreen = false;
    }
});

FullscreenBtn.addEventListener('click', function() {
    Video.requestFullscreen()
})

Video.addEventListener('click', function() {
    VideoplayerPanel.style.visibility = "visible";
    VolumeRangeInput.value = 100;
    Video.volume = 1;
    setVolume();
    toggleVideoStatus();
})

Video.addEventListener('ended', function() {
    pauseBtn.src = 'images/light-icon/videoplayer/replay-icon.png';
    pauseBtn.style.width = "25px";
    pauseBtn.style.height = "25px";
    pauseBtn.style.marginTop = "0px";
    pauseBtn.style.marginLeft = "30px";
})

VolumeRangeInput.addEventListener('change', setVolume);
Video.addEventListener('loadedmetadata', DurationTime);
ProgressBar.addEventListener('change',setProgress);
Video.addEventListener('change',setProgress);
Video.addEventListener('timeupdate', function() {
    updateProgress();
    range();
});
pauseBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);