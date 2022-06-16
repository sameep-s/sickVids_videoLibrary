import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider, AuthProvider } from "./util-context";
import { Toaster } from "react-hot-toast";


import { makeServer } from "./server";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <App />
        <Toaster toastOptions={
          {
            duration: 1500,
            style: {
              fontSize: "2rem"
            },
          }}
        />
      </AuthProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
