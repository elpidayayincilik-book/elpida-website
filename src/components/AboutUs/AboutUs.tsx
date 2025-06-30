import bookBg from "@/assets/asd.png";
import Link from "next/link";

function AboutUs() {
  return (
    <div className="w-full justify-center  ">
      <div className="w-full flex flex-row justify-center px-8">
        <p className="lg:w-[75vw] w-full font-bold text-2xl py-6 text-center border-t-1 border-t-gray pt-12 font-serif">
          Hakkımızda
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
            <div className="w-4/8 lg:w-5/7 "></div>
            <div className="md:px-8 px-4 py-3  ">
              <div className=" w-full flex flex-col gap-4 ">
                <p className="text-white text-right font-bold  text-lg  lg:text-4xl ">
                  Elpida Yayıncılık genç ve bağımsız
                </p>
                <p className="text-white text-right font-100 text-normal text-sm lg:text-2xl ">
                  Edebiyatın umudunu taşır. Elpida Yayıncılık genç ve bağımsız
                  bir yayınevi olarak edebiyatın umudunu taşır. br Elpida
                  Yayıncılık genç ve bağımsız bir yayınevi olarak edebiyatın
                  umudunu taşır.
                </p>
                <div className="flex justify-end ">
                  <Link href={""}>
                    <p className="hover:bg-black hover:border-1 border-gray-50 hover:text-white bg-gray-50 py-2 px-4 rounded-3xl text-sm ">
                      Daha Fazla
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
