import { IBook } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
function Book(bookProps: IBook) {
  return (
    <Link
      href={`kitap/${bookProps.title} `}
      className="transition-transform shadow-sm rounded-md duration-300 hover:-translate-y-2 focus:-translate-y-2  active:-translate-y-2  bg-inherit  "
    >
      <div className=" group w-fit rounded-lg  flex flex-col justify-center min:w-[120] w-[150] md:w-[200] ">
        <div className="flex relative w-[100%] justify-center ">
          <div className="relative h-[180] w-[100%] flex justify-center md:h-[260]  xl:h-[240]  min:h-[180] items-center  ">
            <Image
              className="rounded-t-lg  p-1 "
              src={bookProps.picture}
              alt=""
              fill
              sizes="100%"
            />
            {/* <div className="absolute top-[4] right-[4] transition-transform duration-300 opacity-[0] group-hover:opacity-[100]  w-fit group-focus:opacity-[100] group-active:opacity-[100]  ">
              <svg
                width=" 32"
                height="32"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2.667a.667.667 0 0 1 0-1.333h4c.368 0 .667.298.667.666v4a.667.667 0 0 1-1.334 0V3.61L7.138 9.805a.667.667 0 1 1-.943-.943l6.195-6.195zm-6.667 2a.667.667 0 0 0-.666.667v7.333a.667.667 0 0 0 .666.667h7.334a.666.666 0 0 0 .666-.667v-4a.667.667 0 1 1 1.334 0v4a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V5.334a2 2 0 0 1 2-2h4a.667.667 0 1 1 0 1.333z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div> */}
          </div>
        </div>

        <div className="p-1 flex flex-col gap-1 text-center ">
          <p className="text-[14px] md:text-md font-bold  text-gray-900 ">
            {bookProps.title}
          </p>
          <p className=" animate-wiggle  text-sm md:text:md font-normal text-gray-900">
            {bookProps.authors.fullname}
          </p>
        </div>
      </div>
    </Link>
  );
}
export default Book;
