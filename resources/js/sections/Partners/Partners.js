import React from "react";
import "../Team/Team.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partners.css";
import { NextArrow, PrevArrow } from "../../components/MainButton/MainButton";
import Slider from "react-slick/lib/slider";


const Partners = ({companies}) => {
  const partnersList = [
      "/img/partners/1.png",
      "/img/partners/2.png",
      "/img/partners/3.png",
      "/img/partners/4.png",
      "/img/partners/5.png",
      "/img/partners/3.png",
      "/img/partners/2.png",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div id="partners">
      <div className="f35 bold blue">{__("our_partners")}</div>
      <div className="partner_slide">
        <div className="wrapper">
          <Slider className="slider" {...settings}>
            {companies.map((partner, i) => {
                if (partner.file){
                    return <img src={"/"+partner.file.path+"/"+partner.file.title} key={i} alt="" />;
                }
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
