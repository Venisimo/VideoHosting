let tk = localStorage.getItem("jwtToken");

async function addComment(ComTextValue) {
    try {
        const Data = {
            id: UserId,
            video: VideoPath,
            text: ComTextValue
        }
        const response = await fetch('/addComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error('Ошибка при отправке коммента');
        } 
    } catch (error) {
        console.error('Ошибка при отправке коммента:', error);
        throw error;
    }
}
async function getComment() {
    try {
        const Data = {
            video: VideoPath,
        }
        const response = await fetch('/getComments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        console.log(responseData);
        for (let i = responseData.comments.length - 1; i > -1; i--) {
            // console.log(responseData.comments[i].user_id);
            for (let j = 0; j < responseData.Answers.answer[i].length / 2; j++) {
                n = responseData.Answers.answer[i].length / 2;
                console.log(responseData.Answers.answer[i][j], responseData.Answers.answer[i][j + n]);
                n++
            }  
            let d = new Date(responseData.comments[i].date);
            let dd = d.getDate();
            if (dd < 10) dd = '0' + dd;
            let mm = d.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            let yy = d.getFullYear() % 100;
            let buttonDelete = `<button class="Delete-Comment" data-comment-id="${responseData.comments[i].id}">Удалить</button>`;
            let Comment = `<div class="comment-entry">
                            <div class="basic-comment">
                                <a href="http://localhost:3000/videos?${responseData.UsersInfo[i].login}">
                                    <img src="${responseData.UsersInfo[i].avatar}" class="comment-avatar"/>
                                </a>
                                <div class="channel-name-comment">
                                    <div class="comment-user-date">
                                        <div class="comment-block-user-name">${responseData.UsersInfo[i].name}</div>
                                        <div>•</div>
                                        <div class="date">${dd + '/' + mm + '/' + yy}</div>
                                    </div>
                                    <div class="comment-text-user">
                                    ${responseData.comments[i].text}
                                    </div>
                                </div>
                            </div>
                            <div class="answer-block">
                                <button class="like-answer"></button>
                                <div class="num-like-anwser">1</div>
                                <div class="likes-answer"></div>
                                <button class="dislike-answer"></button>
                                <div class="num-dislike-answer">9</div>
                                <div class="dislikes-answer"></div>
                                <details>
                                    <summary class="btn-answer">
                                    Ответить
                                    </summary>
                                    <div class="self-answer">
                                        <div class="self-answer-entry">
                                            <a href="http://localhost:3000/channel/videos">
                                                <img src="" class="answer-avatar"/>
                                            </a>
                                            <textarea class="comment-text-answer" cols="90" rows="1" placeholder="Введите Комментарий"></textarea>
                                        </div>
                                        <button class="btn-cancel-answer">Отмена</button>
                                        <button type="submit" class="btn-submit-answer" data-comment-id="${responseData.comments[i].id}" disabled>Ответить</button>
                                    </div>
                                </details>`;
            let CommentDelete = Comment + buttonDelete;
            if (responseData.comments[i].user_id == UserId || SubscribeBtn.innerHTML == "Удалить") {
                VideoBlock.innerHTML += CommentDelete + `</div></div>`
            } else {
                VideoBlock.innerHTML += Comment + `</div></div>`
            }
        }
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

        let boolSoundLvl = true;
        let boolHighScreen = false;
        let boolEndVideo = false;
        let boolStartVideo = false;

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
        const CommentText = document.querySelector('.comment-text');
        const BtnSumbit = document.querySelector('.btn-submit');
        const BtnCancel = document.querySelector('.btn-cancel');
        const CommentTextAnswers = document.querySelectorAll('.comment-text-answer');
        const BtnAnswersList = document.querySelectorAll(".btn-answers");
        CommentText.addEventListener('input', function () {
            resizeTextarea();
            if(CommentText.value.trim() !== "") {
                BtnSumbit.disabled = false;
            } else {
                BtnSumbit.disabled = true;
            }
        });
        BtnCancel.addEventListener('click', function() {
            CommentText.value = "";
            BtnSumbit.disabled = true;
            CommentText.style.height = "22px";
        })
        
        CommentText.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && event.shiftKey) {
                CommentText.rows += 1;
                resizeTextarea();
            }
        });
        
        function resizeTextarea() {
            CommentText.style.height = '20px'; 
            CommentText.style.height = CommentText.scrollHeight + 'px';
        }
        
        CommentText.addEventListener('keydown', function (event) {
            if(tk) {
                if (event.key === 'Enter' && !event.shiftKey) {
                    if (CommentText.value.trim() !== "") {
                        addComment(CommentText.value.trim());
                        location.reload();
                    } 
                }
            } else {
                OpenModel();
            }
        });
        
        BtnSumbit.addEventListener('click', function() {
            if (tk) {
                if (CommentText.value.trim() !== "") {
                    addComment(CommentText.value.trim());
                    location.reload();
                } 
            } else {
                OpenModel();
            }
        });
        
        function resizeCommentTextAnswer(CommentTextAnswer) {
            CommentTextAnswer.style.height = '20px'; 
            CommentTextAnswer.style.height = CommentTextAnswer.scrollHeight + 'px';
        }
        
        CommentTextAnswers.forEach(CommentTextAnswer => {
            CommentTextAnswer.addEventListener('keydown', function (event) {
                if (event.key === 'Enter' && event.shiftKey) {
                    CommentTextAnswer.rows += 1;
                    resizeCommentTextAnswer(CommentTextAnswer);
                } else if (event.key === 'Enter' && !event.shiftKey) {
                    CommentId = btnSubmitAnswer.getAttribute('data-comment-id');
                    addAnswer(CommentTextAnswer.value.trim(), CommentId);
                    let parentElement = btnSubmitAnswer.parentNode;
                    let grandParentElemnt = parentElement.parentNode;
                    grandParentElemnt.remove();
                }
            });
        
            let ParentCommentTextAnswer = CommentTextAnswer.parentElement;
            let btnCancelAnswer = ParentCommentTextAnswer.nextElementSibling;
            let btnSubmitAnswer = btnCancelAnswer.nextElementSibling;
        
            CommentTextAnswer.addEventListener('input', function () {
                resizeCommentTextAnswer(CommentTextAnswer);
                if (CommentTextAnswer.value.trim() !== "") {
                    btnSubmitAnswer.disabled = false;
                } else {
                    btnSubmitAnswer.disabled = true;
                }
            });
        
            btnCancelAnswer.addEventListener('click', function() {
                CommentTextAnswer.value = "";
                btnSubmitAnswer.disabled = true;
                CommentTextAnswer.style.height = "22px";
            });
        
            btnSubmitAnswer.addEventListener('click', function() {
                CommentId = btnSubmitAnswer.getAttribute('data-comment-id');
                addAnswer(CommentTextAnswer.value.trim(), CommentId);
                let parentElement = btnSubmitAnswer.parentNode;
                let grandParentElemnt = parentElement.parentNode;
                grandParentElemnt.remove();
            });
        });
        
        BtnAnswersList.forEach(Element => {
            let Rotate = 0;
            Element.addEventListener('click', function() {
                Rotate += 0.5;
                Element.children[0].style.transform = 'rotate('+Rotate+'turn)';
            })
        });
        
        const LikeBtn = document.querySelector('.like');
        const DislikeBtn = document.querySelector('.dislike');
        const NumLike = document.querySelector('.num-like');
        const NumDislike = document.querySelector('.num-dislike');

        let boolLike = false;
        let boolDislike = false;
        let LikeBeforeParse;
        let DislikeBeforeParse;
        let likeElement = NumLike.nextElementSibling;
        let DislikeElement = NumDislike.nextElementSibling;
        function LDinit() {
            if (LikeBtn.classList.contains('video-panel-on')) {
                boolLike = true;
            }
            if (DislikeBtn.classList.contains('video-panel-on')) {
                boolDislike = true;
            }
            console.log(boolLike);
            console.log(boolDislike);
        }
        LikeBtn.addEventListener('click', function() {
            let SelfDislike = Number(NumDislike.innerHTML);
            let SelfLike = Number(NumLike.innerHTML);
            if (!boolLike) {
                if (likeElement.innerHTML == "") { 
                    SelfLike += 1;
                    NumLike.innerHTML = SelfLike;
                    LikeText();
                    LikeBeforeParse = NumLike.innerHTML;
                    ParseNumberLikes();
                }
                boolLike = true;
                if (boolDislike) {
                    if (DislikeElement.innerHTML == "") {
                        SelfDislike -= 1;
                        NumDislike.innerHTML = SelfDislike;
                    } else {
                        if (DislikeBeforeParse[1] == 0 && DislikeBeforeParse.length > 3) {
                            let NumDislikeBeforeParse = Number(DislikeBeforeParse) 
                            NumDislikeBeforeParse -= 1;
                            NumDislike.innerHTML = NumDislikeBeforeParse;
                            DislikeText();
                            ParseNumberDislikes();
                        }
                    }
                    boolDislike = false;
                }
                console.log(SelfDislike);
            } else {
                if (likeElement.innerHTML == "") {
                    SelfLike -= 1;
                    NumLike.innerHTML = SelfLike;
                } else {
                    if (LikeBeforeParse[1] == 0 && LikeBeforeParse.length > 3) {
                        let NumLikeBeforeParse = Number(LikeBeforeParse) 
                        NumLikeBeforeParse -= 1;
                        NumLike.innerHTML = NumLikeBeforeParse;
                        LikeText();
                        ParseNumberLikes();
                    }
                }
                boolLike = false;
            }
        });

        DislikeBtn.addEventListener('click', function() {
            let SelfDislike = Number(NumDislike.innerHTML);
            let SelfLike = Number(NumLike.innerHTML);
            if (!boolDislike) {
                if (DislikeElement.innerHTML == "") {
                    SelfDislike += 1;
                    NumDislike.innerHTML = SelfDislike;
                    DislikeText();
                    DislikeBeforeParse = NumDislike.innerHTML;
                    ParseNumberDislikes();
                }
                boolDislike = true;
                if (boolLike) {
                    if (likeElement.innerHTML == "") {
                        SelfLike -= 1;
                        NumLike.innerHTML = SelfLike;
                    } else {
                        if (LikeBeforeParse[1] == 0 && LikeBeforeParse.length > 3) {
                            let NumLikeBeforeParse = Number(LikeBeforeParse) 
                            NumLikeBeforeParse -= 1;
                            NumLike.innerHTML = NumLikeBeforeParse;
                            LikeText();
                            ParseNumberLikes();
                        }
                    }
                    boolLike = false;
                }
            } else {
                if (DislikeElement.innerHTML == "") {
                    SelfDislike -= 1;
                    NumDislike.innerHTML = SelfDislike;
                } else {
                    if (DislikeBeforeParse[1] == 0 && DislikeBeforeParse.length > 3) {
                        let NumDislikeBeforeParse = Number(DislikeBeforeParse) 
                        NumDislikeBeforeParse -= 1;
                        NumDislike.innerHTML = NumDislikeBeforeParse;
                        DislikeText();
                        ParseNumberDislikes();
                    }
                }
                boolDislike = false;
            }
        });
        LDinit();
        if (!response.ok) {
            throw new Error('Ошибка при отправке коммента');
        } 
    } catch (error) {
        console.error('Ошибка при отправке коммента:', error);
        throw error;
    }
}

