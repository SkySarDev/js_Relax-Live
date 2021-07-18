const showHideElements = (elements, className, show) =>
    elements.forEach(item => {
        if (show) item.classList.add(className);
        else item.classList.remove(className);
    });

export default showHideElements;
