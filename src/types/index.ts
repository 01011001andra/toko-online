import { ImageProps } from "next/image";

export type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  src: string;
};
