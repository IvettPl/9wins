let avatarHeader = document.querySelector('.avatar');
let profilePanel = document.querySelector('#profile-panel');
const overlay = document.querySelector('.overlay');
const screenBoxes = document.querySelectorAll('.screen');
const close = document.querySelector('.profile__close');
const logout = document.querySelector('.profile__logout');
const wrapper = document.querySelector('.wrapper');


function opened() {
    profilePanel.classList.add('show');
    overlay.classList.add('show');
}

function closed() {
    profilePanel.classList.remove('show');
    overlay.classList.remove('show');
    screenBoxes.forEach(el => {
        el.classList.remove('show');
    });
}

avatarHeader.addEventListener('click', opened);
overlay.addEventListener('click', closed);
close.addEventListener('click', closed);

logout.addEventListener('click', function() {
    closed();
    wrapper.classList.remove('wrapper--reg');
});


document.querySelectorAll('.profile-list').forEach(el => {

    const listItems = el.querySelectorAll('.list__item');

    listItems.forEach(el => {
        el.addEventListener('click', function(e) {
            let activeItem = this.getAttribute('data-screen');

            screenBoxes.forEach(el => {
                if(el.classList.contains(activeItem)) {
                    el.classList.add('show');
                }
            });
        });
    });
});