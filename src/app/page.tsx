import { MainCarousel, ProductCarousel } from "./_components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-4 bg-white w-full">
      {/* MAIN CAROUSEL */}
      <section className="max-w-screen-xl w-full h-[30vh] md:h-[40vh] lg:h-[50vh]">
        <MainCarousel />
      </section>
      {/* PRODUCT */}
      <section className="flex flex-col gap-5 items-center max-w-screen-xl w-full">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="lg:text-3xl text-xl font-semibold uppercase">
            Produk Kami
          </h1>
          <small className="max-w-lg text-center lg:text-sm text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ab
            placeat laborum optio expedita deleniti aliquid qui delectus quos
            commodi temporibus voluptas assumenda, sed quo ut hic dolore porro
            perferendis atque? Eaque temporibus possimu
          </small>
        </div>

        <div className="flex  w-full flex-col gap-3">
          <div className="w-full h-full">
            <ProductCarousel />
          </div>
          <div className="w-full h-full">
            <ProductCarousel />
          </div>
          <div className="w-full h-full">
            <ProductCarousel />
          </div>
          <div className="w-full h-full">
            <ProductCarousel />
          </div>
          <div className="w-full h-full">
            <ProductCarousel />
          </div>
          <div className="w-full h-full">
            <ProductCarousel />
          </div>
        </div>
      </section>
    </main>
  );
}
