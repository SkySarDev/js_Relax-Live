'use strict';

import '../admin/index.html';
import '../css/admin.css';

import auth from './modules/admin/auth';
import { getCookie, redirect } from './modules/admin/services';

if (getCookie('demo')) redirect('/admin/table.html');
else auth();
