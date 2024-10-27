var topbar = document.getElementById("topbar")
var closebtn = document.getElementById("closebtn")

closebtn.addEventListener("click", function () {
    topbar.style.display="none"
})

// side navbar
var menuicon = document.getElementById("menuicon")
var side_navbar = document.getElementById("side-navbar")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    side_navbar.style.left = 0
})

closenav.addEventListener("click", function () {
    side_navbar.style.left = "-65%"
})


//slide image
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

