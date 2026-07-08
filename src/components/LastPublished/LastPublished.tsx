import { IBook } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function LastPublished({ books }: { books: IBook[] }) {
  if (!books?.length) return null;

  return (
    <section className="w-full px-3 md:px-8 py-6">
      <h2 className="font-bold font-serif text-2xl text-center mb-6">
        SON ÇIKANLAR
      </h2>

      <div className="w-full max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/kitap/${book.url_slug}`}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden text-center"
          >
            <div className="relative w-full h-[210px] bg-gray-100">
              <Image
                src={book.picture}
                alt={book.title}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>

            <div className="p-2">
              <h3 className="text-sm font-bold line-clamp-2 uppercase">
                {book.title}
              </h3>

              <p className="text-xs mt-1">
                {book.authors?.fullname}
              </p>

              <p className="text-red-600 font-semibold mt-2">
                {book.discount_price || book.price} TL
              </p>

              <span className="inline-block mt-2 text-xs border px-3 py-1 rounded group-hover:bg-black group-hover:text-white">
                İncele
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
