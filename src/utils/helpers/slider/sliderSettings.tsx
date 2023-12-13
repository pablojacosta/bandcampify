import NextArrow from "@components/shared/NextArrow";
import PrevArrow from "@components/shared/PrevArrow";

export const sliderSettings = (length: number) => {
  return {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: length >= 8 ? 8 : length,
    slidesToScroll: 2,
    initialSlide: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: length >= 7 ? 7 : length,
        },
      },
      {
        breakpoint: 1396,
        settings: {
          slidesToShow: length >= 6 ? 6 : length,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: length >= 5 ? 5 : length,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: length >= 4 ? 4 : length,
        },
      },
      {
        breakpoint: 563,
        settings: {
          slidesToShow: length >= 3 ? 3 : length,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
};
