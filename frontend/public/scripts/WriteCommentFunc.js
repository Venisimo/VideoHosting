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
    if (event.key === 'Enter' && !event.shiftKey) {
        console.log('send');
        console.log(CommentText.value);
    }
});