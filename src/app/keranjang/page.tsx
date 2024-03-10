import React from "react";
import {
  KeranjangProduk,
  KeranjangNavbar,
  ProdukLain,
  TombolCheckout,
} from "./_components";
const Keranjang = () => {
  return (
    <div className="w-full h-full ">
      <div className="mx-auto flex flex-col gap-3 max-w-screen-xl w-full ">
        <TombolCheckout />
        <KeranjangNavbar />
        {/* keranjang */}
        <section className="w-full h-full flex flex-col  bg-white rounded-lg ">
          <div className="flex flex-col ">
            <KeranjangProduk />
          </div>
        </section>
        {/* product lain */}
        <section className="w-full h-full flex flex-col  rounded-lg" id="produk_lain">
          <div className="flex flex-col">
            <ProdukLain />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Keranjang;
