const showMenu = show => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    if (show) popupDialogMenu.classList.add('show-menu');
    else popupDialogMenu.classList.remove('show-menu');
};

export default showMenu;
