import { getBooks } from "@/actions/actions";
import Book from "./Book";
import LastPublished from "../LastPublished/LastPublished";
import Title from "./Title";
// import { filterButtons } from "./consts";

async function BooksList() {
  const books = await getBooks();
  return (
    <div className=" w-full">
      {books && <LastPublished {...books[0]} />}

      <div className=" w-full flex-flex-col  items-center  ">
        <div className=" flex flex-col justify-center items-center ">
          <Title />
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
