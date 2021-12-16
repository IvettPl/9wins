const filterBox = document.querySelectorAll('.cat-slider__item');
const filterList = document.querySelector('.sort__header-list');

if(filterList) {
    filterList.addEventListener('click', event => {
        if(event.target.tagName !== 'DIV') {
            return false;
        }

        let filterClass = event.target.dataset['f'];

        filterBox.forEach( el => {

            el.classList.remove('js-hide');

            if(!el.classList.contains(filterClass) && filterClass !== 'all') {
                el.classList.add('js-hide');
            }

        });
    });
}

