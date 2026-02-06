// Mobile Menu Toggle Script
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");


hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
});

menuOverlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});


mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Header Scroll Effect
const header = document.querySelector(".theme-header-part");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// testimonial-slider

$('.testimonial-slider').owlCarousel({
    loop:true,
    margin: 30,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.2
        },
        1100:{
            items:3
        }
    }
})