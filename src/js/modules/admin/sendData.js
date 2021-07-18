import database from '../database';
import listServices from './listServices';

const sendData = (API_URL, url, data, method) => {
    const body = {};

    new FormData(data).forEach((val, key) => {
        body[key] = val;
    });

    data.reset();

    database({
        url: API_URL + url,
        method,
        body: JSON.stringify(body),
    })
        .then(response => {
            if (response.status === 200 || response.status === 201) {
                listServices(API_URL);
            } else {
                throw response;
            }
        })
        .catch(error => {
            if (error.status === 422) alert('Введите корректные данные!');
            else alert('Ошибка сервера!');
        });
};

export default sendData;
