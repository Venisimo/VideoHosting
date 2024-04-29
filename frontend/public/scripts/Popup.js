BtnChannelEdit.addEventListener('click', function() {
    PopupFull.style.visibility = "visible";
    Body.style.overflow = "hidden";
});
PopupClose.addEventListener('click', function() {
    PopupFull.style.visibility = "hidden";
    Body.style.overflowY = "visible";
});

PopupFull.style.height = String(mainElementHeight) + "px";
PopupFull.style.width = String(mainElementWidth) + "px";
BtnEditLinks.forEach(BtnEditLink => {
    BtnEditLink.addEventListener('click', function() {
        let li = BtnEditLink.parentElement;
        let liInput = document.createElement('input');
        let btnDelete = BtnEditLink.nextElementSibling;
        let linkStr = BtnEditLink.previousElementSibling;
        let linkStrContent = linkStr.href;
        liInput.className = "input-link-add";
        liInput.value = linkStrContent;
        linkStr.remove();
        BtnEditLink.remove();
        btnDelete.remove();
        btnDelete = document.createElement('button');
        btnDelete.innerHTML = "X";
        btnDelete.className = "btn-delete-link";
        li.append(liInput);
        li.append(btnDelete);

        btnDelete.addEventListener('click', function() {
            let link = btnDelete.parentElement;
            link.remove();
        });
    })    
}) 


BtnAddLink.addEventListener('click', function() {
    BtnAddLink.remove();
    let li = document.createElement('li');
    let liInput = document.createElement('input');
    let btnDelete = document.createElement('button');
    BtnAddLink.innerHTML = "+";
    btnDelete.innerHTML = "X";
    btnDelete.className = "btn-delete-link"
    liInput.className = "input-link-add";
    UlListLinks.append(li);
    li.append(liInput);
    li.append(BtnAddLink);
    selfLi = li.previousElementSibling;
    selfLi.append(btnDelete);

    btnDelete.addEventListener('click', function() {
        let link = btnDelete.parentElement;
        link.remove();
    });
})

BtnDeleteLinks.forEach(BtnDeleteLink => {
    BtnDeleteLink.addEventListener('click', function() {
        let link = BtnDeleteLink.parentElement;
        link.remove();
    })
})
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
    TextAreaDes.style.height = '20px';
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


function readURL(input)
{
    if(input.files && input.files[0]){
        let reader = new FileReader();
        reader.onload=function(e)
        {
            let fileurl = e.target.result;
            $('.avatar-for-channel-popup').attr('src',fileurl);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(".file-upload").on('change',function(){
readURL(this);
});
$(".upload-button").on('click',function(){
$(".file-upload").click();
});