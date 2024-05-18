Exit.addEventListener('click', function() {
    if (tok) {
        localStorage.removeItem('jwtToken');
        location.reload();
    } else {
        location.replace("http://localhost:3000/login");
    }
})