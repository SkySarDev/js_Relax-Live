const slider = ({ direction, sliderWrap, slides, next, prev, counterID, start, swipePercent }) => {
    const sliderWrapper = document.querySelector(sliderWrap),
        slidesLength = sliderWrapper.querySelectorAll(slides).length;

    const getPercent = () => {
            if (swipePercent) {
                let percent;

                for (const options of swipePercent) {
                    if (document.documentElement.clientWidth <= options.maxWidth) percent = options.percent;
                }
                return percent;
            }
            return 100;
        },
        percentToSwipe = getPercent();

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
        const swipe = `-${index * percentToSwipe}%`,
            axisX = !direction ? swipe : 0,
            axisY = direction === 'vertical' ? swipe : 0;

        sliderWrapper.style.transform = `translate(${axisX}, ${axisY})`;

        if (currentSlide) currentSlide.textContent = index + 1;
    };
    slideSwipe();

    if (next && prev) {
        const btnNext = document.querySelector(next),
            btnPrev = document.querySelector(prev);

        btnNext.addEventListener('click', () => {
            index++;

            if (index * percentToSwipe >= slidesLength * percentToSwipe) index = 0;

            slideSwipe();
        });

        btnPrev.addEventListener('click', () => {
            index--;

            if (index * percentToSwipe < 0) index = slidesLength - 1;

            slideSwipe();
        });
    }
};

export default slider;
