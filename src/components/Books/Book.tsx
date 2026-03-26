"use client";

import { IBook } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
// import PurchaseLinks from "../Purchase/PurchaseLinks";
import PurchaseButton from "../Purchase/PurchaseButton";
import { usePrefetchBook } from "./prefetch";
// import PurchaseLinks from "../Purchase/PurchaseLinks";
function Book(bookProps: IBook) {
  usePrefetchBook(bookProps);

  return (
    <div className=" transition-transform shadow-sm rounded-md duration-300 hover:-translate-y-2 focus:-translate-y-2  active:-translate-y-2  bg-inherit flex flex-col justify-center items-center ">
      <Link href={`kitap/${bookProps.url_slug}`} prefetch>
        <div className="  w-fit rounded-lg  flex flex-col justify-center min-w-[160] max-w-[160] md:max-w-[200] md:w-[200] ">
          <div className="flex relative w-[100%] justify-center ">
            <div className=" h-[180] w-[100%] flex justify-center md:h-[260]  xl:h-[240]  min-h-[180] items-center  ">
              <Image className="rounded-t-lg" src={bookProps.picture} alt="" fill sizes="100%" />
            </div>
          </div>

          <div className="p-1 flex  flex-col gap-1 text-center  ">
            <div
              data-ripple-light="true"
              data-tooltip-target="tooltip"
              data-tooltip-style="light"
              className="group ">
              <p className=" uppercase text-[14px]  md:text-md font-bold w-full overflow-hidden text-gray-900 line-clamp-1">
                {bookProps.title}
              </p>

              <div
                data-tooltip="tooltip"
                className="absolute hidden group-active:block  group-hover:block focus-hover:block   z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                {bookProps.title}
              </div>
            </div>
            <p className="uppercase whitespace-nowrap overflow-hidden text-ellipsis text-[12px] md:text:md font-normal text-gray-900">
              {bookProps.authors.fullname} 
            </p>
          </div>
        </div>
      </Link>
      <PurchaseButton
        price={bookProps.price}
        original_price={bookProps.original_price}
        discount_price={bookProps.discount_price}
        purchaseLink={bookProps.purchase_link_trendyol}
      />
    </div>
  );
}
export default Book;
