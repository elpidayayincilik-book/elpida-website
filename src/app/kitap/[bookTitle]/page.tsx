import { getBookByTitle } from "@/actions/actions";
import type { Metadata } from "next";
import type { TBookTitleProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import ky from "@/assets/ky.png";
import dr from "@/assets/dr.jpg";
import amazon from "@/assets/amazon.png";
import ty from "@/assets/ty.png";
// import commentBg from "@/assets/commentBg.png";
import Comment from "@/components/Comment/Comment";

export async function generateMetadata({
  params,
}: TBookTitleProps): Promise<Metadata> {
  const { bookTitle } = await params;
  //  const awaitedBookTitle = bookTitle;
  const decodedBookName = decodeURIComponent(bookTitle);
  return {
    title: {
      default: `${decodedBookName.replaceAll("-", " ")} | Detaylar`,
      template: "div",
    },
    description: `Find out more about the book: ${bookTitle}`,
  };
}

async function BookTitle({ params }: TBookTitleProps) {
  const icons = [ky, dr, amazon, ty];
  const { bookTitle } = await params;
  const decodedBookTitle = decodeURIComponent(bookTitle.replaceAll("-", " "));
  const bookData = await getBookByTitle({ title: decodedBookTitle });

  return (
    <div
      className="overflow-x-hidden"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="flex justify-center  overflow-hidden">
        <div className=" w-full overflow-hidden ">
          <div className="flex  pl-6 justify-start text-sm  lg:px-8">
            <Link href={"/"} className=" font-semibold border-r-3 px-2 pl-0 ">
              Anasayfa
            </Link>
            <Link href={"/kitaplar"} className=" font-semibold border-r-3 px-2">
              Kitaplar
            </Link>
            <p className=" px-2 "> {bookData?.title} </p>
          </div>
          {!bookData && <p>Veri Bulunamadı</p>}
          {bookData && (
            <div className="flex lg:flex-row justify-center items-center lg:items-start w-full flex-col lg:p-6  gap-8 h-[100%] place-items-center ">
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
                  <p className="text-md font-serif rounded-3xl px-5 py-1 border-1 w-fit color-red bg-black text-white ">
                    {bookData.categories.category}
                  </p>

                  <p className="text-4xl font-serif">{bookData.title}</p>
                  <p className="text-md font-serif pb-1 border-b-1">
                    <Link href={``}>{bookData.authors.fullname}</Link>
                  </p>
                </div>
                <p className="text-md font-serif">{bookData.detail}</p>
                <p className="text-md font-serif">{bookData.detail}</p>{" "}
                <p className="text-md font-serif">{bookData.detail}</p>{" "}
                <p className="text-md font-serif">{bookData.detail}</p>
                <div>
                  <p className="font-bold pb-2 text-xl border-b-1 ">Satın Al</p>
                  <div className=" flex-wrap xl:flex-nowrap rounded-3xl  py-3 flex flex-row gap-2 ">
                    {icons.map((icon, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex flex-row gap-4 relative border flex  justify-center rounded-3xl px-4 py-3 "
                        >
                          <div className="relative w-[24] h-[24] bg-red-50 flex  justify-center rounded-3xl px-4 py-2 ">
                            <Image alt="" src={icon} fill sizes="100%" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
      <Comment />
    </div>
  );
}
export default BookTitle;
