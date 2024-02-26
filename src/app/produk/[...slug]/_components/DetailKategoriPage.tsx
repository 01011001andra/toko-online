"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.module.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function DetailKategoriPage({
  kategori,
  detail,
}: {
  kategori: string;
  detail: string;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const swiperRef = useRef(null);
  const [indexSlide, setIndexSlide] = useState({
    activeIndex: 0,
    totalIndex: 0,
  });
  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 items-center justify-center lg:max-w-screen-xl mx-auto">
      <div className="w-full lg:w-1/2">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          onActiveIndexChange={(setSwiper) => {
            setIndexSlide({
              activeIndex: setSwiper.activeIndex,
              totalIndex: setSwiper.slides.length,
            });
          }}
          onSwiper={(setSwiper) =>
            setIndexSlide({
              activeIndex: setSwiper.activeIndex,
              totalIndex: setSwiper.slides.length,
            })
          }
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-[300px] lg:h-96 relative"
        >
          <SwiperSlide className="h-52 lg:h-96 ">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full ">
            <Image
              src={"/jam.jpg"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full ">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full ">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full ">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full ">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full ">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full ">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full ">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full ">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] rounded-none lg:rounded-lg object-cover object-center lg:h-96 border"
            />
          </SwiperSlide>
          <div className="bg-white w-10 h-10 absolute z-50 bottom-4 right-4 font-bold flex items-center justify-center rounded-full text-xs">
            <span>
              {indexSlide.activeIndex + 1}/{indexSlide.totalIndex}
            </span>
          </div>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3.5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-2 h-16 lg:h-20"
        >
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover  h-full border border-black"
            />
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/jam.jpg"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover h-full border border-black"
            />
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover h-full border border-black"
            />
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover h-full border border-black"
            />
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover h-full border border-black"
            />
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover h-full border border-black"
            />
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover h-full border border-black"
            />
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover h-full border border-black"
            />
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover h-full border border-black"
            />
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer opacity-[0.3]">
            <Image
              src={"/cantik.avif"}
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-none lg:rounded-lg object-cover h-full border border-black"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl lg:text-3xl">Sepatu cuy</h1>
          <div className="w-full flex gap-4 items-center">
            <span>Rp. 100.000</span>
            <span className="italic line-through text-gray-600 text-sm">
              Rp. 100.000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
