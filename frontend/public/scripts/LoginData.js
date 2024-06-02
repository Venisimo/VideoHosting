document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let userLogin = loginInput.value;
    let userPassword = passwordInput.value;
    const Data = { 
        login: userLogin, 
        password: userPassword 
    }; 
    console.log(Data);
    console.log(JSON.stringify(Data));
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при входе');
        } else {
            
        } 
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        if (responseData == "Пользователь не найден") {
            if (localStorage.getItem('language') == "ru") {
                ErrorMessageLogin.innerHTML = responseData;
                ErrorMessageLogin.style.marginLeft = "160px";
            } else if (localStorage.getItem('language') == "en") {
                ErrorMessageLogin.innerHTML = "User is not found";
                ErrorMessageLogin.style.marginLeft = "210px";
            }
        } else if (responseData == "Неправильный пароль") {
            if (localStorage.getItem('language') == "ru") {
                ErrorMessageLogin.innerHTML = responseData;
                ErrorMessageLogin.style.marginLeft = "180px";
            } else if (localStorage.getItem('language') == "en") {
                ErrorMessageLogin.innerHTML = "Wrong password";
                ErrorMessageLogin.style.marginLeft = "220px";
            }
        } else {
            console.log("Успешный вход");
            // localStorage.setItem("jwtToken", responseData.token);
            function setTokenInCookie(token) {
                document.cookie = `jwtToken=${token}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            }
            setTokenInCookie(responseData.token);
            OpenModel();
        }
    } catch (error) {
        console.error(error);
    
    }
});
function OpenModel() {
    Modal.style.display = "flex";
}

async function chekProfile(userId) {
    const Data = {
        id: userId,
    } 
    const response = await fetch('/ChekProfile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data),
    });
    console.log(response);
    if (!response.ok) {
        throw new Error('Ошибка при входе');
    }
    const responseData = await response.json();
    if (responseData.name === null) {
        window.location.replace("/profile-setting");
    } else {
        window.location.replace("/");
    }
    console.log(responseData.name); 
}
async function verifyTokenOnServer(token) {
    try {
        const response = await fetch('/verifyToken', {
            method: 'POST',
            headers: {
                'Authorization': token
            }
        });
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка при верификации токена');
        }
        return responseData.decodedToken; 
    } catch (error) {
        console.error('Ошибка при верификации токена:', error);
        throw error;
    }
}


window.addEventListener('DOMContentLoaded', async function() {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
      
    const token = getCookie("jwtToken");
    if (token) {
        try {
            const decodedToken = await verifyTokenOnServer(token);
            console.log('Токен верифицирован:', decodedToken);
            chekProfile(decodedToken.id);
        } catch (error) {
            console.error('Ошибка при верификации токена:', error);
            deleteCookie('jwtToken');
        }
    } else {
        console.log('Токен отсутствует, пользователь не аутентифицирован.');
    }
});