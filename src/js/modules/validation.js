const validations = forms => {
    document.querySelectorAll(forms).forEach(input => {
        input.addEventListener('focusout', e => {
            const target = e.target;
            target.value = target.value
                .replace(/ +/g, ' ')
                .split(' ')
                .reduce(
                    (accum, item) => accum + ' ' + item.substr(0, 1).toUpperCase() + item.substr(1).toLowerCase(),
                    ''
                )
                .trim();
        });

        input.addEventListener('input', e => {
            const target = e.target;
            target.value = target.value.replace(/[^ а-яё]/i, '');
        });
    });
};

export default validations;
