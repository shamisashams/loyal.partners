import React from "react";
import { IN } from "../Icons/Icons";
import "./TeamMember.css";

const TeamMember = (props) => {
  return (
    <div className="team_member" data-aos="fade-up">
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="bold blue">{props.name}</div>
      <p>
        <span className="op05">Position:</span>
        {props.position}
      </p>
      <p>
        <span className="op05">Experience:</span>
        {props.experience}
      </p>
      <p>
        <span className="op05">Education:</span>
        {props.education}
      </p>
      <p className="op05 abbr">{props.abbr}</p>
      <a href={props.linkedIn} target="_blank">
        <div className="flex centered in">
          <IN color="#1F7FA0" />
        </div>
      </a>
    </div>
  );
};

export default TeamMember;
