function LikeText() {
    let likeElement = NumLike.nextElementSibling;
        if (Number(NumLike.innerHTML) >= 1000 && Number(NumLike.innerHTML) < 1000000) {
            likeElement.innerHTML = "тыс";
        } else if (Number(NumLike.innerHTML) >= 1000000 && Number(NumLike.innerHTML) < 1000000000) {
            likeElement.innerHTML = "млн";
        } else if (Number(NumLike.innerHTML) >= 1000000000 && Number(NumLike.innerHTML) < 1000000000000) {
            likeElement.innerHTML = "млрд";
        }
        console.log(likeElement.innerHTML);
    };    
LikeText();

function ParseNumberLikes() {
    if (Number(NumLike.innerHTML) < 1000) {
        NumLike.style.marginRight = "0px";
    } else if (Number(NumLike.innerHTML) > 999 && Number(NumLike.innerHTML) < 1100) {
        NumLike.innerHTML = NumLike.innerHTML[0];
    } else if (Number(NumLike.innerHTML) > 1099 && Number(NumLike.innerHTML) < 10000) {
        NumLike.innerHTML = NumLike.innerHTML[0] + ',' + NumLike.innerHTML[1];
    } else if (Number(NumLike.innerHTML) > 9999 && Number(NumLike.innerHTML) < 100000) {
        NumLike.innerHTML = NumLike.innerHTML[0] + NumLike.innerHTML[1];
    } else if (Number(NumLike.innerHTML) > 99999 && Number(NumLike.innerHTML) < 1000000) {
        NumLike.innerHTML = NumLike.innerHTML[0] + NumLike.innerHTML[1] + NumLike.innerHTML[2];
    } else if (Number(NumLike.innerHTML) > 999999 && Number(NumLike.innerHTML) < 1100000) {
        NumLike.innerHTML = NumLike.innerHTML[0];
    } else if (Number(NumLike.innerHTML) > 1099999 && Number(NumLike.innerHTML) < 10000000) {
        NumLike.innerHTML = NumLike.innerHTML[0] + ',' + NumLike.innerHTML[1];
    } else if (Number(NumLike.innerHTML) > 9999999 && Number(NumLike.innerHTML) < 100000000) {
        NumLike.innerHTML = NumLike.innerHTML[0] + NumLike.innerHTML[1];             
    } else if (Number(NumLike.innerHTML) > 99999999 && Number(NumLike.innerHTML) < 1000000000) {
        NumLike.innerHTML = NumLike.innerHTML[0] + NumLike.innerHTML[1] + NumLike.innerHTML[2];
    } else if (Number(NumLike.innerHTML) > 999999999 && Number(NumLike.innerHTML) < 1100000000) {
        NumLike.innerHTML = NumLike.innerHTML[0]; 
    } else if (Number(NumLike.innerHTML) > 1099999999 && Number(NumLike.innerHTML) < 10000000000) {
        NumLike.innerHTML = NumLike.innerHTML[0] + ',' + NumLike.innerHTML[1];
    } else if (Number(NumLike.innerHTML) > 1099999999 && Number(NumLike.innerHTML) < 100000000000) {
        NumLike.innerHTML = NumLike.innerHTML[0] + NumLike.innerHTML[1];
    } else if (Number(NumLike.innerHTML) > 9999999999 && Number(NumLike.innerHTML) < 1000000000000) {
        NumLike.innerHTML = NumLike.innerHTML[0] + NumLike.innerHTML[1] + NumLike.innerHTML[2];
    }
}
ParseNumberLikes();

function DislikeText() {
    let likeElement = NumDislike.nextElementSibling;
        if (Number(NumDislike.innerHTML) >= 1000 && Number(NumDislike.innerHTML) < 1000000) {
            likeElement.innerHTML = "тыс";
        } else if (Number(NumDislike.innerHTML) >= 1000000 && Number(NumDislike.innerHTML) < 1000000000) {
            likeElement.innerHTML = "млн";
        } else if (Number(NumDislike.innerHTML) >= 1000000000 && Number(NumDislike.innerHTML) < 1000000000000) {
            likeElement.innerHTML = "млрд";
        }
        console.log(likeElement.innerHTML);
    };    
DislikeText();

function ParseNumberDislikes() {
    if (Number(NumDislike.innerHTML) < 1000) {
        NumDislike.style.marginRight = "0px";
    } else if (Number(NumDislike.innerHTML) > 999 && Number(NumDislike.innerHTML) < 1100) {
        NumDislike.innerHTML = NumDislike.innerHTML[0];
    } else if (Number(NumDislike.innerHTML) > 1099 && Number(NumDislike.innerHTML) < 10000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + ',' + NumDislike.innerHTML[1];
    } else if (Number(NumDislike.innerHTML) > 9999 && Number(NumDislike.innerHTML) < 100000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + NumDislike.innerHTML[1];
    } else if (Number(NumDislike.innerHTML) > 99999 && Number(NumDislike.innerHTML) < 1000000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + NumDislike.innerHTML[1] + NumDislike.innerHTML[2];
    } else if (Number(NumDislike.innerHTML) > 999999 && Number(NumDislike.innerHTML) < 1100000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0];
    } else if (Number(NumDislike.innerHTML) > 1099999 && Number(NumDislike.innerHTML) < 10000000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + ',' + NumDislike.innerHTML[1];
    } else if (Number(NumDislike.innerHTML) > 9999999 && Number(NumDislike.innerHTML) < 100000000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + NumDislike.innerHTML[1];             
    } else if (Number(NumDislike.innerHTML) > 99999999 && Number(NumDislike.innerHTML) < 1000000000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + NumDislike.innerHTML[1] + NumDislike.innerHTML[2];
    } else if (Number(NumDislike.innerHTML) > 999999999 && Number(NumDislike.innerHTML) < 1100000000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0]; 
    } else if (Number(NumDislike.innerHTML) > 1099999999 && Number(NumDislike.innerHTML) < 10000000000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + ',' + NumDislike.innerHTML[1];
    } else if (Number(NumDislike.innerHTML) > 1099999999 && Number(NumDislike.innerHTML) < 100000000000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + NumDislike.innerHTML[1];
    } else if (Number(NumDislike.innerHTML) > 9999999999 && Number(NumDislike.innerHTML) < 1000000000000) {
        NumDislike.innerHTML = NumDislike.innerHTML[0] + NumDislike.innerHTML[1] + NumDislike.innerHTML[2];
    }
}
ParseNumberDislikes();