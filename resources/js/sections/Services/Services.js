import React from "react";

import ServiceBox from "../../components/ServiceBox/ServiceBox";
import "./Services.css";

const Services = () => {
  const serviceData = [
    {
      icon: "/img/services/1.svg",
      title: __("service_title_1"),
      para: __("service_description_1"),
    },
    {
      icon: "/img/services/2.svg",
      title: __("service_title_2"),
      para: __("service_description_2"),
    },
    {
      icon: "/img/services/3.svg",
      title: __("service_title_3"),
      para: __("service_description_3"),
    },
    {
      icon: "/img/services/4.svg",
      title: __("service_title_4"),
      para: __("service_description_4"),
    },
    {
      icon: "/img/services/5.svg",
      title: __("service_title_5"),
      para: __("service_description_5"),
    },
    {
      icon: "/img/services/6.svg",
      title: __("service_title_6"),
      para: __("service_description_6"),
    },
    {
      icon: "/img/services/7.svg",
      title: __("service_title_7"),
      para: __("service_description_7"),
    },
    {
      icon: "/img/services/8.svg",
      title: __("service_title_8"),
      para: __("service_description_8"),
    },
  ];
  return (
    <div id="services">
      <div className="f35 bold blue">{__("services")}</div>
      <div className="wrapper grid">
        {serviceData.map((item, i) => {
          return (
            <ServiceBox
              icon={item.icon}
              title={item.title}
              para={item.para}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
