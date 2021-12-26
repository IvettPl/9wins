/*
@ init tabs
*/
document.querySelectorAll('.tabs').forEach(el => {

    el.addEventListener('click', event => {

        let target = event.target;

        if(!target.classList.contains('tabs__header-item')) {
            return false;
        }
        let activeTabAttr = event.target.getAttribute('data-tab');

        el.classList.remove('tab-1', 'tab-2', 'tab-3');
        el.classList.add(activeTabAttr);

    })
});