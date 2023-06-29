import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

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
          <div key={book.id} className="w-64 h-auto  shadow-2xl">
            <a href={book.volumeInfo.infoLink} target="_blank">
              <img
                className="w-64 h-72 mb-2"
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt="books"
              />
            </a>
            <div className="h-20">
              <h4 className="font-bold font-lato text-purple-drk mt-4 ml-2">
                {book.volumeInfo.title.length > 21
                  ? `${book.volumeInfo.title.slice(0, 21)}...`
                  : book.volumeInfo.title}
              </h4>
              <span className="ml-2 font-lato text-sm ">
                {book.volumeInfo.publisher
                  ? `Publisher: ${book.volumeInfo.publisher}`
                  : "No subtitle"}
              </span>
            </div>
            <div className="justify-center items-center flex mb-3">
              <Link to="/details">
                <button className="py-3 px-11 gap-2 rounded-md border border-transparent font-semibold bg-purple-drk text-white font-lato focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Books;
