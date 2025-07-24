import Link from "next/link";

function PurchaseButton({
  purchaseLink = "/iletisim",
  price,
}: {
  purchaseLink?: string;
  price: number;
}) {
  console.log("price", price);

  return (
    <Link
      className="flex flex-col text-center justify-center items-center w-full"
      href={`${purchaseLink}`}
    >
      <div className="flex min-w-fit max-w-[100%] flex-row gap-1 pt-1 text-center justify-center items-center">
        <p className="border-r-3 text-black min-w-fit  p-1 pr-2 ">
          <span className="line-through">
            {Math.ceil(price + (price * 25) / 100)} TL
          </span>
        </p>
        <div className="text-[10px] md:text-[12px] text-red-700  rounded-xl p-2">
          <p>İNDİRMLİ FİYATI:</p>
          <p className="text-lg text-left ">{price} TL</p>
        </div>
      </div>
      <div className="text-center relative p-2 w-full  bg-black/80 p-3 top-[40%] text-white">
        <p>🛒 SATIN AL</p>
      </div>
    </Link>
  );
}
export default PurchaseButton;
