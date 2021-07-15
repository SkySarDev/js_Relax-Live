import showPhoneNumber from './showPhoneNumber';
import smoothScrolling from './smoothScrolling';
import showPopup from './showPopup';
import accordion from './accordion';
import formulaToolip from './formulaToolip';
import slider from './slider';
import tabsManager from './tabsManager';

const handlers = () => {
    const formula = document.getElementById('formula');

    const getIndexElement = (elementsSelector, target) =>
        Array.from(document.querySelectorAll(elementsSelector)).indexOf(target);

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

        // Show Popup Privacy
        if (target.classList.contains('link-privacy')) {
            showPopup(document.querySelector('.popup-privacy'), true);
        }

        // Show Popup Portfolio
        // if (target.classList.contains('portfolio-slider__slide-frame')) {
        //     showPopup(document.querySelector('.popup-portfolio'), true);
        // }

        // Show Popup Consultation
        if (target.classList.contains('button-consultation')) {
            showPopup(document.querySelector('.popup-consultation'), true);
        }

        // Show Popup Transparency
        if (target.classList.contains('transparency-item__img')) {
            slider(
                'horizontal',
                '.popup-transparency-slider-wrapper',
                '.popup-transparency-slider__slide',
                '#transparency_right',
                '#transparency_left',
                '#transparency-popup-counter',
                getIndexElement('.transparency-item__img', target)
            );
            showPopup(document.querySelector('.popup-transparency'), true);
        }

        // Hide Popups
        if (target.classList.contains('popup') || target.classList.contains('close')) {
            showPopup(target.closest('.popup'), false);
        }

        // Accordion
        if (target.classList.contains('title_block')) {
            if (!target.classList.contains('msg-active')) accordion(target);
        }

        // Tab Repair Types
        if (target.classList.contains('repair-types-nav__item')) {
            const index = getIndexElement('.repair-types-nav__item', target);
            tabsManager('', '.repair-types-nav__item', index);
            slider(
                'horizontal',
                `[data-types-repair="${index}"]`,
                '.repair-types-slider__slide',
                '#repair-types-arrow_right',
                '#repair-types-arrow_left',
                '#repair-counter'
            );
            slider('vertical', '.repair-types-slider-vertical', '[data-types-repair]', '', '', '', index);
        }
    });

    // Formula Tooltip Show
    formula.addEventListener('mouseover', e => {
        if (e.target.classList.contains('formula-item__icon-inner-text'))
            formulaToolip(e.target.closest('.formula-item'), true);
    });

    // Formula Tooltip Hide
    formula.addEventListener('mouseout', e => {
        if (e.target.classList.contains('formula-item__icon-inner-text'))
            formulaToolip(e.target.closest('.formula-item'), false);
    });
};

export default handlers;
