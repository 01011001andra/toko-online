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
import {
  Button,
  Card,
  CardBody,
  Chip,
  Collapse,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { CollapseDeskripsi, ProductDetailNavbar } from ".";
import PilihTipe from "./PilihTipe";

export default function DetailKategoriPage({
  kategori,
  detail,
}: {
  kategori: string;
  detail: string;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [open, setOpen] = React.useState(false);

  const swiperRef = useRef(null);
  const [indexSlide, setIndexSlide] = useState({
    activeIndex: 0,
    totalIndex: 0,
  });
  return (
    <div className={"relative z-50"}>
      <ProductDetailNavbar />
      <div className="w-full flex flex-col lg:flex-row gap-5 justify-center pb-32 lg:pb-44 lg:max-w-screen-xl mx-auto relative">
        <div className="w-full fixed bottom-0 h-16 lg:h-20  z-50 ">
          <div className="flex justify-between max-w-screen-xl mx-auto  w-full h-full text-white">
            <div className="flex w-full">
              <Button
                placeholder=""
                className="w-full flex items-center justify-center cursor-pointer border-r border-gray-400 bg-green-600 rounded-none hover:bg-green-800 transition-all duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 lg:w-10 h-8 lg:h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
              </Button>
              <Button
                placeholder=""
                className="w-full flex items-center justify-center bg-green-600 rounded-none cursor-pointer hover:bg-green-800 transition-all duration-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 lg:w-10 h-8 lg:h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 top-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </Button>
            </div>
            <Button
              onClick={() => {
                setOpen(true);
              }}
              placeholder=""
              className="w-full flex items-center hover:bg-black/80 text-xs sm:text-sm rounded-none justify-center "
            >
              BELI SEKARANG
            </Button>
          </div>
        </div>
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
        <div className="w-full lg:w-1/2 max-w-screen-xl px-4 lg:px-0 flex flex-col gap-5 mx-auto">
          <div className="flex flex-col gap-3">
            <h1 className="">
              Sepatu cuy Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quaerat, magni.
            </h1>
            <div className="flex flex-col gap-4 lg:flex-row ">
              <div className="flex gap-2 items-center">
                <span>
                  Rp.{" "}
                  <span className="font-bold text-2xl lg:text-3xl">
                    100.000
                  </span>
                </span>
                <span className=" line-through text-gray-600 text-sm">
                  Rp. 100.000
                </span>
              </div>
              <div>
                <Chip value="Diskon 5%" size="sm" className="inline-block" />
              </div>
            </div>

            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="orange"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <span className="text-xs sm:text-sm mt-1">5.0</span>
            </div>
          </div>
          <div className="w-full border-t border-black h-1"></div>
          <div className="w-full flex flex-col gap-5">
            <h3 className="font-bold uppercase text-sm">Deskripsi</h3>
            <CollapseDeskripsi />
          </div>
        </div>
      </div>
      <PilihTipe open={open} setOpen={setOpen} />
    </div>
  );
}
