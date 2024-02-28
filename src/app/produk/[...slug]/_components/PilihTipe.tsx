"use client";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function PilihTipe({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Drawer
        placeholder={""}
        open={open}
        onClose={closeDrawer}
        className="p-4 "
        size={500}
        placement={"bottom"}
      >
        <div className="lg:max-w-screen-xl mx-auto w-full h-full flex flex-col justify-between">
          <div className="flex flex-col ">
            <div className="mb-6 flex items-center justify-between">
              <Typography placeholder={""} variant="h5" color="blue-gray">
                Sepatu cuy Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat, magni.
              </Typography>
              <IconButton
                placeholder={""}
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <Typography
              placeholder={""}
              color="gray"
              className="mb-8 pr-4 font-normal"
            >
              Pilih tipe :
            </Typography>
            <div className="flex gap-2 flex-wrap max-w-4xl w-full">
              <Button
                placeholder={""}
                size="sm"
                className="hover:bg-black hover:text-white"
                variant="outlined"
              >
                S
              </Button>
              <Button
                placeholder={""}
                size="sm"
                className="hover:bg-black hover:text-white"
                variant="outlined"
              >
                M
              </Button>
              <Button
                placeholder={""}
                size="sm"
                className="hover:bg-black hover:text-white"
                variant="outlined"
              >
                XL
              </Button>
              <Button
                placeholder={""}
                size="sm"
                className="hover:bg-black hover:text-white"
                variant="outlined"
              >
                XXL
              </Button>
              <Button
                placeholder={""}
                size="sm"
                className="hover:bg-black hover:text-white"
                variant="outlined"
              >
                XXXL
              </Button>
              <Button
                placeholder={""}
                size="sm"
                className="hover:bg-black hover:text-white"
                variant="outlined"
              >
                XXXXL
              </Button>
            </div>
          </div>
          <Button placeholder={""} size="lg">
            Beli Sekarang
          </Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
