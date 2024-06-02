async function Upload() {
    let uploadImg = null;

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
        if (uploadImg != null) {
            uploadAvatar(uploadImg);
        }
    });

    const AvatarForChannel = document.querySelector('.avatar-for-channel')
    let currentAvatar = AvatarForChannel.src;
    let arrCurrentAvatar = currentAvatar.split('/');
    currentAvatar = arrCurrentAvatar[3] + '/' + arrCurrentAvatar[4] + '/' + arrCurrentAvatar[5];
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
}