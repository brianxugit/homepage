
document.getElementById("back").addEventListener('click', function(event) {
    if (history.length > 2) {
        event.preventDefault();
        history.back();
    }
});

document.querySelectorAll('[href^="#"]').forEach((link) => {
    link.addEventListener('click', function(event) {
        document.location.replace(link);
        event.preventDefault();
    })
})