const scrollHide = () => {
    const documentWidth = parseInt(document.documentElement.clientWidth);
    const windowWidth = parseInt(window.innerWidth);
    const scrollWidth = windowWidth - documentWidth;

    document.body.style.paddingRight = `${scrollWidth}px`;
    document.body.style.overflow = 'hidden';
};

const scrollShow = () => {
    document.body.style.paddingRight = '0px';
    document.body.style.overflow = '';
};

const getIndexElement = (elementsSelector, target) => {
    const index = Array.from(document.querySelectorAll(elementsSelector)).indexOf(target);
    return index !== -1 ? index : 0;
};

export { scrollHide, scrollShow, getIndexElement };
