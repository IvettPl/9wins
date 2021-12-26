/*custom select*/
const multiDefault = () => {
	const elements = document.querySelectorAll('.select-code');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
			classNames: {
                containerOuter: 'select',
                containerInner: 'select__inner',
                listSingle: 'select__single',
                listDropdown: 'select__dropdown',
                item: 'select__item',
                itemSelectable: 'select__single-item',
                itemChoice: 'select__list-item'
            }
		});
	});

}

multiDefault();