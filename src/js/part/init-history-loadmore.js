
const btnLoadMore = document.querySelector('.historylist .btn');
let historyItems = document.querySelectorAll('.historylist__item');
const total = historyItems.length;
const countLoad = 3;
let startShow = 2;


historyItems.forEach((el, i) => {

    if((i+1) > startShow) {
        el.classList.add('js-hide');
    }
});

btnLoadMore.addEventListener('click', function() {
    startShow = (startShow+countLoad <= total) ? startShow+countLoad : total;

    historyItems.forEach((el, i) => {
        if((i+1) <= startShow) {
            el.classList.remove('js-hide');
        }

        if(startShow >= total) {
            this.closest('.btn__wrap').classList.add('js-hide');
        }
    });
});