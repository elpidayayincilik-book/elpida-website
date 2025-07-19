import { getBooks } from "@/actions/actions";
import Book from "./Book";
import LastPublished from "../LastPublished/LastPublished";
// import { filterButtons } from "./consts";

async function BooksList() {
  const books = await getBooks();
  return (
    <div className=" w-full">
      {books && <LastPublished {...books[0]} />}

      <div className=" w-full flex-flex-col  items-center  ">
        <div className=" flex flex-col justify-center items-center ">
          <p className="w-[75vw] font-bold font-serif text-2xl  pt-6 pb-0 text-center md:pt-12">
            KİTAPLAR
          </p>
          <div className="  xl:w-[1000] md:w-[850]  rounded-xl sm:w-[600] w-full justify-center p-1">
            <div className=" w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 space-y-4 md:space-y-4  p-1 place-items-center">
              {!books && <p>Kitaplar Yükleniyor</p>}
              {books?.length &&
                [
                  ...books,
                  ...books,
                  ...books,
                  ...books,
                  ...books,
                  ...books,
                  ...books,
                  ...books,
                  ...books,
                ].map((item, idx) => {
                  return <Book {...item} key={idx} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksList;
