function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  } 
const tk = getCookie("jwtToken");
if (!tk) {
    ExitStr.innerHTML = "Войти";
    RightMenu.removeChild(MyProfie);
    RightMenu.id = "NotAutorization";
} 
MyProfie.addEventListener('click', function() {
    location.href = "/channel/videos"; 
});