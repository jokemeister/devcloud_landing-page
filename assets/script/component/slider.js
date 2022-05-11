import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const slider = () => {
  // swiper Stats
  const statsSlider = new Swiper (".js--swiper-stats", {
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
        }
      },
      breakpoints: {
        480: {
          slidesPerView: 4,
          enabled: false
        }
      }
  });
  let statsPagination = document.querySelector('.swiper-stats-pagination');
  statsPagination.classList.add('non-active');
  if (window.innerWidth <= 480) {
    statsPagination.classList.remove('non-active');
  }
  // /swiper Stats

  // swiper Services
  const servicesSlider = new Swiper(".js--swiper-services", {
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
  });
  // /swiper Services

  // swiper Projects
  const projectsSlider = new Swiper(".js--swiper-projects", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      bulletActiveClass: 'swiper-projects-pagination-bullet-is-active',
      bulletClass: 'swiper-projects-pagination-bullet',
      el: ".swiper-projects-pagination",
      clickable: true,
      renderBullet: function(index, className) {
        return '<div class="' + className + '"' + 'data-index="' + (index + 1) + '">' + "</div>";
      }
    },
    breakpoints: {
      768: {
        pagination: false,
      }
    }
  });
  let projectsPagination = document.querySelector('.swiper-projects-pagination');
  projectsPagination.classList.add('non-active');
  if (window.innerWidth <= 768) {
    projectsPagination.classList.remove('non-active');
  }
  // /swiper Projects
};

export default slider;
