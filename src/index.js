import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { Login } from "./components/index";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);
