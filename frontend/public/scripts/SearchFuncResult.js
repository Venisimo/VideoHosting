let requestResult = location.href.split('?');
console.log(requestResult);
InputSearch.value = requestResult[1];

InputSearch.addEventListener("keyup", e => {
    if (e.key == "Enter" && InputSearch.value.trim() != "") {
        location.href = "http://localhost:3000/result?" + InputSearch.value.trim();
    }
});
Lupa.addEventListener('click', function() {
    if (InputSearch.value.trim() != "") {
        location.href = "http://localhost:3000/result?" + InputSearch.value.trim();
    } 
});