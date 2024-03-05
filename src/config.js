const settings = {
  dots: true, // to show dots navigation
  infinite: false, // infinite loop
  speed: 500, // speed for slideshow
  slidesToShow: 4, // no of items to show
  slidesToScroll: 4, // on scroll how many items to be shown
  initialSlide: 0, // initial slide index
  responsive: [ // based on the view port it will update
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
