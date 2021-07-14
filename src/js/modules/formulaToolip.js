const formulaToolip = (element, show) => {
    if (show) {
        element.classList.add('active-item');

        if (element.querySelector('.formula-item-popup').getBoundingClientRect().top < 0)
            element.classList.add('rotate');
    } else {
        element.classList.remove('active-item', 'rotate');
    }
};

export default formulaToolip;
