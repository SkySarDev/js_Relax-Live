const showPopup = (element, show) => {
    const popupDialog = element.querySelector('.popup-content');

    if (show) {
        element.classList.add('show-popup');

        setTimeout(() => {
            popupDialog.classList.add('show-content');
        }, 0);
    } else {
        popupDialog.classList.remove('show-content');

        setTimeout(() => {
            element.classList.remove('show-popup');
        }, 350);
    }
};

export default showPopup;
