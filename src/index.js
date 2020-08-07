import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/navbar/Nav";
import Tableview from "./components/table/Tableview";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <div>
    <Nav />
    <Tableview />
  </div>,
  document.getElementById("root")
);
