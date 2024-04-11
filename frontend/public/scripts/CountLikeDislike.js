let boolLike = false;
let boolDislike = false;
let LikeBeforeParse;
let DislikeBeforeParse;
let likeElement = NumLike.nextElementSibling;
let DislikeElement = NumDislike.nextElementSibling;

LikeBtn.addEventListener('click', function() {
    let SelfDislike = Number(NumDislike.innerHTML);
    let SelfLike = Number(NumLike.innerHTML);
    if (!boolLike) {
        if (likeElement.innerHTML == "") { 
            SelfLike += 1;
            NumLike.innerHTML = SelfLike;
            LikeText();
            LikeBeforeParse = NumLike.innerHTML;
            ParseNumberLikes();
        }
        boolLike = true;
        if (boolDislike) {
            if (DislikeElement.innerHTML == "") {
                SelfDislike -= 1;
                NumDislike.innerHTML = SelfDislike;
            }
            boolDislike = false;
        }
    } else {
        if (likeElement.innerHTML == "") {
            SelfLike -= 1;
            NumLike.innerHTML = SelfLike;
        } else {
            if (LikeBeforeParse[1] == 0 && LikeBeforeParse.length > 3) {
                let NumLikeBeforeParse = Number(LikeBeforeParse) 
                NumLikeBeforeParse -= 1;
                NumLike.innerHTML = NumLikeBeforeParse;
                LikeText();
                ParseNumberLikes();
            }
        }
        boolLike = false;
    }
});

DislikeBtn.addEventListener('click', function() {
    let SelfDislike = Number(NumDislike.innerHTML);
    let SelfLike = Number(NumLike.innerHTML);
    if (!boolDislike) {
        if (DislikeElement.innerHTML == "") {
            SelfDislike += 1;
            NumDislike.innerHTML = SelfDislike;
        }
        boolDislike = true;
        if (boolLike) {
            if (likeElement.innerHTML == "") {
                SelfLike -= 1;
                NumLike.innerHTML = SelfLike;
            } else {
                if (LikeBeforeParse[1] == 0 && LikeBeforeParse.length > 3) {
                    let NumLikeBeforeParse = Number(LikeBeforeParse) 
                    NumLikeBeforeParse -= 1;
                    NumLike.innerHTML = NumLikeBeforeParse;
                    LikeText();
                    ParseNumberLikes();
                }
            }
            boolLike = false;
        }
    } else {
        if (DislikeElement.innerHTML == "") {
            SelfDislike -= 1;
            NumDislike.innerHTML = SelfDislike;
        }
        boolDislike = false;
    }
});