"use client";

import React from "react";
import { Navbar, IconButton, Badge } from "@material-tailwind/react";
import { useWindowScrollPositions } from "@/hooks";
import { useRouter } from "next/navigation";

export default function KeranjangNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { scrollY } = useWindowScrollPositions();
  const router = useRouter();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className={`mx-auto max-w-screen-xl  px-4 rounded-none py-4 border-none lg:mb-3 shadow-none ${
        scrollY <= 10 ? "top-0" : "top-0 lg:top-4"
      } transition-all duration-500 z-50 `}
      placeholder=""
    >
      <div className="flex items-center gap-3 text-blue-gray-900">
        <IconButton
          variant="text"
          size="sm"
          color="gray"
          placeholder=""
          onClick={() => {
            router.back();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.8}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </IconButton>
        <h1 className="text-lg font-bold sm:text-xl ">Daftar Keranjang</h1>
      </div>
    </Navbar>
  );
}
