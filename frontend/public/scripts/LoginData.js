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
            ErrorMessageLogin.innerHTML = responseData
            ErrorMessageLogin.style.marginLeft = "160px";
        } else if (responseData == "Неправильный пароль") {
            ErrorMessageLogin.innerHTML = responseData;
            ErrorMessageLogin.style.marginLeft = "180px";
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
        window.location.replace("http://localhost:3000/profile-setting");
    } else {
        window.location.replace("http://localhost:3000/");
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
      
    const token = getCookie("jwtToken");
    if (token) {
        try {
            const decodedToken = await verifyTokenOnServer(token);
            console.log('Токен верифицирован:', decodedToken);
            chekProfile(decodedToken.id);
        } catch (error) {
            console.error('Ошибка при верификации токена:', error);
            localStorage.removeItem('jwtToken');
        }
    } else {
        console.log('Токен отсутствует, пользователь не аутентифицирован.');
    }
});