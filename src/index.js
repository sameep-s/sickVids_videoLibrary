import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

import { LandingPage } from "./pages";

import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById("root")
);
