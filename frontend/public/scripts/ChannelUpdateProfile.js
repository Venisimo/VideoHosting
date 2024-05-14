document.getElementById('popup').addEventListener('submit', async function(event) {
    event.preventDefault();
    let userName = InputName.value;
    let userDescription = TextAreaDes.value;
    let trimmedDescription = userDescription.trim();
    let trimmedName = userName.trim();
    if (userName == "") {
        ErrorMessageEditProfile.style.marginLeft = "285px";
        return ErrorMessageEditProfile.innerHTML = "Вы не ввели имя!";
    } else if (userName.length < 4) {
        ErrorMessageEditProfile.style.marginLeft = "240px";
        return ErrorMessageEditProfile.innerHTML = "Вы ввели короткое имя!";
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