import database from '../database';
import listServices from './listServices';

const deleteItem = (API_URL, itemID) => {
    database({
        url: `${API_URL}/api/items/${itemID}`,
        method: 'DELETE',
    })
        .then(response => {
            if (response.status === 200) {
                listServices(API_URL);
            } else {
                throw new Error(response.statusText);
            }
        })
        .catch(error => {
            console.warn(error);
        });
};

export default deleteItem;
