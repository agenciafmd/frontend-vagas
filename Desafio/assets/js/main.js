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


// Validação do formulário de newsletter

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

const form = document.getElementById("formulario");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    nameValidate();
    emailValidate();

    if((campos[0].value.length != "") && (emailRegex.test(campos[1].value))) {
        modal.classList.add("open-modal");
        closeBtn.addEventListener("click", function () {
        modal.classList.remove("open-modal");
        });
    }
    parent.document.getElementById("formulario").reset();
});

function setError(index){
    campos[index].style.border = "2px solid #e63636";
    spans[index].style.display = "block";
}

function removeError(index){
    campos[index].style.border = "";
    spans[index].style.display = "none";
}

function nameValidate() {
    if(campos[0].value.length == "")
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
   }
    else
    {
        removeError(1);
    }
}


// Slider das avaliações

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
  
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        781: {
            slidesPerView: 3,
        },
    }
  });

