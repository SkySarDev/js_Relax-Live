const slider = (sliderWrap, slides, next, prev, counterID, start) => {
    const sliderWrapper = document.querySelector(sliderWrap),
        btnNext = document.querySelector(next),
        btnPrev = document.querySelector(prev),
        slidesLength = document.querySelectorAll(slides).length;

    let index = start ? start : 0,
        currentSlide = null,
        totalSlides = null;

    if (counterID) {
        const counter = document.querySelector(counterID);
        currentSlide = counter.querySelector('.slider-counter-content__current');
        totalSlides = counter.querySelector('.slider-counter-content__total');

        currentSlide.textContent = index + 1;
        totalSlides.textContent = slidesLength;
    }

    const slideSwipe = () => {
        if (currentSlide) currentSlide.textContent = index + 1;

        sliderWrapper.style.transform = `translateX(-${index}00%)`;
    };

    if (index) slideSwipe();

    btnNext.addEventListener('click', () => {
        index++;

        if (index >= slidesLength) index = 0;

        slideSwipe();
    });

    btnPrev.addEventListener('click', () => {
        index--;

        if (index < 0) index = slidesLength - 1;

        slideSwipe();
    });
};

export default slider;
