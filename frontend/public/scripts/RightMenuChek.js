if (!tok) {
    ExitStr.innerHTML = "Войти";
    RightMenu.removeChild(MyProfie);
    RightMenu.id = "NotAutorization";
} 
MyProfie.addEventListener('click', function() {
    location.href = "http://localhost:3000/channel/videos"; 
});