import NextArrow from "@components/shared/NextArrow";
import PrevArrow from "@components/shared/PrevArrow";

export const sliderSettings = (length: number) => {
  return {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: length >= 8 ? 8 : length,
    slidesToScroll: 2,
    initialSlide: length >= 7 ? 5 : 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: length >= 6 ? 6 : length,
        },
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: length >= 5 ? 5 : length,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: length >= 6 ? 6 : length,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: length >= 5 ? 5 : length,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: length >= 4 ? 4 : length,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: length >= 3 ? 3 : length,
        },
      },
      {
        breakpoint: 563,
        settings: {
          slidesToShow: length >= 2 ? 2 : length,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};
