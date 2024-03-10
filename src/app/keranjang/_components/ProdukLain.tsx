import { ProductCarousel } from "@/components";
import React from "react";

const ProdukLain = () => {
  return (
    <div className="flex flex-col  gap-3">
      <h1 className="font-bold px-2 uppercase bg-white py-4 lg:py-6 lg:px-4 text-lg lg:text-xl">
        Produk Lain
      </h1>
      <div className="flex flex-col gap-3 bg-white">
        <ProductCarousel kategori="Sepatu" isKeranjang={true} />
        <ProductCarousel kategori="Sepatu" isKeranjang={true} />
      </div>
    </div>
  );
};

export default ProdukLain;
