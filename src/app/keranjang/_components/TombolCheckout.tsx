"use client";
import { Button } from "@material-tailwind/react";
import React from "react";

const TombolCheckout = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 h-16 lg:h-20  z-50 ">
      <div className="flex justify-between max-w-screen-xl mx-auto  w-full h-full text-white">
        <div className="flex w-full text-black border-2 border-gray-400 bg-white p-4  justify-center  flex-col sm:flex-row items-center">
          <span className="sm:text-base text-xs">
            Total harga :{" "}
            <span className="text-base sm:text-xl font-bold"> Rp10.000</span>
          </span>
        </div>
        <Button
          onClick={() => {}}
          placeholder=""
          className="w-full flex items-center hover:bg-black/80 text-xs sm:text-sm rounded-none justify-center "
        >
          Checkout (0)
        </Button>
      </div>
    </div>
  );
};

export default TombolCheckout;
