import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { Signup } from "./components/index";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>,
  document.getElementById("root")
);
