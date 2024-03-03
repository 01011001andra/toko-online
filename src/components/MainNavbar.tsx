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
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const router = useRouter();
  const dynamicUrlRegex = /^\/produk\/([^\/]+)/;

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className={`mx-auto max-w-screen-xl  px-4 rounded-none xl:rounded-lg py-2 border-none shadow-none ${
        dynamicUrlRegex.test(pathname) || pathname === "/keranjang"
          ? "hidden"
          : "sticky"
      }  ${
        scrollY <= 10 ? "top-0" : "top-0 lg:top-4"
      } transition-all duration-500 z-50 `}
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
          <IconButton
            variant="text"
            onClick={() => {
              router.push("/favorite");
            }}
            size="sm"
            color="gray"
            placeholder=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fff"
                d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
              ></path>
              <path
                fill="#fff"
                d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
              ></path>
              <path
                fill="#cfd8dc"
                d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
              ></path>
              <path
                fill="#40c351"
                d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
                clipRule="evenodd"
              ></path>
            </svg>
          </IconButton>
          <Badge content="2" withBorder>
            <IconButton
              variant="text"
              onClick={() => {
                router.push("/keranjang");
              }}
              size="sm"
              color="gray"
              placeholder=""
            >
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
