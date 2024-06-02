Exit.addEventListener('click', function() {
    if (token) {
        deleteCookie('jwtToken');
        location.reload();
    } else {
        location.replace("/login");
    }
})

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}