const formulaToolip = ({ element, elementsHide, show }) => {
    if (elementsHide)
        document.querySelectorAll(elementsHide).forEach(element => {
            element.classList.remove('active-item');
        });

    if (element) {
        if (show) {
            element.classList.add('active-item');

            if (element.querySelector('.formula-item-popup').getBoundingClientRect().top < 0) {
                element.closest('.row').style.zIndex = 10;
                element.classList.add('rotate');
            }
        } else {
            element.classList.remove('active-item', 'rotate');
            element.closest('.row').style.zIndex = '';
        }
    }
};

export default formulaToolip;
