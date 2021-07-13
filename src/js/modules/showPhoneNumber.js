const showPhoneNumber = () => {
    const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord'),
        linkTel = phoneNumberAccord.querySelector('a'),
        headerContactsArrow = document.querySelector('.header-contacts__arrow img');

    phoneNumberAccord.classList.toggle('show-number');
    linkTel.classList.toggle('show-number');
    headerContactsArrow.classList.toggle('show-number');
};

export default showPhoneNumber;
