import { setCookie, redirect } from './services';

const auth = () => {
    const name = 'demo',
        pass = 'demo',
        loginForm = document.getElementById('login-form'),
        inputName = document.getElementById('name'),
        inputPass = document.getElementById('pass'),
        nameWarning = document.getElementById('name-warning'),
        passWarning = document.getElementById('pass-warning');

    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        const nameValue = inputName.value.trim(),
            passValue = inputPass.value.trim();

        if (nameValue && passValue) {
            if (nameValue !== name || passValue !== pass) {
                if (nameValue !== name) nameWarning.classList.add('show');
                if (passValue !== pass) passWarning.classList.add('show');

                loginForm.reset();
                return;
            } else {
                setCookie('user', 'demo', { secure: false, 'max-age': 3600 });
                redirect('/admin/table.html');
            }
        }
    });

    loginForm.addEventListener('focusin', () => {
        nameWarning.classList.remove('show');
        passWarning.classList.remove('show');
    });
};

export default auth;
