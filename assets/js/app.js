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

// Countdown Timer
function updateCountdown() {
  const countdownElements = document.querySelectorAll(".countdown_timer");

  countdownElements.forEach((countdown) => {
    // Set the date we're counting down to (24 hours from now)
    const now = new Date().getTime();
    const countDownDate = now + 24 * 60 * 60 * 1000; // 24 hours from now

    // Update the countdown every 1 second
    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the HTML
      countdown.querySelector(".days").innerHTML = days
        .toString()
        .padStart(2, "0");
      countdown.querySelector(".hours").innerHTML = hours
        .toString()
        .padStart(2, "0");
      countdown.querySelector(".minutes").innerHTML = minutes
        .toString()
        .padStart(2, "0");
      countdown.querySelector(".seconds").innerHTML = seconds
        .toString()
        .padStart(2, "0");

      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "EXPIRED";
      }
    }, 1000);
  });
}

// Initialize countdown timer
document.addEventListener("DOMContentLoaded", function () {
  updateCountdown();
});
