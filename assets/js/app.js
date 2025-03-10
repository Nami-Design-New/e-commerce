const heroSlider = new Swiper(".hero_swiper", {
  centeredSlides: true,
  effect: "fade",
  loop: true,
  speed: 700,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper_pagination",
    clickable: true,
  },
});

const categoriesSlider = new Swiper(".categories_swiper", {
  spaceBetween: 16,
  slidesPerView: 4,
  loop: true,
  speed: 700,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    350: {
      slidesPerView: 1,
    },
  },
});

const dealsSlider = new Swiper(".deals_swiper", {
  spaceBetween: 16,
  slidesPerView: 4,
  loop: true,
  speed: 700,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    350: {
      slidesPerView: 1,
    },
  },
});

$(document).ready(function () {
  $(".preloader").delay(1000).fadeOut(300);

  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      if (!$(this).attr("data-aos-delay")) {
        $(this).attr("data-aos-delay", (index + 1) * 100);
      }
    });
  });

  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
});

var swiper = new Swiper(".productSlider", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".productSlider2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

document.querySelectorAll(".eye-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});
