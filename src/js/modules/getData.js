import database from './database';

const getData = url =>
    database({
        url,
        method: 'GET',
    }).then(response => {
        if (response.status === 200) return response.json();
        else throw new Error(response.statusText);
    });

export default getData;
