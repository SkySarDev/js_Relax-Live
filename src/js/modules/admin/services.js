const setCookie = (name, value, options = {}) => {
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    if (options.expires instanceof Date) options.expires = options.expires.toUTCString();

    for (const optionKey in options) {
        updatedCookie += '; ' + optionKey;

        const optionValue = options[optionKey];

        if (optionValue !== true) {
            updatedCookie += '=' + optionValue;
        }
    }

    document.cookie = updatedCookie;
};

const getCookie = name => new RegExp(name).test(document.cookie);

const redirect = url => {
    document.location.replace(url);
};

export { setCookie, getCookie, redirect };
