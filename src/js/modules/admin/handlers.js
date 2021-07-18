import sendData from './sendData';
import deleteItem from './deleteItem';
import changeItem from './changeItem';
import showHideElements from './showHideElements';

const handlers = API_URL => {
    const modal = document.getElementById('modal'),
        modalHeaderAdd = modal.querySelector('.modal__header-add'),
        modalHeaderChange = modal.querySelector('.modal__header-change');

    document.addEventListener('click', e => {
        const target = e.target,
            newItemForm = document.getElementById('new-item-form');

        if (target.closest('.btn-addItem')) {
            newItemForm.setAttribute('data-action', 'add');
            showHideElements([modalHeaderAdd, modal], 'show', true);
        }

        if (target.classList.contains('modal__overlay') || target.closest('.button__close')) {
            newItemForm.removeAttribute('data-action');
            showHideElements([modal, modalHeaderAdd, modalHeaderChange], 'show');
        }

        if (target.closest('.cancel-button')) {
            e.preventDefault();

            newItemForm.removeAttribute('data-action');
            newItemForm.reset();
            showHideElements([modalHeaderAdd, modal], 'show');
        }

        if (target.closest('.action-remove')) {
            const confirmation = confirm('Вы действительно хотите удалить услугу?');

            if (confirmation) deleteItem(API_URL, target.closest('.table__row').getAttribute('data-id'));
        }

        if (target.closest('.action-change')) {
            newItemForm.setAttribute('data-action', 'change');
            changeItem(API_URL, target.closest('.table__row').getAttribute('data-id'));
        }
    });

    document.addEventListener('submit', e => {
        e.preventDefault();

        const target = e.target,
            action = target.getAttribute('data-action');

        showHideElements([modal, modalHeaderAdd, modalHeaderChange], 'show');

        if (action === 'add') sendData(API_URL, '/api/items', target, 'POST');
        else if (action === 'change') sendData(API_URL, `/api/items/${target.dataset.id}`, target, 'PATCH');

        target.removeAttribute('data-action');
        target.removeAttribute('data-id');
    });
};

export default handlers;
