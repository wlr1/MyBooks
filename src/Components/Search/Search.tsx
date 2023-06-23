import React from "react";
import { searchBooks } from "../../redux/books/asyncActions";
import { setBook } from "../../redux/books/slice";
import { useSelector, useDispatch } from "react-redux";
import store, { RootState } from "../../redux/store";

const Search: React.FC = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const book = useSelector((state: RootState) => state.book.book);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const book = e.target.value;

    dispatch(setBook(book));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(searchBooks(book));
  };

  return (
    <div className="flex items-center pt-3">
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="flex mx-auto border border-purple-200 rounded w-[585px]">
          <input
            onChange={handleChange}
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="px-4 text-white bg-purple-600 border-l rounded ">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
