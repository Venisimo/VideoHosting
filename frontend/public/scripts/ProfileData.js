let userId;
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
    const token = localStorage.getItem('jwtToken');
    console.log(token);
    if (token) {
        try {
            const decodedToken = await verifyTokenOnServer(token);
            console.log('Токен верифицирован:', decodedToken);
            userId = decodedToken.id;
            chekProfile(userId)
        } catch (error) {
            console.error('Ошибка при верификации токена:', error);
            localStorage.removeItem('jwtToken');
        }
    } else {
        console.log('Токен отсутствует, пользователь не аутентифицирован.');
    }
});
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
    if (responseData.name !== null) {
        window.location.replace("http://localhost:3000/");
    }
}
document.getElementById('profileForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let userName = InputName.value;
    let userDescription = TextAreaDes.value;
    let userAvatar = "images/Avatar-for-channel.png";
    let trimmedDescription = userDescription.trim();
    let trimmedName = userName.trim();
    if (trimmedDescription === '') {
        ErrorMessageProfile.style.marginLeft = "220px";
        return ErrorMessageProfile.innerHTML = "Введите данные корректно!";
    } 
    if (userName == "") {
        ErrorMessageProfile.style.marginLeft = "285px";
        return ErrorMessageProfile.innerHTML = "Вы не ввели имя!";
    } else if (userName.length < 4) {
        ErrorMessageProfile.style.marginLeft = "240px";
        return ErrorMessageProfile.innerHTML = "Вы ввели короткое имя!";
    }
    const Data = { 
        name: trimmedName, 
        description: trimmedDescription,
        avatar: userAvatar,
        id: userId
    }; 
    console.log(Data);
    console.log(JSON.stringify(Data));
    try {
        const response = await fetch('/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при настройке профиля');
        } else {
            console.log("Профиль успешно настроен")
        }
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error(error);
    
    }
});