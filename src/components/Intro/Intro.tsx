import Image from "next/image";
// import bookBg from "@/assets/asd.png";
// import ink from "@/assets/ink2.png";
import logo from "@/assets/elpida-logo.jpeg";
function IntroWithInk() {
  return (
    <div className="w-full flex justify-center bg-gray-200 border-b-8 ">
      <div className="p-4 xl:w-[80vw] lg:w-[90vw] w-full flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-12 ">
        <div className="flex flex-col justify-center items-center">
          <div className=" w-[48] md:w-[64]  h-[48] md:h-[64] relative ">
            <Image alt="" src={logo} fill sizes="100%" />
          </div>
          <div className="text-center">
            <p>ELPİDA</p>
            <p>YAYINCILIK</p>
          </div>
        </div>
        <div>
          <div
            className="bg-no-repeat bg-cover bg-center text-white relative flex font-serif justify-center  items-center font-extrabold  text-2xl sm:text-5xl  lg:text-5xl "
            style={{
              width: "100%",
            }}
          >
            <p className="relative  text-black lg:text-xl text-normal md:min-w-[180] ">
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
