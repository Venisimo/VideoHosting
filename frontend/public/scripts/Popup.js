BtnChannelEdit.addEventListener('click', function() {
    PopupFull.style.opacity = 1;
    PopupFull.style.visibility = "visible";
    Body.style.overflow = "hidden";
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
        UlListLinks.append(li);
        li.append(liInput);
        li.append(BtnAddLink);
        selfLi = li.previousElementSibling;
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

let uploadImg = null;

document.getElementById('popup').addEventListener('submit', async function(event) {
    event.preventDefault();
    if (uploadImg != null) {
        uploadAvatar(uploadImg);
    }
});


let currentAvatar = AvatarForChannel.src;
console.log(currentAvatar);
let arrCurrentAvatar = currentAvatar.split('/');
currentAvatar = arrCurrentAvatar[3] + '/' + arrCurrentAvatar[4] + '/' + arrCurrentAvatar[5];
console.log(currentAvatar);
async function uploadAvatar(Img) {
    let formData = new FormData();
    formData.append('avatar', Img);
    formData.append('id', UserId);
    formData.append('currentAvatar', currentAvatar)
    fetch('/uploadPhoto', {
        method: 'PUT',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при загрузке файла');
        }
        return response.json();
    })
    .then(data => {
        console.log('Файл успешно загружен:', data.filename);        
    })
    .catch(error => {
        console.error(error);
    });
}

function readURL(input)
{
    if(input.files && input.files[0]){
        let reader = new FileReader();
        uploadImg = input.files[0];
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