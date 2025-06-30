import { getBooks } from "@/actions/actions";
import Book from "./Book";
import { filterButtons } from "./consts";

async function BooksList() {
  const books = await getBooks();
  return (
    <div className=" w-full justify-center ">
      <div className="flex flex-col justify-center items-center ">
        <p className="w-[75vw] font-bold font-serif text-2xl py-6 text-center border-t-1 border-t-gray pt-12">
          KİTAPLAR
        </p>
        <div className="flex w-full  p-4 justify-start md:justify-center">
          <div className="flex flex-row  gap-6 lg:gap-12 overflow-auto scrollbar-hidden">
            {filterButtons.map((filterButton) => {
              return (
                <button
                  key={filterButton.title}
                  className="min-w-fit flex text-md w-fit gap-2 group text-sm font-[600] border-2 border-gray px-8 py-3 rounded-3xl"
                >
                  <span className=" hidden group-hover:block animate-upDown">
                    ✔️
                  </span>
                  {filterButton.title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="xl:w-[1200] md:w-[850] bg-gray-200 rounded-xl sm:w-[600] w-full justify-center p-3 lg:p-16">
          <div className=" grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 justify-center gap-6 md:gap-6 items-center p-2 md:p-6 place-items-center">
            {!books && <p>loading</p>}
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
  );
}

export default BooksList;
