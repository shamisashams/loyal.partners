import React from "react";
import { Globe } from "../../Icons/Icons";
import "./Header.css";

const Header = () => {
  const navbar = [
    "Insights",
    "Services",
    "Special offers",
    "About Us",
    "Career",
    "Contacts",
  ];
  return (
    <div className="header">
      <div className="wrapper flex">
        <a href="#" className="logo">
          <img src="/img/header/logo.svg" alt="" />
        </a>
        <div className="navbar">
          {navbar.map((nav, i) => {
            return (
              <a href="#" className="nav_link bold" key={i}>
                {nav}
              </a>
            );
          })}
        </div>
        <div className="languages">
          <div className="on bold">
            <Globe color="#4D4E4E" /> Eng
          </div>
          <div className="drop bold">Geo</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
