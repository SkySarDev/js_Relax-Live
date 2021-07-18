import getData from '../getData';

const listServices = API_URL => {
    const listServicesData = new Map(),
        typeItemsList = document.getElementById('typeItem');

    const renderTypeValues = valuesArr => {
        const typeValuesField = document.getElementById('tbody');

        typeValuesField.textContent = '';

        valuesArr.forEach(item => {
            const rowTr = document.createElement('tr');
            rowTr.className = 'table__row';
            rowTr.setAttribute('data-id', item.id);
            rowTr.innerHTML = `
                <td class="table__id table__cell">${item.id}</td>
                <td class="table-type table__cell">${item.type}</td>
                <td class="table-name table__cell">${item.name}</td>
                <td class="table-units table__cell">${item.units}</td>
                <td class="table-cost table__cell">${item.cost} руб</td>
                <td>
                    <div class="table__actions table__cell">
                        <button class="button action-change"><span class="svg_ui">
                            <svg class="action-icon_change">
                                <use xlink:href="./img/sprite.svg#change"></use>
                            </svg></span><span>Изменить</span>
                        </button>
                        <button class="button action-remove"><span class="svg_ui">
                            <svg class="action-icon_remove">
                                <use xlink:href="./img/sprite.svg#remove"></use>
                            </svg></span><span>Удалить</span>
                        </button>
                    </div>
                </td>
            `;

            typeValuesField.append(rowTr);
        });
    };

    const renderTypeItems = navItems => {
        typeItemsList.innerHTML = '<option value="Все услуги">Все услуги</option>';

        Array.from(navItems).forEach(item => {
            const typeItemOption = document.createElement('option');
            typeItemOption.value = item;
            typeItemOption.textContent = item;

            typeItemsList.append(typeItemOption);
        });
    };

    const setListServices = data => {
        data.forEach(item => {
            if (listServicesData.has(item.type)) listServicesData.get(item.type).push(item);
            else listServicesData.set(item.type, [item]);
        });

        renderTypeItems(listServicesData.keys());
        renderTypeValues(Array.from(listServicesData.values()).flat());
    };

    typeItemsList.addEventListener('change', e => {
        const target = e.target;

        if (listServicesData.get(target.value)) renderTypeValues(listServicesData.get(target.value));
        else renderTypeValues(Array.from(listServicesData.values()).flat());
    });

    getData(API_URL + '/api/items')
        .then(res => setListServices(res))
        .catch(error => {
            console.warn(error);
        });
};

export default listServices;
