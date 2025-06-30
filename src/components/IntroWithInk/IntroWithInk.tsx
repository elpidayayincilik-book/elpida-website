import Image from "next/image";
import ink from "@/assets/ink2.png";
function IntroWithInk() {
  return (
    <div className="relative text-center font-serif flex flex-row justify-center items-center space-y-24 py-16 pt-24 pb-0 lg:py-36">
      <div className="z-[-1] absolute sm:w-4/10 w-7/10 ">
        <Image
          alt=""
          src={ink}
          sizes="100%"
          style={{
            width: "100%",
          }}
        />
      </div>
      <div className="z-[11] text-2xl md:text-3xl lg:text-6xl relative bottom-[40] ">
        <div className="flex flex-col gap-2 lg:gap-6 text-center justify-center">
          <div className="flex justify-center">
            <p className="z-[5] w-fit bg-gray-50 z-[12]     font-bold">
              Elpida Yayıncılık
            </p>
          </div>
          <div className="flex justify-center">
            <p className=" w-fit bg-gray-50 z-[12] text-[20px] md:text-3xl lg:text-6xl">
              genç ve bağımsız bir yayınevi olarak
            </p>
          </div>
          <div className="flex justify-center">
            <p className=" w-fit bg-gray-50 z-[12]  ">
              edebiyatın umudunu taşır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroWithInk;
