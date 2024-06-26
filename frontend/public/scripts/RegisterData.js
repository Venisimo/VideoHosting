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
    console.log(token);
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

document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let userLogin = loginInput.value;
    let userPassword = passwordInput.value;
    let userEmail = emailInput.value;
    let RepitPassword = passwordRepitInput.value;
    console.log(RepitPassword);
    const Data = { 
        login: userLogin, 
        password: userPassword, 
        email: userEmail };
    let boolEmail 
    try {
        function validateEmail(email) {
            let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            boolEmail = re.test(String(email).toLowerCase())
        }
        validateEmail(userEmail);
        if (userLogin == "") {
            if (localStorage.getItem('language') == "ru") {
                ErrorMessageReg.style.marginLeft = "200px";
                return ErrorMessageReg.innerHTML = "Вы не ввели логин!";
            } else if (localStorage.getItem('language') == "en") {
                ErrorMessageReg.style.marginLeft = "100px";
                return ErrorMessageReg.innerHTML = "You have not entered your login!";
            }  
        } else if (userLogin.length < 4) {
            if (localStorage.getItem('language') == "ru") {
                ErrorMessageReg.style.marginLeft = "150px";
                return ErrorMessageReg.innerHTML = "Слишком короткий логин!";
            } else if (localStorage.getItem('language') == "en") {
                ErrorMessageReg.style.marginLeft = "200px";
                return ErrorMessageReg.innerHTML = "Login is too short!";
            }  
        } else if (userPassword.length < 4) {
            if (localStorage.getItem('language') == "ru") {
                ErrorMessageReg.style.marginLeft = "150px";
                return ErrorMessageReg.innerHTML = "Слишком короткий пароль!";
            } else if (localStorage.getItem('language') == "en") {
                ErrorMessageReg.style.marginLeft = "150px";
                return ErrorMessageReg.innerHTML = "The password is too short!";
            }  
        } else if (!boolEmail) {
            if (localStorage.getItem('language') == "ru") {
                ErrorMessageReg.style.marginLeft = "160px";
                return ErrorMessageReg.innerHTML = "Почта указана неверно!";
            } else if (localStorage.getItem('language') == "en") {
                ErrorMessageReg.style.marginLeft = "175px";
                return ErrorMessageReg.innerHTML = "The email is incorrect!";
            }
        } else if (RepitPassword != userPassword) {
            if (localStorage.getItem('language') == "ru") {
                ErrorMessageReg.style.marginLeft = "180px";
                return ErrorMessageReg.innerHTML = "Пароли не совпадают!";
            } else if (localStorage.getItem('language') == "en") {
                ErrorMessageReg.style.marginLeft = "185px";
                return ErrorMessageReg.innerHTML = "Password mismatch!";
            }
        }
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        console.log(responseData.error);
        if (!response.ok) {
            if (responseData.error == "Почта уже используется") {
                if (localStorage.getItem('language') == "ru") {
                    ErrorMessageReg.style.marginLeft = "150px";
                    ErrorMessageReg.innerHTML = responseData.error;
                } else if (localStorage.getItem('language') == "en") {
                    ErrorMessageReg.style.marginLeft = "175px";
                    ErrorMessageReg.innerHTML = "Email is already in use";
                }
            } else {
                if (localStorage.getItem('language') == "ru") {
                    ErrorMessageReg.style.marginLeft = "120px";
                    ErrorMessageReg.innerHTML = responseData.error;
                } else if (localStorage.getItem('language') == "en") {
                    ErrorMessageReg.style.marginLeft = "200px";
                    ErrorMessageReg.innerHTML = "User already exists";
                }
            }
        } else {
            OpenModel();
        }
 

    } catch (error) {
        console.error(error);
    
    }
});

function OpenModel() {
    Modal.style.display = "flex";
}