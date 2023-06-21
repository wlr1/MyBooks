import React from "react";

const NotFound: React.FC = () => {
  //remove scroll
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div className=" flex justify-center items-center h-screen">
      <h1 className="text-7xl font-bold text-center">
        Ooops... Nothing there :(
      </h1>
    </div>
  );
};

export default NotFound;
