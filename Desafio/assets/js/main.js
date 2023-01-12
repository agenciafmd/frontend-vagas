// responsive navBar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () =>{
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
}

// Scroll navBar
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});



// Slider do home
var swiper = new Swiper(".home-swiper", {
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
});

// Modal 
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});