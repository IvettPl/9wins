const itemsAnimate = document.querySelectorAll('.js-animate');


const scrollAnimation = function() {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;

    itemsAnimate.forEach(function(el) {
        let scrollOffset = el.offsetTop - (el.offsetHeight / 1.5);

        // console.log(scrollOffset);

        if(windowCenter >= scrollOffset) {
            el.classList.add('animation');
        }
    });
}

scrollAnimation();

window.addEventListener('scroll', function() {
    scrollAnimation();
});