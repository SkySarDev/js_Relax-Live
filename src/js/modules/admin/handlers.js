import sendData from './sendData';
import deleteItem from './deleteItem';

const handlers = API_URL => {
    const modal = document.getElementById('modal');

    document.addEventListener('click', e => {
        const target = e.target,
            newItemForm = document.getElementById('new-item-form');

        if (target.closest('.btn-addItem')) modal.classList.add('show');

        if (target.classList.contains('modal__overlay') || target.closest('.button__close'))
            modal.classList.remove('show');

        if (target.closest('.cancel-button')) {
            e.preventDefault();

            newItemForm.reset();
            modal.classList.remove('show');
        }

        if (target.closest('.action-remove')) {
            const confirmation = confirm('Вы действительно хотите удалить услугу?');

            if (confirmation) deleteItem(API_URL, target.closest('.table__row').getAttribute('data-id'));
        }
    });

    document.addEventListener('submit', e => {
        e.preventDefault();

        modal.classList.remove('show');
        sendData(API_URL, e.target);
    });
};

export default handlers;
