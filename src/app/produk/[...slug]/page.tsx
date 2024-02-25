import React from "react";
import { DetailKategoriPage, KategoriPage } from "./_components";

const DetailProduct = ({ params }: { params: { slug: string[] } }) => {
  let kategori = params.slug[0];
  let slug = params.slug[1];

  if (params.slug.length === 1) {
    return (
      <section className="w-full mx-auto px-4 min-h-screen">
        <KategoriPage kategori={kategori} />
      </section>
    );
  }

  if (params.slug.length === 2) {
    return (
      <section className="w-full mx-auto px-4 min-h-screen">
        <DetailKategoriPage kategori={kategori} detail={slug} />
      </section>
    );
  }
};

export default DetailProduct;
