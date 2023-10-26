import NextArrow from "@components/shared/NextArrow";
import PrevArrow from "@components/shared/PrevArrow";

export const sliderSettings = (length: number) => {
  return {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "100px",
    centerMode: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: length >= 7 ? 7 : length,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: length >= 6 ? 6 : length,
          centerPadding: "65px",
        },
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: length >= 5 ? 5 : length,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: length >= 4 ? 4 : length,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: length >= 3 ? 3 : length,
          centerPadding: "100px",
          centerMode: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: length >= 2 ? 2 : length,
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: length >= 3 ? 3 : length,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: length >= 2 ? 2 : length,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 563,
        settings: {
          slidesToShow: length >= 2 ? 2 : length,
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
};
