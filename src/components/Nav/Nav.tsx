"use client";
import Link from "next/link";
import Menu from "./Menu";
import IntroWithInk from "../Intro/Intro";
import { useState } from "react";
type TPage = "Yayımlama Paketlerimiz" | "İletişim" | "Anasayfa";

function Nav() {
  const [activePage, setActivePage] = useState<TPage>("Anasayfa");
  const pages = [
    { page: "Anasayfa", href: "/" },
    { page: "Yayımlama Paketlerimiz", href: "/yayimlama-paketlerimiz" },
    { page: "İletişim", href: "/İletişim" },
  ];
  return (
    <div className=" w-full bg-gray-200 flex flex-col w-full justify-center items-center">
      <div className="z-0 flex md:justify-between justify-end items-center w-full xl:w-[80vw] lg:w-[90vw] h-full px-4 lg:px-6 py-2">
        <div className="w-full  gap-4 flex  justify-between  items-center   ">
          <div className="flex gap-4 font-serif md:flex hidden  ">
            {pages.map((page) => {
              return (
                <Link
                  onClick={() => setActivePage(page.page as TPage)}
                  className={` ${
                    page.page === activePage ? "font-bold underline" : ""
                  } min-w-fit hover:underline  `}
                  key={page.href}
                  href={page.href}
                >
                  {page.page}{" "}
                </Link>
              );
            })}

            <div className=" w-full space-x-6 md:block sm:block"></div>
          </div>
        </div>

        <div className="">
          <Menu />
        </div>
      </div>
      <IntroWithInk />
    </div>
  );
}
export default Nav;
// elpida website supabase database password wKfZimofb7me2wzC
