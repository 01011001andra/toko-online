import React from "react";

const DetailKategoriPage = ({
  detail,
  kategori,
}: {
  detail: string;
  kategori: string;
}) => {
  return (
    <div className="w-full h-full max-w-screen-xl mx-auto px-4 ">
      <h1>
        {kategori}/{detail}
      </h1>
    </div>
  );
};

export default DetailKategoriPage;
