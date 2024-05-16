let tok = localStorage.getItem("jwtToken");
HomeButton.addEventListener('click', function() {
    if (tok) {
        location.href = "http://localhost:3000/";
    } else {
        location.href = "http://localhost:3000/s";
    }
});
HistoryViews.addEventListener('click', function() {
    if (tok) {
        location.href = "http://localhost:3000/history";
    } else {
        OpenModel();
    }
});
Profile.addEventListener('click', function() {
    if (tok) {
        location.href = "http://localhost:3000/channel/videos";
    } else {
        location.href = "http://localhost:3000/login";
    }
});