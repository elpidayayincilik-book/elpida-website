import Link from "next/link";
import Menu from "./Menu";

function Nav() {
  return (
    <div className="w-full ">
      <div className="z-0 flex md:justify-between justify-end items-center w-full h-full md:py-4 px-4 lg:px-8 pb-2 pt-4 ">
        <div className="w-full  gap-4 flex  justify-between  items-center">
          {/* <div className="relative w-[36px] h-[36px]">
            <Image
              src={elpidaLogo}
              fill={true}
              alt="Elpida Yayıncılık Logosu"
              className="w-full h-auto"
              sizes="100%"
            />{" "}
          </div> */}
          <div className=" font-bold font-serif md:text-xl text-lg">
            <p>ELPİDA YAYINCILIK</p>
          </div>
          <div
            className="flex gap-4 font-serif md:flex
hidden  "
          >
            <Link href="">
              <p className="text-xl font-300 hover:font-700">Vizyon</p>
            </Link>
            <Link href="">
              <p className="text-xl font-300 hover:font-700">İletişim</p>
            </Link>
            <Link href="">
              <p className="text-xl font-300 hover:font-700">Vizyon</p>
            </Link>
            <Link href="">
              <p className="text-xl font-300 hover:font-700">İletişim</p>
            </Link>
            <div className=" w-full space-x-6 md:block sm:block"></div>
          </div>
        </div>

        <div className="">
          <Menu />
        </div>
      </div>
    </div>
  );
}
export default Nav;
// elpida website supabase database password wKfZimofb7me2wzC
