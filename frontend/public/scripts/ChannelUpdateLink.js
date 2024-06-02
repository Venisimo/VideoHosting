document.getElementById('popup').addEventListener('submit', async function(event) {
    event.preventDefault();
    let userName = InputName.value;
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
        try {
            const responseLink = await fetch('/profileLinkUpdate', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(DataLink),
            });
            const responseLinkData = await responseLink.json();
            if (!responseLink.ok) {
                throw new Error('Ошибка при настройке профиля');
            } else {
                console.log("Профиль успешно настроен")
                OpenModel();
            }
        } catch (error) {
            console.error(error);
        
        }
    }
});