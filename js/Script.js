let slideIndex = 0;
let slideTimeout;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Cache toutes les images
    slides.forEach(s => s.style.display = "none");
    // Retire la classe active des points
    dots.forEach(d => d.style.opacity = "0.5");

    slides[slideIndex].style.display = "block";
    if(dots[slideIndex]) dots[slideIndex].style.opacity = "1";

    // Relance le chrono (3 secondes)
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000);
}

// Fonctions appelées par tes onclick="" dans le HTML
function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Lancement au chargement
showSlides(slideIndex);