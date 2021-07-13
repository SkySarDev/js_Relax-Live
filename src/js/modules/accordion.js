const accordion = element => {
    document.querySelectorAll('.title_block').forEach(item => {
        if (item === element) item.classList.add('msg-active');
        else item.classList.remove('msg-active');
    });
};

export default accordion;
