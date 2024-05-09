document.getElementById('profileForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let currentUrl = window.location.href
    let arr = currentUrl.split('?');

    let userLogin = arr[1];
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
    ErrorMessageProfile
    const Data = { 
        name: trimmedName, 
        description: trimmedDescription,
        avatar: userAvatar,
        login: userLogin
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
