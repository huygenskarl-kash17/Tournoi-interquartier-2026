document.addEventListener("DOMContentLoaded", () => {

let slideIndex = 0;
let slideTimeout;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
    if (slides.length === 0) return;

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(s => s.style.display = "none");
    dots.forEach(d => d.style.opacity = "0.5");

    slides[slideIndex].style.display = "block";
    if(dots[slideIndex]) dots[slideIndex].style.opacity = "1";

    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000);
}

window.plusSlide = function(n){
    showSlides(slideIndex += n);
}

window.currentSlide = function(n){
    showSlides(slideIndex = n - 1);
}

showSlides(slideIndex);


/* MENU MOBILE */
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

if(toggle && nav){
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

});
