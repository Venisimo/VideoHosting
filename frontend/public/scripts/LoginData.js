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
            localStorage.setItem("jwtToken", responseData.token);
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

console.log(localStorage.getItem("jwtToken"));

window.addEventListener('DOMContentLoaded', async function() {
    const token = localStorage.getItem('jwtToken');
    console.log(token);
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