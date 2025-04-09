/* Menu Animation - expand wide and add background */
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navMenu");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* Duplicate logos group for infinite slide logos */

document.addEventListener("DOMContentLoaded", function () {
    var duplicate = document.querySelector(".carousel-track").cloneNode(true);
    document.querySelector(".carousel").appendChild(duplicate);
  });

/* Processor animate at focus viewport or screen */

document.addEventListener("DOMContentLoaded", function () {
    const svg = document.getElementById("mySVG");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          svg.classList.add("animate");
          observer.unobserve(svg); // Animate once
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(svg);
  });
  