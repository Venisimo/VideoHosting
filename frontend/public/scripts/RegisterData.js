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
            ErrorMessageReg.style.marginLeft = "200px";
            return ErrorMessageReg.innerHTML = "Вы не ввели логин!";
        } else if (userLogin.length < 4) {
            ErrorMessageReg.style.marginLeft = "150px";
            return ErrorMessageReg.innerHTML = "Слишком короткий логин!";
        } else if (userPassword.length < 4) {
            ErrorMessageReg.style.marginLeft = "150px";
            return ErrorMessageReg.innerHTML = "Слишком короткий пароль!";
        } else if (!boolEmail) {
            ErrorMessageReg.style.marginLeft = "150px";
            return ErrorMessageReg.innerHTML = "Почта указана неверно!";
        } else if (RepitPassword != userPassword) {
            ErrorMessageReg.style.marginLeft = "180px";
            return ErrorMessageReg.innerHTML = "Пароли не совпадают!";
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
            ErrorMessageReg.innerHTML = responseData.error;
            if (responseData.error == "Почта уже используется") {
                ErrorMessageReg.style.marginLeft = "150px"
            } else {
                ErrorMessageReg.style.marginLeft = "120px"
            }
        } else {
            window.location.replace("http://localhost:3000/login");
        }
 

    } catch (error) {
        console.error(error);
    
    }
});
