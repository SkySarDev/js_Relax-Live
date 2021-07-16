'use strict';

import '../css/style.css';
import '../index.html';

import handlers from './modules/handlers';
import phoneMask from './modules/phoneMask';
import slider from './modules/slider';

handlers();
phoneMask('[name="phone"]');

// Slider Reviews
slider({
    sliderWrap: '.reviews-slider-wrapper',
    slides: '.reviews-slider__slide',
    next: '#reviews-arrow_right',
    prev: '#reviews-arrow_left',
});
// Slider Transparency
slider({
    sliderWrap: '.transparency-slider-wrapper',
    slides: '.transparency-item',
    next: '#transparency-arrow_right',
    prev: '#transparency-arrow_left',
});
// Slider Types Repair
slider({
    sliderWrap: '[data-types-repair="0"]',
    slides: '.repair-types-slider__slide',
    next: '#repair-types-arrow_right',
    prev: '#repair-types-arrow_left',
    counterID: '#repair-counter',
});
// Slider Types Repair Vertical
slider({
    direction: 'vertical',
    sliderWrap: '.repair-types-slider-vertical',
    slides: '[data-types-repair]',
});
// Slider Nav List Repair
slider({
    sliderWrap: '.nav-list-repair',
    slides: '.repair-types-nav__item',
    next: '#nav-arrow-repair-right_base',
    prev: '#nav-arrow-repair-left_base',
    slideShowOpt: [
        { maxWidth: 1024, percent: 50 },
        { maxWidth: 575, percent: 100 },
    ],
});
// Slider Nav List Repair
slider({
    sliderWrap: '.nav-list-repair',
    slides: '.repair-types-nav__item',
    next: '#nav-arrow-repair-right_base',
    prev: '#nav-arrow-repair-left_base',
    slideShowOpt: [
        { maxWidth: 1024, percent: 50 },
        { maxWidth: 575, percent: 100 },
    ],
});
// Slider Portfolio
slider({
    sliderWrap: '.portfolio-slider-wrapper',
    slides: '.portfolio-slider__slide',
    next: '#portfolio-arrow_right',
    prev: '#portfolio-arrow_left',
    loop: false,
    slideShowOpt: [
        { maxWidth: Infinity, percent: 20, slidesToShow: 3 },
        { maxWidth: 1024, percent: 20, slidesToShow: 2 },
        { maxWidth: 900, percent: 20, slidesToShow: 1 },
    ],
});
// Slider Portfolio Mobile
slider({
    sliderWrap: '.portfolio-slider-wrapper-mobile',
    slides: '.portfolio-slider__slide-frame',
    next: '#portfolio-arrow-mobile_right',
    prev: '#portfolio-arrow-mobile_left',
    counterID: '#portfolio-counter',
});
