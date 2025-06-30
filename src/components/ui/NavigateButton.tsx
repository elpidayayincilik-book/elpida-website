// import { useRouter } from "next/navigation";
import Link from "next/link";
function NavigateButton({ bookTitle }: { bookTitle: string }) {
  // const router = useRouter();
  // const navigate = () => {
  //   router.push(` kitap/${decodeURIComponent(bookTitle)} `);
  // };
  return (
    <Link
      // onClick={navigate}
      href={{
        pathname: `kitap/${bookTitle.replaceAll(" ","-")}`,
      }}
      className="w-fit  inline-flex  px-3 py-2 text-sm font-medium  text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300   "
    >
      Detayları Gör
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
}
export default NavigateButton;
