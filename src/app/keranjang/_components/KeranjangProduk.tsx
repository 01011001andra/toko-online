"use client";
import { Checkbox } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const KeranjangProduk = () => {
  return (
    <>
      <div className="w-full flex items-center">
        <Checkbox defaultChecked={true} crossOrigin={"anonymous"} />
        <span>Pilih Semua</span>
      </div>
      <div className="w-full gap-3 flex">
        <Checkbox defaultChecked={true} crossOrigin={"anonymous"} />
        <Image
          src={"/jam.jpg"}
          alt="jam"
          width={0}
          height={0}
          sizes="100vw"
          className="w-32 lg:w-52 h-32 lg:h-52 object-cover"
        />
        <div className="flex flex-col gap-3 w-full">
          <h2 className=" text-sm lg:text-lg line-clamp-1">
            Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria dan
            Wanita
          </h2>
          <small>Jam Tangan</small>
          <span className="text-sm lg:text-xl font-bold">Rp. 1.000.000</span>
        </div>
      </div>
    </>
  );
};

export default KeranjangProduk;
