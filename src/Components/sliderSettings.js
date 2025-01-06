const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  cssEase: "linear",
  autoplaySpeed: 2000,
  pauseOnHover: false,
  slidesToShow: 5,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3.7,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1064,
      settings: {
        slidesToShow: 2.8,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2.7,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1.9,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1.35,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.05,
      },
    },
  ],
};

export default sliderSettings;
