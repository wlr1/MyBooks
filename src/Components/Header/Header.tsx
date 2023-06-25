import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="border-b border-solid border-b-gray-300 py-6 bg-purple-drk">
      <div className="min-w-full ">
        <Link to="/">
          <h1 className="text-3xl font-bold  font-poppins text-left text-white ml-5">
            MyBooks
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
