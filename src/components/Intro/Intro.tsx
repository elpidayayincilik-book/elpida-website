import Image from "next/image";
import logo from "@/assets/elpida-logo.jpeg";
import { getBooksNames } from "@/actions/actions";
import ClientSearch from "../Search/ClientSearch";
import Link from "next/link";
async function IntroWithInk() {
  const books = await getBooksNames();
  return (
    <div className="w-full flex justify-center bg-white border-b-8 ">
      <div className="p-4 xl:w-[80vw] lg:w-[90vw] w-full flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-12 ">
        <Link href={"/"}>
          <div className="flex flex-col justify-center items-center">
            <div className=" w-[64] md:w-[76]  h-[64] md:h-[76] relative ">
              <Image alt="" src={logo} fill sizes="100%" />
            </div>
            <div className="  text-center font-serif justify-center items-center">
              <div className=" w-[64] md:w-[76] justify-center ">
                <h1 className=" z-[400] relative tracking-[1] md:tracking-[3] text-[17px] ">
                  ELPİDA
                </h1>
                <h1 className="  z-[400] relative tracking-[-2] md:tracking-[-1.5] leading-2 text-[15h1x]  ">
                  YAYINCILIK
                </h1>
              </div>
            </div>
          </div>
        </Link>
        <div>
          <div
            className="bg-no-repeat bg-cover bg-center text-white relative flex font-serif justify-center  items-center font-extrabold  text-2xl sm:text-5xl  lg:text-5xl "
            style={{
              width: "100%",
            }}
          >
            <p className="relative  text-black md:text-2xl text-normal md:min-w-[200] font-serif  ">
              edebiyatın <br /> umudunu taşır
            </p>{" "}
          </div>
        </div>
        <ClientSearch books={books!} />
      </div>
    </div>
  );
}
export default IntroWithInk;
