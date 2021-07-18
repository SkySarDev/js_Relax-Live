import getData from './getData';
import tabsToggle from './tabsToggle';
import slider from './slider';
import { getIndexElement } from './services';

const repairTypes = API_URL => {
    const repairData = new Map(),
        popupRepairTypes = document.querySelector('.popup-repair-types'),
        loading = document.getElementById('popup-repair-types-loading');

    loading.className = 'show-loading';

    const renderContent = key => {
        const contentFIeld = document.querySelector('.popup-repair-types-content-table__list tbody');

        document.getElementById('switch-inner').textContent = key;

        contentFIeld.textContent = '';

        repairData.get(key).forEach(item => {
            const rowTr = document.createElement('tr');

            rowTr.className = 'mobile-row';
            rowTr.setAttribute('data-id', item.id);

            rowTr.innerHTML = `
            <td class="repair-types-name">${item.name}</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
            <td class="repair-types-value">${item.units}</td>
            <td class="repair-types-value">${item.cost} руб.</td>
            `;

            contentFIeld.append(rowTr);
        });
    };

    const renderNavItems = navItems => {
        const navList = popupRepairTypes.querySelector('.nav-list-popup-repair');

        navList.textContent = '';

        Array.from(navItems).forEach((item, i) => {
            const navListItem = document.createElement('div');
            navListItem.className = 'popup-repair-types-nav__item-wrapper slider-swiper__slide';
            navListItem.setAttribute('data-key', item);
            navListItem.innerHTML = `
                <button class="button_o popup-repair-types-nav__item ${i ? '' : 'active'}">${item}</button>`;

            navList.append(navListItem);

            if (i === 0) renderContent(item);
        });

        loading.className = '';

        slider({
            sliderWrap: '.nav-list-popup-repair',
            slides: '.popup-repair-types-nav__item-wrapper',
            next: '#nav-arrow-popup-repair_right',
            prev: '#nav-arrow-popup-repair_left',
            slideShowOpt: [
                { maxWidth: 1024, percent: 50, slidesToShow: 2 },
                { maxWidth: 720, percent: 100, slidesToShow: 1 },
            ],
        });
    };

    const setRepairData = data => {
        data.forEach(item => {
            const typeObj = {
                id: item.id,
                name: item.name,
                units: item.units,
                cost: item.cost,
            };

            if (repairData.has(item.type)) repairData.get(item.type).push(typeObj);
            else repairData.set(item.type, [typeObj]);
        });

        renderNavItems(repairData.keys());
    };

    getData(API_URL + '/api/items')
        .then(res => setRepairData(res))
        .catch(error => {
            loading.className = 'show-error';
            console.warn(error);
        });

    popupRepairTypes.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.popup-repair-types-nav__item-wrapper')) {
            const button = target.closest('.popup-repair-types-nav__item-wrapper'),
                indexEl = getIndexElement('.popup-repair-types-nav__item-wrapper', button);

            renderContent(button.getAttribute('data-key'));
            tabsToggle('.popup-repair-types-nav__item', indexEl);
        }
    });
};

export default repairTypes;
