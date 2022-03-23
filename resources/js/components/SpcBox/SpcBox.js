import React, { useState } from "react";
import { MainButton } from "../MainButton/MainButton";
import "./SpcBox.css";

const SpcBox = (props) => {
  const [hiddenText, setHiddenText] = useState(false);
  return (
    <div className="spc_box" data-aos="zoom-out">
      <div className="bold title">{props.offerTitle}</div>
      <div className="for blue">{props.for}</div>
      <div className="package">{props.package}</div>
      <div className="price">
        <span>₾</span>
        {props.price}
        <span>.00</span>
      </div>
      <div className="op05">{props.period}</div>
      <p>{props.p1}</p>
      <p>
        {props.p2}: <span>{__("free")}</span> <br /> {props.p3}: <span>{__("free")}</span>
      </p>
      <p className={hiddenText ? "hidden_text display" : "hidden_text"}>
        {props.description}
      </p>
      <MainButton
        text={hiddenText ? __("see_less") : __("read_more")}
        onClick={() => setHiddenText(!hiddenText)}
      />
    </div>
  );
};

export default SpcBox;
