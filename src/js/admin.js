'use strict';

import '../admin/table.html';
import '../css/admin.css';

import { getCookie, redirect } from './modules/admin/services';

if (!getCookie('demo')) redirect('/admin');
