const newRequestBtn = document.querySelector('#new-request');
const depositDetailsBtn = document.querySelector('#deposit-details');
const depositHistoryBtn = document.querySelector('#history-deposit');

/*
@ open cashies forms
*/
document.querySelectorAll('.cartlist__item').forEach(el => {

    el.addEventListener('click', function() {

        this.closest('.cartlist').classList.add('js-hide');
        this.closest('.cartlist').nextElementSibling.classList.remove('js-hide');

    });
});


/*
@ open cart list to Withdraval tab
*/
if(depositDetailsBtn) {
    newRequestBtn.addEventListener('click', function() {

        this.closest('.empty-box').classList.add('js-hide');
        this.closest('.empty-box').nextElementSibling.classList.remove('js-hide');

    });
}


/*
@ open infolist to Withdraval tab
*/
if(depositDetailsBtn) {
    depositDetailsBtn.addEventListener('click', function() {

        let emptyBox = document.querySelector('.empty-box');
        let emptyField = document.querySelector('.empty-box__field');
        let requestInfoList = document.querySelector('.infolist--counter');

        this.closest('.cashier-form').classList.add('js-hide');
        emptyBox.classList.remove('js-hide');
        emptyField.classList.add('js-hide');
        requestInfoList.classList.remove('js-hide');
    });
}


/*
@ open history list to History tab
*/
if(depositDetailsBtn) {
    depositHistoryBtn.addEventListener('click', function() {
        this.closest('.empty-box').classList.add('js-hide');
        this.closest('.empty-box').nextElementSibling.classList.remove('js-hide');
    });
}