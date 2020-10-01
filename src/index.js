import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import "tachyons";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Card />
    <Card />
    <Card />
    <Card />
  </React.StrictMode>,
  rootElement
);
