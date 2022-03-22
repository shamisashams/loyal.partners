import React from "react";
import "./Cloud.css";

const Cloud = () => {
  return (
    <div id="cloud">
      <div className="wrapper">
        <div className="bold blue f35" data-aos="fade-left">
            {__("cloud_title_1")} <br /> {__("cloud_title_2")}
        </div>
        <p className="op05" data-aos="fade-right">
            {__("cloud_content")}
        </p>
      </div>
    </div>
  );
};

export default Cloud;
