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
            console.log("Успешный вход")
            chekProfile();
        }
        async function chekProfile() {
            console.log(Data);
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
                window.location.replace("http://localhost:3000/profile-setting?" + userLogin);
            } else {
                window.location.replace("http://localhost:3000/");
            }
            console.log(responseData.name); 
        }
    } catch (error) {
        console.error(error);
    
    }
    // try {

    // } catch (error ){

    // }
});
