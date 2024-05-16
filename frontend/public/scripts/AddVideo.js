document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('plus')) {
        PopupAddVideoFull.style.opacity = 1;
        PopupAddVideoFull.style.visibility = "visible";
        Body.style.overflow = "hidden";
    }
});
function closePopupAddVideo(event) {
    if (event.target === PopupAddVideoFull || event.target === PopupCloseAddVideo) {
        Body.style.overflowY = "visible";
        PopupAddVideoFull.style.opacity = 0;
        setTimeout(() => {
            PopupAddVideoFull.style.visibility = "hidden";
        }, 300)
    }
    
}
PopupAddVideoFull.addEventListener('click', closePopupAddVideo);
PopupCloseAddVideo.addEventListener('click', closePopupAddVideo);

TextAreaDesVideo.addEventListener('input', function () {
    resizeTextareaVideolDes();
});
TextAreaDesVideo.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.shiftKey) {
        TextAreaDesVideo.rows += 1;
        resizeTextareaVideolDes();
    }
});
function resizeTextareaVideolDes() {
    TextAreaDesVideo.style.height = '20px';
    TextAreaDesVideo.style.height = TextAreaDesVideo.scrollHeight + 'px';
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
let uploadVideo = null;
let uploadPoster = null;
let pathVideo;
document.getElementById('addVideo').addEventListener('submit', async function(event) {
    event.preventDefault();
    if (uploadVideo != null) {
        addVideo(uploadVideo);
    } else {
        ErrorMessageUploadVideo.style.marginLeft = "230px";
        return ErrorMessageUploadVideo.innerHTML = "Вы не загрузили видео!";
    }
        
});

async function addPoster(Poster, Video) {
    let formData = new FormData();
    formData.append('poster', Poster);
    formData.append('pathVideo', Video);
    fetch('/uploadPoster', {
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


async function addVideo(Video) {
    let videoName = InputNameVideos.value;
    let userDescription = TextAreaDesVideo.value;
    let trimmedDescription = userDescription.trim();
    let trimmedName = videoName.trim();
    if (trimmedName == "") {
        ErrorMessageUploadVideo.style.marginLeft = "240px";
        return ErrorMessageUploadVideo.innerHTML = "Вы не ввели название!";
    } 
    let formData = new FormData();
    formData.append('video', Video);
    formData.append('id', UserId);
    formData.append('name', trimmedName);
    formData.append('description', trimmedDescription);
    console.log(formData);
    fetch('/uploadVideo', {
        method: 'POST',
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
        pathVideo = data.filename;
        if (uploadPoster != null) {
            addPoster(uploadPoster, pathVideo);
        }
    })
    .catch(error => {
        console.error(error);
    });
}


function readURLPreview(input)
{
    if(input.files && input.files[0]){
        let reader = new FileReader();
        uploadPoster = input.files[0];
        reader.onload=function(e)
        {
            let fileurl = e.target.result;
            $('.upload-preview-preview').attr('src',fileurl);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#fileInputPreview").on('change',function(){
    readURLPreview(this);
});

function readURLVideo(input)
{
    if(input.files && input.files[0]){
        let reader = new FileReader();
        uploadVideo = input.files[0];
        reader.onload=function(e)
        {
            let fileurl = e.target.result;
            $('.upload-video-video').attr('src',fileurl);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#fileInputVideo").on('change',function(){
    readURLVideo(this);
});