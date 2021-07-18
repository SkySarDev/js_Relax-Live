import getData from '../getData';
import showHideElements from './showHideElements';

const changeItem = (API_URL, itemID) => {
    const setFormValues = data => {
        const form = document.getElementById('new-item-form'),
            type = form.querySelector('input[name="type"]'),
            name = form.querySelector('input[name="name"]'),
            units = form.querySelector('input[name="units"]'),
            cost = form.querySelector('input[name="cost"]'),
            modal = document.getElementById('modal'),
            modalHeaderChange = modal.querySelector('.modal__header-change');

        form.setAttribute('data-id', data.id);
        type.value = data.type;
        name.value = data.name;
        units.value = data.units;
        cost.value = data.cost;

        showHideElements([modalHeaderChange, modal], 'show', true);
    };

    getData(API_URL + '/api/items/' + itemID)
        .then(res => setFormValues(res))
        .catch(error => {
            alert('Ошибка: ' + error);
        });
};

export default changeItem;
