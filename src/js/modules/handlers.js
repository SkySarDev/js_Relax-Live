import showPhoneNumber from './showPhoneNumber';
import showMenu from './showMenu';
import smoothScrolling from './smoothScrolling';

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

        if (
            target.classList.contains('menu-link') ||
            target.classList.contains('button-footer') ||
            target.parentNode.classList.contains('button-footer')
        ) {
            e.preventDefault();

            if (target.classList.contains('button-footer')) {
                smoothScrolling(target.firstElementChild.getAttribute('href'));
            }

            smoothScrolling(target.getAttribute('href'));
        }
    });
};

export default handlers;
