$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    sliderToShow: 3,
    autoplaySpeed: 2000,
    centerMode: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1280,
      },
      {
        breakpoint: 768,
      },
      {
        breakpoint: 320,
      },
    ],
  });
});
