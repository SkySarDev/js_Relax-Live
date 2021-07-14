'use strict';

import '../css/style.css';
import '../index.html';

import handlers from './modules/handlers';
import phoneMask from './modules/phoneMask';

handlers();
phoneMask('[name="phone"]');
