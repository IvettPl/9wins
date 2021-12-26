import {addClassElement, removeClassElement} from './helper-functions.js';

const showEmptyBonus = document.querySelector('.bonus__title');
let bonusesModules = document.querySelectorAll('.js-bonuses');
const emptyBonusesBlock = document.querySelector('.bonus-empty');



if(showEmptyBonus) {
    showEmptyBonus.addEventListener('click', function() {

        if(emptyBonusesBlock.classList.contains('show')) {
            bonusesModules.forEach(el => {
                removeClassElement(el, 'hide');
            });

            removeClassElement(emptyBonusesBlock, 'show');
        } else {
            bonusesModules.forEach(el => {
                addClassElement(el, 'hide');
            });

            addClassElement(emptyBonusesBlock, 'show');
        }

    });
}