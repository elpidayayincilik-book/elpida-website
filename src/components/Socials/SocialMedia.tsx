import Link from "next/link";
import Image from "next/image";
import iconI from "@/assets/facebook.png";
import iconInsta from "@/assets/icon-insta.png";

function SocialMedia() {
  return (
    <ul className=" flex text-gray-500 dark:text-gray-400 font-medium gap-2 items-center">
      <Link
        href="https://www.facebook.com/people/Elpida-Yay%C4%B1nc%C4%B1l%C4%B1k/61557516820611/"
        className="relative w-[18] h-[18]   p-0"
      >
        <Image
          alt="Elpida Yayıncılık Facebook Hesabı"
          src={iconI}
          fill
          sizes="100%"
          className=" opacity-90 hover:opacity-100"
        />
      </Link>
      <Link
        href={"https://www.instagram.com/elpida_yayinlari/"}
        className="relative w-[24] h-[24]   p-0"
      >
        <Image
          alt="Elpida Yayıncılık Instagram Hesabı"
          src={iconInsta}
          width={32}
          sizes="100%"
          className="opacity-90 hover:opacity-100"
        />
      </Link>
    </ul>
  );
}
export default SocialMedia;
