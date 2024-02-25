"use client";

import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useSwiper } from "swiper/react";

const NavigationCarousel = () => {
  const swiper = useSwiper();
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [totalSlide, setTotalSlide] = React.useState(1);
  const [beginSlider, setBeginSlider] = React.useState(true);
  const [endSlider, setEndSlider] = React.useState(false);

  const next = () => {
    swiper.slideNext();
    setEndSlider(swiper.isEnd);
    setBeginSlider(swiper.isBeginning);
  };

  const prev = () => {
    swiper.slidePrev();
    setBeginSlider(swiper.isBeginning);
    setEndSlider(swiper.isEnd);
  };
  return (
    <>
      <div className="md:hidden  group-hover:flex absolute top-32 z-10   mt-5  hidden">
        <IconButton
          placeholder={""}
          size="lg"
          variant="outlined"
          onClick={prev}
          disabled={beginSlider}
          className="bg-white"
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
      <div className="md:hidden group-hover:flex absolute top-32 right-0 z-10  mt-5  hidden">
        <IconButton
          placeholder={""}
          size="lg"
          className="bg-white"
          variant="outlined"
          onClick={next}
          disabled={endSlider}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    </>
  );
};

export default NavigationCarousel;
