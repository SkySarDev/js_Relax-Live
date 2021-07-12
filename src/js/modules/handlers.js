import showPhoneNumber from './showPhoneNumber';
import showMenu from './showMenu';

const handlers = () => {
    document.addEventListener('click', e => {
        const target = e.target;

        if (
            target.classList.contains('header-contacts__arrow') ||
            target.parentNode.classList.contains('header-contacts__arrow')
        ) {
            showPhoneNumber();
        }

        if (target.classList.contains('menu__icon')) showMenu(true);
        if (target.classList.contains('close-menu') || target.classList.contains('menu-link')) showMenu(false);
    });
};

export default handlers;
