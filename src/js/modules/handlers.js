import showPhoneNumber from './showPhoneNumber';
import smoothScrolling from './smoothScrolling';
import showPopup from './showPopup';
import accordion from './accordion';
import formulaToolip from './formulaToolip';
import slider from './slider';
import tabsToggle from './tabsToggle';
import sendForm from './sendForm';
import repairTypes from './repairTypes';
import { getIndexElement } from './services';

const handlers = API_URL => {
    const formula = document.getElementById('formula');

    document.addEventListener('click', e => {
        const target = e.target;
        const popupMenu = document.querySelector('.popup-menu');

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
                e.preventDefault();
                const point = target.getAttribute('href');

                if (point && point !== '#') smoothScrolling(point);

                showPopup(popupMenu, false);
            }
        }

        // Button footer add Smooth Scrolling
        if (target.classList.contains('button-footer') || target.parentNode.classList.contains('button-footer')) {
            e.preventDefault();
            smoothScrolling(target.closest('.button-footer').firstElementChild.getAttribute('href'));
        }

        // Show Popup Repair
        if (target.closest('.link-repair-types')) {
            repairTypes(API_URL);
            showPopup(document.querySelector('.popup-repair-types'), true);
        }

        // Show Popup Privacy
        if (target.classList.contains('link-privacy')) {
            showPopup(document.querySelector('.popup-privacy'), true);
        }

        // Show Popup Portfolio
        if (target.classList.contains('portfolio-slider__slide-frame')) {
            const parent = target.closest('.portfolio-slider-mobile')
                    ? '.portfolio-slider-mobile'
                    : '.portfolio-slider-wrapper',
                indexEl = getIndexElement(`${parent} .portfolio-slider__slide-frame`, target);

            // Slider Popup Portfolio Slides
            slider({
                sliderWrap: '.popup-portfolio-slider-wrapper',
                slides: '.popup-portfolio-slider__slide',
                next: '#popup_portfolio_right',
                prev: '#popup_portfolio_left',
                counterID: '#popup-portfolio-counter',
                start: indexEl,
            });
            // Slider Popup Portfolio Texts
            slider({
                sliderWrap: '.popup-portfolio-text-wrapper',
                slides: '.popup-portfolio-text',
                next: '#popup_portfolio_right',
                prev: '#popup_portfolio_left',
                start: indexEl,
            });
            showPopup(document.querySelector('.popup-portfolio'), true);
        }

        // Show Popup Consultation
        if (target.classList.contains('button-consultation')) {
            showPopup(document.querySelector('.popup-consultation'), true);
        }

        // Show Popup Transparency
        if (target.classList.contains('transparency-item__img')) {
            slider({
                sliderWrap: '.popup-transparency-slider-wrapper',
                slides: '.popup-transparency-slider__slide',
                next: '#transparency_right',
                prev: '#transparency_left',
                counterID: '#transparency-popup-counter',
                start: getIndexElement('.transparency-item__img', target),
            });
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
            tabsToggle('.repair-types-nav__item', index);
            slider({
                sliderWrap: `[data-types-repair="${index}"]`,
                slides: '.repair-types-slider__slide',
                next: '#repair-types-arrow_right',
                prev: '#repair-types-arrow_left',
                counterID: '#repair-counter',
            });
            slider({
                direction: 'vertical',
                sliderWrap: '.repair-types-slider-vertical',
                slides: '[data-types-repair]',
                start: index,
            });
        }

        // Formula Tooltip Mobile
        if (target.closest('.formula-slider-wrap')) {
            if (document.documentElement.clientWidth > 780) {
                if (target.classList.contains('formula-slider__slide')) {
                    formulaToolip({
                        element: target,
                        show: true,
                        elementsHide: '.formula-slider__slide',
                    });
                }

                if (target.closest('.slider-arrow')) {
                    formulaToolip({ elementsHide: '.formula-slider__slide' });
                }
            }
        }

        // Checkbox Toggle
        if (target.classList.contains('checkbox__label')) {
            const checkbox = document.getElementById(target.getAttribute('for'));
            checkbox.checked = !!checkbox.checked;
            target.closest('.submit-form').querySelector('button').disabled = checkbox.checked;
        }
    });

    // Formula Tooltip Show
    formula.addEventListener('mouseover', e => {
        if (e.target.classList.contains('formula-item__icon-inner-text'))
            formulaToolip({
                element: e.target.closest('.formula-item'),
                show: true,
            });
    });

    // Formula Tooltip Hide
    formula.addEventListener('mouseout', e => {
        if (e.target.classList.contains('formula-item__icon-inner-text'))
            formulaToolip({
                element: e.target.closest('.formula-item'),
            });
    });

    document.addEventListener('submit', e => {
        e.preventDefault();
        const target = e.target,
            button = target.querySelector('button');

        if (button.classList.contains('button-consultation-popup'))
            showPopup(document.querySelector('.popup-consultation'), false);

        button.disabled = true;
        sendForm(target);
    });
};

export default handlers;
