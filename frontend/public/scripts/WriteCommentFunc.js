let tk = localStorage.getItem("jwtToken");

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
            console.log('send');
            console.log(CommentText.value);
        }
    } else {
        OpenModel();
    }
});

BtnSumbit.addEventListener('click', function() {
    if (tk) {
        console.log('send');
        console.log(CommentText.value);
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
        }
    });
});

CommentTextAnswers.forEach(CommentTextAnswer => {
    CommentTextAnswer.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            console.log('send');
            console.log(CommentTextAnswer.value);
        }
    });
});

CommentTextAnswers.forEach(CommentTextAnswer => {
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
        btnCancelAnswer.addEventListener('click', function() {
            CommentTextAnswer.value = "";
            btnSubmitAnswer.disabled = true;
            CommentTextAnswer.style.height = "22px";
        });
        CommentTextAnswer.addEventListener('keydown', function (event) {
            if (tk) {
                if (event.key === 'Enter' && !event.shiftKey) {
                    console.log('send');
                    console.log(CommentTextAnswer.value);
                }
            } else {
                OpenModel();
            }
        });
        btnSubmitAnswer.addEventListener('click', function() {
            if (tk) {
                console.log('send');
                console.log(CommentTextAnswer.value);
            } else {
                OpenModel();
            }
        });
    });
});

BtnAnswersList.forEach(Element => {
    let Rotate = 0;
    Element.addEventListener('click', function() {
        Rotate += 0.5;
        Element.children[0].style.transform = 'rotate('+Rotate+'turn)';
    })
})