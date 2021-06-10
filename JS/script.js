const toggleBtn = document.querySelector("#toggler");
const navLinks = document.querySelector("#navbar-links");
let viewWindow = window.innerWidth;

toggleBtn.addEventListener("click", () => {
    if (navLinks.classList.contains("show-links")){
        navLinks.classList.remove("show-links")        
    } else {
        navLinks.classList.add("show-links")
    }
});

window.addEventListener("DOMContentLoaded", () => {
    if (viewWindow < 992){
        navLinks.classList.add("show-links")
    }
})

window.addEventListener("DOMContentLoaded", () => {
    if (viewWindow < 425){
        document.querySelector(".deep-earth").src = "/images/mobile/image-deep-earth.jpg";
        document.querySelector(".arcade").src = "/images/mobile/image-night-arcade.jpg";
        document.querySelector(".soccer").src = "/images/mobile/image-soccer-team.jpg";
        document.querySelector(".grid").src = "/images/mobile/image-grid.jpg";
        document.querySelector(".above").src = "/images/mobile/image-from-above.jpg";
        document.querySelector(".pocket").src = "/images/mobile/image-pocket-borealis.jpg";
        document.querySelector(".curiosity").src = "/images/mobile/image-curiosity.jpg";
        document.querySelector(".fisheye").src = "/images/mobile/image-fisheye.jpg";
    }
})