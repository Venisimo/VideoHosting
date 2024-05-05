BtnAddVideo.addEventListener('click', function() {
    PopupAddVideoFull.style.opacity = 1;
    PopupAddVideoFull.style.visibility = "visible";
    Body.style.overflow = "hidden";
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


function readURLPreview(input)
{
    if(input.files && input.files[0]){
        let reader = new FileReader();
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