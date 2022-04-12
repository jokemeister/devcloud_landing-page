import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const slider = () => {
    // swiper Stats
    if (window.innerWidth <= 480) {
      let statsSlider = new Swiper(".js--swiper-stats", {
        enabled: true,
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerGroup: 2,
        rewind: true,
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
      let statsSlider = new Swiper(".js--swiper-stats", {
        slidesPerView: 4,
        enabled: false,
      });
      let pagination = document.querySelector('.swiper-stats-pagination');
      pagination.classList.add('non-active');
    }
    // /swiper Stats

    // swiper Services

    if (window.innerWidth <= 480) {
      let servicesSlider = new Swiper(".js--swiper-services", {
        enabled: true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-services-pagination",
          clickable: true,
        },
      });
    } else {
      let servicesSlider = new Swiper(".js--swiper-services", {
        slidesPerView: 4,
        enabled: false,
      });
    }

    // /swiper Services
}

export default slider;