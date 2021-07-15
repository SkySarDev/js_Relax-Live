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
