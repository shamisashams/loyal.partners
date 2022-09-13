import React, { useState } from "react";
import { MainButton } from "../../components/MainButton/MainButton";
import "./Technology.css";

const Technology = ({page, image}) => {
    console.log(image[0]);
  const [moreContent, setMoreContent] = useState(false);
  const toggleContent = () => {
    setMoreContent(!moreContent);
  };

  let img = "/img/tech/bg.png";
  if(image[0]){
   img = `${image[0].path}/${image[0].title}`
  }
//   let bgimg = `${image[0].path}/${image[0].title}`
  return (
    <div style={{background: `url(${img}) no-repeat` }} id="technology">
      <div className="wrapper">
        <div className="blue bold f35">{page.title}</div>
        <div className="flex main">
          <div className="left">
            <div className="f125 bold" data-aos="fade-right">
                {page.title_2}
            </div>
            <p data-aos="fade-left" dangerouslySetInnerHTML={{
                __html: page.description,
            }}>
            </p>
          </div>
          <div className="box" data-aos="fade-up">
            <div className={moreContent ? "content more" : "content"}>
                <p
                    dangerouslySetInnerHTML={{
                        __html: page.description_2,
                    }}
                ></p>

            </div>
            <MainButton
              text={moreContent ? __("show_less") : __("learn_more")}
              onClick={() => toggleContent()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
