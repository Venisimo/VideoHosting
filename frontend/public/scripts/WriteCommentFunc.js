CommentText.addEventListener('input', function () {
    resizeTextarea();
});

CommentText.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.shiftKey) {
        CommentText.rows += 1;
        resizeTextarea();
    }
});

function resizeTextarea() {
    CommentText.style.height = CommentText.scrollHeight + 'px'; 
}

window.addEventListener('load', resizeTextarea);