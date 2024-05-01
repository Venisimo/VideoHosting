function LikeText() {
    let likeElement = NumLike.nextElementSibling;
        if (Number(NumLike.innerHTML) < 1000) {
            likeElement.innerHTML = "";
            NumLike.style.marginRight = "0px";
        } else if (Number(NumLike.innerHTML) >= 1000 && Number(NumLike.innerHTML) < 1000000) {
            if (rus) {
                likeElement.innerHTML = "тыс";
                NumLike.style.marginRight = "5px";
            } else {
                likeElement.innerHTML = "k";
                NumLike.style.marginRight = "0px";
            }
        } else if (Number(NumLike.innerHTML) >= 1000000 && Number(NumLike.innerHTML) < 1000000000) {
            if (rus) {
                likeElement.innerHTML = "млн";
            } else {
                likeElement.innerHTML = "mln";
            }
        } else if (Number(NumLike.innerHTML) >= 1000000000 && Number(NumLike.innerHTML) < 1000000000000) {
            if (rus) {
                likeElement.innerHTML = "млрд";
            } else {
                likeElement.innerHTML = "bln";
            }
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
            if (rus) {
                DislikeElement.innerHTML = "тыс";
                NumDislike.style.marginRight = "5px";
            } else {
                DislikeElement.innerHTML = "k";
                NumDislike.style.marginRight = "0px";
            }
        } else if (Number(NumDislike.innerHTML) >= 1000000 && Number(NumDislike.innerHTML) < 1000000000) {
            if (rus) {
                DislikeElement.innerHTML = "млн";
            } else {
                DislikeElement.innerHTML = "mln";
            }
        } else if (Number(NumDislike.innerHTML) >= 1000000000 && Number(NumDislike.innerHTML) < 1000000000000) {
            if (rus) {
                DislikeElement.innerHTML = "млрд";
            } else {
                DislikeElement.innerHTML = "bln";
            }
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