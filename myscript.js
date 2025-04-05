/* Menu Animation - stretch and background */
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navMenu");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

