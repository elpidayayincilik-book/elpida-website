"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
function ClientNav() {
  type TPage =
    | "/"
    | "hakkinda"
    | "kitap"
    | "iletişim"
    | "/yayimlama-paketlerimiz"
    | "/iletişim";

  const path = usePathname() as TPage;
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [path]);
  const pages = [
    { page: "Anasayfa", href: "/" },
    { page: "Yayımlama Paketlerimiz", href: "/yayimlama-paketlerimiz" },
    { page: "İletişim", href: "/iletişim" },
  ];

  return (
    <div className="w-full  gap-4 flex  justify-between  items-center   ">
      <div className="flex gap-4 font-serif md:flex hidden  ">
        {mounted &&
          pages.map((page) => {
            return (
              <Link
                //   onClick={() => setActivePage(page.href as TPage)}
                className={` ${
                  page.href === path ? "font-bold underline" : ""
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
  );
}
export default ClientNav;
