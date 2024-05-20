function encodeQueryParam(param) {
    return encodeURIComponent(param).replace(/[!'()*]/g, escape);
}

InputSearch.addEventListener("keyup", e => {
    if (e.key == "Enter" && InputSearch.value.trim() != "") {
        location.href = "http://localhost:3000/result?" + encodeQueryParam(InputSearch.value.trim());
    }
});

Lupa.addEventListener('click', function() {
    if (InputSearch.value.trim() != "") {
        location.href = "http://localhost:3000/result?" + encodeQueryParam(InputSearch.value.trim());
    }
});