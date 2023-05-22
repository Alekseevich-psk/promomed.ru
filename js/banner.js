(function () {
    const bannerSlider = document.querySelector(".n-banner__slider");
    if (!bannerSlider) return;

    new Swiper(".n-banner__slider", {
        slidesPerView: 1,
        spaceBetween: 6,
        autoplay: true,
        // loop: true,
        // allowTouchMove: false,
        speed: 5000,
        navigation: {
            nextEl: ".n-banner__slider .sl-arrows__arrow--next",
            prevEl: ".n-banner__slider .sl-arrows__arrow--prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})();

(function () {
    const bannerSlider = document.querySelector(".n-banner__slider");
    const mainTitle = document.querySelector(".wrapper .banner__title");

    if (bannerSlider && mainTitle) mainTitle.style.display = "none";
})();
