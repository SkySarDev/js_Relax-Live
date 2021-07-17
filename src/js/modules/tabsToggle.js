const tabsManager = (itemsSelector, index = 0) => {
    const switcher = (arr, className) => {
        arr.forEach((item, i) => {
            if (i === index) item.classList.add(className);
            else item.classList.remove(className);
        });
    };

    switcher(document.querySelectorAll(itemsSelector), 'active');
};

export default tabsManager;
