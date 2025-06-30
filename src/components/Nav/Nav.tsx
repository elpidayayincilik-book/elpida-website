import elpidaLogo from "@/assets/elpida-logo.jpeg";
import Image from "next/image";

function Nav() {
  return (
    <div className="z-0 flex flex row justify-between items-center w-full h-full py-4 px-6 lg:px-8 py-3 ">
      <div className="flex flex-row space-x-3 items-center">
        <div className="relative w-[36px] h-[36px]">
          <Image
            src={elpidaLogo}
            fill={true}
            alt="Elpida Yayıncılık Logosu"
            className="w-full h-auto"
            sizes="100%"
          />{" "}
        </div>
      </div>
      <div className="flex justify-between space-x-6 hidden md:block">
        <a href="">Hakkında</a>
        <a href="">Kitaplar</a>
      </div>
      <div className="flex justify-between space-x-6 md:hidden sm:block">
        <div className="relative w-full h-full">
          <Image
            src={elpidaLogo}
            fill={true}
            alt="Elpida Yayıncılık Logosu"
            sizes="100%"
          />{" "}
        </div>
      </div>
    </div>
  );
}
export default Nav;
// elpida website supabase database password wKfZimofb7me2wzC
