BtnChannelEdit.addEventListener('click', function() {
    PopupFull.style.opacity = 1;
    PopupFull.style.visibility = "visible";
    Body.style.overflow = "hidden";
    resizeTextareaChannelDes();
});
function closePopup(event) {
    if (event.target === PopupFull || event.target === PopupClose) {
        Body.style.overflowY = "visible";
        PopupFull.style.opacity = 0;
        setTimeout(() => {
            PopupFull.style.visibility = "hidden";
        }, 300)
    }
    
}
PopupFull.addEventListener('click', closePopup);
PopupClose.addEventListener('click', closePopup);

document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-edit-link')) {
        let BtnEditLink = event.target;
        let li = BtnEditLink.parentElement;
        let liInput = document.createElement('input');
        let btnDelete = BtnEditLink.nextElementSibling;
        let linkStr = BtnEditLink.previousElementSibling;
        let LinkId = linkStr.getAttribute('data-link-id')
        let linkStrContent = linkStr.href;
        liInput.className = "input-link-edit";
        liInput.value = linkStrContent;
        liInput.setAttribute('data-link-id', LinkId)
        linkStr.remove();
        BtnEditLink.remove();
        btnDelete.remove();
        btnDelete = document.createElement('button');
        btnDelete.innerHTML = "X";
        btnDelete.className = "btn-delete-link";
        console.log(btnDelete);
        if (localStorage.getItem('theme') == "dark") {;
            liInput.classList.add('dark4');
            btnDelete.classList.add('dark4');
        }
        li.append(liInput);
        li.append(btnDelete);

        btnDelete.addEventListener('click', function() {
            let link = btnDelete.parentElement;
            link.remove();
        });
    }
});

document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-add-link')) {
        let BtnAddLink = event.target;
        BtnAddLink.remove();
        let li = document.createElement('li');
        let liInput = document.createElement('input');
        let btnDelete = document.createElement('button');
        BtnAddLink.innerHTML = "+";
        btnDelete.innerHTML = "X";
        btnDelete.className = "btn-delete-link"
        liInput.className = "input-link-add";
        if (BtnAddLink.classList.contains('dark4')) {
            btnDelete.classList.add('dark4')
            liInput.classList.add('dark4')
        }
        UlListLinks.append(li);
        li.append(liInput);
        li.append(BtnAddLink);
        let selfLi = li.previousElementSibling;
        selfLi.append(btnDelete);

        btnDelete.addEventListener('click', function() {
            let link = btnDelete.parentElement;
            link.remove();
        });
    }
});
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-delete-link')) {
        let btnDelete = event.target;
        let link = btnDelete.parentElement;
        link.remove();
    }
});
TextAreaDes.addEventListener('input', function () {
    resizeTextareaChannelDes();
});
TextAreaDes.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.shiftKey) {
        TextAreaDes.rows += 1;
        resizeTextareaChannelDes();
    }
});
function resizeTextareaChannelDes() {
    TextAreaDes.style.height = 'auto';
    TextAreaDes.style.height = TextAreaDes.scrollHeight + 'px';
}
function ParseTextLinks() {
    LinksInDes.forEach(LinkInDes => {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        let maxWidth = 350;
        context.font = '28px Inter-Regular';
        let text = LinkInDes.innerHTML
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
}
ParseTextLinks();