'use strict';

import '../admin/table.html';
import '../css/admin.css';

import { getCookie, redirect } from './modules/admin/services';
import listServices from './modules/admin/listServices';

const API_URL = 'https://obscure-scrubland-21489.herokuapp.com';
const currentUrl = window.location.origin + '/relax-life';

if (!getCookie('demo')) redirect(currentUrl + '/admin');

listServices(API_URL);
