import elpidaLogo from "@/assets/elpida-logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

function Nav() {
  return (
    <div className="w-full">
      <div className="z-0 flex md:justify-between justify-end items-center w-full h-full py-4 px-6 lg:px-8 py-3 ">
        <div className="gap-4 hidden md:flex justify-center items-center">
          <div className="relative w-[36px] h-[36px]">
            <Image
              src={elpidaLogo}
              fill={true}
              alt="Elpida Yayıncılık Logosu"
              className="w-full h-auto"
              sizes="100%"
            />{" "}
          </div>
          <div className="flex gap-4 font-serif   ">
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
