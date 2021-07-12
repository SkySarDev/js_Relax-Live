const smoothScrolling = (point, behavior = 'smooth', block = 'start') => {
    document.querySelector(point).scrollIntoView({ behavior, block });
};
export default smoothScrolling;
