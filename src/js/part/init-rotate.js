let btnDetail = document.querySelectorAll('.js-detail');
let btnOk = document.querySelectorAll('.js-ok');


btnDetail.forEach(function(el) {
    el.addEventListener('click', function() {
        for(let i = 0; i < btnDetail.length; i++) {
            this.closest('.charitem').classList.add('charitem--rotate');
        }
    });
});

btnOk.forEach(function(el) {
    el.addEventListener('click', function() {
        for(let i = 0; i < btnOk.length; i++) {
            this.closest('.charitem').classList.remove('charitem--rotate');
        }
    });
});