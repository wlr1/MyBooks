import React from 'react';
import { searchBooks } from '../../redux/books/asyncActions';
import { setBook } from '../../redux/books/slice';
import { useSelector, useDispatch } from 'react-redux';
import store, { RootState } from '../../redux/store';

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
    <div className="flex flex-col items-center pt-3">
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="flex flex-col items-center sm:flex-row mx-auto rounded w-full max-w-md">
          <input
            onChange={handleChange}
            type="text"
            className="block w-full sm:w-60 md:w-64 lg:w-80 xl:w-96 2xl:w-[444px]  px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 text-white bg-purple-600 border-l border-t sm:border-t-0 rounded sm:rounded-l-none font-lato"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
