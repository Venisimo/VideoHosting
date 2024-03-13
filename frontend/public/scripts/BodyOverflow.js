Videos.addEventListener('mouseover', function(event) {
    if (event.type === 'mouseover') {
        Body.style.overflow = 'visible';
    }
})
Videos.addEventListener('mouseout', function(event) {
    if (event.type === 'mouseout') {
        Body.style.overflow = 'hidden';
    }
})