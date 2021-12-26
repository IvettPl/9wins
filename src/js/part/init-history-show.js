let historyItems = document.querySelectorAll('.historylist__item-header');
let historyDetailsBtn = document.querySelectorAll('.historylist__detalis-close');



historyItems.forEach(el => {
    el.addEventListener('click', function() {
        historyItems.forEach(elem => {
            elem.closest('.historylist__item').classList.remove('show');
        })
        this.closest('.historylist__item').classList.add('show');
    });
});


historyDetailsBtn.forEach(el => {
    el.addEventListener('click', function() {
        this.closest('.historylist__item').classList.remove('show');
    });
});