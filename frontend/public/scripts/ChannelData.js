let UserId;
const token = localStorage.getItem("jwtToken");
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
        if (!response.ok) {
            throw new Error('Ошибка при верификации токена');
        }
        UserId = responseData.decodedToken.id;
        console.log(UserId)
        GetInfo();
        GetLinks();
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
        DesChannel.innerHTML = responseData.description;
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
        console.log(responseData);
        for (let i = 0; i < responseData.links.length; i++) {
            UlListLinks.innerHTML += `<li><a href="${responseData.links[i]}" data-link-id="${responseData.linksId[i]}" class="links-in-des">${responseData.links[i]}</a>
            <button class="btn-edit-link" type="button"></button><button class="btn-delete-link" type="button">X</button></li>`;
        }
        UlListLinks.innerHTML += `<li><input class="input-link-add"></input><button class="btn-add-link" type="button">+</button></li>`;
        const linksInDes = document.querySelectorAll('.links-in-des');
        linksInDes.forEach(LinkInDes => {
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            let maxWidth = 350;
            context.font = '28px Inter-Regular';
            let text = LinkInDes.innerHTML;
            let textWidth = context.measureText(text).width;
            if (textWidth > maxWidth) {
                let ellipsisWidth = context.measureText('...').width;
                let truncatedWidth = maxWidth - ellipsisWidth;
                let truncatedText = '';
                for (let i = 0; i < text.length; i++) {
                    let partialText = text.substring(0, i + 1);
                    let partialWidth = context.measureText(partialText).width;
                    if (partialWidth > truncatedWidth) {
                        break;
                    }
                    truncatedText = partialText;
                }
                LinkInDes.innerHTML = truncatedText + '...';
            }
        });
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
    const inputLinkAdd = document.querySelectorAll('.input-link-add');
    let userInputLinksAdd = [];
    inputLinkAdd.forEach(Element => {
        let userInputLinkAdd = Element.value.trim();
        if (userInputLinkAdd != '') {
            userInputLinksAdd.push(userInputLinkAdd);
        } 
    });
    if (userInputLinksAdd.length > 0) {
        const DataLink = {
            id: UserId,
            links: userInputLinksAdd,
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
    }
});

document.getElementById('popup').addEventListener('submit', async function(event) {
    event.preventDefault();
    const inputLinkEdit = document.querySelectorAll('.input-link-edit');
    let userInputLinksPut = [];
    let userInputLinksIdPut = [];
    let userLinks = [];
    inputLinkEdit.forEach(Element => {
        let userLinkId = Element.getAttribute('data-link-id');
        let userInputLinkPut = Element.value.trim();
        if (userInputLinkPut != '') {
            userInputLinksPut.push(userInputLinkPut);
            userInputLinksIdPut.push(userLinkId);
            let linkObject = {
                link: userInputLinkPut,
                linkId: userLinkId
            };
            userLinks.push(linkObject);
        } 
    });
    if (userLinks.length > 0) {
        const DataLink = {
            id: UserId,
            links: userLinks,
        }
        console.log(DataLink); 
        try {
            const responseLink = await fetch('/profileLinkUpdate', {
                method: 'PUT',
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
    }
});

let userDeleteLinks = [];
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-delete-link')) {
        let li = event.target.parentElement;
        linkId = li.firstElementChild.getAttribute('data-link-id');     
        if (!userDeleteLinks.includes(linkId)) {
            userDeleteLinks.push(linkId);
        }
    }
});


document.getElementById('popup').addEventListener('submit', async function(event) {
    event.preventDefault();
    if (userDeleteLinks.length > 0) {
        const DataLink = {
            id: UserId,
            linkIds: userDeleteLinks,
        }
        console.log(DataLink); 
        try {
            const responseLink = await fetch('/profileLinkDelete', {
                method: 'DELETE',
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
    }
});
