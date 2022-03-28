import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { Navbar } from "./components";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById("root")
);
