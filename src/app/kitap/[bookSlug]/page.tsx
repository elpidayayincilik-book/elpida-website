// import { getBookBySlug } from "@/actions/getBooks";
import type { Metadata } from "next";
import type { IBook, TBookTitleProps } from "@/types/types";

import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/Comment/Comment";
// import Markdown from "react-markdown";
import PurchaseButton from "@/components/Purchase/PurchaseButton";

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
    description: `${bookSlug} | Detaylar`,
  };
}

async function BookTitle({ params }: TBookTitleProps) {
  const { bookSlug } = await params;
  // const bookData = await getBookBySlug({ slug: bookSlug });
  const bookRes = await fetch(
    `https://elpidakitap.com.tr/api/getBookBySlug/${bookSlug}`,
    {
      cache: "default",
      next: {
        revalidate: 60,
      },
    }
  );
  const bookData: IBook = await bookRes.json();
  console.log("bookData noww", bookData);

  // const bookId = getIdByUrlSlug(bookTitle)

  return (
    <div
      className="overflow-x-hidden z-[100] relative "
      style={{
        overflow: "hidden",
      }}
    >
      <div className="flex justify-center  overflow-hidden">
        <div className=" w-full overflow-hidden ">
          <div className="flex  pl-4 lg:pl-6 pt-6  justify-start text-sm  lg:px-8">
            <Link
              href={"/#kitaplar"}
              className="z-[100] relative font-semibold border-r-3 px-2"
            >
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
                  {/* <p className="text-md font-serif font-[500] tracking-[2] rounded-3xl px-5 py-1 border-1 w-fit color-red bg-black text-white ">
                    {bookData.categories.category}
                  </p> */}
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
                  {/* <div className="prose min-w-full  font-serif text-black font-[500]">
                    <Markdown>{bookData.detail}</Markdown>
                  </div> */}
                </div>
                <div className="border-1 border-gray-500/20  rounded-lg ">
                  <PurchaseButton
                  purchaseLink={bookData.purchase_link_trendyol}
                  />
                </div>

                <ul>
                  <p className="font-bold font-md pb-2">Künye:</p>
                  <li>
                    <span className="font-bold font-md before:content-[''] pr-1">
                      Sayfa Sayısı:
                    </span>
                    {bookData.page_number}{" "}
                  </li>
                  <li>
                    <span className="font-bold font-md before:content-[''] pr-1">
                      ISBN:
                    </span>
                    {bookData.isbn}
                  </li>
                  <li>
                    <span className="font-bold font-md before:content-[''] pr-1">
                      Çıkış Tarihi
                    </span>
                    {/* {bookData.publish_date.getMonth()}. */}
                    {/* {bookData.publish_date.getFullYear()}{" "} */}
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
