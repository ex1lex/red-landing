const menuBtnOpen = document.querySelector(".navigate__btn-open");
const menuBtnClose = document.querySelector(".menu__btn-close");
const menu = document.querySelector(".menu__list");

$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  variableWidth: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

menuBtnOpen.addEventListener("click", function (evt) {
  menu.classList.add("menu__list_mobile");
});

menuBtnClose.addEventListener("click", function (evt) {
  menu.classList.remove("menu__list_mobile");
});
