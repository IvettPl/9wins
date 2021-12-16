let menuShow = document.querySelector('.header__menu-btn');
let menuPanel = document.querySelector('.header-nav');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.header-nav__close');


menuShow.addEventListener('click', function() {
    menuPanel.classList.add('show');
    overlay.classList.add('show');
});

overlay.addEventListener('click', function() {
    menuPanel.classList.remove('show');
    overlay.classList.remove('show');
});

close.addEventListener('click', function() {
    menuPanel.classList.remove('show');
    overlay.classList.remove('show');
});