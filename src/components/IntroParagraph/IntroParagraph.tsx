import book from "@/assets/book.jpg";
import { Playfair_Display } from "next/font/google";

const geist = Playfair_Display({
  weight: "800",
  style: "normal",
  adjustFontFallback: true,
  preload: true,
  display: "swap",
  subsets: ["latin"],
});

function IntroParagraph() {
  return (
    <div className="relative flex justify-center font-serif w-full h-full items-center">
      <div
        className="w-full xl:h-[500] lg:h-[400] md:h-[300] h-[300]  "
        style={{
          backgroundImage: `url(${book.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <Image
          alt=""
          src={book}
          fill={true}
          sizes="100%"
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
        /> */}
      </div>
      <p
        className={`border-l-5 border-left-black z-[1] absolute text-normal lg:text-6xl md:text-5xl sm:text-xl text-xl text-center ${geist.className} items-center pl-4`}
      >
        Elpida Yayıncılık <br className=" " /> genç ve bağımsız bir yayınevi
        olarak <br className=" " /> edebiyatın umudunu taşır.{" "}
      </p>
      {/* <BookAnim /> */}
    </div>
  );
}
export default IntroParagraph;
