"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Rating } from "@material-tailwind/react";
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
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      brand: "Nike",
      price: "Rp 1.000.000.-",
      category: "sepatu",
      slug: "sepatu-nike1",
      color: "red",
    },
    // Add more slide data as needed
  ];
  return (
    <div className="flex flex-col gap-2 lg:gap-5 border-b pb-5">
      <div className="flex justify-between items-center ">
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
        className="w-full h-full "
        modules={[Navigation, Pagination, A11y]}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 8,
          },
          520: {
            slidesPerView: 1.8,
          }, // when window width is >= 640px
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-2 lg:gap-3 justify-center">
              <div
                className={`relative w-full h-full group bg-${slide.color}-500`}
              >
                <div className="w-full h-full absolute group-hover:bg-black/20 cursor-pointer transition-all duration-500  flex items-center justify-center rounded-lg">
                  <span className="w-16 rounded-full items-center justify-center hidden transition-all duration-500  group-hover:flex text-center h-16 bg-white text-black font-bold text-xs">
                    Lihat
                  </span>
                </div>
                <Image
                  placeholder="blur"
                  blurDataURL={slide.image}
                  src={slide.image}
                  alt="sepatu1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-52 rounded-lg object-cover lg:h-72 border"
                />
              </div>
              <div className="flex justify-between">
                <Rating placeholder="" value={slide.rating} readonly />
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

              <div className="flex justify-between">
                <h3 className="text-sm lg:text-base">{slide.brand}</h3>
                <span className="text-xs lg:text-base">{slide.price}</span>
              </div>
              <Button
                placeholder=""
                ripple={false}
                fullWidth={true}
                className=" bg-blue-gray-900/10 text-blue-gray-900 text-[11px] sm:text-sm shadow-none sm:hover:scale-105 hover:shadow-none focus:shadow-none active:scale-105"
              >
                Tambah ke keranjang
              </Button>
              <Button
                placeholder=""
                onClick={() =>
                  handleNavigate({ kategori: slide.category, slug: slide.slug })
                }
                ripple={false}
                color="black"
                fullWidth={true}
                className="text-white text-[11px] sm:text-sm shadow-none sm:hover:scale-105 hover:shadow-none focus:shadow-none active:scale-105"
              >
                Beli Sekarang
              </Button>
            </div>
          </SwiperSlide>
        ))}
        <NavigationCarousel />
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
