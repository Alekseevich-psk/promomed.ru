(function () {
    const bannerSlider = document.querySelector(".banner__slider");
    if (!bannerSlider) return;

    new Swiper(".banner__slider", {
        slidesPerView: 1,
        spaceBetween: 6,
        navigation: {
            nextEl: ".banner__slider .sl-arrows__arrow--next",
            prevEl: ".banner__slider .sl-arrows__arrow--prev",
        },
        // effect: 'fade',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
})();
