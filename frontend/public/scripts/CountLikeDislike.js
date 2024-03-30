let boolLike = false;
let boolDislike = false;
let SelfDislike = Number(NumDislike.innerHTML);
let SelfLike = Number(NumLike.innerHTML);

LikeBtn.addEventListener('click', function() {
    if (!boolLike) {
        SelfLike += 1;
        NumLike.innerHTML = SelfLike;
        boolLike = true;
        if (boolDislike) {
            SelfDislike -= 1;
            NumDislike.innerHTML = SelfDislike;
            boolDislike = false;
        }
    } else {
        SelfLike -= 1;
        NumLike.innerHTML = SelfLike;
        boolLike = false;
    }
    console.log(boolDislike);
    console.log(boolLike);
});

DislikeBtn.addEventListener('click', function() {
    if (!boolDislike) {
        SelfDislike += 1;
        NumDislike.innerHTML = SelfDislike;
        boolDislike = true;
        if (boolLike) {
            SelfLike -= 1;
            NumLike.innerHTML = SelfLike;
            boolLike = false;
        }
    } else {
        SelfDislike -= 1;
        NumDislike.innerHTML = SelfDislike;
        boolDislike = false;
    }
    console.log(boolDislike);
    console.log(boolLike);
});
