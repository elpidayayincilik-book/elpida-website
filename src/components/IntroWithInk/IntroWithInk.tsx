import Image from "next/image";
import ink from "@/assets/ink2.png";
import bookBg from "@/assets/asd.png";
import Link from "next/link";
import logo from "@/assets/elpida-logo.jpeg";
function IntroWithInk() {
  return (
    // <div className="relative text-center font-serif flex flex-row justify-center items-center space-y-24 py-16 pt-24 pb-0 lg:py-36">
    //   <div className="z-[-1] absolute sm:w-4/10 w-7/10 ">
    //     <Image
    //       alt=""
    //       src={ink}
    //       sizes="100%"
    //       style={{
    //         width: "100%",
    //       }}
    //     />
    //   </div>
    //   <div className="z-[11] text-2xl md:text-3xl lg:text-6xl relative bottom-[40] ">
    //     <div className="flex flex-col gap-2 lg:gap-6 text-center justify-center">
    //       <div className="flex justify-center">
    //         <p className="z-[5] w-fit bg-gray-50 z-[12]     font-bold">
    //           Elpida Yayıncılık
    //         </p>
    //       </div>
    //       <div className="flex justify-center">
    //         <p className=" w-fit bg-gray-50 z-[12] text-[20px] md:text-3xl lg:text-6xl">
    //           genç ve bağımsız bir yayınevi olarak
    //         </p>
    //       </div>
    //       <div className="flex justify-center">
    //         <p className=" w-fit bg-gray-50 z-[12]  ">
    //           edebiyatın umudunu taşır.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full justify-center  ">
      <div
        className="bg-no-repeat bg-cover bg-center  w-full xl:h-[800] lg:h-[600]  h-[500] flex justify-center items-center "
        style={{
          backgroundImage: `url(${bookBg.src})`,
          width: "100%",
        }}
      >
        <div className=" md:px-8 px-4 py-3 white flex flex-col  ">
          <div className="relative left-[0] sm:left-[16%] md:left-[18%] lg:left-[20%] xl:left-[25%] flex flex-col gap-3 md:gap-6 xl:gap-8  font-serif text-center">
            <div className="relative flex text-white justify-center  items-center font-extrabold  text-3xl sm:text-5xl  lg:text-7xl ">
              <Image alt="" src={logo} width={64} height={64} />
              <p className="relative">lpida Yayıncılık</p>
            </div>
            <p className="text-white  font-400 text-xl  md:text-4xl lg:text-4xl xl:text-5xl ">
              genç ve bağımsız bir yayınevi olarak
            </p>
            <div className="flex justify-center">
              <p className="w-fit text-white  font-400 text-2xl  md:text-5xl lg:text-5xl ">
                edebiyatın umudunu taşır.
              </p>
            </div>
            <div className="flex justify-end "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroWithInk;
