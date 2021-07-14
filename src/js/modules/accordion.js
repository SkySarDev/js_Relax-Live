const accordion = element => {
    document.querySelectorAll('.title_block').forEach(item => {
        if (item === element) {
            setTimeout(() => {
                item.classList.add('msg-active');
            }, 350);
        } else item.classList.remove('msg-active');
    });
};

export default accordion;
