"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useWindowScrollPositions } from "@/hooks";
import { NextRouter } from "next/router";
import { useRouter } from "next/navigation";
import Link from "next/link";

const kategori = [
  {
    name: "sepatu",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    name: "baju",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    name: "celana",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    name: "tas",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    name: "kalung",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    name: "ikat pinggang",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    name: "dompet",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    name: "topeng",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    name: "gelang",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenu({
  openNav,
  setOpenNav,
}: {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = kategori.map(({ icon, name, description }, key) => (
    <Link href={`/produk/${name}`} key={key} onClick={() => setOpenNav(false)}>
      <MenuItem placeholder="" className="flex items-center gap-3 rounded-lg ">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography
            placeholder=""
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold capitalize"
          >
            {name}
          </Typography>
          <Typography
            placeholder=""
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            placeholder={"Hello placeholder"}
          >
            <ListItem
              placeholder={"Helo placeholder"}
              className="flex items-center gap-2 py-2 pr-4 text-sm leading-tight font-normal transition-all duration-500 text-blue-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Kategori
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl lg:block"
          placeholder=""
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({
  openNav,
  setOpenNav,
}: {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  return (
    <List
      className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 overflow-y-auto max-h-[80vh]"
      placeholder=""
    >
      <Link href={"/"}>
        <ListItem
          placeholder=""
          className="flex items-center gap-2 py-2 pr-4 text-sm leading-tight transition-all duration-500 text-blue-gray-900"
        >
          Beranda
        </ListItem>
      </Link>

      <Link href={"/tentang"}>
        <ListItem
          placeholder=""
          className="flex items-center gap-2 py-2 pr-4 text-sm leading-tight transition-all duration-500 text-blue-gray-900"
        >
          Tentang Kami
        </ListItem>
      </Link>

      <NavListMenu openNav={openNav} setOpenNav={setOpenNav} />
      <Link href={"/kontak"}>
        <ListItem
          placeholder=""
          className="flex items-center gap-2 py-2 pr-4 text-sm font-normal leading-tight transition-all duration-500 text-blue-gray-900"
        >
          Kontak
        </ListItem>
      </Link>
    </List>
  );
}

export default function MainNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { scrollY } = useWindowScrollPositions();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className={`mx-auto max-w-screen-xl  px-4 rounded-none xl:rounded-lg py-2 border-none shadow-none sticky ${
        scrollY <= 10 ? "top-0" : "top-0 lg:top-4"
      } transition-all duration-500 z-50`}
      placeholder=""
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          placeholder=""
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          SERBA-8K
        </Typography>
        <div className="hidden lg:block">
          <NavList openNav={openNav} setOpenNav={setOpenNav} />
        </div>
        <div className="hidden gap-5 lg:flex">
          <Badge content="2" withBorder>
            <IconButton variant="text" size="sm" color="gray" placeholder="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </IconButton>
          </Badge>
          <Badge content="2" withBorder>
            <IconButton variant="text" size="sm" color="gray" placeholder="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </IconButton>
          </Badge>
        </div>
        <IconButton
          placeholder=""
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList openNav={openNav} setOpenNav={setOpenNav} />
        {/* <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            placeholder=""
            variant="outlined"
            size="sm"
            color="blue-gray"
            fullWidth
          >
            Log In
          </Button>
          <Button placeholder="" variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div> */}
      </Collapse>
    </Navbar>
  );
}
