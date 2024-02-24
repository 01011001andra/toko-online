import Image from "next/image";
import React from "react";
import { FadeInWhenVisible, ScaleWhenVisible } from "@/components";

const Tentang = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-4 bg-white w-full h-full">
      {/* about us */}
      <section className="flex flex-col gap-10 lg:flex-row-reverse min-h-[80vh] lg:items-center items-start lg:justify-center  max-w-screen-xl h-full w-full">
        <div className="lg:w-1/2 w-full">
          <FadeInWhenVisible>
            <Image
              src={
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="sepatu1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-72 sm:h-80 rounded-lg object-cover lg:h-96 border"
            />
          </FadeInWhenVisible>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-4 lg:gap-10 items-center justify-center">
          <ScaleWhenVisible>
            <h1 className="text-2xl sm:text-3xl font-bold uppercase">
              SERBA 8K
            </h1>
          </ScaleWhenVisible>
          <p className="text-sm sm:text-base text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint
            saepe, mollitia perferendis minus corporis libero hic, animi,
            quaerat reprehenderit placeat repellat fugiat neque dignissimos.
            Laboriosam vero veniam amet, maiores commodi recusandae error
            voluptatem porro eos dolor sint quam est repudiandae beatae, aliquam
            corporis quo accusantium rem saepe, expedita praesentium.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
