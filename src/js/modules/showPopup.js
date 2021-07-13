import { scrollShow, scrollHide } from './services';

const showPopup = (element, show) => {
    const popupDialog = element.querySelector('.popup-content');

    if (show) {
        scrollHide();
        element.classList.add('show-popup');

        setTimeout(() => {
            popupDialog.classList.add('show-content');
        }, 0);
    } else {
        popupDialog.classList.remove('show-content');
        scrollShow();

        setTimeout(() => {
            element.classList.remove('show-popup');
        }, 350);
    }
};

export default showPopup;
