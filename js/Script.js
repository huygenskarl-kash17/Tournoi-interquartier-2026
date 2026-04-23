window.addEventListener("load", () => {
document.querySelector(".loader").style.display = "none";
});

/* MENU MOBILE */
const nav = document.querySelector("nav ul");
document.querySelector(".logo").addEventListener("click", () => {
nav.classList.toggle("active");
});

/* SLIDER */
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(){
slides.forEach(s => s.style.display = "none");
index++;
if(index > slides.length){index = 1;}
slides[index-1].style.display = "block";
setTimeout(showSlide, 3000);
}

if(slides.length > 0){
showSlide();
}

/* DOTS */
function currentSlide(n){
index = n-1;
showSlide();
}








