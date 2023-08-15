import React from "react";
import logo from "../assets/OzzyFullLogo.png";
import "./Header.scss";

export function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
    </div>
  );
}
