document.getElementById('popup').addEventListener('submit', async function(event) {
    event.preventDefault();
    let userName = InputName.value;
    let userDescription = TextAreaDes.value;
    let trimmedDescription = userDescription.trim();
    let trimmedName = userName.trim();
    if (userName == "") {
        if (localStorage.getItem('language') == "ru") {
            ErrorMessageEditProfile.style.marginLeft = "285px";
            return ErrorMessageEditProfile.innerHTML = "Вы не ввели имя!";
        } else if (localStorage.getItem('language') == "en") {
            ErrorMessageEditProfile.style.marginLeft = "230px";
            return ErrorMessageEditProfile.innerHTML = "you did not enter a name!";
        }
    } else if (userName.length < 4) {
        if (localStorage.getItem('language') == "ru") {
            ErrorMessageEditProfile.style.marginLeft = "240px";
            return ErrorMessageEditProfile.innerHTML = "Вы ввели короткое имя!";;
        } else if (localStorage.getItem('language') == "en") {
            ErrorMessageEditProfile.style.marginLeft = "270px";
            return ErrorMessageEditProfile.innerHTML = "Name is too short!";
        }
    }
    const Data = { 
        name: trimmedName, 
        description: trimmedDescription,
        id: UserId,
    };
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
            OpenModel();
        }
        const responseData = await response.json();
    } catch (error) {
        console.error(error);
    
    }
});