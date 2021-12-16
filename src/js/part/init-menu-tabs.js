

document.querySelectorAll('.header-nav__tabs').forEach((e) => {
    let tabNavs = e.querySelectorAll(".header-nav__tabs-head-item");
    let tabPanes = e.querySelectorAll(".header-nav__list");
    let tabNavsParent = e.querySelector('.header-nav__tabs-head');
    let tabNPanesParent = e.querySelector('.header-nav__tabs-content');


    for(let i = 0; i < tabNavs.length; i++) {
        tabNavs[i].addEventListener('click', function(e) {
            e.preventDefault();

            let activeTabAttr = e.target.getAttribute('data-tab');


            if(activeTabAttr == 2) {
                tabNavsParent.classList.add("shift");
                tabNPanesParent.classList.add("shift");
            } else {
                tabNavsParent.classList.remove("shift");
                tabNPanesParent.classList.remove("shift");
            }

            for(let j = 0; j < tabNavs.length; j++) {
                let contentAttr = tabPanes[j].getAttribute("data-tab-content");

                if(activeTabAttr === contentAttr) {
                    tabNavs[j].classList.add("active");
                    tabPanes[j].classList.add("active");
                } else {
                    tabNavs[j].classList.remove("active");
                    tabPanes[j].classList.remove("active");
                }
            }
        });
    }
});