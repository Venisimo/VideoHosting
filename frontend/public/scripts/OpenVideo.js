document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('preview')) {
        let Video = event.target
        if (Video.getAttribute('data-path') != null) {
            console.log(Video.getAttribute('data-path'));
        }
    }
});