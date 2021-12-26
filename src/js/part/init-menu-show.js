import {addClassElement, removeClassElement} from './helper-functions';
import {menuPanel, overlay, loginPopup, regPopup, closeMenu} from './helper-vars';


let openMenuBtn = document.querySelector('.header__menu-btn');


openMenuBtn.addEventListener('click', function() {
    addClassElement(menuPanel, 'show');
    addClassElement(overlay, 'show');
    removeClassElement(loginPopup, 'show');
    removeClassElement(regPopup, 'show');
});

overlay.addEventListener('click', function() {
    removeClassElement(this, 'show');
    removeClassElement(menuPanel, 'show');
});

closeMenu.addEventListener('click', function() {
    removeClassElement(menuPanel, 'show');
    removeClassElement(overlay, 'show');
});