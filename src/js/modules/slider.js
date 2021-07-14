const slider = (sliderWrap, slides, next, prev) => {
    const sliderWrapper = document.querySelector(sliderWrap),
        btnNext = document.querySelector(next),
        btnPrev = document.querySelector(prev),
        allSlides = document.querySelectorAll(slides);

    let index = 0;

    btnNext.addEventListener('click', () => {
        index++;

        if (index >= allSlides.length) index = 0;

        sliderWrapper.style.transform = `translateX(-${index}00%)`;
    });

    btnPrev.addEventListener('click', () => {
        index--;

        if (index < 0) index = allSlides.length - 1;

        sliderWrapper.style.transform = `translateX(-${index}00%)`;
    });
};

export default slider;
