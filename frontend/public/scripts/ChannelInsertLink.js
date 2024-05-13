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
                OpenModel();
            }
        } catch (error) {
            console.error(error);
        
        }
    }
});