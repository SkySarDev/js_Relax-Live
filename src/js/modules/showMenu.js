const showMenu = (menuElement, show) => {
    if (show) menuElement.classList.add('show-menu');
    else menuElement.classList.remove('show-menu');
};

export default showMenu;
