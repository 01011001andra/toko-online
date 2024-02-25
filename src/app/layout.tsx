import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainFooter, MainNavbar, MainSpeedDial } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SERBA-8K",
  description: "Toko online serba 8K",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/barnd.svg" />
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <MainNavbar />
        {/* speed dial */}
        <MainSpeedDial />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
