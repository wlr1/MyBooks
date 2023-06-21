import React from "react";
import Search from "../Search/Search";
import Books from "../Books/Books";

const Home: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto my-0">
      <div>
        <h2 className="text-center text-3xl font-bold text-purple-drk mb-2 mt-8">
          Type to search!
        </h2>
        <Search />
      </div>
      {/*<div className="content__error-info">*/}
      {/*  <h2>Something goes wrong!</h2>*/}
      {/*</div>*/}
      <div className="">
        <Books />
      </div>

      {/*pagination*/}
    </div>
  );
};

export default Home;