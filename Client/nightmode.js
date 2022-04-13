const themeToggle = document.getElementById("nightmode-toggle");

if(!localStorage.getItem('nightmode')) {
    localStorage.setItem('nightmode', 'false');
} else {
    if(localStorage.getItem("nightmode") === "true") {
        themeToggle.checked = true;
        document.body.classList.toggle('nightmode');
    } else {
        document.body.classList.remove('nightmode');
    }
}


themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('nightmode');
    localStorage.setItem('nightmode', localStorage.getItem("nightmode") === "true" ? "false" : "true");
});

