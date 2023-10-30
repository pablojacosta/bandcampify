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
        breakpoint: 1670,
        settings: {
          slidesToShow: length >= 7 ? 7 : length,
        },
      },
      {
        breakpoint: 650,
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
        breakpoint: 370,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
};
