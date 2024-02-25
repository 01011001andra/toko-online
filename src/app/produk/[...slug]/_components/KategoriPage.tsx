import React from "react";

const KategoriPage = ({ kategori }: { kategori: string }) => {
  return (
    <div className="w-full h-full max-w-screen-xl mx-auto  ">
      <h1>{kategori}</h1>
    </div>
  );
};

export default KategoriPage;
