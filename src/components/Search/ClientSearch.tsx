"use client";
import { useClickOutside } from "@/hooks/useClickOutside";
import { IBookWithAuthor } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChangeEvent } from "react";

function ClientSearch({ books }: { books: IBookWithAuthor[] }) {
  const [searchedBooks, setSearchedBooks] = useState<IBookWithAuthor[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useClickOutside<HTMLDivElement>(() => setSearchTerm(""));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSearchedBooks(
      books.filter((book) =>
        book.title.toLocaleLowerCase().includes(e.target.value)
      )
    );
  };
  return (
    <div className="w-full relative">
      <div className="bg-white border-2  shadow p-2 relative rounded-xl flex">
        <span className="w-auto flex justify-end  items-center text-gray-500 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
        <input
          name="episodequery"
          id="title"
          className="border-white outline-none border-0 w-full rounded-xl p-2"
          type="text"
          placeholder="Elpida Yayıncılık"
          value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="bg-black hover:bg-gray-700 rounded-xl text-white text-xl p-2 pl-4 pr-4 ml-2"
        >
          <p className="font-semibold text-xs">Ara</p>
        </button>
      </div>
      {searchTerm && searchedBooks.length > 0 && (
        <div
          ref={ref}
          className="z-100 absolute w-full border-1 bg-white rounded-2xl  flex flex-col gap-3 max-h-[200] overflow-y-scroll overflow-x-hidden   "
        >
          {searchedBooks?.map((book) => {
            return (
              <Link
                onClick={() => setSearchTerm("")}
                className="p-4 flex gap-2 items-center"
                href={`/kitap/${book.title}`}
                key={book.id}
              >
                <Image src={book.picture} width={36} height={60} alt="" />
                {book.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default ClientSearch;
