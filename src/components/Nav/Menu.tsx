"use client";

import Link from "next/link";
import { useState } from "react";
function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative z-[99] w-full justify-center items-center block md:hidden ">
      <a onClick={() => setOpen((prev) => !prev)} className="cursor-pointer">
        {!open ? (
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
        ) : (
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
        )}
      </a>

      {open && (
        <div
          className={` fixed top-16 right-0 h-fit w-64 bg-red-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul>
            <Link href={"/"} >Anasayfaaaaaaaaa</Link >
            <Link href={"/yayimlama-paketleri"} >Yayımlama Paketleri</Link >
            <Link href={"/iletişim"} >İletişim</Link >
            
          </ul>
        </div>
      )}
    </div>
  );
}
export default Menu;
