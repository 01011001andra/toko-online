import React from "react";
import { KeranjangProduk, KeranjangNavbar } from "./_components";
const Keranjang = () => {
  let isEmpty = false;
  return (
    <div className="mx-auto flex flex-col gap-3 max-w-screen-xl w-full">
      <KeranjangNavbar />
      {/* keranjang */}
      <section className="w-full h-full flex flex-col min-h-screen bg-white p-4 rounded-lg">
        <div className="flex flex-col gap-5">
          <KeranjangProduk />
        </div>
      </section>
      {/* product lain */}
      <section>
        <h1 className="text-lg font-bold sm:text-xl">Produk Lain</h1>
      </section>
    </div>
  );
};

export default Keranjang;
