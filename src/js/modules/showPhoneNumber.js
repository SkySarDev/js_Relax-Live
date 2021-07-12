const showPhoneNumber = () => {
    const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord'),
        linkTel = phoneNumberAccord.querySelector('a');

    phoneNumberAccord.classList.toggle('show-number');
    linkTel.classList.toggle('show-number');
};

export default showPhoneNumber;
