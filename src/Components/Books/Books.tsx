import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Books: React.FC = () => {
  const books = useSelector((state: RootState) => state.book.result);
  const error = useSelector((state: RootState) => state.book.error);
  const loading = useSelector((state: RootState) => state.book.loading);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-16 px-36 py-20">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        books.map((book) => (
          <div key={book.id} className="w-64 h-96  shadow-2xl">
            <a href={book.volumeInfo.infoLink} target="_blank">
              <img
                className="w-64 h-72 mb-2"
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt="books"
              />
            </a>

            <h4 className="font-bold  font-lato mt-4 w-64 text-center text-purple-drk">
              {book.volumeInfo.title.length > 21
                ? `${book.volumeInfo.title.slice(0, 21)}...`
                : book.volumeInfo.title}
            </h4>
            <span className="font-lato ml-1 text-gray-drk">
              Pages: {book.volumeInfo.pageCount}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Books;
