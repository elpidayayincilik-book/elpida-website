import Image from "next/image";
// import bookBg from "@/assets/asd.png";
// import ink from "@/assets/ink2.png";
import logo from "@/assets/elpida-logo.jpeg";
function IntroWithInk() {
  return (
    <div className="w-full flex justify-center bg-gray-200 border-b-8 ">
      <div className="p-4 xl:w-[80vw] lg:w-[90vw] w-full flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-12 ">
        <div className="flex flex-col justify-center items-center">
          <div className=" w-[64] md:w-[76]  h-[64] md:h-[76] relative ">
            <Image alt="" src={logo} fill sizes="100%" />
          </div>
          <div className="  text-center font-serif justify-center items-center">
            <div className=" w-[64] md:w-[76] justify-center ">
              <p className="tracking-[1] md:tracking-[3] text-[17px] ">ELPİDA</p>
              <p className=" tracking-[-2] md:tracking-[-1] leading-2 text-[15px]  ">
                YAYINCILIK
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="bg-no-repeat bg-cover bg-center text-white relative flex font-serif justify-center  items-center font-extrabold  text-2xl sm:text-5xl  lg:text-5xl "
            style={{
              width: "100%",
            }}
          >
            <p className="relative  text-black md:text-2xl text-normal md:min-w-[200] font-serif">
              edebiyatın <br /> umudunu taşır
            </p>{" "}
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white border-2  shadow p-2 relative rounded-xl flex">
            <span className="w-auto flex justify-end  items-center text-gray-500 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
            <input
              name="episodequery"
              id="title"
              className="border-white outline-none border-0 w-full rounded-xl p-2"
              type="text"
              placeholder="Elpida Yayıncılık"
            />
            <button
              type="submit"
              className="bg-black hover:bg-gray-700 rounded-xl text-white text-xl p-2 pl-4 pr-4 ml-2"
            >
              <p className="font-semibold text-xs">Ara</p>
            </button>
          </div>{" "}
          <div className="border-1 bg-white rounded-2xl p-4 flex flex-col gap-3 max-h-[200] overflow-y-scroll overflow-x-hidden   ">
            <p className="border-b-1 pb-2  ">Karam Karde</p>
            <p className="border-b-1 pb-2  ">Karam Karde</p>
            <p className="border-b-1 pb-2  ">Karam Karde</p>
            <p className="border-b-1 pb-2  ">Karam Karde</p>
            <p className="border-b-1 pb-2 "> Karam Karde</p>
            <p className="border-b-1 pb-2 border-none ">Karam Karde</p>
          </div>
        </div>
        {/* <div
        className="bg-no-repeat bg-cover bg-center text-white relative flex font-serif justify-center  items-center font-extrabold  text-2xl sm:text-5xl  lg:text-5xl h-[80] md:h-[100] "
        style={{
          backgroundImage: `url(${bookBg.src})`,
          width: "100%",
        }}
      >
        <p className="relative  ">edebiyatın umudunu taşır</p>{" "}
      </div> */}
      </div>
    </div>
  );
}
export default IntroWithInk;
