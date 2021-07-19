const slider = ({ direction, sliderWrap, slides, next, prev, counterID, start, loop = true, slideShowOpt }) => {
    const sliderWrapper = document.querySelector(sliderWrap),
        slidesLength = sliderWrapper.querySelectorAll(slides).length;

    const getswipeProps = () => {
        let percent = 100,
            slides = 1;

        if (slideShowOpt) {
            for (const options of slideShowOpt) {
                if (document.documentElement.clientWidth <= options.maxWidth) {
                    percent = options.percent;
                    slides = options.slidesToShow ? options.slidesToShow : slides;
                }
            }
        }
        return { percent, slides };
    };

    let index = start ? start : 0,
        swipeProps = getswipeProps(),
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
        const swipe = `-${index * swipeProps.percent}%`,
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

            if (!loop) {
                btnPrev.style.display = 'flex';

                if ((index + 1) * swipeProps.percent > (slidesLength - swipeProps.slides) * swipeProps.percent) {
                    btnNext.style.display = 'none';
                }
            }

            if (index * swipeProps.percent > (slidesLength - swipeProps.slides) * swipeProps.percent) index = 0;

            slideSwipe();
        });

        btnPrev.addEventListener('click', () => {
            index--;

            if (!loop) {
                btnNext.style.display = 'flex';

                if (index - 1 < 0) {
                    btnPrev.style.display = 'none';
                }
            }

            if (index < 0) index = slidesLength - swipeProps.slides;

            slideSwipe();
        });
    }

    if (slideShowOpt) {
        let resizeTimeout;

        const propsReset = () => {
            if (next && prev) {
                document.querySelector(next).style.display = '';
                document.querySelector(prev).style.display = '';
            }

            index = 0;
            swipeProps = getswipeProps();
            slideSwipe();
        };

        const resizeThrottler = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                propsReset();
            }, 150);
        };

        window.addEventListener('resize', resizeThrottler);
    }
};

export default slider;
