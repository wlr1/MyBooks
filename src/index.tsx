import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import NotFound from "./Components/NotFound/NotFound";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Details from "./Components/Books/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}
