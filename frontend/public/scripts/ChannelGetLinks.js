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
            UlListLinks.innerHTML += `<li><a href="${responseData.links[i]}" data-link-id="${responseData.linksId[i]}" data-barba="false" class="links-in-des">${responseData.links[i]}</a>
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