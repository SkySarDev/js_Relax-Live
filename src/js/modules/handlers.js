import showPhoneNumber from './showPhoneNumber';
import smoothScrolling from './smoothScrolling';
import showPopup from './showPopup';

const handlers = () => {
    document.addEventListener('click', e => {
        const target = e.target;
        const popupMenu = document.querySelector('.popup-menu');

        e.preventDefault();

        // Show/Hide Phone Number
        if (
            target.classList.contains('header-contacts__arrow') ||
            target.parentNode.classList.contains('header-contacts__arrow')
        ) {
            showPhoneNumber();
        }

        // Show Menu
        if (target.classList.contains('menu__icon')) showPopup(popupMenu, true);

        // Close Menu / Smooth Scrolling
        if (popupMenu.classList.contains('show-popup')) {
            if (target.classList.contains('menu-link') || target.closest('.menu-link')) {
                const point = target.getAttribute('href');

                if (point && point !== '#') smoothScrolling(point);

                showPopup(popupMenu, false);
            }
        }

        // Button footer add Smooth Scrolling
        if (target.classList.contains('button-footer') || target.parentNode.classList.contains('button-footer')) {
            smoothScrolling(target.closest('.button-footer').firstElementChild.getAttribute('href'));
        }

        // Show Popup Repair
        if (target.closest('.link-repair-types')) {
            showPopup(document.querySelector('.popup-repair-types'), true);
        }

        // Popup Hide
        if (target.classList.contains('popup') || target.classList.contains('close')) {
            showPopup(target.closest('.popup'), false);
        }
    });
};

export default handlers;
