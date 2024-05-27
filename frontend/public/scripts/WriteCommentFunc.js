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
            let buttonDelete = `<button class="Delete-Comment" data-comment-id="${responseData.comments[i].id}">Удалить</button>`;
            let Answer = "";
            let SummaryAnswer = `<summary class="btn-answers">
                                    <img src="images/dark-icon/videoplayer/answers-summary-logo.png" class="answers-summary-icon">
                                    <div class="btn-answers-str">Ответы</div>
                                </summary>`
            for (let j = 0; j < responseData.Answers.answer[i].length / 2; j++) {
                
                let d = new Date(responseData.Answers.answer[i][j].date);
                let dd = d.getDate();
                if (dd < 10) dd = '0' + dd;
                let mm = d.getMonth() + 1;
                if (mm < 10) mm = '0' + mm;
                let yy = d.getFullYear() % 100;
                n = responseData.Answers.answer[i].length / 2;
                console.log(responseData.Answers.answer[i][j], responseData.Answers.answer[i][j + n]);
                Answer += `<div class="answer-comment">
                                <a href="http://localhost:3000/videos?${responseData.Answers.answer[i][j + n][0].login}">
                                    <img src="${responseData.Answers.answer[i][j + n][0].avatar}" class="answer-avatar-user"/>
                                </a>
                                <div class="channel-name-comment">
                                    <div class="comment-user-date">
                                        <div class="comment-block-user-name">${responseData.Answers.answer[i][j + n][0].name}</div>
                                        <div>•</div>
                                        <div class="date">${dd + '/' + mm + '/' + yy}</div>
                                    </div>
                                    <div class="answer-text-user">
                                    ${responseData.Answers.answer[i][j].text}
                                    </div>
                                </div>
                            </div>`;
                let AnswerDelete = `<button class="Answer-Comment" data-comment-id="${responseData.Answers.answer[i][j].id}">Удалить</button>`;
                if (responseData.Answers.answer[i][j].user_id == UserId || SubscribeBtn.innerHTML == "Удалить") {
                    Answer += AnswerDelete;
                } 
                n++;
            }  
            // console.log(Answer);
            let d = new Date(responseData.comments[i].date);
            let dd = d.getDate();
            if (dd < 10) dd = '0' + dd;
            let mm = d.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            let yy = d.getFullYear() % 100;
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
                                <details>
                                    <summary class="btn-answer">
                                    Ответить
                                    </summary>
                                    <div class="self-answer">
                                        <div class="self-answer-entry">
                                            <a href="http://localhost:3000/channel/videos">
                                                <img src="images/Avatar.png" class="answer-avatar"/>
                                            </a>
                                            <textarea class="comment-text-answer" cols="90" rows="1" placeholder="Введите Комментарий"></textarea>
                                        </div>
                                        <button class="btn-cancel-answer">Отмена</button>
                                        <button type="submit" class="btn-submit-answer" data-comment-id="${responseData.comments[i].id}" disabled>Ответить</button>
                                    </div>
                                </details>`;
            let CommentDelete = Comment + buttonDelete;
            if (responseData.comments[i].user_id == UserId || SubscribeBtn.innerHTML == "Удалить" || SubscribeBtn.innerHTML == "Delete") {
                if (Answer.length > 0) {
                    VideoBlock.innerHTML += CommentDelete + `</div>` + `<details>` + SummaryAnswer + Answer + `</details>` + `</div>`
                } else {
                    VideoBlock.innerHTML += CommentDelete + `</div>` + `</div>`
                }
            } else {
            if (Answer.length > 0) {
                    VideoBlock.innerHTML += Comment + `</div>` + `<details>` + SummaryAnswer + Answer + `</details>` + `</div>`
                } else {
                    VideoBlock.innerHTML += Comment + `</div>` + `</div>`
                }
            }
        }
        if (!response.ok) {
            throw new Error('Ошибка при отправке коммента');
        }
        CommentBtns();
    } catch (error) {
        console.error('Ошибка при отправке коммента:', error);
        throw error;
    }
}

function CommentBtns() {
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
            throw new Error('Ошибка при удалении коммента');
        } 
    } catch (error) {
        console.error('Ошибка удалении коммента:', error);
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
async function deleteAnswer(CommentId) {
    try {
        const Data = {
            id: CommentId,
        }
        const response = await fetch('/deleteAnswer', {
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
    if (event.target && event.target.classList.contains('Answer-Comment')) {
        let DeleteComment = event.target;
        let CommentId = DeleteComment.getAttribute('data-comment-id');
        deleteAnswer(CommentId);
        let Answer = DeleteComment.previousElementSibling;
        DeleteComment.remove();
        Answer.remove();
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