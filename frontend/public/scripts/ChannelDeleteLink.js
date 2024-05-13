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
                OpenModel();
            }
        } catch (error) {
            console.error(error);
        
        }
    }
});
