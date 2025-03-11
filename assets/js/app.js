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

const themeCustomer = document.querySelector(".theme_customer");
const themeCustomerContainer = document.querySelector(
  ".theme_customer_container"
);
const closeBtn = document.querySelector(".close_btn");
const colorOptions = document.querySelectorAll(".color_option");
const gearIcon = document.querySelector(".theme_customer > i"); // Select only the gear icon

// Open theme customizer only when clicking the gear icon
gearIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  themeCustomerContainer.classList.add("active");
});

// Close theme customizer when clicking X button
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  themeCustomerContainer.classList.remove("active");
});

// Close theme customizer when clicking outside
document.addEventListener("click", (e) => {
  if (
    !themeCustomerContainer.contains(e.target) &&
    !gearIcon.contains(e.target)
  ) {
    themeCustomerContainer.classList.remove("active");
  }
});

// Change secondary color
colorOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    colorOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
    const color = option.getAttribute("data-color");
    document.documentElement.style.setProperty("--second", color);
    localStorage.setItem("themeColor", color);
  });
});

// Load saved color on page load
window.addEventListener("load", () => {
  const savedColor = localStorage.getItem("themeColor");
  if (savedColor) {
    document.documentElement.style.setProperty("--second", savedColor);
    colorOptions.forEach((option) => {
      if (option.getAttribute("data-color") === savedColor) {
        option.classList.add("active");
      }
    });
  }
});
