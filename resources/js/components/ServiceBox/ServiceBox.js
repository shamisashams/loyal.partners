import React, { useState } from "react";
import { SemiCircle } from "../Icons/Icons";
import "./ServiceBox.css";

const ServiceBox = ({ icon, title, para }) => {
    const [paraHeight, setParaHeight] = useState(false);
    return (
        <div className={paraHeight ? "service_box hovered" : "service_box"}>
            <div className="inner_box">
                <SemiCircle color="#f4f5fb" />
                <img src={icon} alt="" />
                <div className="blue bold">{title}</div>
                <p className={paraHeight ? "op05 height" : "op05"}>{para}</p>
                <button
                    className="lock_view"
                    style={{ opacity: paraHeight ? "1" : "" }}
                    onClick={() => setParaHeight(!paraHeight)}
                >
                    {paraHeight ? __("click_to_lock") : __("click_to_unlock")}
                </button>
            </div>
        </div>
    );
};

export default ServiceBox;
