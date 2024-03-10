"use client";
import {
  Button,
  Checkbox,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";

const KeranjangProduk = () => {
  let keranjang = false;
  const router = useRouter();
  return (
    <>
      {keranjang ? (
        <>
          {" "}
          <div className="w-full flex items-center py-2">
            <Checkbox
              crossOrigin={"anonymous"}
              label={
                <Typography
                  placeholder={""}
                  color="blue-gray"
                  className="flex font-medium"
                >
                  Pilih Semua
                </Typography>
              }
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/cantik.avif"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3">
                    <IconButton
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/jam.jpg"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3 ">
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      onClick={(e) => e.stopPropagation()}
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/cantik.avif"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3">
                    <IconButton
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/jam.jpg"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3 ">
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      onClick={(e) => e.stopPropagation()}
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/cantik.avif"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3">
                    <IconButton
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/jam.jpg"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3 ">
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      onClick={(e) => e.stopPropagation()}
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/cantik.avif"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3">
                    <IconButton
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/jam.jpg"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3 ">
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      onClick={(e) => e.stopPropagation()}
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/cantik.avif"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3">
                    <IconButton
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-end lg:items-center">
              <Link
                href={"/produk/sepatu/huawei"}
                className="w-full flex hover:bg-gray-300 transition-all duration-500 py-5 lg:py-0"
              >
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  crossOrigin={"anonymous"}
                  ripple={false}
                  className="h-5 w-5 p-0 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
                <div className="w-52 lg:w-72 h-32 lg:h-52 flex items-center justify-center">
                  <Image
                    src={"/jam.jpg"}
                    alt="jam"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full ml-3">
                  <h2 className=" text-sm lg:text-lg line-clamp-1">
                    Jam Tangan Fashion Pria dan Wanita Jam Tangan Fashion Pria
                    dan Wanita
                  </h2>
                  <small>Jam Tangan</small>
                  <span className="text-sm lg:text-xl font-bold">
                    Rp. 1.000.000
                  </span>
                  <div className="flex gap-3 ">
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                      size="sm"
                    >
                      -
                    </IconButton>
                    <input
                      onClick={(e) => e.stopPropagation()}
                      type="text"
                      className="w-16 lg:w-20 border outline-none  text-center"
                      maxLength={3}
                    />
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      size="sm"
                      placeholder={""}
                      className="px-5 text-xl font-bold"
                    >
                      +
                    </IconButton>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-[50vh] flex flex-col gap-3 items-center justify-center py-2">
          <MdRemoveShoppingCart size={60} />
          <span className="font-bold text-lg text-center">
            Keranjang kamu masih kosong
          </span>
          <Button
            placeholder=""
            onClick={() => {
              router.push("#produk_lain");
            }}
          >
            {" "}
            Ayo Belanja!
          </Button>
        </div>
      )}
    </>
  );
};

export default KeranjangProduk;
