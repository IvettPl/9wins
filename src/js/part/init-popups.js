const btnShowLoginPopup = document.querySelector('.js-btn--login');
const loginPopup = document.querySelector('#login');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('#login .header-nav__close');

const socIcnItems = document.querySelectorAll('.login__social-icn');
const socIcnsList = document.querySelector('.login__social-icns');
const wrapper = document.querySelector('.wrapper');


btnShowLoginPopup.addEventListener('click', function() {
    loginPopup.classList.add('show');
    overlay.classList.add('show');
});

overlay.addEventListener('click', function() {
    loginPopup.classList.remove('show');
    overlay.classList.remove('show');
});

close.addEventListener('click', function() {
    loginPopup.classList.remove('show');
    overlay.classList.remove('show');
});


//demo registration
if(socIcnsList) {
    socIcnsList.addEventListener('click', event => {
        if(event.target.tagName !== 'IMG') {
            return false;
        } else {
            wrapper.classList.add('wrapper--reg');
            loginPopup.classList.remove('show');
            overlay.classList.remove('show');
        }
    });
}



