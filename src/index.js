import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "../public/index.css";
import "tachyons";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
