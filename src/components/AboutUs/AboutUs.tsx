import bookBg from "@/assets/book6.webp";
import Link from "next/link";

function AboutUs() {
  return (
    <div className="w-full justify-center  ">
      <div className="w-full flex flex-row justify-center px-8">
        <p className="lg:w-[75vw] w-full font-bold text-2xl py-6 text-center  pt-12 font-serif">
          HAKKIMIZDA
        </p>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center  w-full xl:h-[600] lg:h-[500]  h-[400] flex justify-center items-center "
        style={{
          backgroundImage: `url(${bookBg.src})`,
          width: "100%",
        }}
      >
        <div className={`flex`}>
          <div className="flex ">
            {/* <div className="w-4/8 lg:w-5/7 "></div> */}
            <div className="md:px-8 px-4 py-3  w-full flex flex-col justify-start text-center ">
              <div className=" w-full flex flex-col gap-4 text-left ">
                <p className=" bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent w-full font-bold  text-lg  lg:text-4xl ">
                  Elpida Yayıncılık genç ve bağımsız
                </p>
                <p className="w-6/8 lg:w-5/8  text-black font-100 text-normal text-sm lg:text-2xl ">
                  Edebiyatın umudunu taşır. Elpida Yayıncılık genç ve bağımsız
                  bir yayınevi olarak edebiyatın umudunu taşır.
                </p>
                <p className="w-6/8 lg:w-5/8  text-black font-100 text-normal text-sm lg:text-2xl ">
                  Edebiyatın umudunu taşır. Elpida Yayıncılık genç ve bağımsız
                  bir yayınevi olarak edebiyatın umudunu taşır. br Elpida
                  Yayıncılık genç ve bağımsız bir yayınevi olarak edebiyatın
                  umudunu taşır.
                </p>
                <div className="flex justify-start ">
                  <Link href={"/hakkimizda"}>
                    <p className="hover:bg-gray-900   text-white bg-black py-2 px-4 rounded-3xl text-sm ">
                      Vizyonumuz
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
