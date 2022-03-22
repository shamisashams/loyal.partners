import React from "react";
import "./AboutUs.css";

const AboutUs = ({img}) => {

  return (
    <div id="about_us">
      <div className="wrapper flex">
        <div className="img" data-aos="fade-right">
            {img && <img src={"/"+img.path+"/"+img.title} alt="" />}
        </div>
        <div className="right" data-aos="fade-up">
          <div className="bold" style={{ color: "#FB6383" }}>
              {__("about_us")}
          </div>
          <div className="f35 bold blue">{__("our_way_to_future")}</div>
          <p>
              {__("about_us_description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
