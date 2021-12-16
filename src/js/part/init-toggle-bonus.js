let avatar = document.querySelector('.profile__avatar');
let noBonus = document.querySelector('.slider-mod--nobonuses');
let sliders = document.querySelectorAll('.slider-mod');

console.log(avatar);

avatar.addEventListener('click', function() {
    noBonus.classList.toggle('show');

    for(let i = 0; i < sliders.length; i++) {
        sliders[i].classList.toggle('hide');
    }
});