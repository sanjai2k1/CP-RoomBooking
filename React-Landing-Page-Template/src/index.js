import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RouterProvider } from "react-router-dom";
import router from "./Routing/Routing";
import { LoginProvider } from "./components/LoginContext";

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
