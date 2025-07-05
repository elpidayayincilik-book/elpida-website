"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
type TPage =
  | "/"
  | "hakkinda"
  | "kitap"
  | "iletişim"
  | "/yayimlama-paketlerimiz"
  | "/iletişim";

function Menu() {
  const path = usePathname() as TPage;

  const pages = [
    { page: "Anasayfa", href: "/" },
    { page: "Yayımlama Paketlerimiz", href: "/yayimlama-paketlerimiz" },
    { page: "İletişim", href: "/iletişim" },
  ];
  const [open, setOpen] = useState(false);
  const refMenu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        refMenu.current &&
        event.target instanceof Node &&
        !refMenu.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [refMenu]);
  return (
    <div className="justify-end items-center block md:hidden min-w-fit">
      <a onClick={() => setOpen(true)} className="cursor-pointer justify-end">
        {!open && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width=" 16"
            height="16"
            viewBox="0 0 50 50"
            className="fill-gray-700 hover:fill-gray-900  "
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        )}
      </a>

      {open && (
        <div
          ref={refMenu}
          className={` flex flex-col justify-end text-right w-full h-fit z-[5000]  transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {" "}
          <div className="justify-end">
            <button onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width=" 16"
                height="16"
                viewBox="0 0 50 50"
                className="fill-gray-700 hover:fill-gray-900  "
              >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-1 w-full">
            {pages.map((page) => {
              return (
                <Link
                  //   onClick={() => setActivePage(page.href as TPage)}
                  className={` ${
                    page.href === path ? "font-bold underline" : ""
                  }  w-full hover:underline  `}
                  key={page.href}
                  href={page.href}
                >
                  {page.page}{" "}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default Menu;
