import React from "react";

const Search: React.FC = () => {
  return (
    <div className="flex items-center pt-3">
      <div className="flex mx-auto border border-purple-200 rounded w-[585px]">
        <input
          type="text"
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
        <button className="px-4 text-white bg-purple-600 border-l rounded ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
