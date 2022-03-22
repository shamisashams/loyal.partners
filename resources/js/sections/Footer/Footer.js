import React from "react";
import { FB, IN, YT } from "../../components/Icons/Icons";

import "./Footer.css";
import {usePage} from "@inertiajs/inertia-react";

const Footer = () => {
    const { gphone, gemail, gaddress, gfacebook, glinkedin, gyoutube } =
        usePage().props;
    console.log(gphone);
  const info = [
    {
      link: "#",
      icon: "/img/footer/1.svg",
      text: gemail.value,
    },
    {
      link: "#",
      icon: "/img/footer/2.svg",
      text:gaddress.value,
    },
    {
      link: "#",
      icon: "/img/footer/3.svg",
      text: gphone.value,
    },
  ];
  return (
    <div id="footer">
      <div className="wrapper">
        <div className="info">
          <div className="flex sm">
              {gfacebook.value && <a href={gfacebook.value}>
                  <FB color="#4D4E4E"/>
              </a>}
              {glinkedin.value && <a href={glinkedin.value}>
                  <IN color="#4D4E4E"/>
              </a>}
              {gyoutube.value && <a href={gyoutube.value}>
                  <YT color="#4D4E4E"/>
              </a>}
          </div>
          {info.map((info, i) => {
            return (
              <a href={info.link} key={i} className="inf_link flex">
                <img src={info.icon} alt="" />
                <div>{info.text}</div>
              </a>
            );
          })}
          <p>Created by Insite</p>
          <a href="https://insite.ge/">
            <img src="/img/footer/insite.png" alt="" />
          </a>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.483743281684!2d44.72628371567773!3d41.71007928389064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447367e05d6635%3A0x564730cbfe5519db!2s36a%20Tskneti%20Hwy%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1647437310107!5m2!1sen!2sge"
            allowFullScreen=""
            loading="lazy"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
