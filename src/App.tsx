import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
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
    </div>
  );
};

export default App;
