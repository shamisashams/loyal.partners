import React, { useEffect, useState } from "react";

import { MainButton } from "../../components/MainButton/MainButton";
import "./HeroSection.css";

const HeroSection = ({sliders}) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = sliders.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="hero">
      {sliders.map((data, i) => {
        let position = "nextSlide";
        if (i === index) {
          position = "activeSlide";
        }
        if (i === index - 1 || (index === 0 && i === data.length - 1)) {
          position = "lastSlide";
        }
        return (
          <article key={i} className={position}>
            <div className="wrapper">
              <div className="content">
                <div className="bold blue">{data.title}</div>
                <p className="op05" dangerouslySetInnerHTML={{
                    __html: data.description,
                }}></p>
                <div className="flex btnss">
                  {/* <MainButton
                    text={__("learn_more")}
                  /> */}
                  <button className="vid_btn flex centered">
                    <div className="circle">
                      <img src="/img/icons/arrow.svg" alt="" />
                    </div>
                    <div className="bold">{__("play_video")}</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="img view_area">
              <img src={"/"+data.file.path+"/"+data.file.title} alt="" />
            </div>
          </article>
        );
      })}

      <div className="arr_btns flex wrapper">
        <button onClick={() => setIndex(index - 1)}>
          <img style={{ transform: "rotate(180deg)" }} src="/img/icons/arrow.svg" alt="" />
        </button>
        <button onClick={() => setIndex(index + 1)}>
          <img src="/img/icons/arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
