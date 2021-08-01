'use strict';

import '../admin/table.html';
import '../css/admin.css';

import { getCookie, redirect } from './modules/admin/services';
import listServices from './modules/admin/listServices';
import handlers from './modules/admin/handlers';

const API_URL = 'https://relax-life.herokuapp.com';
const currentUrl = window.location.origin + '/relax-life';

if (!getCookie('demo')) redirect(currentUrl + '/admin');

listServices(API_URL);
handlers(API_URL);
