/*
    init banner slider to home page
*/
var swiper = new Swiper(".banner-slider", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    speed: 1000,
    creativeEffect: {
        prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
        },
    next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


/*
    init bonus sliders
*/
var swiper = new Swiper(".slider-mod__list", {
    slidesPerView: "auto",
    spaceBetween: 4,
    breakpoints: {
        768: {
            spaceBetween: 32
        }
    }
});


/*
    init categories slider
*/
var swiper = new Swiper(".cat-slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
    breakpoints: {
        768: {
            spaceBetween: 32
        }
    }
});