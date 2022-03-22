import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

import TeamMember from "../../components/TeamMember/TeamMember";
import "./Team.css";
import { NextArrow, PrevArrow } from "../../components/MainButton/MainButton";

const Team = ({team}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  const members = [
    {
      img: "/img/team/1.png",
      name: "Grigol Mchedlishvili",
      position: "Managing Partner",
      experience: "+ 10 Years",
      education: "Higher",
      abbr: "ACCA",
      linkedIn: "#",
    },
    {
      img: "/img/team/2.png",
      name: "Tako Nikolaishvili",
      position: "Team Leader",
      experience: "+ 10 Years",
      education: "Higher",
      abbr: "ACCA",
      linkedIn: "#",
    },
    {
      img: "/img/team/3.png",
      name: "Ani Sturua",
      position: "Accountant",
      experience: "+ 10 Years",
      education: "Higher",
      abbr: "ACCA",
      linkedIn: "#",
    },
    {
      img: "/img/team/4.png",
      name: "Grigol Mchedlishvili",
      position: "Managing Partner",
      experience: "+ 10 Years",
      education: "Higher",
      abbr: "ACCA",
      linkedIn: "#",
    },
    {
      img: "/img/team/4.png",
      name: "Grigol Mchedlishvili",
      position: "Managing Partner",
      experience: "+ 10 Years",
      education: "Higher",
      abbr: "ACCA",
      linkedIn: "#",
    },
  ];
  return (
    <div id="team">
      <div className="wrapper">
        <div className="f125 bold" data-aos="fade-right">
          Our team
        </div>
        <Slider className="slider" {...settings}>
            {team.map((member, i) => {
                return (
                    <TeamMember
                        key={i}
                        img={member.file?"/"+member.file.path+"/"+member.file.title:""}
                        name={member.full_name}
                        position={member.position}
                        experience={member.experience}
                        education={member.education}
                        abbr={member.bottom_text}
                        linkedIn={member.linkedin}
                    />
                );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
