$('.info__layout-imageses').slick({
  centerMode: true,
  centerPadding: '120px',
  slidesToShow: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '4px',
        slidesToShow: 3
      }
    }
  ]
});
