en.addEventListener('click', function() {
    localStorage.setItem('language', "en");
    ChekLanguage();
})

ru.addEventListener('click', function() {
    localStorage.setItem('language', "ru");
    ChekLanguage();
});

function ChekLanguage() {
    if (localStorage.getItem('language') == "en") {
        ru.innerHTML = "ru/";
        ru.style.fontWeight = 'normal';
        en.innerHTML = "en";
        en.style.fontWeight = 'bold';
        NameStr.innerHTML = "Create a name (max. 30 characters):";
        PopupDesStr.innerHTML = "Tell us about yourself (max. 250 characters):";
        PopupDesStr.style.marginLeft = "-60px";
        PopupLinksStr.innerHTML = "Add links to your resources:";
        PopupLinksStr.style.marginLeft = "40px";
        ModalWindow.style.width = "660px";
        SuccesLog.innerHTML = "The profile has been configured successfully!";
        BtnSave.innerHTML = "Save";
    } else if (localStorage.getItem('language') == "ru") {
        ru.innerHTML = "рус";
        ru.style.fontWeight = 'bold';
        en.innerHTML = "/анг";
        en.style.fontWeight = 'normal';
        NameStr.innerHTML = "Придумайте имя (макс. 30 символов):"
        PopupDesStr.innerHTML = "Расскажите о себе (макс. 250 символов):";
        PopupDesStr.style.marginLeft = "-35px";
        PopupLinksStr.innerHTML = "Добавьте ссылки на ваши ресурсы:";
        PopupLinksStr.style.marginLeft = "0px";
        SuccesLog.innerHTML = "Профиль настроен успешно!";
        ModalWindow.style.width = "550px";
        SuccesLog.innerHTML = "Профиль настроен успешно!";
        BtnSave.innerHTML = "Сохранить";
    }
}
ChekLanguage();