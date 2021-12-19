const btnShowLoginPopup = document.querySelectorAll('.js-btn--login');
const loginPopup = document.querySelector('#login');
const overlay = document.querySelector('.overlay');
const menuPanel = document.querySelector('.header-nav');

const close = document.querySelectorAll('.header-nav__close');

const socIcnItems = document.querySelectorAll('.login__social-icn');
const wrapper = document.querySelector('.wrapper');



function closed() {
    overlay.classList.remove('show');
    loginPopup.classList.remove('show');
}


// open login popup
btnShowLoginPopup.forEach(el => {
    el.addEventListener('click', function() {
        loginPopup.classList.add('show');

        if(!overlay.classList.contains('show')) {
            overlay.classList.add('show');
        }

        if(menuPanel.classList.contains('show')) {
            menuPanel.classList.remove('show');
        }
    });
});


// close popup and overlay cliick close btn
close.forEach(el => {
    el.addEventListener('click', closed);
});

// close popup and overlay cliick overlay
overlay.addEventListener('click', closed);



//demo registration
socIcnItems.forEach(el => {
    el.addEventListener('click', function(){
        closed();
        wrapper.classList.add('wrapper--reg');
    });
});