function tdcarousal({
    slideElement,
    slideNextBtn,
    slidePrevBtn,
    indicator,
}) {
    let items = document.querySelectorAll(slideElement);
    let nextBtn = document.querySelector(slideNextBtn);
    let prevBtn = document.querySelector(slidePrevBtn);
    let navigation_indicator = document.querySelector(indicator);
    let totalSlide = document.querySelector('.totalSlide');
    let currentSlide = document.querySelector('.currentSlide');
    let indicators_array;
    var state = 0;
    /* iife */
    (function init() {
        items.forEach((item, index) => {
            item.classList.remove('td-active-p');
            item.classList.remove('td-active');
            item.classList.remove('td-active-n');
            let nav_light = document.createElement('span');
            nav_light.classList.add('nav_light');
            navigation_indicator.appendChild(nav_light);
        })
        state = 1;
        totalSlide.textContent = items.length;
        setCurrentSlide(state);
        indicatorGlow(state);
        (items[state - 1] !== undefined) ? items[state - 1].classList.add('td-active-p'): '';
        items[state].classList.add('td-active');
        (items[state + 1] !== undefined) ? items[state + 1].classList.add('td-active-n'): '';
    })();
    /* iife */
    function indicatorGlow(state) {

        for (let i = 0; i < items.length; i++) {
            navigation_indicator.children[i].classList.remove('indicate');
        }
        navigation_indicator.children[state].classList.add('indicate');
    }

    function setCurrentSlide(state) {
        currentSlide.textContent = state + 1;
    }

    function nextfinal() {
        items.forEach((item) => {
            item.classList.remove('td-active-p');
            item.classList.remove('td-active');
            item.classList.remove('td-active-n');
        })

        state = 0;
        (items[state - 1] !== undefined) ? items[state - 1].classList.add('td-active-p'): '';
        items[state].classList.add('td-active');
        (items[state + 1] !== undefined) ? items[state + 1].classList.add('td-active-n'): '';

    }

    function prevfinal() {
        items.forEach((item) => {
            item.classList.remove('td-active-p');
            item.classList.remove('td-active');
            item.classList.remove('td-active-n');
        })

        state = items.length - 1;

        (items[state - 1] !== undefined) ? items[state - 1].classList.add('td-active-p'): '';
        items[state].classList.add('td-active');
        (items[state + 1] !== undefined) ? items[state + 1].classList.add('td-active-n'): '';

    }

    function next() {

        if (state < items.length - 1) {
            (items[state - 1] !== undefined) ? items[state - 1].classList.remove('td-active-p'): '';
            items[state].classList.remove('td-active');
            (items[state + 1] !== undefined) ? items[state + 1].classList.remove('td-active-n'): '';
            state = state + 1;
            (items[state - 1] !== undefined) ? items[state - 1].classList.add('td-active-p'): '';
            items[state].classList.add('td-active');
            (items[state + 1] !== undefined) ? items[state + 1].classList.add('td-active-n'): '';
        } else {
            nextfinal();
        }
        indicatorGlow(state);
        setCurrentSlide(state);
    }

    function prev() {

        if (state > 0) {
            (items[state - 1] !== undefined) ? items[state - 1].classList.remove('td-active-p'): '';
            items[state].classList.remove('td-active');
            (items[state + 1] !== undefined) ? items[state + 1].classList.remove('td-active-n'): '';
            state = state - 1;
            (items[state - 1] !== undefined) ? items[state - 1].classList.add('td-active-p'): '';
            items[state].classList.add('td-active');
            (items[state + 1] !== undefined) ? items[state + 1].classList.add('td-active-n'): '';
        } else {
            prevfinal();
        }
        indicatorGlow(state);
        setCurrentSlide(state);
    }

    nextBtn.addEventListener('click', () => {
        next()
    });
    prevBtn.addEventListener('click', () => {
        prev()
    });
}
