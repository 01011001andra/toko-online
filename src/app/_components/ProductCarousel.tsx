"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const ProductCarousel = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-5">
      <div>
        <motion.h2
          whileInView={{ opacity: [0, 4, 1] }}
          transition={{ duration: 3 }}
          className="text-base lg:text-lg uppercase font-medium"
        >
          SEPATU
        </motion.h2>
      </div>
      <Swiper
        className="w-full h-full"
        breakpoints={{
          0: {
            slidesPerView: 1.3,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          },
        }}
      >
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={"/brand.svg"}
            alt="sepatu1"
            width={0}
            height={0}
            className="w-72 h-52 lg:h-72 border bg-black"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={"/brand.svg"}
            alt="sepatu1"
            width={0}
            height={0}
            className="w-72 h-52 lg:h-72 bg-red-500"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={"/brand.svg"}
            alt="sepatu1"
            width={0}
            height={0}
            className="w-72 h-52 lg:h-72 bg-blue-500"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={"/brand.svg"}
            alt="sepatu1"
            width={0}
            height={0}
            className="w-72 h-52 lg:h-72 bg-green-500"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={"/brand.svg"}
            alt="sepatu1"
            width={0}
            height={0}
            className="w-72 h-52 lg:h-72 bg-yellow-500"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={"/brand.svg"}
            alt="sepatu1"
            width={0}
            height={0}
            className="w-72 h-52 lg:h-72 bg-red-500"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={"/brand.svg"}
            alt="sepatu1"
            width={0}
            height={0}
            className="w-72 h-52 lg:h-72 bg-white"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={"/brand.svg"}
            alt="sepatu1"
            width={0}
            height={0}
            className="w-72 h-52 lg:h-72 bg-blue-500"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={"/brand.svg"}
            alt="sepatu1"
            width={0}
            height={0}
            className="w-72 h-52 lg:h-72 bg-black"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
