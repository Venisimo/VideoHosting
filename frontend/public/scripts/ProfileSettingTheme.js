ThemeIcon.addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');
    if (localStorage.getItem('theme') == "light") {
        localStorage.setItem('theme', "dark");
        ChekTheme(allElements);
    } else if (localStorage.getItem('theme') == "dark") {
        localStorage.setItem('theme', "light");
        ChekTheme(allElements);
    }
});
const allElements = document.querySelectorAll('*');
function ChekTheme(allElements) {
    if (localStorage.getItem('theme') == "light") {
        Body.style.background = '#FFFFFF';
        ru.style.color = "black";
        en.style.color = "black";
        LanguageIcon.src = 'images/dark-icon/language-icon-sign.png';
        ThemeIcon.src = 'images/dark-icon/Moon-sign.png';
        Popup.style.background = 'rgb(79, 244, 215)';
        Popup.style.color = 'rgb(0, 0, 0)';
        InputName.style.background = "#FFFFFF";
        InputName.style.color = "#000000";
        TextAreaDes.style.background = "#FFFFFF";
        TextAreaDes.style.color = "#000000";
        InputLinkAdd.style.background = "#FFFFFF";
        InputLinkAdd.style.color = "#000000";
        BtnSave.style.background = "#FFFFFF";
        BtnSave.style.color = "#000000";
        BtnAddLink.classList.remove("dark");
        allElements.forEach(element => {
            if (element.classList.contains('btn-delete-link') || element.classList.contains('input-link-add')) {
                element.classList.remove("dark");
            }
        });
        ModalWindow.style.background = 'rgb(79, 244, 215)';
        ModalWindow.style.color = '#000000';
        BtnOK.style.background = 'rgb(255, 255, 255)';
        BtnOK.style.color = 'black';
    } else if (localStorage.getItem('theme') == "dark") {
        Body.style.background = '#1F1C1C';
        ru.style.color = "white";
        en.style.color = "white";
        LanguageIcon.src = 'images/light-icon/language-icon-sign.png';
        ThemeIcon.src = 'images/light-icon/Sun-sign.png';
        Popup.style.background = 'rgb(3, 3, 3)';
        Popup.style.color = 'rgb(255, 255, 255)';
        InputName.style.background = "#1F1C1C";
        InputName.style.color = "#FFFFFF";
        TextAreaDes.style.background = "#1F1C1C";
        TextAreaDes.style.color = "#FFFFFF";
        InputLinkAdd.style.background = "#1F1C1C";
        InputLinkAdd.style.color = "#FFFFFF";
        BtnSave.style.background = "#1F1C1C";
        BtnSave.style.color = "#FFFFFF";
        BtnAddLink.classList.add("dark");
        allElements.forEach(element => {
            if (element.classList.contains('btn-delete-link') || element.classList.contains('input-link-add')) {
                element.classList.add("dark");
            }
        });
        ModalWindow.style.background = '#1F1C1C';
        ModalWindow.style.color = '#FFFFFF';
        BtnOK.style.background = '#030303';
        BtnOK.style.color = 'white';
    }
}
ChekTheme(allElements);