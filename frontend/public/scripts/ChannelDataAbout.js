const token = localStorage.getItem("jwtToken");
let UserId;
verifyTokenOnServer();
async function verifyTokenOnServer() {
    try {
        const response = await fetch('/verifyToken', {
            method: 'POST',
            headers: {
                'Authorization': token
            }
        });
        console.log(response);
        const responseData = await response.json();
        UserId = responseData.decodedToken.id;
        if (!response.ok) {
            throw new Error('Ошибка при верификации токена');
        }
        GetInfo();
        GetLinks()
        return responseData.decodedToken; 
    } catch (error) {
        console.error('Ошибка при верификации токена:', error);
        throw error;
    }
}
async function GetInfo() {
    try {
        const Data = {
            id: UserId
        }
        const response = await fetch('/userInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        let d = new Date(responseData.date)
        let dd = d.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = d.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let yy = d.getFullYear() % 100;
        RegDate.innerHTML =  dd + '.' + mm + '.' + yy;
        DesChannel.innerHTML = responseData.description;
        DesChannelAbout.innerHTML = responseData.description;
        TextAreaDes.value = DesChannel.innerHTML;
        InputName.value = responseData.name;
        AvatarForChannel.src = responseData.avatar
        AvatarForChannelPopup.src = responseData.avatar;
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}

async function GetLinks() {
    try {
        const Data = {
            id: UserId
        }
        const response = await fetch('/getLink', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        UlListLinks.innerHTML = `<li><a href="${responseData.link}" class="links-in-des">${responseData.link}</a>
        <button class="btn-edit-link" type="button"></button><button class="btn-delete-link" type="button">X</button></li>
        <li><input class="input-link-add"></input><button class="btn-add-link" type="button">+</button></li>`;
        LinksBlockChannel.innerHTML = `<div class="links-str">Ссылки:</div>
        <p><a href="${responseData.link}">${responseData.link}</a></p>`
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
    } catch (error) {
        throw error;
    }
}
document.getElementById('popup').addEventListener('submit', async function(event) {
    event.preventDefault();
    let userName = InputName.value;
    let userDescription = TextAreaDes.value;
    let userAvatar = AvatarForChannelPopup.src;
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
        id: UserId,
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
document.getElementById('popup').addEventListener('submit', async function(event) {
    event.preventDefault();
    let linkInsert = null;
    const inputLinkAdd = document.querySelector('.input-link-add');
    let userInputLinkAdd = inputLinkAdd.value;
    userInputLinkAdd = userInputLinkAdd.trim();
    if (userInputLinkAdd === '') { 
        linkInsert = null;
        console.log(linkInsert);
    } else {
        linkInsert = userInputLinkAdd;
        console.log(linkInsert);
    }
    const DataLink = {
        id: UserId,
        link: linkInsert,
    }
    console.log(DataLink); 
    try {
        const responseLink = await fetch('/profileLink', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataLink),
        });
        const responseLinkData = await responseLink.json();
        console.log(responseLinkData);
        if (!responseLink.ok) {
            throw new Error('Ошибка при настройке профиля');
        } else {
            console.log("Профиль успешно настроен")
        }
    } catch (error) {
        console.error(error);
    
    }
});