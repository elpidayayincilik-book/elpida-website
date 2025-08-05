import Link from "next/link";
import SocialMedia from "../Socials/SocialMedia";

function Footer() {
  return (
    <footer className="bg-black mt-[200] pb-[100]">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
              İLETİŞİM
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <Link href="https://mail.google.com/mail/u/0/?fs=1&to=elpidayayincilik@gmail.com&su=Dosya&tf=cm">
                <li className="mb-4">
                  <p className=" hover:underline break-words truncate ">
                    elpidayayincilik@gmail.com
                  </p>
                </li>
              </Link>
              <li className="mb-4">
                <Link href="/iletisim" className="hover:underline">
                  Bize Ulaşın
                </Link>
              </li>
            </ul>
          </div>

          <div>
            {/* <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
              Gizlilik
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
             
             
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul> */}
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
              SOSYAL MEDYA
            </h2>
            <SocialMedia />
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2025 Elpida Yayıncılık. Bütün Hakları Saklıdır
          </span>
        </div>
      </div>
      <div className="flex justify-center p-4 text-white">
        <p>
          Web Tasarım ve Yazılım:
          <span className="hover:text-underline">
            <a className="" href="https://gokaydmrl.vercel.app/">
              {" "}
              GÖKAY DEMİREL
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
