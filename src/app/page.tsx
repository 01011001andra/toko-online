import { MainCarousel, ProductCarousel } from "./_components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 px-4 bg-white w-full">
      {/* MAIN CAROUSEL */}
      <section className="max-w-screen-xl w-full h-[30vh] md:h-[40vh] lg:h-[50vh]">
        <MainCarousel />
      </section>
      {/* PRODUCT */}
      <section className="flex flex-col gap-3 items-center max-w-screen-xl w-full">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="lg:text-3xl text-xl font-semibold uppercase">
            Produk Kami
          </h1>
          <small className="max-w-md text-center lg:text-sm text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit.
          </small>
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
        <div className="w-full h-full">
          <ProductCarousel />
        </div>
      </section>
    </main>
  );
}
