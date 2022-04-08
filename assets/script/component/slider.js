import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const slider = () => {
    // swiper Stats
    if (window.innerWidth <= 480) {
      let statsSlider = new Swiper(".mySwiper", {
        enabled: true,
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerGroup: 2,
        enabled: true,
        rewind: true,
        // loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          bulletActiveClass: 'swiper-stats-pagination-bullet-is-active',
          bulletClass: 'swiper-stats-pagination-bullet',
          el: ".swiper-stats-pagination",
          clickable: true,
          renderBullet: function(index, className) {
            return '<div class="' + className + '"' + 'data-index="' + (index + 1) + '">' + "</div>";
          },
        },
      });
    } else {
      let statsSlider = new Swiper(".mySwiper", {
        slidesPerView: 4,
        enabled: false,
      });
      let pagination = document.querySelector('.swiper-stats-pagination');
      pagination.classList.add('non-active');
    }

    // /swiper Stats
}

export default slider;