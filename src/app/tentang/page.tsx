import Image from "next/image";
import React from "react";
import { FadeInWhenVisible, ScaleWhenVisible } from "@/components";
import { GalleryTesti } from "./_components";

const Tentang = () => {
  return (
    <div className="flex flex-col items-center px-4 bg-gray-100 w-full h-full">
      {/* about us */}
      <section className="flex flex-col gap-10 lg:flex-row-reverse min-h-[90vh] lg:items-center items-start lg:justify-center  max-w-screen-xl h-full w-full">
        <div className="lg:w-1/2 w-full">
          <FadeInWhenVisible>
            <Image
              src={
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-72 sm:h-80 rounded-lg object-cover lg:h-96 border"
            />
          </FadeInWhenVisible>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-4 lg:gap-8 items-center justify-center">
          <ScaleWhenVisible>
            <h1 className="text-2xl sm:text-3xl font-bold uppercase">
              SERBA 8K
            </h1>
          </ScaleWhenVisible>
          <p className="text-sm sm:text-base text-justify">
            Serba 8K adalah, toko yang berada di Batam. Kami menawarkan beragam
            produk berkualitas dengan harga terjangkau kepada pelanggan kami.
            Dengan fokus pada kepuasan pelanggan, kami menyediakan berbagai
            macam pilihan outfit untuk segala kebutuhan Anda. Di SERBA 8K, kami
            percaya bahwa gaya tidak harus mahal. Itulah mengapa kami
            berkomitmen untuk menyediakan pakaian dengan desain yang stylish dan
            kualitas yang terjamin tanpa menguras dompet Anda. Kunjungi toko
            kami di Batam dan temukan outfit yang sesuai dengan kepribadian dan
            gaya Anda.
          </p>
        </div>
      </section>
      <section className="w-full max-w-screen-xl h-full flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl lg:text-3xl font-bold uppercase">
            Testimonial
          </h1>
          <p className="text-sm sm:text-base text-justify">
            Kami telah melakukan transaksi dengan banyak costumer yang sudah
            puas dengan product kami, berikut ini adalah testimonial kami:
          </p>
        </div>
        <GalleryTesti />
      </section>
    </div>
  );
};

export default Tentang;
