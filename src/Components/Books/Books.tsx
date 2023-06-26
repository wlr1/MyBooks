import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import InfiniteScroll from "react-infinite-scroll-component";
import { searchBooks } from "../../redux/books/asyncActions";

const Books: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useSelector((state: RootState) => state.book.result);
  const error = useSelector((state: RootState) => state.book.error);
  const loading = useSelector((state: RootState) => state.book.loading);

  React.useEffect(() => {
    // Initial load of books
    dispatch(searchBooks("java"));
  }, [dispatch]);

  const fetchMoreBooks = () => {
    // Fetch more books when scrolling reaches the bottom
    dispatch(searchBooks("java"));
  };

  return (
    <InfiniteScroll
      dataLength={books.length}
      next={fetchMoreBooks}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={<span>nothing there</span>}
    >
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
    </InfiniteScroll>
  );
};

export default Books;