async function getSelfProfile() {
    try {
        const Data = {
            id: UserId,
        }
        const response = await fetch('/getProfileForComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        const CommentAvatar = document.querySelector(".comment-avatar");
        CommentAvatar.src = responseData.avatar;
        const AnswerAvatar = document.querySelectorAll(".answer-avatar");
        AnswerAvatar.forEach(Element => {
            Element.src = responseData.avatar;
        })
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка при отправке коммента');
        } 
    } catch (error) {
        console.error('Ошибка при отправке коммента:', error);
        throw error;
    }
}
async function getCountComment() {
    try {
        const Data = {
            path: VideoPath,
        }
        const response = await fetch('/getCountComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        NumComment.innerHTML = responseData.count;
        if (!response.ok) {
            throw new Error('Ошибка при отправке коммента');
        } 
    } catch (error) {
        console.error('Ошибка при отправке коммента:', error);
        throw error;
    }
}

async function deleteComment(CommentId) {
    try {
        const Data = {
            id: CommentId,
        }
        const response = await fetch('/deleteComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при отправке коммента');
        } 
    } catch (error) {
        console.error('Ошибка при отправке коммента:', error);
        throw error;
    }
}
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('Delete-Comment')) {
        let DeleteComment = event.target;
        let CommentId = DeleteComment.getAttribute('data-comment-id');
        deleteComment(CommentId);
        let parentElement = DeleteComment.parentNode;
        let grandParentElemnt = parentElement.parentNode;
        grandParentElemnt.remove();
    }
});

async function addAnswer(anwerTextValue, ComId) {
    try {
        const Data = {
            CommentId: ComId,
            UId: UserId,
            text: anwerTextValue,
        }
        const response = await fetch('/addAnswer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при отправке коммента');
        } 
    } catch (error) {
        console.error('Ошибка при отправке коммента:', error);
        throw error;
    }
}