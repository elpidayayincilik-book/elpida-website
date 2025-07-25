import { IBook } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
// import Markdown from "react-markdown";
async function LastPublished(bookProps: IBook) {
  // const data = await  getLastPublished()

  return (
    <div className="px-3 md:px-8 py-3 flex flex-col  justify-center">
      <p className="font-bold font-serif text-2xl lg:py-8 py-6 text-center ">
        SON ÇIKAN
      </p>

      <div className="flex justify-center">
        <div className="lg:w-[75vw] w-full relative border-l-6 rounded-xl  ">
          <div className=" shadow-xl flex justify-center bg-gray-200 rounded-xl  p-1 md:p-12 py-4">
            <div
              key={bookProps.title}
              className="  flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center w-full "
            >
              <div className=" flex flex-col gap-4 h-full">
                <div className="justify-center min-w-[240] md:h-[320] h-[260]  justify-center items-center relative md:w-[240] px-6 py-3">
                  <Image
                    src={bookProps.picture}
                    fill={true}
                    alt={bookProps.detail}
                    sizes="100%"
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col px-4 md:pl-6  justify-between ">
                <div>
                  <p className="text-lg md:text-2xl font-serif font-bold text-center md:text-left ">
                    {bookProps.title}
                  </p>
                  <p className="pb-3 underline md:text-start text-center">
                    {bookProps.authors.fullname}
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full h-full  ">
                  <p className="text-2xl font-serif font-medium text-lg md:text-xl">
                    {bookProps.detail}
                  </p>
                  {/* <div className="prose min-w-full ">
                  <Markdown>{bookProps.detail}</Markdown>
                </div> */}
                  <button className="md:w-fit bg-black text-white px-16 py-2 rounded-3xl hover:bg-gray-800 text-lg font-serif">
                    <Link
                      href={`/kitap/${bookProps.url_slug}`}
                      className="gap-2 flex justify-center items-center"
                    >
                      <p className=""> İncele</p>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.529 2.862c.26-.26.682-.26.942 0l4.667 4.667c.26.26.26.682 0 .942l-4.667 4.667a.667.667 0 1 1-.942-.943l3.528-3.528H3.333a.667.667 0 0 1 0-1.334h7.724L7.53 3.805a.667.667 0 0 1 0-.943"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Link>
                  </button>
                  <div className="absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-[32] lg:w-[64] h-[32] lg:h-[64]"
                    >
                      {" "}
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M16.5 6A3.5 3.5 0 0 1 20 9.442c.09.865.077 2.141-.508 3.614c-.598 1.506-1.764 3.148-3.892 4.744a1 1 0 1 1-1.2-1.6c1.564-1.173 2.46-2.313 2.973-3.31A3.5 3.5 0 1 1 16.5 6m-9 0A3.5 3.5 0 0 1 11 9.442c.09.865.077 2.141-.508 3.614c-.597 1.506-1.764 3.148-3.892 4.744a1 1 0 1 1-1.2-1.6c1.564-1.173 2.46-2.313 2.973-3.31A3.5 3.5 0 1 1 7.5 6"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LastPublished;
