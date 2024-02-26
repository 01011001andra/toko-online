"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavigationCarousel } from ".";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductCarousel = ({ kategori }: { kategori: string }) => {
  const router = useRouter();

  const handleNavigate = ({
    kategori,
    slug,
  }: {
    kategori: string;
    slug: string;
  }) => {
    console.log({ kategori, slug });
    router.push(`/produk/${kategori}/${slug}`);
  };

  const slides = [
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 0,
      brand: "Nike ardila pcs2ildfjsdlf aolsdfjalfj",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    {
      image: "/cantik.avif",
      rating: 4,
      discount: 5,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      kategori: "sepatu",
      slug: "sepatu-nike1",
    },
    // Add more slide data as needed
  ];
  return (
    <div className="flex flex-col gap-2 lg:gap-5 border-b pb-5 group">
      <div className="flex justify-between items-center px-2 py-2 lg:px-0 ">
        <motion.h2
          whileInView={{ opacity: [0, 4, 1] }}
          transition={{ duration: 3 }}
          className="text-base lg:text-lg uppercase font-bold"
        >
          SEPATU
        </motion.h2>
        <Link
          href={`/produk/${kategori}`}
          className="text-xs sm:text-sm uppercase"
        >
          Lihat semua
        </Link>
      </div>
      <Swiper
        navigation={true}
        className="w-full h-72"
        modules={[Navigation, Pagination, A11y]}
        breakpoints={{
          0: {
            slidesPerView: 2.3,
            spaceBetween: 8,
          },
          520: {
            slidesPerView: 3.3,
          }, // when window width is >= 640px
          840: {
            slidesPerView: 4.2,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          1200: {
            slidesPerView: 5.3,
            spaceBetween: 10,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`/produk/${slide.kategori}/${slide.slug}`}
              className={`flex ${
                index === 0 && "ml-1"
              } flex-col gap-2 lg:gap-3 cursor-pointer  h-full hover:bg-gray-200 lg:p-2`}
            >
              <div className={`relative w-full rounded-xl  `}>
                <div className="w-full h-full absolute hover:bg-black/20 cursor-pointer transition-all duration-500  flex items-center justify-center rounded-lg"></div>
                <Image
                  src={slide.image}
                  alt="sepatu1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-36 rounded-lg object-cover lg:h-36 border"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex gap-1 flex-col">
                  <h3 className="text-sm lg:text-base truncate">
                    {slide.brand}
                  </h3>
                  {slide.discount > 0 && (
                    <div className="flex items-center justify-between">
                      <small className="text-xs italic line-through">
                        {slide.price}
                      </small>
                      <small>Diskon {slide.discount}%</small>
                    </div>
                  )}
                  <span className="text-sm lg:text-base font-bold">
                    {slide.price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-1 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="orange"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm mt-1">5.0</span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="w-full h-full group hidden md:flex">
          <NavigationCarousel />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
