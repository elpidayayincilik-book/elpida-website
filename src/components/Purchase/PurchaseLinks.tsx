import type { ILink, ILinks, IPurchaseLinks } from "@/types/types";
import { purchasePlatforms } from "./consts";
import Image from "next/image";
function PurchaseLinks({
  links,
  iconSize = 24,
  className,
  isBorder,
  px,
  py,
}: {
  iconSize?: number | undefined;
  links: ILinks;
  className: string;
  isBorder?: boolean;
  px?: number;
  py?: number;
}) {
  const purchaseLinks: IPurchaseLinks[] = (Object.keys(links) as ILink[]).map(
    (key) => ({
      image: purchasePlatforms[key].image,
      title: purchasePlatforms[key].title,
      link: links[key],
    })
  );

  return (
    <div className={className}>
      {purchaseLinks.map((item) => {
        return (
          <div key={item.title}>
            <div
              key={item.title}
              className={`group flex flex-row  relative  flex  justify-center rounded-3xl px-${px} py-${py} ${
                isBorder ? "border" : ""
              } cursor-pointer`}
            >
              <div
                className={`relative w-[${iconSize}] h-[${iconSize}] bg-red-50 flex  justify-center rounded-3xl px-4 py-2 `}
              >
                <Image alt="" src={item.image.src} fill sizes="100%" />
              </div>
              <div className="relative  flex items-center justify-center  group-hover:translate-y-0  group-hover:block group-focus:translate-y-0 group-focus:block  group-active:translate-y-0 group-active:block transition-all duration-500 ease-in-out translate-y-5 ">
                <svg
                  className="group hidden group-hover:flex  group-active:block group-focus:block pl-2 pb-0"
                  width=" 24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.529 2.862c.26-.26.682-.26.942 0l4.667 4.667c.26.26.26.682 0 .942l-4.667 4.667a.667.667 0 1 1-.942-.943l3.528-3.528H3.333a.667.667 0 0 1 0-1.334h7.724L7.53 3.805a.667.667 0 0 1 0-.943"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default PurchaseLinks;
