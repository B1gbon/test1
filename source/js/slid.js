


$('.slid-index__sliks').slick({
  dots: false,
  prevArrow: '<button class="card-slider-left card-slider__btn"><img src="img/slider-prev.svg" alt="left"></button>',
  nextArrow: '<button class="card-slider-right card-slider__btn"><img src="img/slider-next.svg" alt="left"></button>',
  infinite: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        variableWidth: true,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
