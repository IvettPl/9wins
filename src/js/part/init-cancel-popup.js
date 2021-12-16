let btnCancel = document.querySelectorAll('.charitem__cancel');
let btnYes = document.querySelectorAll('.js-yes');
let btnNo = document.querySelectorAll('.js-no');



for (var i = 0; i < btnCancel.length; i++) {
    btnCancel[i].addEventListener('click',function(){
        this.closest('.charitem__info').firstElementChild.classList.add('show');
    });
}


for (var i = 0; i < btnNo.length; i++) {
    btnNo[i].addEventListener('click',function(){
        this.closest('.cancel-bonus').classList.remove('show');
    });
}

