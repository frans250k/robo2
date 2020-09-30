import React from "react";
import ReactDOM from "react-dom";
import "tachyons";

import Card from "./Card";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
  rootElement
);
