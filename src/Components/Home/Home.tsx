import React from "react";
import Search from "../Search/Search";
import Books from "../Books/Books";

const Home: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto my-0">
      <div>
        <h2 className="text-center text-3xl font-bold font-poppins text-purple-drk mb-2 mt-8">
          Type to search!
        </h2>
        <Search />
      </div>
      <div className="">
        <Books />
      </div>
    </div>
  );
};

export default Home;
