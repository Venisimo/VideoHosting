let boolLike = false;
let boolDislike = false;
let LikeBeforeParse;
let DislikeBeforeParse;
let likeElement = NumLike.nextElementSibling;
let DislikeElement = NumDislike.nextElementSibling;
function LDinit() {
    if (LikeBtn.classList.contains('video-panel-on')) {
        boolLike = true;
    }
    if (DislikeBtn.classList.contains('video-panel-on')) {
        boolDislike = true;
    }
}
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
            } else {
                if (DislikeBeforeParse[1] == 0 && DislikeBeforeParse.length > 3) {
                    let NumDislikeBeforeParse = Number(DislikeBeforeParse) 
                    NumDislikeBeforeParse -= 1;
                    NumDislike.innerHTML = NumDislikeBeforeParse;
                    DislikeText();
                    ParseNumberDislikes();
                }
            }
            boolDislike = false;
        }
        console.log(SelfDislike);
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
            DislikeText();
            DislikeBeforeParse = NumDislike.innerHTML;
            ParseNumberDislikes();
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
        } else {
            if (DislikeBeforeParse[1] == 0 && DislikeBeforeParse.length > 3) {
                let NumDislikeBeforeParse = Number(DislikeBeforeParse) 
                NumDislikeBeforeParse -= 1;
                NumDislike.innerHTML = NumDislikeBeforeParse;
                DislikeText();
                ParseNumberDislikes();
            }
        }
        boolDislike = false;
    }
});