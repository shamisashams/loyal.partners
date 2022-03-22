import React from "react";
import "./MainButton.css";
import Arrow from "/img/icons/arrow.svg";

export const MainButton = ({ onClick, text }) => {
  return (
    <button className="main_button bold" onClick={onClick}>
      {text}
    </button>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <button className="slider_arrow prev" onClick={onClick}>
      <img style={{ transform: "rotate(180deg)" }} src={Arrow} alt="" />
    </button>
  );
};
export const NextArrow = ({ onClick }) => {
  return (
    <button className="slider_arrow next" onClick={onClick}>
      <img src={Arrow} alt="" />
    </button>
  );
};
