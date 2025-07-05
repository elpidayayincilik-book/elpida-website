"use client";
import type { TPage } from "@/types/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
function NavbarButtons({ className }: { className: string }) {
  const path = usePathname() as TPage;

  const pages = [
    { page: "Anasayfa", href: "/" },
    { page: "Yayımlama Paketlerimiz", href: "/yayimlama-paketlerimiz" },
    { page: "İletişim", href: "/iletişim" },
  ];

  return (
    <div className={className}>
      {pages.map((page) => {
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
    </div>
  );
}

export default NavbarButtons;
