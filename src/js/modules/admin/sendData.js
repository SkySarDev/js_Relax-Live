import database from '../database';
import listServices from './listServices';

const sendData = (API_URL, data) => {
    const body = {};

    new FormData(data).forEach((val, key) => {
        body[key] = val;
    });

    data.reset();

    database({
        url: API_URL + '/api/items',
        method: 'POST',
        body: JSON.stringify(body),
    })
        .then(response => {
            if (response.status === 201) {
                listServices(API_URL);
            } else {
                throw new Error(response.statusText);
            }
        })
        .catch(error => {
            console.warn(error);
        });
};

export default sendData;
