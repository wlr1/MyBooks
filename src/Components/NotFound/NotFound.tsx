import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  //remove scroll
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div className=" flex justify-center items-center h-screen pb-40">
      <div className="text-center">
        <h1 className="text-7xl font-bold ">Ooops... Nothing there :(</h1>
        <div className="mt-40 flex justify-center">
          <Link to="/">
            <button className=" bg-purple-drk text-white rounded px-11 py-2 ">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
