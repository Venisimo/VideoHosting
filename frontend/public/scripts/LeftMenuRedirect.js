HomeButton.addEventListener('click', function() {
    location.href = "http://localhost:3000/";
});
HistoryViews.addEventListener('click', function() {
    if (token) {
        location.href = "http://localhost:3000/history";
    } else {
        OpenModel();
    }
});
Profile.addEventListener('click', function() {
    if (token) {
        location.href = "http://localhost:3000/channel/videos";
    } else {
        location.href = "http://localhost:3000/login";
    }
});