const menuBtnOpen = document.querySelector(".navigate__btn-open");
const menuBtnClose = document.querySelector(".menu__btn-close");
const menu = document.querySelector(".menu__list");

menuBtnOpen.addEventListener("click", function (evt) {
  menu.classList.add("menu__list_mobile");
});

menuBtnClose.addEventListener("click", function (evt) {
  menu.classList.remove("menu__list_mobile");
});

$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  appendDots: $(".slider"),
  dotsClass: "slider__bullets",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
