function encodeQueryParam(param) {
    return encodeURIComponent(param).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16));
}

InputSearch.addEventListener("keyup", e => {
    if (e.key == "Enter" && InputSearch.value.trim() != "") {
        location.href = "/result?" + encodeQueryParam(InputSearch.value.trim());
    }
});

Lupa.addEventListener('click', function() {
    if (InputSearch.value.trim() != "") {
        location.href = "/result?" + encodeQueryParam(InputSearch.value.trim());
    }
});