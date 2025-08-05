"use client";

import { useEffect, useState } from "react";
import NavbarButtons from "./NavbarButtons";
import { usePathname } from "next/navigation";
import { useClickOutside } from "@/hooks/useClickOutside";
import SocialMedia from "../Socials/SocialMedia";

function Menu() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const refMenu = useClickOutside<HTMLDivElement>(() => setOpen(false));
  useEffect(() => {
    setOpen(false);
  }, [path]);
  return (
    <div className="justify-end items-center  min-w-fit flex flex-row gap-3">
      <SocialMedia />
      <a
        onClick={() => setOpen(true)}
        className="block md:hidden cursor-pointer justify-end"
      >
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
          <NavbarButtons className="flex flex-col gap-1 w-full" />
        </div>
      )}
    </div>
  );
}
export default Menu;
