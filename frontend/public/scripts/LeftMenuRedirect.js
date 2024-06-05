HomeButton.addEventListener('click', function() {
    location.href = "/";
});
HistoryViews.addEventListener('click', function() {
    if (token) {
        location.href = "/history";
    } else {
        OpenModel();
    }
});
Profile.addEventListener('click', function() {
    if (token) {
        location.href = "/channel/videos";
    } else {
        location.href = "/login";
    }
});
Messenger.addEventListener('click', function() {
    location.href = "/dev";
});