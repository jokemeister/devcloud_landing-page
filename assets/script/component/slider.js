import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const slider = () => {
    // swiper Stats

    let statsSlider = new Swiper (".js--swiper-stats", {
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
        breakpoints: {
            480: {
                slidesPerView: 4,
                enabled: false
            }
        }
    })
    let pagination = document.querySelector('.swiper-stats-pagination');
    pagination.classList.add('non-active');
    // /swiper Stats

    // swiper Services
    let servicesSlider = new Swiper(".js--swiper-services", {
        slidesPerView: 1,
        enabled: false,
        breakpoints: {
            500: {
                enabled: true,
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
                pagination: {
                  bulletActiveClass: 'swiper-services-pagination-bullet-is-active',
                  bulletClass: 'swiper-services-pagination-bullet',
                  el: ".swiper-services-pagination",
                  clickable: true,
                  renderBullet: function(index, className) {
                    return '<div class="' + className + '"' + 'data-index="' + (index + 1) + '">' + "</div>";
                  }
                }
            },
            768: {
                slidesPerView: 4,
                enabled: false
            }
        }
    })
    let pagination = document.querySelector('.swiper-services-pagination');
    pagination.classList.add('non-active');
    // /swiper Services
}

export default slider;
