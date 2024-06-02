function VideoPlayer() {
    const Video = document.querySelector('.video-in-player');
    const VolumeRangeInput = document.querySelector('.volume_range');
    const pauseBtn = document.querySelector('.pause-icon');
    const stopBtn = document.querySelector('.stop-icon');
    const SoundLevelIcon = document.querySelector('.sound-lvl-icon');
    const HighScreenBtn = document.querySelector('.high-screen-icon');
    const FullscreenBtn = document.querySelector('.fullscreen-icon');
    const ProgressBar = document.querySelector('.progress-bar');
    const CurrentTimeVideo = document.querySelector('.current');
    const DurationTimeVideo = document.querySelector('.duration');
    const VideoplayerPanel = document.querySelector('.videoplayer-panel');
    const settingsIcon = document.querySelector('.settings-videoplayer-icon');
    const input = document.querySelector('input');
    const textArea = document.querySelector('textarea');
    let isFullScreen = false;
    function toggleVideoStatus() {
        if (Video.paused) {
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
        if (isFullScreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
            isFullScreen = false;
        } else {
            if (Video.requestFullscreen) {
                Video.requestFullscreen();
            } else if (Video.mozRequestFullScreen) { // Firefox
                Video.mozRequestFullScreen();
            } else if (Video.webkitRequestFullscreen) { // Chrome, Safari and Opera
                Video.webkitRequestFullscreen();
            } else if (Video.msRequestFullscreen) { // IE/Edge
                Video.msRequestFullscreen();
            }
            isFullScreen = true;
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.target.tagName === 'TEXTAREA') {
        } else if (event.target.tagName === 'INPUT') {
        } else {
            if (event.key === 'f' || event.key === 'F' || event.key === 'а' || event.key === 'А') {
                toggleFullScreen();
            } 
        }
    });

    document.addEventListener('fullscreenchange', function() {
        isFullScreen = !!document.fullscreenElement;
    });
    
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
    DurationTime();
    function range() {
        let ProgressBarValue = ProgressBar.value;
        ProgressBar.style.background = 'linear-gradient(to right, rgb(79, 244, 215) 0%, rgb(79, 244, 215) '+ProgressBarValue+'%, #fff '+ProgressBarValue+'%, #fff 100%)';
    }
    function setVolume() {
        let VolumeRangeValue = VolumeRangeInput.value / 100;
        let InputRangeValue = VolumeRangeInput.value;
        VolumeRangeInput.style.background = 'linear-gradient(to right, rgb(79, 244, 215) 0%, rgb(79, 244, 215) '+InputRangeValue+'%, #fff '+InputRangeValue+'%, #fff 100%)';
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
            Video.style.height = "830px";
            Video.style.width = "1250px";
            VideoBlock.style.width = "1400px"
            VideoBlock.style.marginLeft = "0px";
            Video.style.marginTop = "100px";
            VideoplayerPanel.style.width = "113.5%";
            HighScreenBtn.style.marginLeft = "1125px";
            settingsIcon.style.marginLeft = "1165px";
            FullscreenBtn.style.marginLeft = "1195px";
            boolHighScreen = true;
        } else {
            Video.style.height = "600px";
            Video.style.width = "1100px";
            VideoBlock.style.width = "1200px"
            VideoBlock.style.marginLeft = "75px";
            Video.style.marginTop = "130px";
            VideoplayerPanel.style.width = "100%";
            HighScreenBtn.style.marginLeft = "975px";
            settingsIcon.style.marginLeft = "1015px";
            FullscreenBtn.style.marginLeft = "1045px";
            boolHighScreen = false;
        }
    });
    
    FullscreenBtn.addEventListener('click', function() {
        toggleFullScreen();
    })
    
    Video.addEventListener('click', function() {
        VideoplayerPanel.style.visibility = "visible";
        if (!boolStartVideo) {
            VolumeRangeInput.value = 100;
            Video.volume = 1;
            setVolume();
            boolStartVideo = true;
        }  
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
}
function isFullScreen() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
}
isFullScreen()