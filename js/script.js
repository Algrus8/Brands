
let brandsButtons = document.querySelector(".brands-buttons");
let brandsButtonsWrapper = document.querySelector(".brands-buttons__wrapper");
let buttons = document.querySelectorAll(".brands-buttons__container");
let brandsShowAll = document.querySelector(".brands-show-all__button");
let buttonsClasses = buttons.classList;
let showAllButton = document.querySelector(".brands-show-all__button");
let showAllIcon = document.querySelector(".brands-show-all__icon");

let windowWidthIsLarge = window.matchMedia("(min-width: 1120px)");
let windowWidthIsMiddle = window.matchMedia("(min-width: 768px)");

function widthDeviceChange(e) {
  if (e.matches) {
    buttons[6].classList.remove("hidden");
    buttons[7].classList.remove("hidden");
  } else {
    buttons[6].classList.add("hidden");
    buttons[7].classList.add("hidden");
  }
}

windowWidthIsLarge.addEventListener("resize", widthDeviceChange);
widthDeviceChange(windowWidthIsLarge);
console.log(windowWidthIsLarge);

let removeClass = function (collection, classToRemove) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.remove(classToRemove);
  }
};

let addClass = function (collection, classToAdd, startIndex = 0) {
  for (let i = startIndex; i < collection.length; i++) {
    collection[i].classList.add(classToAdd);
  }
};

brandsShowAll.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (windowWidthIsLarge.matches) {
    console.log("here1");
    if (buttons[buttons.length - 1].classList.contains("hidden")) {
      removeClass(buttons, "hidden");
      showAllButton.textContent = "Скрыть";
      showAllIcon.classList.add("inverted");
    } else {
      addClass(buttons, "hidden", 8);
      showAllButton.textContent = "Показать все";
      showAllIcon.classList.remove("inverted");
    }
  } else {
    console.log("here2");

    if (buttons[buttons.length - 1].classList.contains("hidden")) {
      removeClass(buttons, "hidden");
      showAllButton.textContent = "Скрыть";
      showAllIcon.classList.add("inverted");
    } else {
      addClass(buttons, "hidden", 6);
      showAllButton.textContent = "Показать все";
      showAllIcon.classList.remove("inverted");
    }
  }
});

let brandsSlider = null;
let windowWidthIsMiddleSize = 767;

function brandsSliderInit() {
  if (!brandsSlider) {
    brandsSlider = new Swiper(".swiper", {
      spaceBetween: 0,
      slidesPerView: "auto",
      freeMode: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

function brandsSliderDestroy() {
  if (brandsSlider) {
    brandsSlider.destroy();
    brandsSlider = null;
  }
}

let swiper = document.querySelector(".swiper");
let swiperWrapper = document.querySelector(".swiper-wrapper");
let swiperSlide = document.querySelectorAll(".swiper-slide");

console.log(swiper);

function widthIsMiddle(e) {
  if (e.matches) {
    brandsSliderDestroy();
    swiper.classList.remove("swiper");
    swiperWrapper.classList.remove("swiper-wrapper");
    removeClass(swiperSlide, "swiper-slide");
  } else {
    buttons[6].classList.remove("hidden");
    buttons[7].classList.remove("hidden");
    brandsSliderInit();
  }
}

windowWidthIsMiddle.addEventListener("resize", widthIsMiddle);
widthIsMiddle(windowWidthIsMiddle);

let paginationBullets = document.querySelectorAll(".swiper-pagination-bullet");

function addMargin(collection, margin) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.margin = margin;
  }
}

addMargin(paginationBullets, "0px 12px 0px 0px");
