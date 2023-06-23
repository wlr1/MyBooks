import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Books: React.FC = () => {
  const books = useSelector((state: RootState) => state.book.result);
  const error = useSelector((state: RootState) => state.book.error);
  const loading = useSelector((state: RootState) => state.book.loading);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-6 px-36 py-20">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        books.map((book) => (
          <div key={book.id} className="w-56">
            <img
              className="w-56 mb-2"
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt="books"
            />
            <h4 className="">{book.volumeInfo.title}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default Books;
