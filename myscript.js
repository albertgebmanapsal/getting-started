/* Menu Animation - expand wide and add background */
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navMenu");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

