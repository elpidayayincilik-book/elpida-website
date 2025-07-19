import { getBookBySlug } from "@/actions/actions";
import type { Metadata } from "next";
import type { TBookTitleProps } from "@/types/types";

import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/Comment/Comment";
import PurchaseLinks from "@/components/Purchase/PurchaseLinks";
import Markdown from "react-markdown";

export async function generateMetadata({
  params,
}: TBookTitleProps): Promise<Metadata> {
  const { bookSlug } = await params;
  //  const awaitedBookTitle = bookTitle;
  return {
    title: {
      default: `${bookSlug.replaceAll("-", " ")} | Detaylar`,
      template: "div",
    },
    description: `Find out more about the book: ${bookSlug}`,
  };
}

async function BookTitle({ params }: TBookTitleProps) {
  const { bookSlug } = await params;
  const bookData = await getBookBySlug({ slug: bookSlug });

  // const bookId = getIdByUrlSlug(bookTitle)

  return (
    <div
      className="overflow-x-hidden"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="flex justify-center  overflow-hidden">
        <div className=" w-full overflow-hidden ">
          <div className="flex  pl-4 lg:pl-6 pt-6  justify-start text-sm  lg:px-8">
            <Link href={"/kitaplar"} className=" font-semibold border-r-3 px-2">
              Kitaplar
            </Link>
            <p className=" px-2 "> {bookData?.title} </p>
          </div>
          {!bookData && <p>Veri Bulunamadı</p>}
          {bookData && (
            <div className=" flex lg:flex-row justify-center items-center lg:items-start w-full flex-col lg:p-6  gap-8 h-[100%] place-items-center ">
              <div className=" lg:w-1/2 w-full  bg-gray-100  rounded-xl justify-center items-center place-items-center">
                <div className="w-full  bg-gray-100 border-1 border-gray-100  rounded-xl flex justify-center items-center place-items-center">
                  <div className="relative p-8 lg:h-[750] md:h-[500] min-h-[400] lg:w-[500] md:w-[400] w-[300] min-w-[300] place-items-center">
                    <Image
                      alt=""
                      src={bookData.picture}
                      fill={true}
                      sizes="100%"
                      className=" p-4 md:p-8  "
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full p-4  flex  flex-col gap-6 ">
                <div className="flex flex-col gap-1">
                  <p className="text-md font-serif font-[500] tracking-[2] rounded-3xl px-5 py-1 border-1 w-fit color-red bg-black text-white ">
                    {bookData.categories.category}
                  </p>

                  <p className=" text-2xl md:text-4xl font-serif">
                    {bookData.title}
                  </p>
                  <p className="text-md font-serif pb-1 border-b-1">
                    <Link href={``}>{bookData.authors.fullname}</Link>
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-md font-serif whitespace-pre-line">
                    {bookData.detail}
                  </p>
                  <div className="prose min-w-full  font-serif text-black font-[500]">
                    <Markdown>{bookData.detail}</Markdown>
                  </div>
                </div>
                <div>
                  <p className="font-bold pb-2 text-xl border-b-1 ">Satın Al</p>
                  <PurchaseLinks
                    className="flex-wrap xl:flex-nowrap rounded-3xl  py-3 flex flex-row gap-2 "
                    links={{
                      amazon: "",
                      dr: "",
                      kitapyurdu: "",
                      trendyol: "",
                    }}
                    iconSize={24}
                  />
                </div>
                <ul>
                  <p className="font-bold font-md pb-2">Künye:</p>
                  <li>
                    <span className="font-bold font-md before:content-[''] pr-1">
                      Sayfa Sayısı:
                    </span>
                    897
                  </li>
                  <li>
                    <span className="font-bold font-md before:content-[''] pr-1">
                      ISBN:
                    </span>
                    897897897897
                  </li>
                  <li>
                    <span className="font-bold font-md before:content-[''] pr-1">
                      Çıkış Tarihi
                    </span>
                    17.07.2025
                  </li>
                  <li>
                    <span className="font-bold font-md before:content-[''] pr-1">
                      Sayfa Sayısı:
                    </span>
                    897
                  </li>
                  <li>
                    <span className="font-bold font-md before:content-[''] pr-1">
                      ISBN:
                    </span>
                    897897897897
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <Comment bookId={bookData!.id!} />
    </div>
  );
}
export default BookTitle;
