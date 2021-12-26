import {addClassElement, removeClassElement} from './helper-functions';
import {close, overlay, loginPopup, regPopup, menuPanel} from './helper-vars';


const btnShowLoginPopup = document.querySelectorAll('.js-btn--login');
const btnShowRegPopup = document.querySelectorAll('.js-btn--reg');

const socIcnItems = document.querySelectorAll('.popup__social-link');
const wrapper = document.querySelector('.wrapper');


btnShowLoginPopup.forEach(el => {
    el.addEventListener('click', () => {
        addClassElement(loginPopup, 'show');
        addClassElement(overlay, 'show');
        removeClassElement(menuPanel, 'show');
    });
});

btnShowRegPopup.forEach(el => {
    el.addEventListener('click', () => {
        addClassElement(regPopup, 'show');
        addClassElement(overlay, 'show');
        removeClassElement(menuPanel, 'show');
    });
});


close.forEach(el => {
    el.addEventListener('click', function() {
        removeClassElement(overlay, 'show');
        removeClassElement(loginPopup, 'show');
        removeClassElement(regPopup, 'show');
    });
});

overlay.addEventListener('click', function(){
    removeClassElement(this, 'show');
    removeClassElement(loginPopup, 'show');
    removeClassElement(regPopup, 'show');
});


//demo registration
socIcnItems.forEach(el => {
    el.addEventListener('click', function(){
        removeClassElement(overlay, 'show');
        removeClassElement(loginPopup, 'show');
        removeClassElement(regPopup, 'show');
        // wrapper.classList.add('wrapper--reg');
        addClassElement(wrapper, 'wrapper--reg');
    });
});