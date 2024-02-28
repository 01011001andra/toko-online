"use client";
import { Carousel } from "@material-tailwind/react";

export default function MainCarousel() {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={2000}
      loop={true}
      placeholder=""
      transition={{ duration: 0.5 }}
      className="lg:rounded-xl"
    >
      <img
        src="/jam.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/jam.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/jam.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
