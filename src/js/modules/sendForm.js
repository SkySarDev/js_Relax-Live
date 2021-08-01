import database from './database';
import showPopup from './showPopup';

const sendForm = form => {
    const formData = new FormData(form),
        body = {};

    formData.forEach((val, key) => {
        body[key] = val;
    });

    form.reset();

    const deleteMsg = element => {
        setTimeout(() => {
            showPopup(element, false);
        }, 3500);
    };

    database({
        url: 'https://just-mini-server.herokuapp.com/api/callback',
        method: 'POST',
        body: JSON.stringify(body),
    })
        .then(response => {
            if (response.status === 200) {
                const popupThank = document.querySelector('.popup-thank');

                showPopup(popupThank, true);
                deleteMsg(popupThank);
            } else {
                throw new Error(response.statusText);
            }
        })
        .catch(error => {
            const popupError = document.querySelector('.popup-error');

            showPopup(popupError, true);
            deleteMsg(popupError);
            console.warn(error);
        });
};

export default sendForm;
