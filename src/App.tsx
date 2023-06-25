import React from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const [showIcon, setShowIcon] = React.useState<boolean>(false);

  const handleScroll = () => {
    setShowIcon(window.scrollY >= 600);
  };

  const setCoords = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="h-full max-w-screen-xl bg-white w-[calc(100vw-100px)] mx-auto my-12  rounded-xl">
        <div className="py-10">
          <Outlet />
        </div>
      </div>
      {showIcon && (
        <div className="sticky bottom-0 right-0">
          <div className="flex justify-end mr-24">
            <a onClick={setCoords} className="mt-56 cursor-pointer">
              <svg
                className="w-20 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2a10 10 0 0 1 2 19.8V12h3l-5-5-5 5h3v9.8A10 10 0 0 1 12 2z"
                  data-name="Circle atas"
                  fill="#4c394e"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// window.scrollTo(0, 0)
export default App;
