import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { MainButton } from "../../components/MainButton/MainButton";
import "./HeroSection.css";

const HeroSection = ({ sliders }) => {
    const [index, setIndex] = useState(0);
    const [play, setPlay] = useState(false);
    const heroData = [
        {
            img: "/img/hero/1.png",
            title: "Online Financial Audit Service",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "/img/services/glass-office-room-wall-mockup.png",
            title: "Something new is written here",
            para: "met, consectetLoret, sed do eiusmod orem ipsum dolor sit aur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
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
            <article className="">
                <div className="wrapper">
                    <div className="content">
                        <div className="bold blue">
                            Online Financial Audit Service
                        </div>
                        <p
                            className="op05"
                            // dangerouslySetInnerHTML={{
                            //     __html: data.description,
                            // }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <div className={play ? "img view_area play" : "img view_area"}>
                    <ReactPlayer
                        className="video"
                        url="https://www.youtube.com/watch?v=GQ_7XV7w0_c"
                    />
                    <button className="vid_btn flex centered">
                        <div className="circle " onClick={() => setPlay(true)}>
                            <img src="/img/icons/arrow-white.svg" alt="" />
                        </div>
                    </button>
                </div>
            </article>
        </div>
    );
};

export default HeroSection;
