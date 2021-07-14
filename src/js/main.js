'use strict';

import '../css/style.css';
import '../index.html';

import handlers from './modules/handlers';
import phoneMask from './modules/phoneMask';
import slider from './modules/slider';

handlers();
phoneMask('[name="phone"]');
slider('.reviews-slider-wrapper', '.reviews-slider__slide', '#reviews-arrow_right', '#reviews-arrow_left', false);
slider(
    '.transparency-slider-wrapper',
    '.transparency-item',
    '#transparency-arrow_right',
    '#transparency-arrow_left',
    false
);
