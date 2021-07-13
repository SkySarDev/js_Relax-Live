import showPhoneNumber from './showPhoneNumber';
import showMenu from './showMenu';
import smoothScrolling from './smoothScrolling';

const handlers = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    document.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;

        // Show/Hide Phone Number
        if (
            target.classList.contains('header-contacts__arrow') ||
            target.parentNode.classList.contains('header-contacts__arrow')
        ) {
            showPhoneNumber();
        }

        // Show Menu
        if (target.classList.contains('menu__icon')) showMenu(popupDialogMenu, true);

        // Close Menu / Smooth Scrolling
        if (popupDialogMenu.classList.contains('show-menu')) {
            if (
                target.classList.contains('close-menu') ||
                (!target.closest('.popup-dialog-menu') && !target.classList.contains('menu__icon'))
            ) {
                showMenu(popupDialogMenu, false);
            }

            if (target.classList.contains('menu-link') || target.closest('.menu-link')) {
                const point = target.getAttribute('href');

                if (point && point !== '#') smoothScrolling(point);

                showMenu(popupDialogMenu, false);
            }
        }

        // Button footer add Smooth Scrolling
        if (target.classList.contains('button-footer') || target.parentNode.classList.contains('button-footer')) {
            smoothScrolling(target.closest('.button-footer').firstElementChild.getAttribute('href'));
        }
    });
};

export default handlers;
