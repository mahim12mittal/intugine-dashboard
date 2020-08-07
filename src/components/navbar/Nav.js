import React from "react";
import "./nav.css";
import { ReactComponent as ReactLogo } from "./logo.svg";
import { ReactComponent as ReactProfile } from "./profile.svg";

function Nav() {
  return (
    <div className="navdiv">
      <nav className="navclass">
        <label className="logo">
          <ReactLogo />
          Intugine
        </label>
        <ul className="navul">
          <li className="items">
            <a href="#">Home</a>
          </li>
          <li className="items">
            <a href="#">Brands</a>
          </li>
          <li className="items">
            <a href="#">Transporters</a>
            <ReactProfile />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
