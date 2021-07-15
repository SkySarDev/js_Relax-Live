const tabsManager = (tabsSelector, navItemsSelector, index = 0) => {
    const switcher = (arr, className) => {
        arr.forEach((item, i) => {
            if (i === index) item.classList.add(className);
            else item.classList.remove(className);
        });
    };

    if (tabsSelector) switcher(document.querySelectorAll(tabsSelector), 'show');
    if (navItemsSelector) switcher(document.querySelectorAll(navItemsSelector), 'active');
};

export default tabsManager;
