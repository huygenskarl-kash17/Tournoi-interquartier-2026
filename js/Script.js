let index = 0;
autoSlide();

/* SLIDER */
function autoSlide(){
    let slides = document.querySelectorAll(".slide");
    slides.forEach(s => s.style.display="none");

    index++;
    if(index > slides.length){index = 1;}

    slides[index-1].style.display="block";
    setTimeout(autoSlide,2000);
}

function currentSlide(n){
    index = n-1;
    autoSlide();
}

/* ACTIVE NAV AUTO DETECT */
let links = document.querySelectorAll("nav a");
links.forEach(link=>{
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

