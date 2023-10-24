import NextArrow from "@components/shared/NextArrow";
import PrevArrow from "@components/shared/PrevArrow";

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerPadding: "100px",
  centerMode: true,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 7,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
        centerPadding: "65px",
      },
    },
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 5,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        centerPadding: "90px",
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        centerPadding: "100px",
        centerMode: true,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,
        centerPadding: "140px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        centerPadding: "70px",
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        centerPadding: "90px",
      },
    },
    {
      breakpoint: 563,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};
