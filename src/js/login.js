'use strict';

import '../admin/index.html';
import '../css/admin.css';

import auth from './modules/admin/auth';
import { getCookie, redirect } from './modules/admin/services';

const currentUrl = window.location.origin + '/relax-life';

if (getCookie('demo')) redirect(currentUrl + '/admin/table.html');
else auth(currentUrl);
