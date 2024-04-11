function LikeText() {
    let likeElement = NumLike.nextElementSibling;
        if (Number(NumLike.innerHTML) < 1000) {
            likeElement.innerHTML = "";
            NumLike.style.marginRight = "0px";
        } else if (Number(NumLike.innerHTML) >= 1000 && Number(NumLike.innerHTML) < 1000000) {
            likeElement.innerHTML = "тыс";
        } else if (Number(NumLike.innerHTML) >= 1000000 && Number(NumLike.innerHTML) < 1000000000) {
            likeElement.innerHTML = "млн";
        } else if (Number(NumLike.innerHTML) >= 1000000000 && Number(NumLike.innerHTML) < 1000000000000) {
            likeElement.innerHTML = "млрд";
        }
    };    
LikeText();

function ParseNumberLikes() {
    if (NumLike.innerHTML.length == 3) {
        NumLike.style.marginRight = "0px";
    } else if (NumLike.innerHTML.length == 4 || NumLike.innerHTML.length == 7 || NumLike.innerHTML.length == 10) {
        if (NumLike.innerHTML[1] != 0) {
            NumLike.innerHTML = NumLike.innerHTML[0] + ',' + NumLike.innerHTML[1];
        } else {
            NumLike.innerHTML = NumLike.innerHTML[0];
        }
    } else if (NumLike.innerHTML.length == 5 || NumLike.innerHTML.length == 8 || NumLike.innerHTML.length == 11) {
        NumLike.innerHTML = NumLike.innerHTML[0] + NumLike.innerHTML[1];
    } else if (NumLike.innerHTML.length == 6 || NumLike.innerHTML.length == 9 || NumLike.innerHTML.length == 12) {
        NumLike.innerHTML = NumLike.innerHTML[0] + NumLike.innerHTML[1] + NumLike.innerHTML[3];
    }
}
ParseNumberLikes();

function DislikeText() {
    let DislikeElement = NumDislike.nextElementSibling;
        if (Number(NumDislike.innerHTML) < 1000) {
            DislikeElement.innerHTML = "";
            NumDislike.style.marginRight = "0px";
        } else if (Number(NumDislike.innerHTML) >= 1000 && Number(NumDislike.innerHTML) < 1000000) {
            DislikeElement.innerHTML = "тыс";
        } else if (Number(NumDislike.innerHTML) >= 1000000 && Number(NumDislike.innerHTML) < 1000000000) {
            DislikeElement.innerHTML = "млн";
        } else if (Number(NumDislike.innerHTML) >= 1000000000 && Number(NumDislike.innerHTML) < 1000000000000) {
            DislikeElement.innerHTML = "млрд";
        }
    };    
DislikeText();

function ParseNumberDislikes() {
    if (NumDislike.innerHTML.length == 3) {
        NumDislike.style.marginRight = "0px";
    } else if (NumDislike.innerHTML.length == 4 || NumDislike.innerHTML.length == 7 || NumDislike.innerHTML.length == 10) {
        if (NumDislike.innerHTML[1] != 0) {
            NumDislike.innerHTML = NumDislike.innerHTML[0] + ',' + NumDislike.innerHTML[1];
        } else {
            NumDislike.innerHTML = NumDislike.innerHTML[0];
        }
    } else if (NumDislike.innerHTML.length == 5 || NumDislike.innerHTML.length == 8 || NumDislike.innerHTML.length == 11) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + NumDislike.innerHTML[1];
    } else if (NumDislike.innerHTML.length == 6 || NumDislike.innerHTML.length == 9 || NumDislike.innerHTML.length == 12) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + NumDislike.innerHTML[1] + NumDislike.innerHTML[3];
    }
}
ParseNumberDislikes();