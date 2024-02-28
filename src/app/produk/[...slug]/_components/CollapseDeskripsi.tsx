"use client";
import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

export default function CollapseDeskripsi() {
  const [open, setOpen] = React.useState(true);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <div>
      <p className="text-sm text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident
        commodi quae tenetur eius enim illo pariatur quibusdam ut, animi vel
        esse at, obcaecati labore. Odit officia minus, itaque voluptatem eveniet
        blanditiis? Odio sed, iure eius autem cumque reiciendis? Eius libero
        exercitationem laudantium sed, ex distinctio delectus voluptatem
        assumenda expedita architecto sapiente veniam velit repellat facilis
        quos aspernatur eaque non omnis! Ab recusandae sequi facilis voluptates
        excepturi vel magni eius eos. Fugiat quisquam eos, odio ad dicta
        corporis exercitationem rem accusantium unde! Dicta impedit sed nesciunt
        placeat nisi a dignissimos rerum eos quod, ducimus doloremque ipsum,
        officiis ullam et similique! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Optio provident commodi quae tenetur eius enim illo
        pariatur quibusdam ut, animi vel esse at, obcaecati labore. Odit officia
        minus, itaque voluptatem eveniet blanditiis? Odio sed, iure eius autem
        cumque reiciendis? Eius libero exercitationem laudantium sed, ex
        distinctio delectus voluptatem assumenda expedita architecto sapiente
        veniam velit repellat facilis quos aspernatur eaque non omnis! Ab
        recusandae sequi facilis voluptates excepturi vel magni eius eos. Fugiat
        quisquam eos, odio ad dicta corporis exercitationem rem accusantium
        unde! Dicta impedit sed nesciunt placeat nisi a dignissimos rerum eos
        quod, ducimus doloremque ipsum, officiis ullam et similique! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Optio provident commodi
        quae tenetur eius enim illo pariatur quibusdam ut, animi vel esse at,
        obcaecati labore. Odit officia minus, itaque voluptatem eveniet
        blanditiis? Odio sed, iure eius autem cumque reiciendis? Eius libero
        exercitationem laudantium sed, ex distinctio delectus voluptatem
        assumenda expedita architecto sapiente veniam velit repellat facilis
        quos aspernatur eaque non omnis! Ab recusandae sequi facilis voluptates
        excepturi vel magni eius eos. Fugiat quisquam eos, odio ad dicta
        corporis exercitationem rem accusantium unde! Dicta impedit sed nesciunt
        placeat nisi a dignissimos rerum eos quod, ducimus doloremque ipsum,
        officiis ullam et similique!
      </p>
    </div>
  );
}
