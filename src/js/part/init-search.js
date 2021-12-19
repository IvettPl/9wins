const searchOpen = document.querySelector('#search-open');
const searchBtn = document.querySelector('#search-btn');

const overlay = document.querySelector('.overlay');

const sortPanel = document.querySelector('.sort-panel');
const searchFilterBtn = document.querySelector('.search-filter');
const applyPanel = document.querySelector('.apply-filter');
const closeApplyPanelBtn = document.querySelector('.apply-filter .header-nav__close');



if(searchOpen) {
    searchOpen.addEventListener('click', function() {
        sortPanel.classList.add('show');
    });

    searchBtn.addEventListener('click', function() {
        sortPanel.classList.remove('show');
    });

    searchFilterBtn.addEventListener('click', function() {
        applyPanel.classList.add('show');
        overlay.classList.add('show');
    });


    overlay.addEventListener('click', function() {
        applyPanel.classList.remove('show');
        overlay.classList.remove('show');
    });

    closeApplyPanelBtn.addEventListener('click', function() {
        applyPanel.classList.remove('show');
        overlay.classList.remove('show');
    });
}
