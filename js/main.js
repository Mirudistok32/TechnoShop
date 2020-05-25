document.addEventListener("DOMContentLoaded", () => {
  $(".feautures__slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: false,
          // centerMode: true,
          // centerPadding: "40px",
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: false,
          // centerMode: true,
          // centerPadding: "40px",
        },
      },
    ],
  });
  $(".article__slider").slick({
    arrows: false,
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();
});
