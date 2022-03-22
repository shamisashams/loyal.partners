import React from "react";
import { MainButton } from "../../MainButton/MainButton";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="content">
          <div className="bold blue">Online Financial Audit Service</div>
          <p className="op05">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex">
            <MainButton
              text="learn more"

            />
            <button className="vid_btn flex centered">
              <div className="circle">
                <img src="/img/icons/arrow.svg" alt="" />
              </div>
              <div className="bold"> Play Video</div>
            </button>
          </div>
        </div>
      </div>
      <div className="img view_area">
        <img src="/img/hero/1.png" alt="" />
      </div>
      <div className="arr_btns flex ">
        <button>
          <img style={{ transform: "rotate(180deg)" }} src="/img/icons/arrow.svg" alt="" />
        </button>
        <button onClick={() => console.log("somthing")}>
          <img src="/img/icons/arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
